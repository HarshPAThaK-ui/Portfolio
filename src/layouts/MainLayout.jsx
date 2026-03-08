import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function MainLayout({ children }) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 320);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-ink">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-hero-mesh opacity-60" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(56,189,248,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.06)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(circle_at_center,black_28%,transparent_78%)]" />
      <Navbar />
      <main>{children}</main>
      <Footer />

      <AnimatePresence>
        {showTop ? (
          <motion.a
            href="#homePage"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-slate-900/80 text-cyan-100 backdrop-blur-lg transition hover:-translate-y-1 hover:border-cyan-300/70"
            aria-label="Back to top"
          >
            <FiArrowUp />
          </motion.a>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default MainLayout;