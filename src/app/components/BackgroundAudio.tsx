import { useEffect, useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function BackgroundAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const userMutedRef = useRef(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = (document.getElementById('bg-audio') as HTMLAudioElement) || audioRef.current;
    if (!audio) return;

    audio.volume = 0.2;

    const handlePlayState = () => setIsPlaying(!audio.paused);

    audio.addEventListener('play', handlePlayState);
    audio.addEventListener('pause', handlePlayState);

    // Initial play attempt if user hasn't manually muted
    if (!userMutedRef.current) {
      audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }

    const handleScroll = () => {
      // 1. Hide floating speaker button on Hero section (top 300px), show only after scrolling past Hero section
      if (window.scrollY > 300) {
        setShowFloatingButton(true);
      } else {
        setShowFloatingButton(false);
      }

      // 2. Play music instantly on scroll ONLY IF user has NOT manually muted it
      if (!userMutedRef.current && audio.paused) {
        audio.volume = 0.2;
        audio.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    };

    // Initial scroll check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchstart', handleScroll, { passive: true });

    return () => {
      audio.removeEventListener('play', handlePlayState);
      audio.removeEventListener('pause', handlePlayState);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleScroll);
    };
  }, []);

  const toggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = (document.getElementById('bg-audio') as HTMLAudioElement) || audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      // User clicked to UNMUTE/PLAY -> clear manual mute flag and start music
      userMutedRef.current = false;
      audio.volume = 0.2;
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      // User clicked to MUTE/PAUSE -> set manual mute flag and pause music
      userMutedRef.current = true;
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        id="bg-audio"
        src="/background-music.mp3"
        autoPlay
        loop
        playsInline
        webkit-playsinline="true"
        preload="auto"
      />

      {/* Floating Speaker Button: Hidden on Hero section, shows only after scrolling past Hero */}
      <AnimatePresence>
        {showFloatingButton && (
          <motion.button
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleAudio}
            className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-black/80 text-[#C4A57B] backdrop-blur-md border border-[#C4A57B]/40 shadow-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-[#C4A57B] hover:bg-black"
            aria-label={isPlaying ? 'Pause Background Music' : 'Play Background Music'}
            title={isPlaying ? 'Pause Music' : 'Play Music'}
          >
            {isPlaying ? (
              <div className="relative flex items-center justify-center">
                <Volume2 className="w-5 h-5 text-[#C4A57B]" />
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#C4A57B] animate-ping" />
              </div>
            ) : (
              <VolumeX className="w-5 h-5 text-white/60" />
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
