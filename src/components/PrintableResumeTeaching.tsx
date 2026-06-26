const teachingSkills = [
  "Curriculum Design", "Project-Based Learning", "Youth Mentorship",
  "Beginner-Friendly Instruction", "HTML/CSS/JavaScript", "Python",
  "AI Concepts", "Public Speaking", "Lesson Planning", "Student Assessment",
];

const PrintableResumeTeaching = ({ resumeRef }: { resumeRef: React.RefObject<HTMLDivElement> }) => {
  return (
    <div
      ref={resumeRef}
      className="hidden print:block bg-white text-black font-sans mx-auto"
      style={{
        fontSize: "12px",
        lineHeight: "1.5",
        maxWidth: "210mm",
        padding: "20mm 22mm",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div className="text-center border-b-2 border-gray-800 pb-3 mb-4">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Jennifer Oluomachi Omojo
        </h1>
        <p className="text-sm text-gray-600 mt-1 font-medium">
          Programming Instructor - Mentor - Tech Educator
        </p>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-0.5 mt-1.5 text-[11px] text-gray-500">
          <span>jenniferemeka24@gmail.com</span>
          <span>linkedin.com/in/jenniemeka</span>
          <span>github.com/Jenniemeka</span>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="mb-4">
        <h2 className="text-[12px] font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-0.5 mb-2">
          Professional Summary
        </h2>
        <p className="text-gray-700">
          Programming instructor passionate about teaching young learners how to build with technology. Skilled at breaking down complex concepts into simple, engaging lessons and guiding students through hands-on projects. Experienced in curriculum design, mentorship, and inspiring the next generation of African tech talent.
        </p>
      </div>

      {/* Teaching Experience */}
      <div className="mb-4">
        <h2 className="text-[12px] font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-0.5 mb-2">
          Teaching & Mentorship Experience
        </h2>

        <div className="mb-3">
          <div className="flex justify-between items-baseline">
            <h3 className="font-bold text-gray-900">Programming Instructor (Kids)</h3>
            <span className="text-[11px] text-gray-500 shrink-0 ml-4">Jan 2026 - Mar 2026</span>
          </div>
          <p className="text-gray-600 italic text-[11px] mb-1">Programmify</p>
          <ul className="list-disc pl-4 space-y-0.5 text-gray-700">
            <li>Taught children (ages 10-16) programming: HTML, CSS, JavaScript, Python, and introductory AI concepts</li>
            <li>Designed structured, beginner-friendly curriculum and learning materials</li>
            <li>Guided students to build real-world projects like simple websites and apps</li>
            <li>Broke down complex technical topics into simple, engaging lessons</li>
            <li>Mentored students through hands-on, project-based learning</li>
          </ul>
        </div>

        <div className="mb-3">
          <div className="flex justify-between items-baseline">
            <h3 className="font-bold text-gray-900">Programming Instructor (Kids)</h3>
            <span className="text-[11px] text-gray-500 shrink-0 ml-4">Jan 2025 - Present</span>
          </div>
          <p className="text-gray-600 italic text-[11px] mb-1">Programmify</p>
          <ul className="list-disc pl-4 space-y-0.5 text-gray-700">
            <li>Taught children (ages 10-15) programming fundamentals including HTML, CSS, JavaScript, Python, and basic AI concepts</li>
            <li>Created beginner-friendly learning materials and interactive, hands-on projects</li>
            <li>Guided students to build simple websites and applications from scratch</li>
            <li>Simplified complex technical concepts into fun and engaging lessons</li>
            <li>Mentored students through project-based learning and creative problem solving</li>
          </ul>
        </div>

        <div className="mb-3">
          <div className="flex justify-between items-baseline">
            <h3 className="font-bold text-gray-900">Mentor & Tech Educator</h3>
            <span className="text-[11px] text-gray-500 shrink-0 ml-4">2024 - Present</span>
          </div>
          <p className="text-gray-600 italic text-[11px] mb-1">Programmify Labs / Community Programs</p>
          <ul className="list-disc pl-4 space-y-0.5 text-gray-700">
            <li>Taught coding from scratch to beginners and youth, building confidence in programming fundamentals</li>
            <li>Designed step-by-step curriculum and practical projects to introduce students to web development and AI tools</li>
            <li>Mentored students in product building, project management, and digital skills</li>
          </ul>
        </div>

        <div className="mb-3">
          <div className="flex justify-between items-baseline">
            <h3 className="font-bold text-gray-900">Co-Founder & Head of Education</h3>
            <span className="text-[11px] text-gray-500 shrink-0 ml-4">Jan 2023 - Present</span>
          </div>
          <p className="text-gray-600 italic text-[11px] mb-1">Programmify</p>
          <ul className="list-disc pl-4 space-y-0.5 text-gray-700">
            <li>Co-founded a platform empowering African tech builders through education and mentorship</li>
            <li>Designed and developed Programmify Academy, an online learning platform for beginner-friendly coding education</li>
            <li>Mentored students and interns, teaching coding from scratch and guiding them through real-world projects</li>
            <li>Managed the Founders Fellowship program, helping young tech enthusiasts develop skills and build products</li>
          </ul>
        </div>
      </div>

      {/* Projects (education-framed) */}
      <div className="mb-4">
        <h2 className="text-[12px] font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-0.5 mb-2">
          Educational Projects & Platforms
        </h2>
        <ul className="list-disc pl-4 space-y-0.5 text-gray-700">
          <li><strong>Programmify Academy</strong> (academy.programmify.org) - Built an online learning platform providing structured coding lessons and mentorship for beginners</li>
          <li><strong>Tymflow</strong> (tymflow.vercel.app) - Developed a productivity platform used to teach students project management and workflow concepts</li>
        </ul>
      </div>

      {/* Education */}
      <div className="mb-4">
        <h2 className="text-[12px] font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-0.5 mb-2">
          Education
        </h2>
        <h3 className="font-bold text-gray-900">Bachelor's Degree in Economics</h3>
        <p className="text-gray-600 text-[11px]">ESTAM University</p>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-[12px] font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-0.5 mb-2">
          Skills
        </h2>
        <div className="flex flex-wrap gap-x-2 gap-y-0.5 text-gray-700">
          {teachingSkills.map((skill, i) => (
            <span key={skill}>
              {skill}{i < teachingSkills.length - 1 ? " ·" : ""}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrintableResumeTeaching;
