import { useState } from 'react';
import { Heart, MessageSquare, Sparkles } from 'lucide-react';
import { toast } from 'sonner';
import { ScrollReveal } from './ScrollReveal';
import { motion, AnimatePresence } from 'motion/react';

interface WellWish {
  id: string;
  name: string;
  message: string;
  timestamp: Date;
}

// Mock initial wishes
const initialWishes: WellWish[] = [
  {
    id: '1',
    name: 'Priya & Rahul',
    message: 'Congratulations to the beautiful couple! Wishing you a lifetime of love and happiness together. May your journey be filled with endless joy! ❤️',
    timestamp: new Date('2026-01-10')
  },
  {
    id: '2',
    name: 'Sneha Patel',
    message: 'So happy for you both! May your love story be as timeless as your wedding day. Cheers to forever!',
    timestamp: new Date('2026-01-11')
  },
  {
    id: '3',
    name: 'Arjun & Kavya',
    message: 'Wishing you all the love and laughter in the world. May your marriage be blessed with countless beautiful moments!',
    timestamp: new Date('2026-01-12')
  }
];

export function WellWishesSection() {
  const [wishes, setWishes] = useState<WellWish[]>(initialWishes);
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Add new wish to the list
    const newWish: WellWish = {
      id: Date.now().toString(),
      name: formData.name,
      message: formData.message,
      timestamp: new Date()
    };

    setWishes(prev => [newWish, ...prev]);
    setIsSubmitting(false);
    
    toast.success('Your message has been shared!', {
      description: 'Thank you for your warm wishes 💕',
      duration: 4000
    });

    // Reset form
    setFormData({ name: '', message: '' });
  };

  return (
    <section id="wishes" className="py-24 px-6 lg:px-12 bg-[#FAF8F5] relative overflow-hidden">
      {/* Floating decorative hearts */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          x: [0, 15, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 pointer-events-none opacity-10"
      >
        <Heart className="w-24 h-24 text-[#C4A57B]" fill="#C4A57B" />
      </motion.div>
      <motion.div
        animate={{ 
          y: [0, 40, 0],
          x: [0, -20, 0],
          rotate: [0, -15, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 left-20 pointer-events-none opacity-10"
      >
        <Sparkles className="w-20 h-20 text-[#C4A57B]" />
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
              Share Your Love
            </motion.p>
            <h2 className="font-serif text-5xl md:text-6xl text-black mb-6">
              Guest Messages
            </h2>
            <div className="flex items-center justify-center gap-4 mb-8">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-px bg-gradient-to-r from-transparent via-[#C4A57B] to-[#C4A57B]"
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart className="w-3 h-3 text-[#C4A57B]" fill="#C4A57B" />
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-px bg-gradient-to-l from-transparent via-[#C4A57B] to-[#C4A57B]"
              />
            </div>
            <p className="text-black/70 font-sans max-w-2xl mx-auto leading-relaxed">
              Leave your heartfelt wishes and blessings for the happy couple
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Message Form */}
          <ScrollReveal delay={0.1}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="border border-black/10 p-8 lg:p-10 bg-white/80 backdrop-blur-sm relative overflow-hidden"
            >
              {/* Corner accents */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#C4A57B]/30 pointer-events-none"
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#C4A57B]/30 pointer-events-none"
              />

              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-10 h-10 rounded-full bg-[#C4A57B]/10 flex items-center justify-center"
                >
                  <MessageSquare className="w-5 h-5 text-[#C4A57B]" />
                </motion.div>
                <h3 className="font-serif text-3xl text-black">
                  Share Your Wishes
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <label htmlFor="wish-name" className="block text-sm tracking-wider uppercase text-black/70 font-sans mb-3">
                    Your Name <span className="text-[#C4A57B]">*</span>
                  </label>
                  <motion.input
                    type="text"
                    id="wish-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    whileFocus={{ scale: 1.01 }}
                    className="w-full px-4 py-3 border border-black/20 bg-white focus:border-[#C4A57B] focus:outline-none transition-all font-sans"
                    placeholder="Enter your name"
                  />
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: focusedField === 'name' ? 1 : 0 }}
                    className="h-0.5 bg-gradient-to-r from-[#C4A57B] to-transparent origin-left mt-1"
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <label htmlFor="wish-message" className="block text-sm tracking-wider uppercase text-black/70 font-sans mb-3">
                    Your Message <span className="text-[#C4A57B]">*</span>
                  </label>
                  <motion.textarea
                    id="wish-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    whileFocus={{ scale: 1.01 }}
                    className="w-full px-4 py-3 border border-black/20 bg-white focus:border-[#C4A57B] focus:outline-none transition-all font-sans resize-none"
                    placeholder="Share your heartfelt wishes and blessings..."
                  />
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: focusedField === 'message' ? 1 : 0 }}
                    className="h-0.5 bg-gradient-to-r from-[#C4A57B] to-transparent origin-left mt-1"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-black text-white hover:bg-[#C4A57B] hover:text-black border border-black hover:border-[#C4A57B] transition-all duration-300 text-sm tracking-wider uppercase font-sans disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                >
                  <span className="relative z-10">
                    {isSubmitting ? 'Sending...' : 'Send Your Wishes'}
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                  />
                </motion.button>
              </form>
            </motion.div>
          </ScrollReveal>

          {/* Messages Display */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              <div className="flex items-center gap-2 mb-4 sticky top-0 bg-[#FAF8F5] py-2 z-10">
                <Heart className="w-5 h-5 text-[#C4A57B]" fill="#C4A57B" />
                <p className="text-sm tracking-wider uppercase text-black/60 font-sans">
                  {wishes.length} {wishes.length === 1 ? 'Message' : 'Messages'}
                </p>
              </div>

              <AnimatePresence mode="popLayout">
                {wishes.map((wish, index) => (
                  <motion.div
                    key={wish.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="border border-black/10 p-6 bg-white/60 backdrop-blur-sm hover:border-[#C4A57B]/50 transition-all duration-300 relative overflow-hidden group"
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      initial={{ x: '-100%', opacity: 0 }}
                      whileHover={{ x: '200%', opacity: [0, 0.1, 0] }}
                      transition={{ duration: 1 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C4A57B]/20 to-transparent pointer-events-none"
                      style={{ skewX: -20 }}
                    />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="w-10 h-10 rounded-full bg-[#C4A57B]/20 flex items-center justify-center flex-shrink-0"
                          >
                            <span className="font-serif text-lg text-[#C4A57B]">
                              {wish.name.charAt(0).toUpperCase()}
                            </span>
                          </motion.div>
                          <div>
                            <p className="font-serif text-lg text-black">
                              {wish.name}
                            </p>
                            <p className="text-xs text-black/40 font-sans">
                              {wish.timestamp.toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </p>
                          </div>
                        </div>
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                        >
                          <Heart className="w-4 h-4 text-[#C4A57B]" fill="#C4A57B" />
                        </motion.div>
                      </div>
                      <p className="text-black/70 font-sans leading-relaxed pl-13">
                        {wish.message}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #C4A57B;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #B39568;
        }
      `}</style>
    </section>
  );
}
