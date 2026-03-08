import { motion } from 'framer-motion';
import { technicalSkills, professionalSkills } from '../data/skills';

function Skills() {
  return (
    <section id="skills" className="mx-auto mt-16 w-[min(1200px,92%)] space-y-6">
      <h2 className="text-center font-display text-3xl font-bold text-white sm:text-4xl">
        My <span className="text-cyan-300">Skills</span>
      </h2>

      <div className="rounded-3xl border border-white/10 bg-slate-900/55 p-6 backdrop-blur-xl md:p-8">
        <h3 className="text-center font-display text-2xl font-semibold text-white">Technical Skills</h3>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {technicalSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center backdrop-blur-lg transition hover:-translate-y-1 hover:border-cyan-300/40"
            >
              <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: skill.color }} />
              <p className="mt-2 text-sm font-medium text-slate-200">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-slate-900/55 p-6 backdrop-blur-xl md:p-8">
        <h3 className="text-center font-display text-2xl font-semibold text-white">Professional Skills</h3>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {professionalSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center backdrop-blur-lg transition hover:-translate-y-1 hover:border-cyan-300/40"
            >
              <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: skill.color }} />
              <p className="mt-2 text-sm font-medium text-slate-200">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
