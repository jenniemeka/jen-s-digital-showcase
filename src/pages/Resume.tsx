import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const experiences = [
  { area: "Product Design", desc: "Designing intuitive interfaces, design systems, and user flows for web and mobile products." },
  { area: "Web Development", desc: "Building full-stack applications with React, TypeScript, Next.js, and modern tooling." },
  { area: "Startup Building", desc: "Co-founding and scaling digital products from concept to launch." },
  { area: "Mentorship", desc: "Teaching programming fundamentals to beginners and young students, guiding them through their tech journey." },
  { area: "AI Product Prototyping", desc: "Exploring and prototyping AI-powered tools and integrating intelligent features into products." },
];

const Resume = () => {
  return (
    <div className="min-h-screen pt-24">
      <Section>
        <SectionHeading title="Resume" subtitle="Education, experience, and areas of expertise." />

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

        {/* Experience */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="text-primary" size={24} />
            <h3 className="font-display font-semibold text-xl">Experience & Expertise</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, i) => (
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
