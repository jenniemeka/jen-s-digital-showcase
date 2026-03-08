import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2, Calendar, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const workExperience = [
  {
    title: "Co-Founder & Chief Operating Officer (COO)",
    company: "Programmify",
    period: "Jan 2023 – Present",
    bullets: [
      "Lead operations, strategy, and product development for Programmify, a platform empowering African tech builders.",
      "Designed and developed online learning platforms, including Programmify Academy, facilitating beginner-friendly coding education.",
      "Mentor students and interns, teaching coding from scratch and guiding them in real-world project development.",
      "Manage the Founders Fellowship program, helping young tech enthusiasts build products and grow their skills.",
    ],
  },
  {
    title: "Developer",
    company: "Independent / Freelance Projects",
    period: "2024 – Present",
    bullets: [
      "Built and launched Tymflow (tymflow.vercel.app), a digital workflow platform improving productivity for individuals and teams.",
      "Developed Phalkn (phalkn.com), a web solutions platform delivering scalable digital experiences.",
      "Created Tendly (tendly.xyz), a privacy-first file-sharing platform focused on secure, temporary access.",
      "Managed end-to-end product design and development, including UI/UX design, frontend and backend coding, and deployment.",
    ],
  },
  {
    title: "Mentor & Tech Educator",
    company: "Programmify Labs / Community Programs",
    period: "2024 – Present",
    bullets: [
      "Teach coding from scratch to beginners and youth, building confidence in programming fundamentals.",
      "Design step-by-step curriculum and practical projects to introduce students to web development and AI tools.",
      "Mentor students in product building, project management, and digital skills through Programmify Labs.",
    ],
  },
];

const expertise = [
  { area: "Product Design", desc: "Designing intuitive interfaces, design systems, and user flows for web and mobile products." },
  { area: "Web Development", desc: "Building full-stack applications with React, TypeScript, Next.js, and modern tooling." },
  { area: "Startup Building", desc: "Co-founding and scaling digital products from concept to launch." },
  { area: "Mentorship", desc: "Teaching programming fundamentals to beginners and young students, guiding them through their tech journey." },
  { area: "AI Product Prototyping", desc: "Exploring and prototyping AI-powered tools and integrating intelligent features into products." },
];

const Resume = () => {
  return (
    <div className="min-h-screen pt-24 relative overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
      </div>

      <Section>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <SectionHeading title="Resume" subtitle="Education, experience, and areas of expertise." />
          <Button
            onClick={() => window.print()}
            className="rounded-full px-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_-5px_hsl(25_95%_60%/0.4)] print:hidden"
          >
            <Download size={16} className="mr-2" />
            Download Resume
          </Button>
        </div>

        {/* Education */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-primary" size={24} />
            <h3 className="font-display font-semibold text-xl">Education</h3>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-6"
          >
            <h4 className="font-display font-semibold text-lg">Bachelor's Degree in Economics</h4>
            <p className="text-primary text-sm font-medium">ESTAM University</p>
            <p className="text-muted-foreground text-sm">Benin Republic</p>
          </motion.div>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="text-primary" size={24} />
            <h3 className="font-display font-semibold text-xl">Work Experience</h3>
          </div>
          <div className="space-y-6">
            {workExperience.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h4 className="font-display font-semibold text-lg">{job.title}</h4>
                    <p className="text-primary text-sm font-medium">{job.company}</p>
                  </div>
                  <span className="flex items-center gap-1.5 text-muted-foreground text-sm shrink-0">
                    <Calendar size={14} />
                    {job.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {job.bullets.map((bullet, j) => (
                    <li key={j} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                      <span className="text-primary mt-1.5 shrink-0">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Expertise */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="text-primary" size={24} />
            <h3 className="font-display font-semibold text-xl">Areas of Expertise</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertise.map((exp, i) => (
              <motion.div
                key={exp.area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-xl p-6 hover:border-primary/30 transition-all"
              >
                <h4 className="font-display font-semibold text-lg mb-2">{exp.area}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Resume;
