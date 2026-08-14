import { motion } from 'motion/react';
import svgPaths from '@/imports/Vinuandgana-1/svg-imspn8ybu4';
import imgHeroBg from '@/imports/Vinuandgana-1/23ab140f635321a670d7ab33f26a62fa9966e437.png';

interface HeroSectionProps {
  onViewEvents: () => void;
  onRSVP: () => void;
}

// Petal definitions matching the Figma import exactly
const petals = [
  { paths: ['p24edbc00','p1db01200','p3b439af1','pb1c4e00','p1610fbc0'], left: '49.5%', top: '89.7%', rotate: -168.07, opacity: 0.43 },
  { paths: ['p1d957480','p31d03300','p1f2878c0','p2918ae00','p9f42c00'],  left: '84.2%', top: '71.7%', rotate:   27.59, opacity: 0.60 },
  { paths: ['pf140580', 'p1db01200','p19d8b680','p3978da00','p1610fbc0'], left: '15.7%', top: '70.5%', rotate:   21.3,  opacity: 0.60 },
  { paths: ['p1624bf80','p1db01200','p1381500', 'pd9380',   'p1610fbc0'], left: '48.4%', top: '57.5%', rotate: -110.74, opacity: 0.60 },
  { paths: ['pf93ee80', 'p18462000','p3d21f700','pd9380',   'p8893df0'],  left: '57.9%', top: '54.0%', rotate: -134.28, opacity: 0.54 },
  { paths: ['p36650200','p321c0580','p31555bc0','p2918ae00','p1610fbc0'], left: '-0.7%', top: '47.0%', rotate:  157.21, opacity: 0.37 },
  { paths: ['pf6545c0', 'p1db01200','p3d21f700','pd9380',   'p10c59200'], left: '89.5%', top: '43.2%', rotate:   43.98, opacity: 0.09 },
];

export function HeroSection({ onViewEvents, onRSVP }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background image with dark overlay matching design (bg rgba(0,0,0,0.86)) */}
      <div className="absolute inset-0 z-0">
        <img
          src={imgHeroBg}
          alt="Gana & Vinu"
          className="absolute inset-0 size-full object-cover object-center pointer-events-none opacity-60"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Scattered petals */}
      {petals.map((p, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none z-0"
          style={{ left: p.left, top: p.top, opacity: p.opacity }}
          animate={{ y: [0, -8, 0], rotate: [p.rotate, p.rotate + 10, p.rotate] }}
          initial={{ rotate: p.rotate }}
          transition={{ duration: 5 + i * 0.7, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
        >
          <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
            {p.paths.slice(0, 4).map((key, j) => (
              <path key={j} d={(svgPaths as Record<string,string>)[key]} fill="#C4A57B" opacity="0.5" />
            ))}
            <path d={(svgPaths as Record<string,string>)[p.paths[4]]} fill="#D4B58C" opacity="0.7" />
          </svg>
        </motion.div>
      ))}

      {/* Sparkle — top centre-right (from Container7 in import) */}
      <motion.div
        className="absolute pointer-events-none z-0"
        style={{ left: '57.9%', top: '13%' }}
        animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.1, 0.8] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg fill="none" height="17" viewBox="0 0 17.308 17.308" width="17">
          <path d={svgPaths.p36dadc00} opacity="0.86" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.406" />
        </svg>
      </motion.div>

      {/* Sparkle — mid right (from Container8 in import) */}
      <motion.div
        className="absolute pointer-events-none z-0"
        style={{ left: '80.1%', top: '50%' }}
        animate={{ opacity: [0.2, 0.6, 0.2], scale: [0.9, 1.2, 0.9] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <svg fill="none" height="14" viewBox="0 0 13.862 13.862" width="14">
          <path d={svgPaths.p30ce8180} opacity="0.58" stroke="#C4A57B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.188" />
        </svg>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-32">

        {/* Together with their families */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[11px] md:text-[12px] tracking-[3.8px] uppercase font-sans text-white/60 mb-8"
        >
          Together with their families
        </motion.p>

        {/* Names — writing animation */}
        <h1
          style={{ fontFamily: "var(--couple-font, 'Waiting for the Sunrise', cursive)", lineHeight: 1 }}
          className="text-[70px] md:text-[128px] text-[#C4A57B] tracking-[-1.5px] md:tracking-[-3.2px] mb-0 whitespace-nowrap flex items-center justify-center"
        >
          {"Gana".split("").map((char, i) => (
            <motion.span
              key={`g-${i}`}
              initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.25, delay: 0.5 + i * 0.1, ease: "easeOut" }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1.0, type: "spring", stiffness: 260 }}
            className="inline-block text-white text-[45px] md:text-[80px] mx-3"
          >
            &
          </motion.span>
          {"Vinu".split("").map((char, i) => (
            <motion.span
              key={`v-${i}`}
              initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.25, delay: 1.15 + i * 0.1, ease: "easeOut" }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </h1>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex items-center justify-center gap-4 py-6 mt-2"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="h-px bg-[#C4A57B]"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 2.1, type: "spring" }}
            className="w-2 h-2 rounded-full bg-[#C4A57B]"
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="h-px bg-[#C4A57B]"
          />
        </motion.div>

        {/* Event info */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="flex flex-col items-center gap-[13px]"
        >
          <p className="text-[12px] tracking-[3px] uppercase font-sans text-white/50">
            Request the honor of your presence
          </p>
          <p
            className="text-[26px] md:text-[30px] tracking-[1px] text-white font-medium"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Saturday, Oct 24th
          </p>
          <p className="text-[14px] tracking-[0.7px] font-sans text-white/60">
            Century Convention Centre, Mele Chelari, Near Calicut University
          </p>
        </motion.div>

        {/* View Events button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onViewEvents}
            className="bg-black border border-black text-white text-[14px] tracking-[0.7px] uppercase font-sans font-medium px-8 py-3 overflow-hidden relative"
          >
            <span className="relative z-10">View Events</span>
            <motion.div
              initial={{ x: '-100%', opacity: 0 }}
              whileHover={{ x: '200%', opacity: [0, 0.2, 0] }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-[12px] tracking-[1.2px] uppercase text-white/40 font-sans">Scroll</p>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
