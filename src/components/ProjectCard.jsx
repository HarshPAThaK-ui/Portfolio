import { motion } from 'framer-motion';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { PiGraduationCapDuotone, PiHouseDuotone, PiListChecksDuotone } from 'react-icons/pi';

const iconMap = {
  graduation: PiGraduationCapDuotone,
  home: PiHouseDuotone,
  task: PiListChecksDuotone,
};

function ProjectCard({ project, index }) {
  const Icon = iconMap[project.icon] || PiListChecksDuotone;
  const Wrapper = project.link ? 'a' : 'div';

  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Wrapper
        {...(project.link ? { href: project.link, target: '_blank', rel: 'noreferrer' } : {})}
        className="group flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 backdrop-blur-lg transition hover:border-cyan-300/50"
      >
        <div className="flex items-center justify-between text-cyan-200">
          <Icon className="text-3xl" />
          {project.link ? <HiOutlineExternalLink className="text-xl opacity-80 transition group-hover:opacity-100" /> : null}
        </div>
        <h4 className="mt-4 font-display text-xl font-semibold text-white">{project.title}</h4>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span key={item} className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
              {item}
            </span>
          ))}
        </div>
      </Wrapper>
    </motion.div>
  );
}

export default ProjectCard;