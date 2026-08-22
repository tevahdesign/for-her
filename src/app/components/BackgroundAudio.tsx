import { useEffect, useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const MANUALLY_MUTED_KEY = 'vinu_gana_audio_manually_muted';

export function BackgroundAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Persistent ref tracking manual user mute intent across scroll events and re-renders
  const isManuallyMutedRef = useRef<boolean>(
    sessionStorage.getItem(MANUALLY_MUTED_KEY) === 'true'
  );

  useEffect(() => {
    const audio = (document.getElementById('bg-audio') as HTMLAudioElement) || audioRef.current;
    if (!audio) return;

    audio.volume = 0.03; // 3% sound volume level

    const handlePlayState = () => setIsPlaying(!audio.paused);

    audio.addEventListener('play', handlePlayState);
    audio.addEventListener('pause', handlePlayState);

    // Initial play attempt on mount IF NOT manually muted by user
    if (!isManuallyMutedRef.current) {
      audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }

    // Advanced Scroll Audio Controller
    const handleScroll = () => {
      // 1. Show floating speaker button only after scrolling past Hero section (300px)
      if (window.scrollY > 300) {
        setShowFloatingButton(true);
      } else {
        setShowFloatingButton(false);
      }

      // 2. Start music INSTANTLY on first-time scroll, UNLESS manually muted by user
      if (audio.paused && !isManuallyMutedRef.current) {
        audio.volume = 0.03;
        audio.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    };

    // Run initial scroll check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });

    return () => {
      audio.removeEventListener('play', handlePlayState);
      audio.removeEventListener('pause', handlePlayState);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };
  }, []);

  const toggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = (document.getElementById('bg-audio') as HTMLAudioElement) || audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      // USER CLICKED TO UNMUTE / PLAY AGAIN -> Clear manual mute state
      isManuallyMutedRef.current = false;
      sessionStorage.setItem(MANUALLY_MUTED_KEY, 'false');
      audio.volume = 0.03;
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      // USER CLICKED TO MUTE -> Lock manual mute state so scrolling cannot trigger music!
      isManuallyMutedRef.current = true;
      sessionStorage.setItem(MANUALLY_MUTED_KEY, 'true');
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

      {/* Floating Speaker Button: Hidden on Hero section, shows after scrolling past Hero */}
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
