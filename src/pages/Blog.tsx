import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Clock, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const posts = [
  {
    title: "Building Startups as a Solo Founder",
    excerpt: "Lessons learned from building multiple products from scratch — the wins, failures, and everything in between.",
    date: "Mar 2026",
    readTime: "6 min read",
    tags: ["Startups", "Founder Life"],
    content: `Starting a company alone is one of the most challenging — and rewarding — things I've ever done. Over the past few years, I've launched multiple products including Tymflow, Tendly, and Phalkn, each from a simple idea to a shipped product used by real people.

**The hardest part isn't coding — it's deciding what to build.** When you're a solo founder, every decision falls on your shoulders. You're the designer, the developer, the marketer, and the support team. That means learning to prioritize ruthlessly.

Here are a few things I've learned:

**1. Ship fast, iterate faster.** Your first version won't be perfect, and that's okay. I launched Tymflow with a minimal feature set — just task management and a clean interface. User feedback shaped everything that came after.

**2. Talk to your users early.** Before writing a single line of code for Tendly, I talked to people about how they share files. Their frustrations with existing tools gave me the roadmap.

**3. Burnout is real.** There were weeks where I worked 14-hour days and felt like I was going backward. I learned to take breaks, set boundaries, and remember that the product will still be there tomorrow.

**4. Community matters.** Being part of the African tech ecosystem means I'm never truly alone. Other founders, mentors, and developers have been invaluable — offering advice, testing products, and sometimes just listening.

Building solo doesn't mean building in isolation. It means owning your vision while being open to learning from everyone around you.`,
  },
  {
    title: "Why I Teach Kids to Code",
    excerpt: "How introducing young minds to programming can change their trajectory and build confidence early on.",
    date: "Feb 2026",
    readTime: "5 min read",
    tags: ["Mentorship", "Education"],
    content: `I still remember the first time a student I mentored built their first website. Her name was Amina, she was 13, and when she saw her "About Me" page live in the browser, her eyes lit up. "I made that?" she asked. That moment is why I teach.

**Coding isn't just a technical skill — it's a thinking skill.** When kids learn to code, they learn to break problems into smaller pieces, think logically, and create something from nothing. These are life skills that go far beyond programming.

**Starting early matters.** In many African communities, access to tech education comes late — sometimes not until university. By then, students have already formed beliefs about what they can and can't do. Teaching kids early breaks those mental barriers.

**At Programmify, we meet learners where they are.** Some students come with laptops, others share a single computer. Some have never used the internet. We adapt. We start with the basics — what is a computer, what is the web — and build from there.

**My teaching philosophy is simple:**
- Make it fun. If a lesson feels like homework, I've failed.
- Celebrate every win. Your first "Hello World" deserves applause.
- Connect coding to their interests. Love music? Let's build a playlist app. Love art? Let's animate something.
- Be patient. Everyone learns at their own pace.

**The impact goes beyond code.** Parents tell me their kids are more curious, more confident, and more willing to try new things. One parent said her son now helps her troubleshoot her phone. That's the ripple effect.

The tech industry talks a lot about "the next generation." I'd rather invest in them than talk about them.`,
  },
  {
    title: "AI in Product Design: A Practical Guide",
    excerpt: "Exploring how AI tools are reshaping the design process and what designers should know right now.",
    date: "Jan 2026",
    readTime: "7 min read",
    tags: ["AI", "Design"],
    content: `AI is not replacing designers. But designers who use AI are starting to outpace those who don't. Here's what I've learned from integrating AI into my design workflow.

**Where AI actually helps in design:**

**1. Rapid prototyping.** Tools like AI-powered design assistants can generate layout variations in seconds. Instead of sketching 10 wireframes, I generate 20 and pick the best elements from each. It's not about replacing creativity — it's about accelerating exploration.

**2. Content generation for mockups.** No more "Lorem ipsum." I use AI to generate realistic copy for mockups, which helps stakeholders understand the design in context. This alone has reduced feedback cycles significantly.

**3. User research analysis.** When you have hundreds of survey responses or interview transcripts, AI can surface patterns and themes faster than manual analysis. I still read the raw data, but AI gives me a head start.

**4. Accessibility checking.** AI tools can flag contrast issues, missing alt text, and navigation problems before they reach production. This isn't glamorous, but it's essential.

**Where AI falls short:**

- **Empathy.** AI can analyze user data but can't truly understand the frustration of a first-time user struggling with your onboarding flow.
- **Brand intuition.** Design systems need a human touch — understanding why a brand feels a certain way is still deeply human.
- **Edge cases.** AI tends to optimize for the average case. Great design considers the edges.

**My recommendation:** Use AI as a collaborator, not a replacement. Let it handle the repetitive and analytical tasks so you can focus on what humans do best — understanding people and crafting experiences that resonate.

The designers who thrive in the AI era won't be the ones who resist it. They'll be the ones who learn to dance with it.`,
  },
  {
    title: "From Economics to Engineering",
    excerpt: "My unconventional journey from studying economics to building tech products full-time.",
    date: "Dec 2025",
    readTime: "5 min read",
    tags: ["Career", "Personal"],
    content: `People often ask me how an Economics graduate ended up building tech products. The truth is, the path was anything but straight — and that's exactly what made it valuable.

**Economics taught me to think in systems.** Supply and demand, market behavior, incentive structures — these concepts map surprisingly well to product design. When I'm building a feature, I think about user incentives. When I'm pricing a product, I think about value perception. My degree didn't go to waste; it just found a different application.

**The switch wasn't sudden.** During university, I started designing social media graphics for friends and small businesses. That led to learning Figma. Figma led to wondering "what if I could build this?" That curiosity led to HTML, CSS, JavaScript, and eventually React.

**There was no "aha" moment — just consistent curiosity.** I spent nights watching YouTube tutorials, building terrible projects, and breaking things. My first website was a single-page portfolio that looked like it was from 2005. But I shipped it, and that felt incredible.

**What helped me transition:**
- **Online communities.** Twitter (now X) connected me with developers who shared resources and encouragement.
- **Building in public.** Sharing my progress — even the messy parts — attracted mentors and collaborators.
- **Solving real problems.** Instead of tutorial projects, I built tools I actually needed. That's how Tymflow started.

**To anyone considering a non-traditional path into tech:** Your background is not a disadvantage. It's a perspective that most engineers don't have. The tech industry needs economists, artists, teachers, and storytellers just as much as it needs computer science graduates.

Your unique path is your superpower. Own it.`,
  },
  {
    title: "The Developer Mentorship Gap in Africa",
    excerpt: "Why mentorship matters more than bootcamps, and what we're doing about it at Programmify.",
    date: "Nov 2025",
    readTime: "6 min read",
    tags: ["Mentorship", "Africa Tech"],
    content: `Africa's tech ecosystem is booming. Every week, a new startup launches, a new developer graduates from a bootcamp, and a new tech hub opens its doors. But there's a quiet crisis underneath the growth: most new developers don't have mentors.

**Bootcamps teach skills. Mentors build careers.** A bootcamp can teach you React in 12 weeks. But who teaches you how to navigate your first job? How to handle imposter syndrome? How to negotiate your salary? How to choose between two job offers? That's where mentorship comes in.

**The numbers are stark.** In many African countries, the ratio of senior developers to juniors is heavily skewed. Senior developers are often too busy — or too burned out — to mentor. And formal mentorship programs are rare.

**What we're doing at Programmify:**

We created the Founders Fellowship — a program where young tech enthusiasts don't just learn to code, but learn to build and ship products. Each fellow is paired with a mentor who guides them through the entire process.

**Our approach:**
- **Project-based learning.** No abstract exercises. Fellows build real products that solve real problems.
- **Weekly check-ins.** Consistent touchpoints prevent people from falling through the cracks.
- **Community cohorts.** Learning alongside peers creates accountability and camaraderie.
- **Career guidance.** We help fellows with portfolios, interview prep, and professional networking.

**The results speak for themselves.** Fellows have launched products, landed jobs, and started their own ventures. More importantly, they've gained confidence — the belief that they belong in tech.

If you're a senior developer reading this, consider mentoring someone. Even one hour a week can change a life. And if you're a beginner looking for guidance, reach out. The tech community is more welcoming than you think.`,
  },
  {
    title: "Designing Privacy-First Products",
    excerpt: "Lessons from building Tendly — why privacy should be a feature, not an afterthought.",
    date: "Oct 2025",
    readTime: "5 min read",
    tags: ["Product Design", "Privacy"],
    content: `When I started building Tendly, the idea was simple: let people share files without worrying about who else might access them. But designing for privacy turned out to be one of the most intellectually challenging things I've done.

**Privacy is invisible when done right.** Users shouldn't have to think about encryption algorithms or data retention policies. They should just feel safe. That means the UX has to do the heavy lifting — making secure choices the default, not the exception.

**Key design decisions we made:**

**1. Temporary by default.** Every shared file has an expiration. Users can extend it, but the default is ephemeral. This shifts the paradigm from "everything lives forever" to "sharing is intentional."

**2. No accounts required.** For basic file sharing, we don't ask for an email. Less data collected means less data at risk. This was a business trade-off — we can't retarget these users — but it was the right call.

**3. Clear visual feedback.** When a file expires, users see it happen. When a link is accessed, the sender knows. Transparency builds trust.

**4. Simple language.** No jargon. Instead of "end-to-end encryption enabled," we say "Only you and your recipient can see this file." Same meaning, more accessible.

**The business case for privacy:**

Some people think privacy-first means anti-growth. I disagree. In a world of data breaches and surveillance capitalism, privacy is becoming a competitive advantage. Users are actively seeking tools that respect their data.

Tendly isn't the biggest file-sharing platform. But the users who choose it are loyal, because they trust it. And in the long run, trust beats scale.

**If you're building a product, ask yourself:** What data do I actually need? Can I give users more control? Can I make the secure option the easy option? Start there, and you're already ahead of most.`,
  },
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-24 relative overflow-hidden">

      <AnimatePresence mode="wait">
        {selectedPost !== null ? (
          <motion.div
            key="article"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Section>
              <Button
                variant="ghost"
                onClick={() => setSelectedPost(null)}
                className="mb-8 text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to all articles
              </Button>

              <article className="glass rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {posts[selectedPost].tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/15 text-primary font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
                  <span>{posts[selectedPost].date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {posts[selectedPost].readTime}</span>
                </div>
                <h1 className="font-display font-bold text-3xl md:text-4xl mb-8 leading-tight">
                  {posts[selectedPost].title}
                </h1>
                <div className="prose prose-invert max-w-none">
                  {posts[selectedPost].content.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed mb-4 text-[15px]">
                      {paragraph.split('**').map((part, j) =>
                        j % 2 === 1 ? (
                          <strong key={j} className="text-foreground font-semibold">{part}</strong>
                        ) : (
                          <span key={j}>{part}</span>
                        )
                      )}
                    </p>
                  ))}
                </div>
              </article>
            </Section>
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Section>
              <SectionHeading title="Blog" subtitle="Thoughts on startups, design, mentorship, and emerging tech." />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post, i) => (
                  <motion.article
                    key={post.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    onClick={() => setSelectedPost(i)}
                    className="glass rounded-2xl p-8 hover:border-primary/30 transition-all group cursor-pointer hover:shadow-[0_15px_40px_-10px_hsl(25_95%_60%/0.15)]"
                  >
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/15 text-primary font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                    </div>
                    <h3 className="font-display font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight size={14} />
                    </span>
                  </motion.article>
                ))}
              </div>
            </Section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;
