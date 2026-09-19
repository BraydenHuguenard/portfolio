import { skills } from '../data/experience';

export default function About() {
  return (
    <section id="about" className="section tinted" aria-labelledby="about-title">
      <div className="container about-grid">
        <div><h2 id="about-title">About me</h2></div>
        <div className="prose">
          <p>I’m Brayden, a computer science student at Georgia Tech studying Intelligence and Modeling & Simulation. I’m especially interested in iOS development and machine learning, and I like building software that solves practical problems.</p>
          <p>My recent work includes the Georgia Tech App, on-device AI projects, and tools for evaluating LLMs. I enjoy working across product and engineering, from understanding what people need to designing systems and making sure they work reliably.</p>
          <p>I value mentorship in both directions. I’ve learned a lot from the people I’ve worked with, and I enjoy passing that support on through teaching and helping other developers grow. I’m currently a teaching assistant for Database Systems after spending two semesters as a TA for Intro to AI.</p>
        </div>
      </div>
      <div className="container skills-grid">{skills.map(skill => <div key={skill.title}><h3>{skill.title}</h3><p>{skill.items}</p></div>)}</div>
    </section>
  );
}
