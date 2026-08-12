import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { ScrollReveal } from './ScrollReveal';
import { motion } from 'motion/react';

interface RSVPFormData {
  name: string;
  phone: string;
  guests: string;
  events: string[];
  dietary: string;
}

export function RSVPSection() {
  const [formData, setFormData] = useState<RSVPFormData>({
    name: '',
    phone: '',
    guests: '1',
    events: [],
    dietary: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const eventOptions = [
    { id: 'reception', label: 'Reception', date: 'Sat, 24 Oct 2026' },
    { id: 'wedding', label: 'Wedding', date: 'Sun, 25 Oct 2026' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEventToggle = (eventId: string) => {
    setFormData(prev => ({
      ...prev,
      events: prev.events.includes(eventId)
        ? prev.events.filter(e => e !== eventId)
        : [...prev.events, eventId]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.phone || formData.events.length === 0) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    
    // Success toast
    toast.success('RSVP submitted successfully!', {
      description: `Thank you ${formData.name}, we look forward to celebrating with you!`,
      duration: 5000
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      guests: '1',
      events: [],
      dietary: ''
    });
  };

  const formFields = [
    { name: 'name', label: 'Full Name', type: 'text', required: true, placeholder: 'Enter your full name' },
    { name: 'phone', label: 'Phone Number', type: 'tel', required: true, placeholder: '+91 123 456 7890' },
  ];

  return (
    <section id="rsvp" className="py-24 px-6 lg:px-12 bg-[#FAF8F5]">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm tracking-[0.3em] uppercase text-black/60 font-sans mb-4"
            >
              Join Us
            </motion.p>
            <h2 className="font-serif text-5xl md:text-6xl text-black mb-6">
              RSVP
            </h2>
            <div className="flex items-center justify-center gap-4 mb-8">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-px bg-[#C4A57B]"
              />
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="w-2 h-2 rounded-full bg-[#C4A57B]"
              />
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-px bg-[#C4A57B]"
              />
            </div>
            <p className="text-black/70 font-sans leading-relaxed">
              Kindly respond by 1st October 2026
            </p>
          </div>
        </ScrollReveal>

        {/* RSVP Form */}
        <ScrollReveal delay={0.2}>
          <motion.form 
            onSubmit={handleSubmit} 
            className="border border-black/10 p-8 lg:p-12 bg-white/80 backdrop-blur-sm relative overflow-hidden"
          >
            {/* Decorative corner accents */}
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

            <div className="space-y-6">
              {/* Name */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <label htmlFor="name" className="block text-sm tracking-wider uppercase text-black/70 font-sans mb-3">
                  Full Name <span className="text-[#C4A57B]">*</span>
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  whileFocus={{ scale: 1.01 }}
                  className="w-full px-4 py-3 border border-black/20 bg-white focus:border-[#C4A57B] focus:outline-none transition-all font-sans"
                  placeholder="Enter your full name"
                />
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: focusedField === 'name' ? 1 : 0 }}
                  className="h-0.5 bg-gradient-to-r from-[#C4A57B] to-transparent origin-left mt-1"
                />
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <label htmlFor="phone" className="block text-sm tracking-wider uppercase text-black/70 font-sans mb-3">
                  Phone Number <span className="text-[#C4A57B]">*</span>
                </label>
                <motion.input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  required
                  whileFocus={{ scale: 1.01 }}
                  className="w-full px-4 py-3 border border-black/20 bg-white focus:border-[#C4A57B] focus:outline-none transition-all font-sans"
                  placeholder="+91 123 456 7890"
                />
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: focusedField === 'phone' ? 1 : 0 }}
                  className="h-0.5 bg-gradient-to-r from-[#C4A57B] to-transparent origin-left mt-1"
                />
              </motion.div>

              {/* Number of Guests */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <label htmlFor="guests" className="block text-sm tracking-wider uppercase text-black/70 font-sans mb-3">
                  Number of Guests
                </label>
                <motion.select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('guests')}
                  onBlur={() => setFocusedField(null)}
                  whileFocus={{ scale: 1.01 }}
                  className="w-full px-4 py-3 border border-black/20 bg-white focus:border-[#C4A57B] focus:outline-none transition-all font-sans"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </motion.select>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: focusedField === 'guests' ? 1 : 0 }}
                  className="h-0.5 bg-gradient-to-r from-[#C4A57B] to-transparent origin-left mt-1"
                />
              </motion.div>

              {/* Event Attending */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <label className="block text-sm tracking-wider uppercase text-black/70 font-sans mb-4">
                  Which Event(s) Will You Attend? <span className="text-[#C4A57B]">*</span>
                </label>
                <div className="space-y-3">
                  {eventOptions.map((event, index) => (
                    <motion.label
                      key={event.id}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.45 + index * 0.05 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center p-4 border border-black/10 bg-white hover:border-[#C4A57B]/50 transition-all cursor-pointer group relative overflow-hidden"
                    >
                      {/* Shimmer effect */}
                      <motion.span
                        initial={{ x: '-100%', opacity: 0 }}
                        whileHover={{ x: '200%', opacity: [0, 0.05, 0] }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C4A57B]/30 to-transparent pointer-events-none"
                      />
                      
                      <div className="relative flex items-center">
                        <input
                          type="checkbox"
                          id={event.id}
                          name="events"
                          value={event.id}
                          checked={formData.events.includes(event.id)}
                          onChange={() => handleEventToggle(event.id)}
                          className="sr-only"
                        />
                        
                        {/* Custom checkbox */}
                        <motion.div
                          animate={{
                            backgroundColor: formData.events.includes(event.id) ? '#C4A57B' : '#FFFFFF',
                            borderColor: formData.events.includes(event.id) ? '#C4A57B' : 'rgba(0,0,0,0.2)'
                          }}
                          transition={{ duration: 0.2 }}
                          className="w-5 h-5 border-2 flex items-center justify-center mr-3 flex-shrink-0"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: formData.events.includes(event.id) ? 1 : 0 }}
                            transition={{ duration: 0.2, type: "spring" }}
                          >
                            <CheckCircle className="w-4 h-4 text-white" strokeWidth={3} />
                          </motion.div>
                        </motion.div>
                        
                        <div>
                          <p className="font-serif text-lg text-black group-hover:text-[#C4A57B] transition-colors">
                            {event.label}
                          </p>
                          <p className="text-xs text-black/50 font-sans tracking-wide">
                            {event.date}
                          </p>
                        </div>
                      </div>
                    </motion.label>
                  ))}
                </div>
              </motion.div>

              {/* Dietary Preferences */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <label htmlFor="dietary" className="block text-sm tracking-wider uppercase text-black/70 font-sans mb-3">
                  Dietary Preferences
                </label>
                <motion.textarea
                  id="dietary"
                  name="dietary"
                  value={formData.dietary}
                  onChange={handleChange}
                  rows={3}
                  onFocus={() => setFocusedField('dietary')}
                  onBlur={() => setFocusedField(null)}
                  whileFocus={{ scale: 1.01 }}
                  className="w-full px-4 py-3 border border-black/20 bg-white focus:border-[#C4A57B] focus:outline-none transition-all font-sans resize-none"
                  placeholder="Any dietary restrictions or preferences?"
                />
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: focusedField === 'dietary' ? 1 : 0 }}
                  className="h-0.5 bg-gradient-to-r from-[#C4A57B] to-transparent origin-left mt-1"
                />
              </motion.div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-black text-white hover:bg-[#C4A57B] hover:text-black border border-black hover:border-[#C4A57B] transition-all duration-300 text-sm tracking-wider uppercase font-sans flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit RSVP
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.form>
        </ScrollReveal>

        {/* Note */}
        <ScrollReveal delay={0.3}>
          <div className="mt-8 text-center">
            <p className="text-sm text-black/50 font-sans leading-relaxed">
              If you have any questions, please contact us at{' '}
              <a href="mailto:wedding@vinu-gana.com" className="text-[#C4A57B] hover:underline">
                wedding@vinu-gana.com
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}