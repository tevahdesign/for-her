import { useEffect, useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';

export function BackgroundAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = (document.getElementById('bg-audio') as HTMLAudioElement) || audioRef.current;
    if (!audio) return;

    audio.volume = 0.2;

    const handlePlayState = () => setIsPlaying(!audio.paused);

    audio.addEventListener('play', handlePlayState);
    audio.addEventListener('pause', handlePlayState);

    // Initial play attempt
    audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));

    // Play music automatically ON SCROLL!
    const handleScroll = () => {
      if (audio.paused) {
        audio.volume = 0.2;
        audio.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    };

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
      audio.volume = 0.2;
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
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

      {/* Small Floating Action Button (FAB) for Music Control */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
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
    </>
  );
}
