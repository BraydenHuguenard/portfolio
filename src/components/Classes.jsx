import { courses } from '../data/courses';
import { useState } from 'react';
import { ClassModal } from './Modals';

export default function Classes() {
  const [activeCourse, setActiveCourse] = useState(null);
  return (
    <section id="classes" className="section tinted" aria-labelledby="classes-title">
      <div className="container"><p className="eyebrow">Always learning</p><h2 id="classes-title">Selected coursework</h2>
        <p className="section-intro">A foundation in computer science, mathematics, and AI. Course status reflects my September 2026 transcript.</p>
        <div className="course-grid">{courses.map(course => <article className="card course-card" key={course.num}>
          <p className="eyebrow">{course.num}</p><h3>{course.title}</h3><p className={`course-status ${course.status.startsWith('In progress') ? 'in-progress' : ''}`}>{course.status}</p>
          <ul className="bullet-list">{course.highlights.map(point => <li key={point}>{point}</li>)}</ul>
          <button className="text-link" aria-label={`Course details for ${course.num}: ${course.title}`} onClick={() => setActiveCourse(course)}>Course details <span aria-hidden="true">↗</span></button>
        </article>)}</div>
      </div>
      {activeCourse && <ClassModal {...activeCourse} onClose={() => setActiveCourse(null)} />}
    </section>
  );
}
