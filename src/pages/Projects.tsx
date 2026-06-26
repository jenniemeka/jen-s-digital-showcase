import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "FastCV",
    url: "https://fastcv.shop",
    image: "/images/fastcv.png",
    desc: "An editorial resume builder with quiet typography and ATS-ready templates. Build for free, pay only when you're ready to download.",
    role: "Builder",
    tags: ["Resume", "EdTech", "Career"],
  },
  {
    name: "PeerDrift",
    url: "https://peerdrift.lovable.app",
    image: "/images/peerdrift.png",
    desc: "A real-time room for sharing files, text, and links across devices. No accounts, no tracking - rooms self-destruct after 30 minutes.",
    role: "Builder",
    tags: ["File Sharing", "Real-time", "Privacy"],
  },
  {
    name: "Tymflow",
    url: "https://tymflow.vercel.app",
    image: "/images/tymflow.png",
    desc: "A digital workflow platform designed to help individuals and teams organize tasks and improve productivity.",
    role: "Founder",
    tags: ["Productivity", "Workflow", "SaaS"],
  },
  {
    name: "Programmify Academy",
    url: "https://academy.programmify.org",
    image: "/images/programmify.png",
    desc: "An online platform designed to teach programming and digital skills to beginners through structured lessons and mentorship.",
    role: "Co-Founder, Mentor",
    tags: ["EdTech", "Mentorship", "Learning"],
  },
  {
    name: "Tendly",
    url: "https://tendly.xyz",
    image: "/images/tendly.png",
    desc: "A privacy-first file sharing platform that allows users to send files securely with temporary and controlled access.",
    role: "Co-Founder",
    tags: ["Privacy", "File Sharing", "Security"],
  },
  {
    name: "Phalkn",
    url: "https://phalkn.com",
    image: "/images/phalkn.png",
    desc: "A digital platform focused on building modern web gaming experiences.",
    role: "Co-Founder & Developer",
    tags: ["Gaming", "Web", "Entertainment"],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 relative overflow-hidden">

      <Section>
        <SectionHeading title="Projects" subtitle="Products I've built and co-founded to solve real problems." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="glass rounded-2xl overflow-hidden hover:border-primary/40 transition-all group hover:shadow-[0_20px_60px_-15px_hsl(25_95%_60%/0.25)]"
            >
              {/* Preview Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
                <div className="absolute top-4 right-4">
                  <ExternalLink size={18} className="text-foreground/70 group-hover:text-primary transition-colors drop-shadow-lg" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-display font-bold text-xl mb-1 group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <span className="text-xs text-primary font-medium uppercase tracking-wide">
                      {project.role}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">Want to see more of my work?</p>
          <a
            href="https://github.com/Jenniemeka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary hover:border-primary/30 transition-all"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View More on GitHub
          </a>
        </motion.div>
      </Section>
    </div>
  );
};

export default Projects;
