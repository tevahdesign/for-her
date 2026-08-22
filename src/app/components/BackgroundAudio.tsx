import { useEffect, useRef } from 'react';

export function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.3;

    // Advanced autoplay strategy:
    // 1. Try unmuted playback on mount
    audio.play().then(() => {
      // Direct unmuted playback succeeded
    }).catch(() => {
      // 2. Play muted (allowed by all browsers automatically)
      audio.muted = true;
      audio.play().then(() => {
        // Muted playback active; waiting for user gesture to unmute
      }).catch(() => {});
    });

    // Function to unlock unmuted audio on ANY user gesture
    const unlockAudio = () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        audioRef.current.volume = 0.3;
        if (audioRef.current.paused) {
          audioRef.current.play().catch(() => {});
        }
      }
    };

    const gestures = ['pointerdown', 'touchstart', 'touchend', 'click', 'scroll', 'wheel', 'keydown'];
    gestures.forEach((evt) => {
      window.addEventListener(evt, unlockAudio, { passive: true });
    });

    return () => {
      gestures.forEach((evt) => {
        window.removeEventListener(evt, unlockAudio);
      });
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/background-music.mp3"
      loop
      playsInline
      preload="auto"
      style={{ display: 'none' }}
    />
  );
}
