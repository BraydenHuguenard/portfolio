import { education } from "../data/education";
import { EducationModal }from "./Modals";
import { useState } from "react";

export default function Education() {
  const [activeEducation, setActiveEducation] = useState(null);
  return (
    <section id="education" className="py-24 px-6 text-[#1f2937] bg-[#eef2ff]">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-center font-serif">Education</h2>
        <div className="grid grid-cols-1 gap-8">
          {education.map((edu, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition duration-300"
            >
              <div className="border-l-4 pl-4 border-[#a5b4fc]">
                <h3 className="text-xl font-semibold text-gray-900">{edu.school}</h3>
                <p className="text-sm text-[#6b7280] mt-1">{edu.degree}</p>
                <ul className="list-disc list-inside text-sm mt-4 space-y-1 text-[#4b5563]">
                  {edu.summary.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => setActiveEducation(edu)}
                  className="text-indigo-600 text-sm hover:underline"
                >
                  More Info
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeEducation && (
              <EducationModal
                school={activeEducation.school}
                degree={activeEducation.degree}
                description={activeEducation.description}
                onClose={() => setActiveEducation(null)}
              />
            )}
    </section>
  );
}