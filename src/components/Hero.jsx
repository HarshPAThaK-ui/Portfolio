import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const revealUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const buttonBaseClass =
  'group relative overflow-hidden rounded-xl border px-5 py-3 text-sm font-semibold text-white transition-all duration-300 will-change-transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_22px_55px_rgba(34,211,238,0.18)]';

const iconButtonClass =
  'group flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/25 bg-white/5 text-cyan-100 transition-all duration-300 will-change-transform hover:-translate-y-1 hover:scale-105 hover:border-cyan-300/70 hover:bg-cyan-300/10 hover:shadow-[0_18px_45px_rgba(34,211,238,0.16)]';

function Hero() {
  return (
    <section
      id="homePage"
      className="relative mx-auto mt-28 w-[min(1200px,92%)] overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 px-6 pb-16 pt-14 shadow-[0_24px_90px_rgba(2,6,23,0.36)] backdrop-blur-xl sm:px-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-hero-mesh opacity-90" />
      <div className="hero-blob hero-blob--one pointer-events-none absolute -left-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-violet-500/18" />
      <div className="hero-blob hero-blob--two pointer-events-none absolute right-[-10rem] top-[-4rem] h-[32rem] w-[32rem] rounded-full bg-blue-500/16" />
      <div className="hero-blob hero-blob--three pointer-events-none absolute bottom-[-16rem] left-1/2 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-cyan-400/14" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-cyan-300/5 opacity-70" />

      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.16 }}
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <motion.div variants={revealUp} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="mb-6">
          <div className="hero-avatar-glow rounded-full p-[1px]">
            <div className="hero-avatar-ring relative flex h-36 w-36 items-center justify-center rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(34,211,238,0.95),rgba(59,130,246,0.82),rgba(168,85,247,0.9),rgba(34,211,238,0.95))] p-[3px] shadow-glow">
              <div className="absolute inset-[11px] rounded-full bg-slate-950/30 blur-md" />
              <div className="relative h-full w-full overflow-hidden rounded-full border border-white/20 bg-slate-950/80">
                <img src="/harsh.png" alt="A photograph of Harsh Pathak" className="h-full w-full rounded-full object-cover" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.h1
          variants={revealUp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text font-display text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl"
        >
          Harsh Pathak
        </motion.h1>

        <motion.div variants={revealUp} transition={{ duration: 0.7, delay: 0.04, ease: [0.22, 1, 0.36, 1] }} className="mt-3">
          <h3 className="text-xl font-medium text-cyan-100/90">Full Stack Developer</h3>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
            Building scalable web applications using the MERN stack.
          </p>
        </motion.div>

        <motion.div variants={revealUp} transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }} className="mt-7 flex items-center gap-3">
          <a
            href="https://github.com/HarshPAThaK-ui"
            target="_blank"
            rel="noreferrer"
            className={iconButtonClass}
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-pathak-44167b261/"
            target="_blank"
            rel="noreferrer"
            className={iconButtonClass}
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </motion.div>

        <motion.div
          variants={revealUp}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 grid w-full max-w-xl gap-3 sm:grid-cols-2"
        >
          <a
            href="#projects"
            className={`${buttonBaseClass} hero-button-gradient border-cyan-300/35 bg-gradient-to-r from-cyan-500/85 via-sky-500/85 to-blue-500/85`}
          >
            View My Work
          </a>
          <a
            href="https://drive.google.com/file/d/1SaXuC9tu6Lth6lPCB1a8A96yMQVudwTk/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className={`${buttonBaseClass} hero-button-gradient border-fuchsia-300/35 bg-gradient-to-r from-violet-500/85 via-fuchsia-500/85 to-cyan-500/85`}
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
