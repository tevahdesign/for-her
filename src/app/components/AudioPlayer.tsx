import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { motion } from 'motion/react';

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('/background-music.mp3');
    audio.loop = true;
    audio.volume = 0.25; // minimal background volume
    audioRef.current = audio;

    const attemptPlay = () => {
      audio.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay blocked by browser policy; wait for first user interaction
          setIsPlaying(false);
        });
    };

    attemptPlay();

    // Auto-start audio on first user click/touch anywhere if blocked
    const handleFirstInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(console.error);
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={togglePlay}
        className="flex items-center gap-2 px-3.5 py-2.5 bg-black/80 backdrop-blur-md border border-[#C4A57B]/60 hover:border-[#C4A57B] text-white rounded-full shadow-2xl cursor-pointer transition-colors duration-300 group"
        title={isPlaying ? 'Pause Background Music' : 'Play Background Music'}
        aria-label="Toggle background music"
      >
        <motion.div
          animate={isPlaying ? { rotate: [0, 360] } : { rotate: 0 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          className="text-[#C4A57B]"
        >
          <Music className="w-4 h-4" />
        </motion.div>

        {isPlaying && (
          <div className="flex items-end gap-0.5 h-3 px-1">
            <motion.span
              animate={{ height: ['4px', '12px', '6px', '12px', '4px'] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              className="w-0.5 bg-[#C4A57B] rounded-full"
            />
            <motion.span
              animate={{ height: ['8px', '4px', '12px', '4px', '8px'] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
              className="w-0.5 bg-[#C4A57B] rounded-full"
            />
            <motion.span
              animate={{ height: ['12px', '6px', '4px', '8px', '12px'] }}
              transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
              className="w-0.5 bg-[#C4A57B] rounded-full"
            />
          </div>
        )}

        <span className="text-[11px] tracking-wider uppercase font-sans text-white/90 hidden sm:inline pr-1">
          {isPlaying ? 'Music' : 'Play Music'}
        </span>
      </motion.button>

      {isPlaying && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMute}
          className="p-2.5 bg-black/80 backdrop-blur-md border border-white/20 hover:border-[#C4A57B] text-white/80 hover:text-white rounded-full shadow-lg cursor-pointer transition-colors"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-[#C4A57B]" />}
        </motion.button>
      )}
    </div>
  );
}
