import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const playAudio = () => {
      const bgAudio = document.getElementById('bg-audio') as HTMLAudioElement;
      if (bgAudio) {
        bgAudio.volume = 0.03;
        bgAudio.play().catch(() => {});
      }
    };
    playAudio();

    const timer = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleSplashClick = () => {
    const bgAudio = document.getElementById('bg-audio') as HTMLAudioElement;
    if (bgAudio) {
      bgAudio.volume = 0.03;
      bgAudio.play().catch(() => {});
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          onClick={handleSplashClick}
          className="fixed inset-0 z-[100] flex items-center justify-center cursor-pointer"
          style={{ backgroundColor: '#C4A57B' }}
        >
          {/* Subtle radial glow in centre */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.12) 0%, transparent 80%)'
            }}
          />

          {/* Decorative top-left ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-[-60px] left-[-60px] w-64 h-64 rounded-full border border-white/40 pointer-events-none"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 0.12, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute top-[-30px] left-[-30px] w-48 h-48 rounded-full border border-white/40 pointer-events-none"
          />

          {/* Decorative bottom-right ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute bottom-[-60px] right-[-60px] w-64 h-64 rounded-full border border-white/40 pointer-events-none"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 0.12, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute bottom-[-30px] right-[-30px] w-48 h-48 rounded-full border border-white/40 pointer-events-none"
          />

          {/* Main content */}
          <div className="relative flex flex-col items-center gap-6">
            {/* V | G monogram */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="flex items-center gap-4"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-white text-[80px] md:text-[100px] leading-none tracking-tight"
              >
                G
              </motion.span>

              <motion.span
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="w-px h-16 md:h-20 bg-white/60"
              />

              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-white text-[80px] md:text-[100px] leading-none tracking-tight"
              >
                V
              </motion.span>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 80, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="h-px bg-white/50"
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="text-white/80 text-xs tracking-[0.35em] uppercase font-sans"
            >
              Wedding Invitation
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
