import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiSettings } from 'react-icons/fi';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';

const services = [
  {
    title: 'Full-Stack Development',
    description:
      'Building complete web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). I create scalable, secure, and user-friendly applications with clean architecture and modern development practices. From database design to frontend interfaces, I handle the entire development lifecycle.',
    icon: FiCode,
  },
  {
    title: 'UI/UX Design',
    description:
      'Creating intuitive and visually appealing user interfaces that prioritize user experience. I design responsive layouts, interactive components, and seamless user flows. My approach combines modern design principles with functionality to deliver engaging digital experiences.',
    icon: FiLayers,
  },
  {
    title: 'System Architecture',
    description:
      'Designing robust system architectures with role-based access control, real-time features, and secure authentication. I implement features like file uploads, dashboards, and data management systems. My focus is on creating maintainable and scalable solutions.',
    icon: FiSettings,
  },
];

function Projects() {
  return (
    <section className="mx-auto mt-16 w-[min(1200px,92%)] space-y-6">
      <div id="services" className="rounded-3xl border border-white/10 bg-slate-900/55 p-6 backdrop-blur-xl md:p-8">
        <h2 className="text-center font-display text-3xl font-bold text-white sm:text-4xl">
          What I <span className="text-cyan-300">Offer</span>
        </h2>
        <div className="mt-7 grid gap-4 lg:grid-cols-3">
          {services.map((service, idx) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-300/50"
            >
              <service.icon className="text-2xl text-cyan-300" />
              <h3 className="mt-4 font-display text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>

      <div id="projects" className="rounded-3xl border border-white/10 bg-slate-900/55 p-6 backdrop-blur-xl md:p-8">
        <h2 className="text-center font-display text-3xl font-bold text-white sm:text-4xl">
          Projects I&apos;m <span className="text-cyan-300">Proud Of</span>
        </h2>
        <div className="mt-7 grid gap-4 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;