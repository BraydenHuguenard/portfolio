import { projects } from '../data/projects';
import { ProjectModal } from './Modals';
import { useState } from 'react';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const orderedProjects = [...projects].sort((a, b) => (a.title === 'MLB Season Simulator') - (b.title === 'MLB Season Simulator'));
  return (
    <section id="projects" className="section tinted" aria-labelledby="projects-title">
      <div className="container"><p className="eyebrow">From idea to something useful</p><h2 id="projects-title">Selected projects</h2>
        <p className="section-intro">On-device AI, collaborative apps, and experiments with data.</p>
        <div className="card-grid">{orderedProjects.map((project, index) => (
          <article className="card project-card" key={project.title}>
            <span className="project-number" aria-hidden="true">{String(index + 1).padStart(2, '0')} /</span>
            <h3>{project.title}</h3><p className="meta">{project.role}</p><p className="project-summary">{project.summary}</p>
            <div className="card-actions">
              <button className="text-link" aria-label={`Explore project: ${project.title}`} onClick={() => setActiveProject(project)}>Explore project <span aria-hidden="true">↗</span></button>
              {project.git && <a className="text-link" href={project.git} aria-label={`${project.git.includes('github.gatech') ? 'Code (GT login)' : 'GitHub'}: ${project.title}`}>{project.git.includes('github.gatech') ? 'Code (GT login)' : 'GitHub'} <span aria-hidden="true">↗</span></a>}
            </div>
          </article>
        ))}</div>
      </div>
      {activeProject && <ProjectModal {...activeProject} onClose={() => setActiveProject(null)} />}
    </section>
  );
}
