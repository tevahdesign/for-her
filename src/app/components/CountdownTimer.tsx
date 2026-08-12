import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const weddingDate = new Date('2026-10-24T17:00:00').getTime();
  
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <section className="py-16 px-6 lg:px-12 bg-gradient-to-b from-[#FAF8F5] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 right-10 w-32 h-32 pointer-events-none opacity-5"
      >
        <Clock className="w-full h-full text-[#C4A57B]" />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, -20, 0],
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 left-10 w-24 h-24 pointer-events-none opacity-5"
      >
        <Calendar className="w-full h-full text-[#C4A57B]" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm tracking-[0.3em] uppercase text-black/60 font-sans mb-4"
          >
            Counting Down To
          </motion.p>
          <h2 className="font-serif text-4xl md:text-5xl text-black mb-4">
            The Big Day
          </h2>
          <div className="flex items-center justify-center gap-4">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-px bg-gradient-to-r from-transparent via-[#C4A57B] to-[#C4A57B]"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-2 h-2 rounded-full bg-[#C4A57B]"
            />
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-px bg-gradient-to-l from-transparent via-[#C4A57B] to-[#C4A57B]"
            />
          </div>
        </motion.div>

        {/* Countdown Display */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative bg-white border-2 border-black/10 p-6 md:p-8 overflow-hidden">
                {/* Corner decorations */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                  className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#C4A57B]/30 pointer-events-none"
                />
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                  className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#C4A57B]/30 pointer-events-none"
                />

                {/* Shimmer effect on hover */}
                <motion.div
                  initial={{ x: '-100%', opacity: 0 }}
                  whileHover={{ x: '200%', opacity: [0, 0.1, 0] }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C4A57B]/30 to-transparent pointer-events-none"
                  style={{ skewX: -20 }}
                />

                {/* Value */}
                <motion.div
                  key={unit.value}
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <div className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#C4A57B] mb-2 tabular-nums">
                    {String(unit.value).padStart(2, '0')}
                  </div>
                  <div className="text-sm md:text-base tracking-[0.2em] uppercase text-black/60 font-sans">
                    {unit.label}
                  </div>
                </motion.div>

                {/* Glow effect */}
                <motion.div
                  animate={{ 
                    opacity: [0, 0.1, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                  className="absolute inset-0 bg-[#C4A57B] pointer-events-none"
                />
              </div>

              {/* Separator (except for last item on desktop) */}
              {index < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 z-20">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                    className="w-1.5 h-1.5 rounded-full bg-[#C4A57B]"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="font-serif text-2xl md:text-3xl text-black mb-2">
            October 24, 2026
          </p>
          <div className="flex items-center justify-center gap-2 text-black/60 font-sans text-sm tracking-wider">
            <Calendar className="w-4 h-4" />
            <span>Save the Date</span>
          </div>
        </motion.div>

        {/* Decorative bottom element */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-12 flex items-center justify-center"
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C4A57B]" />
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#C4A57B" strokeWidth="0.5" opacity="0.5" />
                <circle cx="12" cy="12" r="6" stroke="#C4A57B" strokeWidth="0.5" opacity="0.5" />
                <circle cx="12" cy="12" r="2" fill="#C4A57B" opacity="0.5" />
                {[...Array(8)].map((_, i) => {
                  const angle = (i * 45 * Math.PI) / 180;
                  const x2 = 12 + 10 * Math.cos(angle);
                  const y2 = 12 + 10 * Math.sin(angle);
                  return <line key={i} x1="12" y1="12" x2={x2} y2={y2} stroke="#C4A57B" strokeWidth="0.5" opacity="0.3" />;
                })}
              </svg>
            </motion.div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C4A57B]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
