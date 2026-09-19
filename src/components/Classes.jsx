import { courses } from '../data/courses';
import { useState } from 'react';
import { ClassModal } from './Modals';

export default function Classes() {
  const [activeCourse, setActiveCourse] = useState(null);
  return (
    <section id="classes" className="section tinted" aria-labelledby="classes-title">
      <div className="container"><h2 id="classes-title">Coursework</h2>
        <p className="section-intro">Selected computer science, mathematics, and AI courses. Current courses are marked in progress.</p>
        <div className="course-grid">{courses.map(course => <article className="card course-card" key={course.num}>
          <p className="course-number">{course.num}</p><h3>{course.title}</h3><p className={`course-status ${course.status.startsWith('In progress') ? 'in-progress' : ''}`}>{course.status}</p>
          <ul className="bullet-list">{course.highlights.map(point => <li key={point}>{point}</li>)}</ul>
          <button className="text-link" aria-label={`Course details for ${course.num}: ${course.title}`} onClick={() => setActiveCourse(course)}>Details</button>
        </article>)}</div>
      </div>
      {activeCourse && <ClassModal {...activeCourse} onClose={() => setActiveCourse(null)} />}
    </section>
  );
}
