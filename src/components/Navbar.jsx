import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#homePage' },
  { label: 'About', href: '#about' },
  { label: 'What I Offer', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact Me', href: '#contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-white/10 bg-slate-950/80 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex w-[min(1200px,92%)] items-center justify-between py-4">
        <a href="#homePage" className="font-display text-lg font-semibold tracking-tight text-white">
          Pathak&apos;s Portfolio
        </a>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="text-xl leading-none">{isOpen ? 'x' : '+'}</span>
        </button>

        <nav
          className={`absolute left-4 right-4 top-[72px] rounded-2xl border border-white/10 bg-slate-950/95 p-4 backdrop-blur-xl md:static md:flex md:w-auto md:items-center md:gap-2 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none ${
            isOpen ? 'block' : 'hidden md:flex'
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-cyan-400/10 hover:text-cyan-200"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

export default Navbar;