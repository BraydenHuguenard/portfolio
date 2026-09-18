import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <p className="eyebrow">Building, shipping, teaching</p>
        <h2 id="experience-title">Experience</h2>
        <div className="experience-list">
          {experience.map((job) => (
            <article className="experience-item" key={`${job.organization}-${job.role}`}>
              <div><p className="meta">{job.dates}</p><p className="organization">{job.organization}</p></div>
              <div><h3>{job.role}</h3><ul className="bullet-list">{job.highlights.map(point => <li key={point}>{point}</li>)}</ul></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
