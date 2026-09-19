import { projects } from '../data/projects';
import { ProjectModal } from './Modals';
import { useState } from 'react';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const orderedProjects = [...projects].sort((a, b) => (a.title === 'MLB Season Simulator') - (b.title === 'MLB Season Simulator'));
  return (
    <section id="projects" className="section tinted" aria-labelledby="projects-title">
      <div className="container"><h2 id="projects-title">Projects</h2>
        <div className="card-grid">{orderedProjects.map((project) => (
          <article className="card project-card" key={project.title}>
            <h3>{project.title}</h3><p className="meta">{project.role}</p><p className="project-summary">{project.summary}</p>
            <div className="card-actions">
              <button className="text-link" aria-label={`Project details: ${project.title}`} onClick={() => setActiveProject(project)}>Details</button>
              {project.git && <a className="text-link" href={project.git} aria-label={`${project.git.includes('github.gatech') ? 'Code (GT login)' : 'GitHub'}: ${project.title}`}>{project.git.includes('github.gatech') ? 'Code (GT login)' : 'GitHub'}</a>}
            </div>
          </article>
        ))}</div>
      </div>
      {activeProject && <ProjectModal {...activeProject} onClose={() => setActiveProject(null)} />}
    </section>
  );
}
