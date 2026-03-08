import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Tymflow",
    url: "https://tymflow.vercel.app",
    desc: "A digital workflow platform designed to help individuals and teams organize tasks and improve productivity.",
    role: "Founder",
    tags: ["Productivity", "Workflow", "SaaS"],
  },
  {
    name: "Programmify Academy",
    url: "https://academy.programmify.org",
    desc: "An online platform designed to teach programming and digital skills to beginners through structured lessons and mentorship.",
    role: "Co-Founder, Mentor",
    tags: ["EdTech", "Mentorship", "Learning"],
  },
  {
    name: "Tendly",
    url: "https://tendly.xyz",
    desc: "A privacy-first file sharing platform that allows users to send files securely with temporary and controlled access.",
    role: "Co-Founder",
    tags: ["Privacy", "File Sharing", "Security"],
  },
  {
    name: "Phalkn",
    url: "https://phalkn.com",
    desc: "A digital platform focused on building modern web gaming experiences.",
    role: "Co-Founder & Developer",
    tags: ["Gaming", "Web", "Entertainment"],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-24">
      <Section>
        <SectionHeading title="Projects" subtitle="Products I've built and co-founded to solve real problems." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-8 hover:border-primary/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-display font-bold text-2xl mb-1 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <span className="text-xs text-primary font-medium uppercase tracking-wide">
                    {project.role}
                  </span>
                </div>
                <ExternalLink size={20} className="text-muted-foreground group-hover:text-primary transition-colors mt-1" />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Projects;
