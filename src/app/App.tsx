import { SplashScreen } from './components/SplashScreen';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { CountdownTimer } from './components/CountdownTimer';
import { EventsSection } from './components/EventsSection';
import { GallerySection } from './components/GallerySection';
import { FamilySection } from './components/FamilySection';
import { RSVPSection } from './components/RSVPSection';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import { useDynamicFont } from './hooks/useDynamicFont';

export default function App() {
  useDynamicFont();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] overflow-x-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      <style>{`
        .font-serif {
          font-family: 'Cormorant Garamond', serif;
        }
        .font-sans {
          font-family: 'Inter', sans-serif;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      
      <SplashScreen />
      <Navigation />
      
      <HeroSection
        onViewEvents={() => scrollToSection('events')}
        onRSVP={() => scrollToSection('rsvp')}
      />

      <CountdownTimer />

      <EventsSection />
      
      <GallerySection />
      
      <FamilySection />

      {/* <RSVPSection /> */}
      
      <Footer />
      
      <Toaster position="top-center" />
    </div>
  );
}