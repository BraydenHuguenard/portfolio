import { skills } from '../data/experience';

export default function About() {
  return (
    <section id="about" className="section tinted" aria-labelledby="about-title">
      <div className="container about-grid">
        <div><p className="eyebrow">A little about me</p><h2 id="about-title">Curious by nature.<br />Hands-on by default.</h2></div>
        <div className="prose">
          <p>I’m Brayden Huguenard, a computer science student at Georgia Tech focused on Intelligence & Modeling and Simulation. I like turning complex problems into useful, approachable software.</p>
          <p>My work spans LLM evaluation, on-device AI, data systems, and SwiftUI apps. I enjoy the whole process: talking with users, making architecture decisions, shipping a solution, and improving it with real feedback.</p>
          <p>Teaching and mentorship are a big part of that, too. I currently support Database Systems at Georgia Tech, after two semesters teaching Intro to AI. Outside of code, I’m focused on learning and getting a little better every day.</p>
        </div>
      </div>
      <div className="container skills-grid">{skills.map(skill => <div key={skill.title}><h3>{skill.title}</h3><p>{skill.items}</p></div>)}</div>
    </section>
  );
}
