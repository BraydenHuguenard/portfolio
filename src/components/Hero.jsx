import profilepic from '../assets/ProfilePic.webp';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Georgia Tech · Computer Science · Atlanta</p>
          <h1 id="hero-title">Hey, I’m Brayden<span className="accent">.</span></h1>
          <p className="hero-description">I build thoughtful software, from AI systems to the apps people use every day.</p>
          <p className="hero-context">Technical Lead for the Georgia Tech App.<br />Previously, AI Innovation Intern at Assent.</p>
          <div className="actions"><a className="button" href="#projects">Explore my work <span aria-hidden="true">↗</span></a><a className="text-link" href="mailto:bhuguenard3@gatech.edu">Get in touch <span aria-hidden="true">↗</span></a></div>
        </div>
        <figure className="portrait"><img src={profilepic} alt="Brayden Huguenard" width="640" height="640" fetchPriority="high" /><figcaption>Learning by building. Always.</figcaption></figure>
      </div>
      <div className="container hero-bottom"><span>AI / Machine Learning / iOS / Full Stack</span><a href="#about">A little more about me <span aria-hidden="true">↓</span></a></div>
    </section>
  );
}
