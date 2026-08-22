import { useEffect, useRef } from 'react';

export function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('/background-music.mp3');
    audio.loop = true;
    audio.volume = 0.25; // minimal background volume
    audio.setAttribute('playsinline', 'true');
    audio.setAttribute('webkit-playsinline', 'true');
    audioRef.current = audio;

    // Advanced Autoplay Strategy:
    // Try unmuted play first. If blocked by browser autoplay policy,
    // play muted immediately (browsers always permit muted autoplay),
    // then unmute on the very first user interaction (touch/click/scroll).
    const startAudio = () => {
      audio.play().then(() => {
        // Direct unmuted autoplay succeeded
      }).catch(() => {
        audio.muted = true;
        audio.play().then(() => {
          // Muted autoplay succeeded, waiting for user gesture to unmute
        }).catch(err => {
          console.warn('Initial autoplay attempt deferred until user interaction:', err);
        });
      });
    };

    startAudio();

    // Multi-gesture unlock handler
    const unlockAudio = () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        if (audioRef.current.paused) {
          audioRef.current.play().catch(() => {});
        }
      }
      // Clean up gesture listeners once audio is active and unmuted
      events.forEach((evt) => {
        window.removeEventListener(evt, unlockAudio);
      });
    };

    const events = ['pointerdown', 'touchstart', 'touchend', 'click', 'scroll', 'wheel', 'keydown'];
    events.forEach((evt) => {
      window.addEventListener(evt, unlockAudio, { passive: true });
    });

    return () => {
      events.forEach((evt) => {
        window.removeEventListener(evt, unlockAudio);
      });
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return null;
}
