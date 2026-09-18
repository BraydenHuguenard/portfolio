// Local-only test harness. Nothing in tests/ or scripts/ is included in dist/.
import http from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
const root = process.cwd();
const routes = { '/__audit': 'tests/browser-audit.html', '/__audit.js': 'tests/browser-audit.js', '/__axe.js': 'node_modules/axe-core/axe.min.js' };
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.pdf': 'application/pdf', '.xml': 'application/xml', '.txt': 'text/plain' };
http.createServer(async (req, res) => {
  const pathname = new URL(req.url, 'http://127.0.0.1:4174').pathname;
  if (req.method === 'POST' && pathname === '/__results') {
    if (req.headers.origin !== 'http://127.0.0.1:4174') { res.writeHead(403).end(); return; }
    let body = '';
    for await (const chunk of req) { body += chunk; if (body.length > 2_000_000) { res.writeHead(413).end(); return; } }
    try {
      const report = JSON.parse(body);
      await mkdir(path.join(root, 'reports'), { recursive: true });
      await writeFile(path.join(root, 'reports/browser-audit.json'), JSON.stringify(report, null, 2));
      res.writeHead(200).end('saved');
    } catch { res.writeHead(400).end(); }
    return;
  }
  if (req.method !== 'GET') { res.writeHead(405).end(); return; }
  const target = routes[pathname] || `dist${pathname === '/' ? '/index.html' : pathname}`;
  const filename = path.resolve(root, target);
  if (!filename.startsWith(`${root}${path.sep}`)) { res.writeHead(403).end(); return; }
  try {
    const data = await readFile(filename);
    res.writeHead(200, { 'Content-Type': types[path.extname(filename)] || 'application/octet-stream', 'Cache-Control': 'no-store' }).end(data);
  } catch { res.writeHead(404).end('Not found'); }
}).listen(4174, '127.0.0.1', () => console.log('Open http://127.0.0.1:4174/__audit to run browser accessibility tests.'));
