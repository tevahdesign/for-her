import { Car, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';
import { Button } from './Button';
import { ScrollReveal } from './ScrollReveal';
import { motion } from 'motion/react';

export function ValetSection() {
  const handleWhatsApp = () => {
    // Mock function - would open WhatsApp
    window.open('https://wa.me/1234567890', '_blank');
  };

  const handleCall = () => {
    // Mock function
    window.location.href = 'tel:+911234567890';
  };

  const cards = [
    {
      icon: MapPin,
      title: 'Drop-off Point',
      description: 'Main entrance of the venue',
      detail: 'Century Auditorium & Reef Club'
    },
    {
      icon: Clock,
      title: 'Service Hours',
      description: 'Available throughout all events',
      detail: '5:00 PM - 12:00 AM'
    },
    {
      icon: Phone,
      title: 'Contact',
      description: 'Valet Service Desk',
      detail: '+91 123 456 7890'
    }
  ];

  return (
    <section id="valet" className="py-24 px-6 lg:px-12 bg-white relative overflow-hidden">
      {/* Animated background car icon */}
      <motion.div
        animate={{ 
          x: ['-100%', '100%'],
          opacity: [0, 0.03, 0.03, 0]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
      >
        <Car className="w-32 h-32 text-[#C4A57B]" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm tracking-[0.3em] uppercase text-black/60 font-sans mb-4"
            >
              Parking Made Easy
            </motion.p>
            <h2 className="font-serif text-5xl md:text-6xl text-black mb-6">
              Valet Assistance
            </h2>
            <div className="flex items-center justify-center gap-4">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-px bg-[#C4A57B]"
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.4, 1],
                  rotate: [0, 360]
                }}
                transition={{ 
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 3, repeat: Infinity, ease: "linear" }
                }}
                className="w-2 h-2 rounded-full bg-[#C4A57B]"
              />
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-px bg-[#C4A57B]"
              />
            </div>
            <p className="mt-8 text-black/70 font-sans max-w-2xl mx-auto leading-relaxed">
              We've arranged complimentary valet service for your convenience. Our team will be ready to assist you.
            </p>
          </div>
        </ScrollReveal>

        {/* Valet Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cards.map((card, index) => (
            <ScrollReveal key={index} delay={0.1 * (index + 1)}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                className="border border-black/10 p-8 bg-[#FAF8F5]/50 hover:border-[#C4A57B]/50 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 rounded-full bg-[#C4A57B]/10 flex items-center justify-center mb-6 group-hover:bg-[#C4A57B]/20 transition-colors"
                >
                  <card.icon className="w-6 h-6 text-[#C4A57B]" />
                </motion.div>
                <h3 className="font-serif text-2xl text-black mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-black/60 font-sans leading-relaxed">
                  {card.description}
                </p>
                <p className="text-sm text-black/60 font-sans mt-2">
                  {card.detail}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Contact Actions */}
        <ScrollReveal delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={handleCall}
                className="flex items-center gap-3 px-8 py-3 bg-black text-white hover:bg-[#C4A57B] hover:text-black border border-black hover:border-[#C4A57B] transition-all duration-300 text-sm tracking-wider uppercase font-sans"
              >
                <Phone className="w-4 h-4" />
                Call Valet Desk
              </button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={handleWhatsApp}
                className="flex items-center gap-3 px-8 py-3 bg-[#25D366] text-white hover:bg-[#20BA5A] border border-[#25D366] transition-all duration-300 text-sm tracking-wider uppercase font-sans"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </button>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Additional Info */}
        <ScrollReveal delay={0.5}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-12 text-center"
          >
            <div className="inline-block px-8 py-4 border border-[#C4A57B]/30 bg-[#C4A57B]/5">
              <div className="flex items-center gap-3 text-black/70 font-sans text-sm">
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Car className="w-5 h-5 text-[#C4A57B]" />
                </motion.div>
                <p>Please keep your parking token safe for vehicle retrieval</p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}