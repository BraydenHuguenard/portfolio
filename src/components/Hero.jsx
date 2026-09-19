import profilepic from '../assets/ProfilePic.webp';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div>
          <h1 id="hero-title">Brayden Huguenard</h1>
          <p className="hero-description">Computer science student at Georgia Tech focused on machine learning, iOS development, and full-stack software.</p>
          <p className="hero-context">Technical Lead for the Georgia Tech App and former AI Innovation Intern at Assent.</p>
          <div className="actions"><a className="button" href="#projects">View projects</a><a className="text-link" href="mailto:bhuguenard3@gatech.edu">Email me</a></div>
        </div>
        <div className="portrait"><img src={profilepic} alt="Brayden Huguenard outdoors in autumn" width="746" height="489" fetchPriority="high" /></div>
      </div>
    </section>
  );
}
