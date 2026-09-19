import { education } from '../data/education';
import { EducationModal } from './Modals';
import { useState } from 'react';

export default function Education() {
  const [activeEducation, setActiveEducation] = useState(null);
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container"><h2 id="education-title">Education</h2>
        <div className="card-grid">{education.map(edu => (
          <article className="card" key={edu.school}>
            <h3>{edu.school}</h3><p className="meta">{edu.degree}</p>
            <ul className="bullet-list">{edu.summary.map(item => <li key={item}>{item}</li>)}</ul>
            <button className="text-link" aria-label={`More about my education at ${edu.school}`} onClick={() => setActiveEducation(edu)}>Details</button>
          </article>
        ))}</div>
      </div>
      {activeEducation && <EducationModal {...activeEducation} onClose={() => setActiveEducation(null)} />}
    </section>
  );
}
