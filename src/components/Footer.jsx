import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="mx-auto mb-8 mt-12 w-[min(1200px,92%)] rounded-3xl border border-white/10 bg-slate-900/50 px-6 py-7 text-center backdrop-blur-xl">
      <p className="text-sm text-slate-200">Designed &amp; Built by Harsh Pathak</p>
      <div className="mt-4 flex justify-center gap-3">
        <a href="https://github.com/harshpathak8423" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/60"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/harsh-pathak-8423/" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/60"><FaLinkedinIn /></a>
        <a href="mailto:harshppathak8423@gmail.com" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/60"><FaEnvelope /></a>
      </div>
      <p className="mt-4 text-xs text-slate-400">© 2025 Harsh Pathak. All rights reserved.</p>
    </footer>
  );
}

export default Footer;