import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Code2, Palette, Rocket } from "lucide-react";
import { useRef } from "react";

const roles = [
  { icon: Palette, title: "Product Designer", desc: "I design intuitive, user-centered digital experiences. From wireframes to polished interfaces, I focus on creating designs that solve real problems and delight users." },
  { icon: Code2, title: "Developer", desc: "I build full-stack web applications using modern technologies like React, TypeScript, and Next.js. I love turning ideas into functional, performant products." },
  { icon: Heart, title: "Mentor", desc: "I teach beginners and young students how to code from scratch, introducing them to programming fundamentals and helping them build confidence with technology." },
  { icon: Rocket, title: "Startup Builder", desc: "I co-found and build digital products that address real needs. From ideation to launch, I work across design, development, and strategy to bring products to life." },
];

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <div className="min-h-screen pt-24 relative overflow-hidden">
      {/* Google-style animated gradient blobs */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
      </div>

      {/* Hero */}
      <Section>
        <div ref={heroRef} className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Photo */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-[0_0_50px_-10px_hsl(270_70%_60%/0.3)]">
                <img
                  src="/images/profile.png"
                  alt="Jennifer Oluomachi Omojo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
                <span className="text-2xl">👩‍💻</span>
              </div>
            </div>
          </motion.div>

          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary font-medium text-sm uppercase tracking-wide mb-4"
            >
              About Me
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold font-display mb-6"
            >
              Product Designer, Developer,{" "}
              <span className="text-gradient">Mentor & Tech Founder</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Jennifer Oluomachi Omojo is a product designer, developer, and tech founder based in Benin Republic, passionate about building digital tools that solve real problems. She works at the intersection of technology, design, and education — actively building products, mentoring developers, and contributing to growing the African tech ecosystem.
            </motion.p>
          </div>
        </div>
      </Section>

      {/* Roles */}
      <Section className="bg-card/30">
        <SectionHeading title="What I Bring" subtitle="Wearing many hats to create meaningful impact." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass rounded-xl p-8 hover:border-primary/30 transition-all group hover:shadow-[0_15px_40px_-10px_hsl(270_70%_60%/0.15)]"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <role.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3">{role.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{role.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Mentorship */}
      <Section>
        <div className="glass rounded-2xl p-8 md:p-12 glow-box relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <SectionHeading title="Mentorship & Education" />
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
              <p>
                Jennifer mentors aspiring developers and has taught kids how to code from scratch, introducing them to programming fundamentals and helping them build confidence with technology.
              </p>
              <p>
                Through her involvement with <strong className="text-foreground">Programmify</strong>, she mentors young builders — guiding them through their first lines of code, helping them understand problem-solving, and nurturing the next generation of African tech talent.
              </p>
              <p>
                Her approach to mentorship is hands-on and empathetic: meeting learners where they are, breaking complex concepts into simple steps, and celebrating every milestone along the way.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
