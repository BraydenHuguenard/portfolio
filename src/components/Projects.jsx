import { projects } from "../data/projects";
import { ProjectModal } from "./Modals";
import { useState } from "react";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-6 bg-[#f9fafb] text-[#1f2937]">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-center font-serif">Projects</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="p-6 bg-white border border-[#e5e7eb] rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-1">{proj.title}</h3>
              <p className="text-sm text-[#6b7280]">{proj.role}</p>
              <ul className="mt-3 list-disc list-inside text-sm space-y-1 text-[#4b5563]">
                {proj.summary}
              </ul>
              <div className="mt-4 flex justify-between items-center">
                <a
                  href={proj.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6366f1] text-sm font-medium hover:underline"
                >
                  GitHub ↗
                </a>
                <button
                  onClick={() => setActiveProject(proj)}
                  className="text-[#10b981] text-sm font-medium hover:underline"
                >
                  About ↗
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectModal
          title={activeProject.title}
          role={activeProject.role}
          imgs={activeProject.imgs}
          description={activeProject.description}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}