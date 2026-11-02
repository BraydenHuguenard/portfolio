// Professional details verified against the Winter 2026 resume.
export const experience = [
  {
    organization: 'auris · Midtown ENT', role: 'iOS Engineer (Contract)', dates: 'September 2026 – Present',
    highlights: [
      'Designed and built auris end to end as the sole engineer, an iOS app for ENT patients to track tinnitus severity and daily habits.',
      'Developed trend analysis that surfaces associations between habits and symptoms, with CSV/PDF exports for clinic visits.',
      'Built an opt-in AI summary and chat API on AWS (Lambda, Bedrock, DynamoDB) with Supabase JWT auth and response caching.',
      'Implemented local-first privacy controls: on-device health data, no server-side chat retention, and full account deletion across Supabase and AWS.',
    ],
  },
  {
    organization: 'Georgia Tech App', role: 'Technical Lead', dates: 'December 2025 – Present',
    highlights: [
      'Architected a SwiftUI codebase and established SwiftLint standards for a team of 25+ developers.',
      'Connected 6 campus services through 13+ API endpoints, including dining, transit, capacity, and events.',
      'Built adaptive polling for live bus tracking and integrated Georgia Tech SSO using CAS/OIDC.',
      'Conducted user interviews and partnered with SGA, OIT, Dining, Library, and Institute Communications to shape the student experience.',
    ],
  },
  {
    organization: 'Georgia Tech · CS 4400', role: 'Teaching Assistant, Database Systems', dates: 'August 2026 – Present',
    highlights: [
      'Develop and administer database coding exams for 500+ students, with weekly office hours and technical reviews.',
      'Evaluate semester-long database projects through demos and give feedback on design and implementation.',
    ],
  },
  {
    organization: 'Assent', role: 'AI Innovation Intern', dates: 'May – August 2026',
    highlights: [
      'Owned an internal LLM evaluation platform supporting 15 regulations, from prototype through deployment.',
      'Benchmarked model changes across 90+ labeled documents; improved evaluation accuracy from 64% to 81% with subject-matter experts.',
      'Reduced per-document token usage by approximately 40%, from about 19K to 11K tokens.',
      'Deployed FastAPI on AWS ECS with Terraform and built a 248-test hermetic suite covering evaluation, APIs, and data processing.',
      'Connected three engineering teams with compliance experts to support adoption of the platform.',
    ],
  },
  {
    organization: 'PlayOn Sports · Client Capstone', role: 'Software Engineer', dates: 'January – April 2026',
    highlights: [
      'Built a Tree-of-Thought text-to-SQL pipeline that generated three candidate queries and used an LLM judge to select the best.',
      'Improved text-to-SQL accuracy from 68% to 91%, with read-only validation blocking 9 write/DDL operations and capping results at 200 rows.',
      'Engineered concurrent CSV ingestion for datasets exceeding 600K rows and a custom SVG chart engine with PDF report generation.',
      'Placed 2nd overall among 40+ teams at the Georgia Tech Capstone Expo.',
    ],
  },
  {
    organization: 'Georgia Tech · CS 3600', role: 'Teaching Assistant, Artificial Intelligence', dates: 'August 2025 – May 2026',
    highlights: [
      'Led 3 TAs developing review materials for 600+ students across two semesters.',
      'Held weekly office hours and helped improve homework, exams, and solutions.',
    ],
  },
  {
    organization: 'Georgia Tech iOS Club', role: 'Technical Lead · Reverie', dates: 'July – November 2025',
    highlights: [
      'Led and mentored 25+ developers; Reverie won Best App and Best Design at Demo Day.',
      'Built on-device dream imagery with Apple Foundation Models and Stable Diffusion/CoreML.',
      'Reduced image generation time from 30+ seconds to about 5 seconds through model caching and concurrency.',
    ],
  },
  {
    organization: 'Georgia Tech iOS Club', role: 'Developer · Nomad', dates: 'August – December 2024',
    highlights: [
      'Built stop discovery with Yelp and itinerary workflows in SwiftUI, contributing 55+ commits to a 20+ developer codebase.',
      'Nomad won Best App and Most Popular at Demo Day.',
    ],
  },
];

export const skills = [
  { title: 'Languages', items: 'Python, Swift, SQL, Java, C, C++, JavaScript, HTML' },
  { title: 'AI & application development', items: 'PyTorch, scikit-learn, LangChain, FAISS, Pandas, NumPy, SwiftUI, React, FastAPI, SwiftData, CoreML' },
  { title: 'Cloud & tools', items: 'AWS (Lambda, Bedrock, S3, ECS, CloudWatch), Terraform, Docker, MongoDB, Firebase, Supabase' },
];
