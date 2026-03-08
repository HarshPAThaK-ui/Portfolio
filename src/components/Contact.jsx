import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { FiMail, FiPhone } from 'react-icons/fi';

function Contact() {
  return (
    <section id="contact" className="mx-auto mt-16 w-[min(1200px,92%)] rounded-3xl border border-white/10 bg-slate-900/55 p-6 backdrop-blur-xl md:p-10">
      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Contact <span className="text-cyan-300">Me</span>
          </h2>
          <h4 className="mt-3 text-lg font-medium text-slate-200">Let&apos;s Connect &amp; Collaborate</h4>
          <p className="mt-4 leading-relaxed text-slate-300">
            I&apos;m always excited to connect with fellow developers, mentors, and potential collaborators! Whether you want to discuss projects, share knowledge, or explore opportunities, I&apos;d love to hear from you.
          </p>
          <p className="mt-4 leading-relaxed text-slate-300">
            Currently seeking internship opportunities and mentorship to grow my skills further. Let&apos;s build something amazing together!
          </p>

          <ul className="mt-6 space-y-3 text-slate-300">
            <li className="flex items-center gap-3"><FiMail className="text-cyan-300" /> harshppathak8423@gmail.com</li>
            <li className="flex items-center gap-3"><FiPhone className="text-cyan-300" /> +91 8423179875</li>
          </ul>

          <div className="mt-6 flex gap-3">
            <a href="https://www.facebook.com/profile.php?id=100077664944271" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/60"><FaFacebook /></a>
            <a href="https://www.instagram.com/ig.x.harsh/" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/60"><FaInstagram /></a>
            <a href="https://x.com/HARSHpa70077986" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/60"><FaXTwitter /></a>
            <a href="https://www.linkedin.com/in/harsh-pathak-44167b261/" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/60"><FaLinkedinIn /></a>
          </div>
        </motion.div>

        <motion.form
          action="https://formspree.io/f/mdkzwkng"
          method="POST"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-3"
        >
          <input type="text" name="name" placeholder="Enter Your Name" autoComplete="name" required className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-400/20" />
          <input type="email" name="email" placeholder="Enter Your Email" autoComplete="email" required className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-400/20" />
          <input type="text" name="subject" placeholder="Enter Your Subject" autoComplete="off" required className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-400/20" />
          <textarea name="message" rows="7" placeholder="Enter Your Message" autoComplete="off" required className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-400/20" />
          <button type="submit" className="w-full rounded-xl border border-cyan-300/45 bg-gradient-to-r from-cyan-500/85 to-blue-500/85 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:shadow-glow sm:w-auto">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;