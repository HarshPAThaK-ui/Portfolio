import { motion } from 'framer-motion';

const inView = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: 'easeOut' },
};

function About() {
  return (
    <section id="about" className="mx-auto mt-16 w-[min(1200px,92%)]">
      <motion.div {...inView} className="grid gap-8 rounded-3xl border border-white/10 bg-slate-900/55 p-6 backdrop-blur-xl md:grid-cols-[0.9fr_1.1fr] md:p-10">
        <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-white/10">
          <img src="/harsh.png" alt="A photograph of Harsh Pathak" className="h-full w-full object-cover" />
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            About <span className="text-cyan-300">Me</span>
          </h2>
          <h4 className="mt-3 text-lg font-medium text-slate-200">Full-Stack Developer &amp; Computer Science Student!</h4>
          <p className="mt-4 leading-relaxed text-slate-300">
            I am a dedicated 4th-year B.Tech Computer Science student at Shri Ramswaroop Memorial University, passionate about full-stack web development. With expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js), I specialize in building scalable and user-friendly web applications.
          </p>
          <p className="mt-4 leading-relaxed text-slate-300">
            My journey in technology started with curiosity and has evolved into a passion for creating innovative digital solutions. I&apos;ve completed various academic projects, including my latest achievement - the Educare Institute management system, which features role-based access control, file uploads, interactive dashboards, and real-time authentication.
          </p>
          <p className="mt-4 leading-relaxed text-slate-300">
            I believe in writing clean, maintainable code and staying updated with the latest web development trends. My goal is to contribute to meaningful projects and grow as a professional developer while making a positive impact in the tech community.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default About;