const frame = document.querySelector('#site');
const output = document.querySelector('#results');
document.querySelector('#large-text').addEventListener('change', event => { frame.contentDocument.documentElement.style.fontSize = event.target.checked ? '200%' : ''; });
document.querySelector('#width').addEventListener('change', event => { frame.style.width = `${event.target.value}px`; });
const run = document.querySelector('#run');
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
run.addEventListener('click', async () => {
  run.disabled = true;
  const report = { date: new Date().toISOString(), checks: [], scans: [], errors: [] };
  const check = (name, passed) => { report.checks.push({ name, passed }); if (!passed) report.errors.push(name); };
  try {
    const win = frame.contentWindow;
    const doc = frame.contentDocument;
    if (!win.axe) {
      await new Promise((resolve, reject) => { const script = doc.createElement('script'); script.src = '/__axe.js'; script.onload = resolve; script.onerror = reject; doc.head.append(script); });
    }
    report.axeVersion = win.axe.version;
    const scan = async name => {
      output.textContent = `Checking ${name}…`;
      const result = await win.axe.run(doc, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'] } });
      report.scans.push({ name, violations: result.violations, incomplete: result.incomplete.map(({id,help,nodes}) => ({id,help,targets:nodes.map(n=>n.target)})) });
      check(`${name}: no automatic accessibility violations`, result.violations.length === 0);
    };
    for (const width of [1280, 768, 390, 320]) {
      frame.style.width = `${width}px`;
      await wait(100);
      check(`${width}px: no horizontal overflow`, doc.documentElement.scrollWidth <= win.innerWidth);
      await scan(`Page at ${width}px`);
    }
    for (const trigger of [...doc.querySelectorAll('main button')]) {
      const label = trigger.getAttribute('aria-label') || trigger.textContent;
      trigger.focus(); trigger.click(); await wait(80);
      const dialog = doc.querySelector('dialog[open]');
      check(`${label}: modal opens`, !!dialog?.matches(':modal'));
      if (!dialog) continue;
      check(`${label}: focus moves into modal`, dialog.contains(doc.activeElement));
      check(`${label}: modal fits narrow viewport`, dialog.getBoundingClientRect().width <= win.innerWidth && dialog.scrollWidth <= dialog.clientWidth);
      await scan(label);
      const next = dialog.querySelector('[aria-label="Next screenshot"]');
      if (next) {
        const original = dialog.querySelector('img').getAttribute('src');
        next.click(); await wait(80);
        check('Gallery: next changes image', dialog.querySelector('img').getAttribute('src') !== original);
        dialog.querySelector('[aria-label="Previous screenshot"]').click(); await wait(80);
        check('Gallery: previous restores image', dialog.querySelector('img').getAttribute('src') === original);
        dialog.querySelector('[aria-label="Previous screenshot"]').click(); await wait(80);
        check('Gallery: previous wraps to image 7', dialog.querySelector('[role="status"]').textContent.trim() === '7 / 7');
      }
      dialog.querySelector('.close-button').click(); await wait(80);
      check(`${label}: focus returns to trigger`, doc.activeElement === trigger);
      check(`${label}: scrolling restored`, doc.body.style.overflow !== 'hidden');
    }
    const resources = [...new Set([...doc.querySelectorAll('a[href^="/"], img')].map(el => el.getAttribute('href') || el.getAttribute('src')))];
    for (const url of resources) { const response = await fetch(url); check(`Local resource loads: ${url}`, response.ok); }
    frame.style.width = '320px';
    const textStyle = doc.createElement('style');
    doc.head.append(textStyle);
    textStyle.textContent = 'html { font-size: 200% !important; }';
    await wait(100);
    check('200% text size at 320px: no horizontal overflow', doc.documentElement.scrollWidth <= win.innerWidth);
    textStyle.textContent = '* { line-height: 1.5 !important; letter-spacing: .12em !important; word-spacing: .16em !important; } p { margin-bottom: 2em !important; }';
    await wait(100);
    check('WCAG text spacing at 320px: no horizontal overflow', doc.documentElement.scrollWidth <= win.innerWidth);
    textStyle.remove();
    frame.style.width = '1280px';
  } catch (error) { report.errors.push(String(error)); }
  const saved = await fetch('/__results', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(report) });
  output.textContent = `${report.errors.length ? 'FAIL' : 'PASS'}: ${report.checks.length} checks, ${report.scans.length} axe scans. ${saved.ok ? 'Saved reports/browser-audit.json.' : 'Could not save report.'}\n${report.errors.join('\n')}`;
  run.disabled = false;
});
