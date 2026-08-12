import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface NavigationProps {
  activeSection?: string;
}

export function Navigation({ activeSection = 'home' }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Dark hero (unscrolled): white text ~18:1 contrast on black bg ✓
  // Scrolled ivory #FAF8F5: near-black text ~18:1 contrast ✓
  const onDark = !scrolled;
  const logoClass = onDark ? 'text-white' : 'text-black';
  const linkClass = onDark
    ? 'text-white/80 hover:text-white'
    : 'text-black/80 hover:text-black';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('home')}
            className={`relative group transition-colors duration-300 ${logoClass}`}
          >
            <span
              className="relative z-10 transition-colors duration-300 group-hover:text-[#C4A57B]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem' }}
            >
              V & G
            </span>
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C4A57B] origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Events', 'Gallery'].map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setHoveredItem(item)}
                onHoverEnd={() => setHoveredItem(null)}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`relative text-sm tracking-wider uppercase transition-colors duration-300 group ${linkClass}`}
              >
                <span className="relative z-10">{item}</span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C4A57B] via-[#D4B58C] to-[#C4A57B] origin-center"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredItem === item ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                />
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: hoveredItem === item ? '100%' : '-100%' }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}