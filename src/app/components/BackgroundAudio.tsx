import { useEffect } from 'react';

export function BackgroundAudio() {
  useEffect(() => {
    const audio = new Audio('/background-music.mp3');
    audio.loop = true;
    audio.volume = 0.25;

    const playAudio = () => {
      audio.play().catch(() => {});
    };

    // Try playing immediately on load
    playAudio();

    // Fallback: start on first user interaction if browser policy blocked silent autoplay
    const handleInteraction = () => {
      if (audio.paused) {
        audio.play().catch(() => {});
      }
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);
    window.addEventListener('scroll', handleInteraction);
    window.addEventListener('keydown', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
      audio.pause();
    };
  }, []);

  return null; // Invisible background player - no icon UI
}
