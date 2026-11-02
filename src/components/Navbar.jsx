export default function Navbar() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <nav className="container nav" aria-label="Main navigation">
        <a className="brand" href="#home">Brayden Huguenard</a>
        <ul className="nav-links">
          {['about', 'experience', 'projects', 'education', 'classes'].map(id => (
            <li key={id}><a href={`#${id}`}>{id === 'classes' ? 'Coursework' : id[0].toUpperCase() + id.slice(1)}</a></li>
          ))}
        </ul>
        <a className="nav-resume" href="/assets/Winter-2026-Resume.pdf">Resume <span className="file-label">(PDF)</span></a>
      </nav>
    </header>
  );
}
