export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <h2>Contact</h2>
        <a className="footer-email" href="mailto:bhuguenard3@gatech.edu">bhuguenard3@gatech.edu</a>
        <nav className="footer-links" aria-label="Contact and social links"><a href="https://www.linkedin.com/in/brayden-huguenard/">LinkedIn</a><a href="https://github.com/BraydenHuguenard">GitHub</a><a href="https://instagram.com/brayden_huguenard">Instagram</a><a href="/assets/Fall-2026-Resume.pdf">Resume (PDF)</a></nav>
        <div className="footer-bottom"><p>© {new Date().getFullYear()} Brayden Huguenard</p><a href="#home">Back to top ↑</a></div>
        <p className="accessibility-note">Trouble using this site? <a href="mailto:bhuguenard3@gatech.edu?subject=Website%20accessibility">Let me know about an accessibility issue.</a></p>
      </div>
    </footer>
  );
}
