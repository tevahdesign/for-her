import { motion } from 'motion/react';
import svgPaths from '@/imports/Vinuandgana-1/svg-imspn8ybu4';
import imgHeroBg from '@/imports/Vinuandgana-1/23ab140f635321a670d7ab33f26a62fa9966e437.png';

interface HeroSectionProps {
  onViewEvents: () => void;
}

export function HeroSection({ onViewEvents }: HeroSectionProps) {

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background image with reduced black overlay */}
      <div className="absolute inset-0 z-0 bg-black">
        <img
          src={imgHeroBg}
          alt="Vinu & Gana"
          className="absolute inset-0 size-full object-cover object-center pointer-events-none opacity-70"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/70" />
      </div>

      {/* Top Sparkle Star - Centered above title */}
      <motion.div
        className="absolute pointer-events-none z-10"
        style={{ left: '50%', top: '15%', transform: 'translateX(-50%)' }}
        animate={{ opacity: [0.4, 0.9, 0.4], scale: [0.85, 1.15, 0.85] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg fill="none" height="18" viewBox="0 0 17.308 17.308" width="18">
          <path d={svgPaths.p36dadc00} opacity="0.86" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.406" />
        </svg>
      </motion.div>

      {/* Side Sparkle Star - Mid right */}
      <motion.div
        className="absolute pointer-events-none z-10"
        style={{ right: '12%', top: '46%' }}
        animate={{ opacity: [0.2, 0.7, 0.2], scale: [0.9, 1.2, 0.9] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <svg fill="none" height="15" viewBox="0 0 13.862 13.862" width="15">
          <path d={svgPaths.p30ce8180} opacity="0.6" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </svg>
      </motion.div>

      {/* Side Sparkle Star - Bottom Left near button */}
      <motion.div
        className="absolute pointer-events-none z-10"
        style={{ left: '16%', bottom: '22%' }}
        animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.9, 1.15, 0.9] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <svg fill="none" height="16" viewBox="0 0 13.862 13.862" width="16">
          <path d={svgPaths.p30ce8180} opacity="0.65" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </svg>
      </motion.div>

      {/* Side Sparkle Star - Bottom Right near button */}
      <motion.div
        className="absolute pointer-events-none z-10"
        style={{ right: '16%', bottom: '22%' }}
        animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.9, 1.15, 0.9] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      >
        <svg fill="none" height="16" viewBox="0 0 13.862 13.862" width="16">
          <path d={svgPaths.p30ce8180} opacity="0.65" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </svg>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-28 max-w-3xl mx-auto">

        {/* Names — Gana & Vinu cursive script */}
        <h1
          style={{ fontFamily: "var(--couple-font, 'Barrington', 'Great Vibes', cursive)", lineHeight: 1.35 }}
          className="text-[36px] sm:text-[48px] md:text-[62px] lg:text-[72px] text-[#C4A57B] tracking-normal mt-2 mb-6 md:mb-8 whitespace-nowrap flex items-center justify-center font-normal drop-shadow-md"
        >
          {"Gana".split("").map((char, i) => (
            <motion.span
              key={`g-${i}`}
              initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.25, delay: 0.3 + i * 0.1, ease: "easeOut" }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.8, type: "spring", stiffness: 260 }}
            className="inline-block text-[#F4E3D0] text-[26px] sm:text-[36px] md:text-[46px] lg:text-[54px] mx-2.5"
          >
            &
          </motion.span>
          {"Vinu".split("").map((char, i) => (
            <motion.span
              key={`v-${i}`}
              initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.25, delay: 0.95 + i * 0.1, ease: "easeOut" }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </h1>

        {/* Divider with dot in center matching image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex items-center justify-center gap-4 py-2 mt-4 mb-3 w-full"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 110 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="h-px bg-[#C4A57B]/70"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 1.8, type: "spring" }}
            className="w-2.5 h-2.5 rounded-full bg-[#C4A57B]"
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 110 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="h-px bg-[#C4A57B]/70"
          />
        </motion.div>

        {/* Request The Honor Of Your Presence with sparkle star next to it */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9 }}
          className="flex items-center justify-center gap-1.5 sm:gap-2 my-3 sm:my-4 w-full max-w-full px-3"
        >
          <p
            className="font-serif italic text-[12.5px] min-[360px]:text-[14px] min-[400px]:text-[15.5px] sm:text-[19px] md:text-[23px] text-[#C4A57B] font-normal tracking-wide whitespace-nowrap text-center"
          >
            Request The Honor Of Your Presence
          </p>
          <svg fill="none" height="13" viewBox="0 0 13.862 13.862" width="13" className="inline-block shrink-0 mb-0.5">
            <path d={svgPaths.p30ce8180} opacity="0.8" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          </svg>
        </motion.div>

        {/* Reception Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="text-[#C4A57B] text-[13px] sm:text-[15px] md:text-[17px] tracking-[4px] uppercase font-sans font-semibold mt-2 mb-1"
        >
          RECEPTION
        </motion.p>

        {/* Date — Cormorant Garamond Serif matching image */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.1 }}
          className="font-serif text-[32px] sm:text-[44px] md:text-[54px] lg:text-[60px] tracking-wide text-white font-medium my-2"
        >
          24 October 2026
        </motion.p>

        {/* Venue — Cormorant Garamond Serif lines matching image */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.3 }}
          className="font-serif text-[15px] sm:text-[17px] md:text-[19px] text-white/80 font-normal leading-relaxed tracking-wider space-y-0.5"
        >
          <p>Century Convention Centre,</p>
          <p>Mele Chelari, Near Calicut University</p>
        </motion.div>

        {/* VIEW EVENTS button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onViewEvents}
            className="bg-black border border-white/20 hover:border-[#C4A57B] text-white text-[13px] sm:text-[14px] tracking-[3.5px] uppercase font-sans font-medium px-9 py-3.5 shadow-xl transition-colors duration-300 cursor-pointer"
          >
            VIEW EVENTS
          </motion.button>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5"
        >
          <p className="text-[11px] tracking-[1.5px] uppercase text-white/40 font-sans">Scroll</p>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}

