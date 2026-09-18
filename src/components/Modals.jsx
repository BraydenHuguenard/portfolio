import { useEffect, useId, useRef, useState } from 'react';

// Native modal dialogs make the page behind them inert and contain keyboard focus.
function Modal({ title, children, onClose }) {
  const dialogRef = useRef(null);
  const titleId = useId();
  useEffect(() => {
    const dialog = dialogRef.current;
    const trigger = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (trigger instanceof HTMLElement && trigger.isConnected) trigger.focus({ preventScroll: true });
    };
  }, []);

  const containTab = event => {
    if (event.key !== 'Tab') return;
    const dialog = dialogRef.current;
    const controls = [...dialog.querySelectorAll('a[href], button:not([disabled]), [tabindex="0"]')];
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && (document.activeElement === first || document.activeElement === dialog)) {
      event.preventDefault(); last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first?.focus();
    }
  };

  return (
    <dialog onKeyDown={containTab} ref={dialogRef} className="modal" aria-labelledby={titleId} onCancel={event => { event.preventDefault(); onClose(); }}>
      <div className="modal-header"><h2 id={titleId}>{title}</h2><button className="close-button" onClick={onClose} aria-label={`Close ${title}`}>×</button></div>
      {children}
    </dialog>
  );
}

function Description({ items }) {
  return <ul className="bullet-list">{items.map(item => <li key={item}>{item}</li>)}</ul>;
}

export function ClassModal({ title, num, status, description, onClose }) {
  return <Modal title={title} onClose={onClose}><p className="meta">{num} · {status}</p><Description items={description} /></Modal>;
}

export function EducationModal({ school, degree, description, onClose }) {
  return <Modal title={school} onClose={onClose}><p className="meta">{degree}</p><Description items={description} /></Modal>;
}

export function ProjectModal({ title, role, imgs = [], imageDescriptions = [], description, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = imgs.filter(src => src && src.startsWith('/assets/'));
  const video = imgs.find(src => src && src.startsWith('https://www.youtube.com/'));
  return (
    <Modal title={title} onClose={onClose}>
      <p className="meta">{role}</p><Description items={description} />
      {images.length > 0 && <div className="gallery" role="group" aria-label={`${title} screenshots`}>
        <img src={images[currentIndex]} alt={imageDescriptions[currentIndex] || `${title} app screenshot ${currentIndex + 1} of ${images.length}`} width="390" height="844" loading="lazy" />
        <div className="gallery-controls"><button className="secondary-button" onClick={() => setCurrentIndex(i => (i - 1 + images.length) % images.length)} aria-label="Previous screenshot">← Previous</button><p role="status" aria-live="polite">{currentIndex + 1} / {images.length}</p><button className="secondary-button" onClick={() => setCurrentIndex(i => (i + 1) % images.length)} aria-label="Next screenshot">Next →</button></div>
      </div>}
      {video && <p className="video-link"><a className="text-link" href={video}>Watch the {title} demo on YouTube <span aria-hidden="true">↗</span></a></p>}
    </Modal>
  );
}
