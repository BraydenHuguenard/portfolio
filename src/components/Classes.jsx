import { courses } from "../data/courses";
import React, { useState } from "react";
import { ClassModal }from "./Modals";

export default function Classes() {
    const [activeCourse, setActiveCourse] = useState(null);
    return (
    <section id="classes" className="w-full py-24 px-4 bg-[#eef2ff] text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12">Relevant Classes</h2>
      <div className="max-w-5xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{course.title}</h3>
              <p className="text-sm text-indigo-500 font-medium mb-2">{course.num}</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                {course.highlights.map((point, j) => (
                  <li key={j}>• {point}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setActiveCourse(course)}
                className="text-indigo-600 text-sm hover:underline"
              >
                More Info
              </button>
            </div>
          </div>
        ))}
      </div>

      {activeCourse && (
        <ClassModal
          title={activeCourse.title}
          num={activeCourse.num}
          description={activeCourse.description}
          onClose={() => setActiveCourse(null)}
        />
      )}
    </section>
  );
}