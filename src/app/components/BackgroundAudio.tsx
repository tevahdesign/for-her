import { useEffect, useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const MANUALLY_MUTED_KEY = 'vinu_gana_audio_manually_muted';

export function BackgroundAudio() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Persistent ref tracking manual user mute intent across scroll events and re-renders
  const isManuallyMutedRef = useRef<boolean>(
    sessionStorage.getItem(MANUALLY_MUTED_KEY) === 'true'
  );

  useEffect(() => {
    const audio = (document.getElementById('bg-audio') as HTMLAudioElement) || audioRef.current;
    if (!audio) return;

    audio.volume = 0.01; // 1% sound volume level

    const isMuted = isManuallyMutedRef.current || sessionStorage.getItem(MANUALLY_MUTED_KEY) === 'true';

    if (isMuted) {
      audio.muted = true;
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.muted = false;
      audio.play().then(() => setIsPlaying(true)).catch(() => {
        // Autoplay blocked by browser policy until first user interaction
        setIsPlaying(false);
      });
    }

    // Global first interaction handler to trigger music play if browser blocked un-prompted autoplay
    const handleFirstInteraction = () => {
      const currentAudio = (document.getElementById('bg-audio') as HTMLAudioElement) || audioRef.current;
      const currentlyMuted = isManuallyMutedRef.current || sessionStorage.getItem(MANUALLY_MUTED_KEY) === 'true';
      if (currentAudio && !currentlyMuted && currentAudio.paused) {
        currentAudio.muted = false;
        currentAudio.volume = 0.01;
        currentAudio.play().then(() => setIsPlaying(true)).catch(() => {});
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('pointerdown', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);
    window.addEventListener('pointerdown', handleFirstInteraction);

    // Strict play listener: If audio starts playing while manually muted, immediately pause & mute it!
    const handlePlayState = () => {
      const currentlyMuted = isManuallyMutedRef.current || sessionStorage.getItem(MANUALLY_MUTED_KEY) === 'true';
      if (currentlyMuted) {
        audio.muted = true;
        audio.pause();
        setIsPlaying(false);
      } else {
        setIsPlaying(!audio.paused && !audio.muted);
      }
    };

    audio.addEventListener('play', handlePlayState);
    audio.addEventListener('pause', handlePlayState);

    // Scroll listener: Hide play/pause button on Hero section (scrollY <= 300), show after Hero
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowFloatingButton(true);
      } else {
        setShowFloatingButton(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      audio.removeEventListener('play', handlePlayState);
      audio.removeEventListener('pause', handlePlayState);
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('pointerdown', handleFirstInteraction);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = (document.getElementById('bg-audio') as HTMLAudioElement) || audioRef.current;
    if (!audio) return;

    const isMuted = isManuallyMutedRef.current || sessionStorage.getItem(MANUALLY_MUTED_KEY) === 'true';

    if (!audio.paused && !isMuted) {
      // USER CLICKED TO MUTE / PAUSE -> Lock manual mute state and mute property permanently!
      isManuallyMutedRef.current = true;
      sessionStorage.setItem(MANUALLY_MUTED_KEY, 'true');
      audio.muted = true;
      audio.pause();
      setIsPlaying(false);
    } else {
      // USER CLICKED TO UNMUTE / PLAY -> Clear manual mute state and unmute audio!
      isManuallyMutedRef.current = false;
      sessionStorage.setItem(MANUALLY_MUTED_KEY, 'false');
      audio.muted = false;
      audio.volume = 0.01;
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        id="bg-audio"
        src="/background-music.mp3"
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
