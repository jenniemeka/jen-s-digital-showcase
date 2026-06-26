const skills = [
  "Product Design", "UI/UX (Figma)", "React", "TypeScript", "Next.js",
  "Tailwind CSS", "Node.js", "Git/GitHub", "AI Prototyping", "Mentorship",
];

const PrintableResume = ({ resumeRef }: { resumeRef: React.RefObject<HTMLDivElement> }) => {
  return (
    <div
      ref={resumeRef}
      className="hidden print:block bg-white text-black font-sans mx-auto"
      style={{
        fontSize: "11px",
        lineHeight: "1.45",
        maxWidth: "210mm",
        padding: "18mm 20mm",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div className="text-center border-b-2 border-gray-800 pb-3 mb-4">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Jennifer Oluomachi Omojo
        </h1>
        <p className="text-xs text-gray-600 mt-1">
          AI Product Engineer · Mentor · Tech Founder
        </p>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-0.5 mt-1.5 text-[10px] text-gray-500">
          <span>jenniferemeka24@gmail.com</span>
          <span>linkedin.com/in/jenniemeka</span>
          <span>github.com/Jenniemeka</span>
          <span>x.com/Jenniemeka</span>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-3">
        <h2 className="text-[11px] font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-0.5 mb-1.5">
          Professional Summary
        </h2>
        <p className="text-gray-700">
          AI product engineer and tech founder passionate about building digital tools that solve real problems. Works at the intersection of technology, design, and education - actively building products, mentoring developers, and contributing to the African tech ecosystem.
        </p>
      </div>

      {/* Work Experience */}
      <div className="mb-3">
        <h2 className="text-[11px] font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-0.5 mb-2">
          Work Experience
        </h2>

        <div className="mb-3">
          <div className="flex justify-between items-baseline">
            <h3 className="font-bold text-gray-900">Programming Instructor (Kids)</h3>
            <span className="text-[10px] text-gray-500 shrink-0 ml-4">Jan 2025 – Present</span>
          </div>
          <p className="text-gray-600 italic text-[10px] mb-0.5">Programmify</p>
          <ul className="list-disc pl-4 space-y-0 text-gray-700">
            <li>Taught children (ages 10–15) the fundamentals of programming including HTML, CSS, JavaScript, Python, and basic AI concepts.</li>
            <li>Designed beginner-friendly learning materials and hands-on projects.</li>
            <li>Guided students to build simple websites and applications.</li>
            <li>Simplified complex technical concepts into fun and engaging lessons.</li>
            <li>Mentored students through project-based learning and creative problem solving.</li>
          </ul>
        </div>

        <div className="mb-3">
          <div className="flex justify-between items-baseline">
            <h3 className="font-bold text-gray-900">Co-Founder & Chief Operating Officer (COO)</h3>
            <span className="text-[10px] text-gray-500 shrink-0 ml-4">Jan 2023 – Present</span>
          </div>
          <p className="text-gray-600 italic text-[10px] mb-0.5">Programmify</p>
          <ul className="list-disc pl-4 space-y-0 text-gray-700">
            <li>Lead operations, strategy, and product development for Programmify, a platform empowering African tech builders.</li>
            <li>Designed and developed online learning platforms, including Programmify Academy, facilitating beginner-friendly coding education.</li>
            <li>Mentor students and interns, teaching coding from scratch and guiding them in real-world project development.</li>
            <li>Manage the Founders Fellowship program, helping young tech enthusiasts build products and grow their skills.</li>
          </ul>
        </div>

        <div className="mb-3">
          <div className="flex justify-between items-baseline">
            <h3 className="font-bold text-gray-900">Developer</h3>
            <span className="text-[10px] text-gray-500 shrink-0 ml-4">2024 – Present</span>
          </div>
          <p className="text-gray-600 italic text-[10px] mb-0.5">Independent / Freelance Projects</p>
          <ul className="list-disc pl-4 space-y-0 text-gray-700">
            <li>Built and launched Tymflow (tymflow.vercel.app), a digital workflow platform improving productivity for individuals and teams.</li>
            <li>Developed Phalkn (phalkn.com), a web solutions platform delivering scalable digital experiences.</li>
            <li>Created Tendly (tendly.xyz), a privacy-first file-sharing platform focused on secure, temporary access.</li>
            <li>Managed end-to-end product design and development, including UI/UX design, frontend and backend coding, and deployment.</li>
          </ul>
        </div>

        <div className="mb-3">
          <div className="flex justify-between items-baseline">
            <h3 className="font-bold text-gray-900">Mentor & Tech Educator</h3>
            <span className="text-[10px] text-gray-500 shrink-0 ml-4">2024 – Present</span>
          </div>
          <p className="text-gray-600 italic text-[10px] mb-0.5">Programmify Labs / Community Programs</p>
          <ul className="list-disc pl-4 space-y-0 text-gray-700">
            <li>Teach coding from scratch to beginners and youth, building confidence in programming fundamentals.</li>
            <li>Design step-by-step curriculum and practical projects to introduce students to web development and AI tools.</li>
            <li>Mentor students in product building, project management, and digital skills through Programmify Labs.</li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <div className="mb-3">
        <h2 className="text-[11px] font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-0.5 mb-1.5">
          Education
        </h2>
        <h3 className="font-bold text-gray-900">Bachelor's Degree in Economics</h3>
        <p className="text-gray-600 text-[10px]">ESTAM University - Benin Republic</p>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-[11px] font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-0.5 mb-1.5">
          Skills
        </h2>
        <div className="flex flex-wrap gap-x-2 gap-y-0.5 text-gray-700">
          {skills.map((skill, i) => (
            <span key={skill}>
              {skill}{i < skills.length - 1 ? " ·" : ""}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrintableResume;
