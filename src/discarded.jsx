// import React, { useState, useEffect, useRef } from 'react'
// import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'
// import profilepic from './assets/ProfilePic.png'

// export default function App() {
//   const [darkMode, setDarkMode] = useState(() => {
//     if (typeof window !== 'undefined') {
//       const stored = localStorage.getItem('darkMode')
//       if (stored !== null) return stored === 'true'
//       return window.matchMedia('(prefers-color-scheme: dark)').matches
//     }
//     return false
//   })

//   useEffect(() => {
//     const root = window.document.documentElement
//     if (darkMode) {
//       root.classList.add('dark')
//     } else {
//       root.classList.remove('dark')
//     }
//     localStorage.setItem('darkMode', darkMode)
//   }, [darkMode])

//   const accentColor = "#2563eb"
//   const navRef = useRef(null)
//   const [activeSection, setActiveSection] = useState('about')
//   const sections = [
//     { id: 'about', label: 'About' },
//     { id: 'education', label: 'Education' },
//     { id: 'projects', label: 'Projects' },
//     { id: 'classes', label: 'Classes' },
//   ]

//   // Scroll handler to update active nav link
//   useEffect(() => {
//     function onScroll() {
//       const navHeight = navRef.current?.offsetHeight || 0
//       const scrollPosition = window.scrollY + navHeight
//       let current = sections[0].id
//       for (let i = sections.length - 1; i >= 0; i--) {
//         const section = sections[i]
//         const el = document.getElementById(section.id)
//         if (el && scrollPosition >= el.offsetTop) {
//           current = section.id
//           break
//         }
//       }
//       setActiveSection(current)
//     }
//     window.addEventListener('scroll', onScroll, { passive: true })
//     onScroll()
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   // Smooth scroll handler with manual animation for slower scroll
//   const handleNavClick = (e, id) => {
//     e.preventDefault()
//     const el = document.getElementById(id)
//     if (!el) return

//     const navHeight = navRef.current?.offsetHeight || 0
//     const target = el.offsetTop - navHeight - 12
//     const start = window.scrollY
//     const distance = target - start
//     const duration = 1500
//     let startTime = null

//     const animateScroll = (currentTime) => {
//       if (!startTime) startTime = currentTime
//       const timeElapsed = currentTime - startTime
//       const progress = Math.min(timeElapsed / duration, 1)
//       window.scrollTo(0, start + distance * easeInOutQuad(progress))
//       if (timeElapsed < duration) {
//         requestAnimationFrame(animateScroll)
//       }
//     }

//     const easeInOutQuad = (t) =>
//       t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t

//     requestAnimationFrame(animateScroll)
//   }

//   const educations = [
//     {
//       school: "Georgia Institute of Technology",
//       degree: "B.S. in Computer Science · 2024 – 2027",
//       summary: [
//         "Major: Computer Science",
//         "Specialization: Artificial Intelligence & Modeling and Simulation",
//       ],
//       description: [
//         "4.0 GPA with Concentrations in Intelligence & Modeling and Simulation",
//         "Zell Miller Scholarship Recipient & Daniel Hager Scholarship Recipient",
//       ]
//     },
//     {
//       school: "Creekview High School",
//       degree: "High School Diploma · 2020 – 2024",
//       summary: [
//         "Graduated top 10 with Honors",
//       ],
//       description: [
//         "Graduated with Honors",
//         "Top 10 in a class of 542, 4.63 GPA",
//         "Relevant Coursework: AP Computer Science A, AP Calculus BC, AP Statistics AP Computer Science Principles",
//         "Recognized for being most outstanding Math student in my senior class",
//         "VP of Beta Club, Secretary of Science Honor Society, Secretary of Mu Alpha Theta, Active member of CFA Leader Academy, Student Government Association, National Honor Society, Key Club",
//         "Various Volunteer Projects, including, Fundraising for First Responders, Supported the Service League of Cherokee County, and helped found School Food Bank",
//         "Varsity Swim Team Captain, Multiple State Qualifying Times, County Record Holder in 400 Freestyle Relay"
//       ]
//     }
//   ]

//   const projects = [
//     {
//       title: "iOS Development Club",
//       role: "Officer",
//       description: [
//         "Nomad"
//       ]
//     },
//     {
//       title: "Findy Website",
//       role: "Scrum Master",
//       description: [
//         "Findy"
//       ]
//     }
//   ]

//   const courses = [
//     {
//       title: "Intro to Artificial Intelligence",
//       code: "CS 3600",
//       description: [
//         "Search algorithms: depth-first, breadth-first, A* and beyond",
//         "Constraint satisfaction problems (CSPs) and logical reasoning",
//         "Probabilistic models like Bayes networks and Hidden Markov Models",
//         "Foundations of machine learning including decision trees and clustering"
//       ]
//     },
//     {
//       title: "Design and Analysis of Algorithms",
//       code: "CS 3510",
//       description: [
//         "Time and space complexity analysis using Big-O notation",
//         "Core paradigms: divide and conquer, greedy algorithms, dynamic programming",
//         "Graph algorithms, sorting, searching, and optimization",
//         "NP-completeness and the theory of computational hardness"
//       ]
//     },
//     {
//       title: "Systems and Networks",
//       code: "CS 2200",
//       description: [
//         "Basic digital logic and CPU architecture (datapath/control)",
//         "Assembly programming and memory hierarchy",
//         "Interrupts, caches, and virtual memory",
//         "Networking stack: from packets to protocols"
//       ]
//     },
//     {
//       title: "Computer Organization and Design",
//       code: "CS 2110",
//       description: [
//         "Low-level programming using C and Assembly",
//         "Memory management, stacks, and recursion at the hardware level",
//         "Binary arithmetic, instruction sets, and datapath simulation",
//         "Insights into how compilers and hardware interact"
//       ]
//     },
//     {
//       title: "Objects and Design",
//       code: "CS 2340",
//       description: [
//         "Object-oriented programming principles and class hierarchies",
//         "Design patterns like Factory, Singleton, Observer, and more",
//         "UML diagrams and system architecture planning",
//         "Team-based software development with version control and Agile"
//       ]
//     },
//     {
//       title: "Data Structures and Algorithms",
//       code: "CS 1332",
//       description: [
//         "Core data structures: arrays, linked lists, stacks, queues, trees, heaps, graphs",
//         "Algorithmic problem-solving with recursion and iteration",
//         "Sorting/searching techniques and their time complexities",
//         "Efficient use of memory and understanding runtime trade-offs"
//       ]
//     },
//     {
//       title: "Discrete Mathematics",
//       code: "CS 2050",
//       description: [
//         "Logic and truth tables, predicate logic",
//         "Proof techniques: direct, contrapositive, contradiction, induction",
//         "Set theory, functions, and relations",
//         "Combinatorics, graph theory, and discrete structures in computing"
//       ]
//     },
//     {
//       title: "Linear Algebra",
//       code: "Math 1554",
//       description: [
//         "Matrix operations and solving linear systems",
//         "Vector spaces, bases, and dimensionality",
//         "Eigenvalues, eigenvectors, and diagonalization",
//         "Applications in machine learning, graphics, and systems modeling"
//       ]
//     }
//   ]

//   return (
//     <>
//       {/* Navbar */}
//       <nav
//         ref={navRef}
//         className="fixed top-0 left-0 right-0 z-50 bg-white"
//         style={{
//           borderBottom: "1px solid #e3eefe",
//           fontFamily: "Inter, Arial, sans-serif",
//           height: 64,
//         }}
//       >
//         <div className="max-w-3xl mx-auto flex items-center justify-between h-16 px-4">
//           <span className="text-lg font-bold tracking-tight text-neutral-900" style={{letterSpacing: 0.5}}>Brayden Huguenard</span>
//           <ul className="flex flex-row items-center space-x-8 text-neutral-700 text-base font-medium m-0 p-0">
//             {sections.map(({ id, label }) => (
//               <li key={id} className="list-none">
//                 <a
//                   href={`#${id}`}
//                   onClick={e => {
//                     e.preventDefault()
//                     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
//                   }}
//                   className={`transition-colors pb-1 ${activeSection === id ? 'font-bold underline underline-offset-4' : ''}`}
//                   style={{
//                     color: "inherit",
//                     borderBottom: "none",
//                   }}
//                 >
//                   {label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>

//       <main
//         className="bg-[#e3eefe] text-neutral-900 min-h-screen"
//         style={{ fontFamily: "Inter, Arial, sans-serif", paddingTop: 80 }}
//       >
//         {/* Hero */}
//         <section className="max-w-4xl mx-auto flex flex-col items-center py-24 px-4">
//           <img
//             src={profilepic}
//             alt="Brayden Huguenard"
//             className="w-40 h-40 rounded-full object-cover mb-8 border-2 border-[#b6d0f7] shadow"
//           />
//           <h1 className="text-5xl font-bold mb-4 text-center leading-tight text-neutral-900" style={{letterSpacing: 0.5}}>Brayden Huguenard</h1>
//           <p className="text-xl mb-8 text-center max-w-xl text-neutral-700">
//             Computer Science @ Georgia Tech<br />
//             AI & Modeling/Simulation · Minimalist · Swimmer · Builder
//           </p>
//           <div className="flex flex-row space-x-6 mb-2">
//             <a href="mailto:brayden.huguenard@gmail.com" aria-label="Email" style={{color: accentColor}}><FaEnvelope className="w-6 h-6" /></a>
//             <a href="https://www.linkedin.com/in/brayden-huguenard" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{color: accentColor}}><FaLinkedin className="w-6 h-6" /></a>
//             <a href="https://www.instagram.com/brayden_huguenard" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{color: accentColor}}><FaInstagram className="w-6 h-6" /></a>
//           </div>
//           <a
//             href="/resume.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mt-8 px-7 py-2 border border-[#b6d0f7] rounded-lg text-base font-semibold text-neutral-900 bg-white hover:bg-[#f4f8ff] transition"
//             style={{textDecoration: "none"}}
//           >
//             Download Resume
//           </a>
//         </section>

//         {/* Info Grid */}
//         <section className="max-w-4xl mx-auto py-4 px-4">
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
//             <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col items-center border border-[#b6d0f7]">
//               <span className="font-semibold text-neutral-500 mb-1">School</span>
//               <span className="text-center text-neutral-900">Georgia Institute of Technology</span>
//             </div>
//             <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col items-center border border-[#b6d0f7]">
//               <span className="font-semibold text-neutral-500 mb-1">Major</span>
//               <span className="text-center text-neutral-900">Computer Science</span>
//             </div>
//             <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col items-center border border-[#b6d0f7]">
//               <span className="font-semibold text-neutral-500 mb-1">Age</span>
//               <span className="text-center text-neutral-900">19 Years</span>
//             </div>
//             <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col items-center border border-[#b6d0f7]">
//               <span className="font-semibold text-neutral-500 mb-1">Hometown</span>
//               <span className="text-center text-neutral-900">Alpharetta, GA</span>
//             </div>
//           </div>
//         </section>

//         {/* About */}
//         <section id="about" className="max-w-3xl mx-auto py-20 px-4">
//           <div className="bg-white rounded-2xl shadow-sm p-10 border border-[#b6d0f7] mb-20">
//             <h2 className="text-3xl font-bold mb-10 text-neutral-900">About</h2>
//             <div className="space-y-6 text-lg leading-relaxed">
//               <p>
//                 I am a Computer Science student at Georgia Tech, specializing in Artificial Intelligence and Modeling & Simulation. I have a strong foundation in Python, Java, and C, and enjoy building data-driven simulators, games, and software that solve real-world problems.
//               </p>
//               <p>
//                 Outside of class, I love collaborating on innovative projects, learning new technologies, and contributing to open source. I’m also passionate about leadership, teaching, and helping others grow in tech.
//               </p>
//               <p>
//                 In my free time, you’ll find me swimming, exploring new music, or working on side projects. I’m always open to new opportunities and connections!
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Education */}
//         <section id="education" className="max-w-5xl mx-auto py-20 px-4">
//           <h2 className="text-3xl font-bold mb-10 text-neutral-900">Education</h2>
//           <div className="grid md:grid-cols-2 gap-10">
//             {educations.map((education, idx) => (
//               <div key={idx} className="bg-white rounded-2xl shadow-sm p-8 border border-[#b6d0f7] flex flex-col">
//                 <div className="font-bold text-xl mb-2 text-neutral-900">{education.school}</div>
//                 <div className="text-neutral-500 mb-3">{education.degree}</div>
//                 <ul className="list-disc list-inside text-base space-y-1">
//                   {education.summary.map((point, i) => (
//                     <li key={i}>{point}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Projects */}
//         <section id="projects" className="max-w-5xl mx-auto py-20 px-4">
//           <h2 className="text-3xl font-bold mb-10 text-neutral-900">Projects</h2>
//           <div className="grid md:grid-cols-2 gap-10">
//             {projects.map((project, idx) => (
//               <div key={idx} className="bg-white rounded-2xl shadow-sm p-8 border border-[#b6d0f7] flex flex-col">
//                 <div className="font-bold text-xl mb-2 text-neutral-900">{project.title}</div>
//                 <div className="mb-3 font-semibold text-neutral-700">{project.role}</div>
//                 <ul className="list-disc list-inside text-base space-y-1">
//                   {project.description.map((point, i) => (
//                     <li key={i}>{point}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Classes */}
//         <section id="classes" className="max-w-5xl mx-auto py-20 px-4">
//           <h2 className="text-3xl font-bold mb-10 text-neutral-900">Relevant Classes</h2>
//           <div className="grid md:grid-cols-2 gap-10">
//             {courses.map((course, idx) => (
//               <div key={idx} className="bg-white rounded-2xl shadow-sm p-8 border border-[#b6d0f7] flex flex-col">
//                 <div className="font-bold text-lg mb-1 text-neutral-900">{course.title}</div>
//                 <div className="text-xs mb-3 text-neutral-700">{course.code}</div>
//                 <ul className="list-disc list-inside text-base space-y-1">
//                   {course.description.map((point, i) => (
//                     <li key={i}>{point}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>
//     </>
//   )
// }

// {/*https://www.youtube.com/watch?v=smOSz-krosM&t=49s  Findy Video*/}





// import React, { useState, useEffect, useRef } from 'react'
// import { Link } from 'react-router-dom'
// import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'
// import profilepic from './assets/ProfilePic.png'
// import { education } from "./data/education"
// import { projects } from "./data/projects"
// import { courses } from "./data/courses"

// // Modals are disabled for minimalism.

// export default function App() {
//   const [darkMode, setDarkMode] = useState(() => {
//     if (typeof window !== 'undefined') {
//       const stored = localStorage.getItem('darkMode')
//       if (stored !== null) return stored === 'true'
//       return window.matchMedia('(prefers-color-scheme: dark)').matches
//     }
//     return false
//   })

//   useEffect(() => {
//     const root = window.document.documentElement
//     if (darkMode) {
//       root.classList.add('dark')
//     } else {
//       root.classList.remove('dark')
//     }
//     localStorage.setItem('darkMode', darkMode)
//   }, [darkMode])

//   // Modal state for class info
//   const [selectedClass, setSelectedClass] = useState(null)
//   const [isCourseModalOpen, setIsCourseModalOpen] = useState(false)

//   const openCourseModal = (course) => {
//     setSelectedClass(course)
//     setIsCourseModalOpen(true)
//   }

//   const closeCourseModal = () => {
//     setSelectedClass(null)
//     setIsCourseModalOpen(false)
//   }

//   const [selectedEducation, setSelectedEducation] = useState(null)
//   const [isEducationModalOpen, setIsEducationModalOpen] = useState(false)

//   const openEducationModal = (education) => {
//     setSelectedEducation(education)
//     setIsEducationModalOpen(true)
//   }

//   const closeEducationModal = () => {
//     setSelectedEducation(null)
//     setIsEducationModalOpen(false)
//   }

//   const [selectedProject, setSelectedProject] = useState(null)
//   const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)

//   const openProjectModal = (project) => {
//     setSelectedProject(project)
//     setIsProjectModalOpen(true)
//   }

//   const closeProjectModal = () => {
//     setSelectedProject(null)
//     setIsProjectModalOpen(false)
//   }

//   const [activeSection, setActiveSection] = useState('about')
//   const navRef = useRef(null)

//   const sections = [
//     { id: 'about', label: 'About' },
//     { id: 'education', label: 'Education' },
//     { id: 'projects', label: 'Projects' },
//     { id: 'classes', label: 'Classes' },
//   ]

//   // Scroll handler to update active nav link
//   useEffect(() => {
//     function onScroll() {
//       const navHeight = navRef.current?.offsetHeight || 0
//       const scrollPosition = window.scrollY + navHeight
//       let current = sections[0].id
//       for (let i = sections.length - 1; i >= 0; i--) {
//         const section = sections[i]
//         const el = document.getElementById(section.id)
//         if (el && scrollPosition >= el.offsetTop) {
//           current = section.id
//           break
//         }
//       }
//       setActiveSection(current)
//     }
//     window.addEventListener('scroll', onScroll, { passive: true })
//     onScroll()
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   // Smooth scroll handler with manual animation for slower scroll
//   const handleNavClick = (e, id) => {
//     e.preventDefault()
//     const el = document.getElementById(id)
//     if (!el) return

//     const navHeight = navRef.current?.offsetHeight || 0
//     const target = el.offsetTop - navHeight - 12
//     const start = window.scrollY
//     const distance = target - start
//     const duration = 1500
//     let startTime = null

//     const animateScroll = (currentTime) => {
//       if (!startTime) startTime = currentTime
//       const timeElapsed = currentTime - startTime
//       const progress = Math.min(timeElapsed / duration, 1)
//       window.scrollTo(0, start + distance * easeInOutQuad(progress))
//       if (timeElapsed < duration) {
//         requestAnimationFrame(animateScroll)
//       }
//     }

//     const easeInOutQuad = (t) =>
//       t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t

//     requestAnimationFrame(animateScroll)
//   }

//   function CourseCard({ title, code, description, openCourseModal }) {
//     return (
//       <div className="w-full sm:w-[300px] bg-white dark:bg-neutral-900 shadow-md dark:shadow-[0_4px_25px_rgba(255,255,255,0.15)] hover:shadow-2xl hover:-translate-y-2 transform transition duration-300 rounded-lg p-6 flex flex-col justify-between border border-gray-300 dark:border-gray-700">
//         <div className="space-y-1">
//           <p className="text-xl font-semibold text-gray-900 dark:text-white">{title}</p>
//           <p className="text-sm text-gray-500 dark:text-gray-400">{code}</p>
//         </div>
//         <div className="mt-4 flex justify-end">
//           <button
//             onClick={() => openCourseModal({ title, code, description })}
//             className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
//           >
//             More Info
//           </button>
//         </div>
//       </div>
//     )
//   }

//   function ProjectCard({ title, role, description, openProjectModal }) {
//     return (
//       <div className="bg-white dark:bg-neutral-900 shadow-md dark:shadow-[0_4px_25px_rgba(255,255,255,0.15)] hover:shadow-2xl hover:-translate-y-2 transform transition duration-300 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 p-6 box-border mb-12">
//         <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
//         <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
//         <div className="mt-4 flex justify-end">
//           <button
//             onClick={() => openProjectModal({ title, role, description })}
//             className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
//           >
//             More Info
//           </button>
//         </div>
//       </div>
//     )
//   }

//   function EducationCard({ school, degree, summary, description, openEducationModal }) {
//     return (
//       <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-md dark:shadow-[0_4px_25px_rgba(255,255,255,0.15)] hover:shadow-2xl hover:-translate-y-2 transform transition duration-300 border border-gray-300 dark:border-gray-700 p-6 box-border mb-12">
//         <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{school}</h3>
//         <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{degree}</p>
//         <div className="flex flex-row">
//           <p className="mt-2 text-gray-600 dark:text-gray-300">
//             {summary.map((point, i) => (
//               <p key={i}>{point}</p>
//             ))}
//           </p>
//         </div>
//         <div className="mt-4 flex justify-end">
//           <button
//             onClick={() => openEducationModal({ school, degree, description })}
//             className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
//           >
//             More Info
//           </button>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <>
//       <nav
//         ref={navRef}
//         className="fixed top-0 left-0 right-0 z-50 h-20 bg-black backdrop-blur-md shadow-sm border-b border-gray-700"
//       >
//         <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row items-center justify-between h-full">
//           <ul className="flex flex-row items-center space-x-6 text-gray-300 text-base font-medium tracking-wide font-serif m-0 p-0">
//             {sections.map(({ id, label }) => (
//               <li key={id} className="list-none">
//                 <a
//                   href={`#${id}`}
//                   onClick={(e) => handleNavClick(e, id)}
//                   className={`cursor-pointer transition-colors ${
//                     activeSection === id
//                       ? 'text-white underline underline-offset-8 decoration-2'
//                       : ''
//                   }`}
//                   style={{ fontFamily: "'DM Serif Display', serif" }}
//                 >
//                   {label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//           <div className="flex flex-row items-center space-x-6 ml-12">
//             <div className="flex flex-row items-center space-x-2">
//               <span className="text-gray-300 text-base font-small tracking-wide font-serif">Dark Mode</span>
//               <label className="relative inline-flex items-center cursor-pointer">
//                 <input
//                   type="checkbox"
//                   checked={darkMode}
//                   onChange={() => setDarkMode(!darkMode)}
//                   className="sr-only peer"
//                 />
//                 <div className="w-11 h-6 bg-gray-400 rounded-full peer peer-checked:bg-gray-600 transition-all duration-300"></div>
//                 <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform duration-300"></div>
//               </label>
//             </div>
//             <div className="flex flex-row items-center space-x-3">
//               <a
//                 href="mailto:brayden.huguenard@gmail.com"
//                 aria-label="Email"
//                 className="hover:scale-110 transition"
//               >
//                 <FaEnvelope className="w-6 h-6 text-gray-300 hover:text-blue-400" />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/brayden-huguenard"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="LinkedIn"
//                 className="hover:scale-110 transition"
//               >
//                 <FaLinkedin className="w-6 h-6 text-gray-300 hover:text-blue-500" />
//               </a>
//               <a
//                 href="https://www.instagram.com/brayden_huguenard"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Instagram"
//                 className="hover:scale-110 transition"
//               >
//                 <FaInstagram className="w-6 h-6 text-gray-300 hover:text-pink-400" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <main className="w-screen min-h-screen bg-white dark:bg-black text-gray-700 dark:text-gray-200 transition-colors duration-500 pt-24 lg:pt-32 font-sans">
//         {/* Hero Section */}
//         <section className="w-full h-auto min-h-screen flex flex-col-reverse md:flex-row justify-center items-center text-center md:text-left px-4 pb-64 gap-y-8 md:gap-x-12">
//           <div className="justify-center items-center text-center pb-6">
//             <h1 className="text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white" style={{ fontFamily: "'DM Serif Display', serif" }}>
//               Hello, I'm Brayden Huguenard
//             </h1>
//             <p className="text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-2xl" style={{ fontFamily: "'DM Serif Display', serif" }}>
//               Placeholder for now
//             </p>
//            <a
//               href="#about"
//               onClick={(e) => handleNavClick(e, 'about')}
//               className="inline-block mt-8 mr-24 px-6 py-3 text-sm font-semibold tracking-wide text-white bg-gray-900 dark:bg-white dark:text-black rounded hover:bg-gray-800 dark:hover:bg-gray-300 transition-colors"
//             >
//               Learn More
//             </a>
//           </div>
//           <img
//             src={profilepic}
//             alt="Brayden Huguenard"
//             className="w-48 md:w-72 rounded-full mt-6 mb-12 md:ml-20 shadow-lg object-cover aspect-square"
//           />
//         </section>

//         {/* Content Sections */}
//         <section
//           id="about"
//           className="w-full px-4 bg-white dark:bg-black"
//         >
//           <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-24 items-start">
//             <div>
//               <div className="space-y-6">
//                 <div className="text-xl font-bold tracking-wide text-neutral-900 dark:text-white" style={{ fontFamily: "'DM Serif Display', serif" }}>
//                   Brayden Huguenard
//                 </div>
//                 <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
//                   <div className="flex justify-between py-3">
//                     <span className="font-semibold tracking-widest text-neutral-700 dark:text-neutral-200">SCHOOL:</span>
//                     <span className="text-neutral-700 dark:text-neutral-300 text-right">Georgia Institute of Technology</span>
//                   </div>
//                   <div className="flex justify-between py-3">
//                     <span className="font-semibold tracking-widest text-neutral-700 dark:text-neutral-200">MAJOR:</span>
//                     <span className="text-neutral-700 dark:text-neutral-300 text-right">Computer Science</span>
//                   </div>
//                   <div className="flex justify-between py-3">
//                     <span className="font-semibold tracking-widest text-neutral-700 dark:text-neutral-200">AGE:</span>
//                     <span className="text-neutral-700 dark:text-neutral-300 text-right">19 Years</span>
//                   </div>
//                   <div className="flex justify-between py-3">
//                     <span className="font-semibold tracking-widest text-neutral-700 dark:text-neutral-200">HOMETOWN:</span>
//                     <span className="text-neutral-700 dark:text-neutral-300 text-right">Canton, GA</span>
//                   </div>
//                 </div>
//                 <div className="flex space-x-4 pt-4">
//                   <a href="mailto:brayden.huguenard@gmail.com" aria-label="Email" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
//                     <FaEnvelope className="w-6 h-6" />
//                   </a>
//                   <a href="https://www.linkedin.com/in/brayden-huguenard" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
//                     <FaLinkedin className="w-6 h-6" />
//                   </a>
//                   <a href="https://www.instagram.com/brayden_huguenard" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500 dark:hover:text-pink-400 transition">
//                     <FaInstagram className="w-6 h-6" />
//                   </a>
//                 </div>
//                 <a
//                   href="/resume.pdf"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block mt-6 px-8 py-3 border border-neutral-300 dark:border-neutral-700 rounded text-base font-semibold tracking-widest text-neutral-800 dark:text-neutral-200 bg-white dark:bg-black hover:bg-neutral-50 dark:hover:bg-neutral-800 transition"
//                 >
//                   DOWNLOAD RESUME
//                 </a>
//               </div>
//             </div>
//             {/* Right: About Text */}
//             <div>
//               <p className="text-lg text-neutral-700 dark:text-neutral-200 leading-relaxed mb-6">
//                 I am a Computer Science student at Georgia Tech, specializing in Artificial Intelligence and Modeling & Simulation. I have a strong foundation in Python, Java, and C, and enjoy building data-driven simulators, games, and software that solve real-world problems.
//               </p>
//               <p className="text-lg text-neutral-700 dark:text-neutral-200 leading-relaxed mb-6">
//                 Outside of class, I love collaborating on innovative projects, learning new technologies, and contributing to open source. I’m also passionate about leadership, teaching, and helping others grow in tech.
//               </p>
//               <p className="text-lg text-neutral-700 dark:text-neutral-200 leading-relaxed">
//                 In my free time, you’ll find me swimming, exploring new music, or working on side projects. I’m always open to new opportunities and connections!
//               </p>
//             </div>
//           </div>
//         </section>

//         <section
//           id="education"
//           className="w-full py-24 px-4 bg-white dark:bg-black"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold uppercase text-center mb-12 text-gray-800 dark:text-white" style={{ fontFamily: "'DM Serif Display', serif" }}>
//             Education
//           </h2>
//           <div className="max-w-3xl mx-auto relative pl-12">
//             {/* Vertical line */}
//             <div className="absolute left-6 top-0 h-full border-l-2 border-gray-300 dark:border-gray-700"></div>

//             {/* Education Items */}
//             {education.map((education, index) => (
//               <EducationCard
//                 key={index}
//                 school={education.school}
//                 degree={education.degree}
//                 summary={education.summary}
//                 description={education.description}
//                 openEducationModal={openEducationModal}
//               />
//             ))}
//             {/* Education Modal */}
//             {isEducationModalOpen && selectedEducation && (
//               <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//                 <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6 w-[90%] max-w-xl text-left">
//                   <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{selectedEducation.school}</h3>
//                   <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{selectedEducation.degree}</p>
//                   <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm">
//                     {selectedEducation.description.map((item, i) => (
//                       <li key={i}>{item}</li>
//                     ))}
//                   </ul>
//                   <div className="mt-6 flex justify-end">
//                     <button
//                       onClick={closeEducationModal}
//                       className="px-4 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded hover:bg-gray-800 dark:hover:bg-gray-300 transition"
//                     >
//                       Close
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </section>

//         <section
//           id="projects"
//           className="w-full py-24 px-4 bg-white dark:bg-black"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold uppercase text-center mb-12 text-gray-800 dark:text-white" style={{ fontFamily: "'DM Serif Display', serif" }}>
//             Projects
//           </h2>
//           <div className="max-w-3xl mx-auto relative pl-12">
//             {/* Vertical line */}
//             <div className="absolute left-6 top-0 h-full border-l-2 border-gray-300 dark:border-gray-700"></div>

//             {/* Project Items */}
//             {projects.map((project, index) => (
//               <ProjectCard
//                 key={index}
//                 title={project.title}
//                 role={project.role}
//                 description={project.description}
//                 openProjectModal={openProjectModal}
//               />
//             ))}
//             {/* Project Modal */}
//             {isProjectModalOpen && selectedProject && (
//               <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//                 <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6 w-[90%] max-w-xl text-left">
//                   <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{selectedProject.title}</h3>
//                   <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{selectedProject.role}</p>
//                   <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm">
//                     {selectedProject.description.map((item, i) => (
//                       <li key={i}>{item}</li>
//                     ))}
//                   </ul>
//                   <div className="mt-6 flex justify-end">
//                     <button
//                       onClick={closeProjectModal}
//                       className="px-4 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded hover:bg-gray-800 dark:hover:bg-gray-300 transition"
//                     >
//                       Close
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </section>

//         <section
//           id="classes"
//           className="w-full py-24 px-4 bg-white dark:bg-black"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold uppercase text-center mb-12 text-gray-800 dark:text-white" style={{ fontFamily: "'DM Serif Display', serif" }}>
//             Relevant Classes
//           </h2>
//           <div className="flex flex-wrap justify-center gap-6 px-4 pb-24">
//             <div className="flex flex-wrap justify-center gap-6 px-4">
//               {courses.map((course, index) => (
//                 <CourseCard
//                   key={index}
//                   title={course.title}
//                   code={course.code}
//                   description={course.description}
//                   openCourseModal={openCourseModal}
//                 />
//               ))}
//             </div>
      
//         {/* Modal for class info */}
//         {isCourseModalOpen && selectedClass && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6 w-[90%] max-w-xl text-left">
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{selectedClass.title} ({selectedClass.code})</h3>
//               <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm">
//                 {selectedClass.description.map((point, i) => (
//                   <li key={i}>{point}</li>
//                 ))}
//               </ul>
//               <div className="mt-6 flex justify-end">
//                 <button
//                   onClick={closeCourseModal}
//                   className="px-4 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded hover:bg-gray-800 dark:hover:bg-gray-300 transition"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//           </div>
//         </section>
//       </main>
//     </>
//   )
// }

// {/*https://www.youtube.com/watch?v=smOSz-krosM&t=49s  Findy Video*/}