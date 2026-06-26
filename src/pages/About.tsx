import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Code2, Palette, Rocket, MapPin, GraduationCap, Sparkles, Users2 } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const roles = [
  {
    icon: Code2,
    title: "AI Product Engineer",
    desc: "I design and build full-stack web apps with React, TypeScript, and modern AI tooling - from early wireframes and product thinking to polished, shippable products that feel calm to use.",
  },

  {
    icon: Heart,
    title: "Mentor & Instructor",
    desc: "I teach kids and beginners how to code from scratch - breaking down complex ideas, building their confidence, and helping them ship their first projects.",
  },
  {
    icon: Rocket,
    title: "Tech Founder",
    desc: "I co-found and build products that solve real problems - across productivity, file sharing, education, and the web. I work end-to-end: design, code, strategy, ship.",
  },
];

const values = [
  { icon: Sparkles, title: "Build with intention", desc: "Every product should solve a real problem for real people." },
  { icon: Users2, title: "Lift others as I climb", desc: "Mentorship and access are how ecosystems grow." },
  { icon: Heart, title: "Stay curious, stay kind", desc: "Tech is best when it's human, warm, and useful." },
];

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <div className="min-h-screen pt-24 relative overflow-hidden">
      {/* Hero */}
      <Section>
        <div ref={heroRef} className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-[0_0_50px_-10px_hsl(25_95%_60%/0.3)]">
                <img
                  src="/images/profile.png"
                  alt="Jennifer Oluomachi Omojo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 px-3 py-2 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center gap-1.5">
                <MapPin size={14} className="text-primary" />
                <span className="text-xs font-medium">Benin Republic</span>
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
              className="text-4xl md:text-5xl font-bold font-display mb-6 leading-tight"
            >
              Hi, I'm Jennifer - I design, build,{" "}
              <span className="text-gradient">and teach the web.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              I'm a AI product engineer and tech founder based in the Benin Republic. I build digital tools that solve real problems, and I spend just as much time teaching the next generation of African builders how to write their first lines of code.
            </motion.p>
          </div>
        </div>
      </Section>

      {/* My Story */}
      <Section>
        <SectionHeading title="My Story" subtitle="From economics student to product builder and instructor." />
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              My journey into tech didn't start in a computer science classroom. I studied <strong className="text-foreground">Economics at ESTAM University</strong> in the Benin Republic, where I learned to think in systems, incentives, and trade-offs - a way of thinking that still shapes how I design products today.
            </p>
            <p>
              Curiosity pulled me into design first. I wanted to understand why some apps felt obvious to use and others felt like a fight. That curiosity turned into Figma files, then into code, then into shipped products. Today I work across the full stack - from user research and UI design to React, TypeScript, and deploying real apps to real users.
            </p>
            <p>
              Alongside building, I co-founded <strong className="text-foreground">Programmify</strong>, where I serve as COO and help run our Academy. I also teach kids how to code through Programmify's instructor program - guiding learners as young as 8 through their first variables, loops, and finished projects.
            </p>
            <p>
              On the side, I build independent products: <strong className="text-foreground">Tymflow</strong> for workflows, <strong className="text-foreground">Tendly</strong> for private file sharing, <strong className="text-foreground">Phalkn</strong> for web gaming, <strong className="text-foreground">PeerDrift</strong> for real-time room-based sharing, and <strong className="text-foreground">FastCV</strong> for editorial resumes. Each one starts with the same question: <em>what would make this part of the web feel better?</em>
            </p>
          </div>

          <div className="space-y-4">
            <div className="glass rounded-xl p-5">
              <GraduationCap className="text-primary mb-3" size={22} />
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Education</p>
              <p className="font-semibold">B.Sc. Economics</p>
              <p className="text-sm text-muted-foreground">ESTAM University, Benin Republic</p>
            </div>
            <div className="glass rounded-xl p-5">
              <MapPin className="text-primary mb-3" size={22} />
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Based in</p>
              <p className="font-semibold">Benin Republic</p>
              <p className="text-sm text-muted-foreground">Working remotely across Africa & beyond</p>
            </div>
            <div className="glass rounded-xl p-5">
              <Rocket className="text-primary mb-3" size={22} />
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Currently</p>
              <p className="font-semibold">COO @ Programmify</p>
              <p className="text-sm text-muted-foreground">Building products & teaching kids to code</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Roles */}
      <Section className="bg-card/30">
        <SectionHeading title="The Hats I Wear" subtitle="Different roles, one mission: build useful things and bring people along." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass rounded-xl p-8 hover:border-primary/30 transition-all group hover:shadow-[0_15px_40px_-10px_hsl(25_95%_60%/0.15)]"
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
            <p className="text-primary font-medium text-sm uppercase tracking-wide mb-3">Mentorship</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Teaching the next generation of builders</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
              <p>
                Teaching is one of the most meaningful parts of my work. Through <strong className="text-foreground">Programmify</strong>, I mentor aspiring developers and run a kids' programming track where I introduce young learners to coding fundamentals - variables, logic, problem-solving - and walk them through building their first real projects.
              </p>
              <p>
                I've watched kids go from "I can't do this" to confidently presenting an app they built themselves. That shift in confidence is the entire point. My approach is hands-on and empathetic: meet learners where they are, break complex ideas into small wins, and celebrate every milestone.
              </p>
              <p>
                I believe the African tech ecosystem grows fastest when builders teach builders. So I keep showing up - for the kids in our classes, the beginners in our community, and the young founders trying to ship their first product.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-card/30">
        <SectionHeading title="What I Value" />
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6"
            >
              <v.icon className="text-primary mb-3" size={22} />
              <h3 className="font-display font-semibold text-lg mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Outside work */}
      <Section>
        <SectionHeading title="Outside the Code" />
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          When I'm not designing or shipping, I'm usually exploring new tools, sketching product ideas, reading about how startups grow, or having long conversations with the kids and mentees I teach. I'm endlessly curious about how technology, design, and education can come together to open doors - especially for young Africans who deserve a real seat at the table.
        </p>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
          Let's build something <span className="text-gradient">meaningful</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Whether you want to collaborate, hire me, or just say hi - my inbox is open.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
            <Link to="/contact">Get In Touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8">
            <Link to="/projects">See My Work</Link>
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default About;
