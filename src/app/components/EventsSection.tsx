import { useState } from 'react';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { motion, AnimatePresence } from 'motion/react';

interface Event {
  id: string;
  name: string;
  date: string;
  time: string;
  venue: string;
}

const events: Event[] = [
  {
    id: 'reception',
    name: 'Reception',
    date: '24 October 2026',
    time: '5:00 PM – 8:00 PM',
    venue: 'Century Convention Centre, Mele Chelari, Near Calicut University'
  },
  {
    id: 'wedding',
    name: 'Wedding',
    date: '25 October 2026',
    time: 'Muhurtam: 10:15 AM – 11:20 AM',
    venue: 'Reef Club Resort, Eranhikkal, Calicut'
  }
];

export function EventsSection() {
  const [isWeddingOpen, setIsWeddingOpen] = useState(false);

  const handleAddToCalendar = (eventId: string) => {
    let startStr = '';
    let endStr = '';
    let eventName = '';
    let venue = '';

    if (eventId === 'reception') {
      startStr = '20261024T170000';
      endStr = '20261024T200000';
      eventName = 'Reception';
      venue = 'Century Convention Centre, Mele Chelari, Near Calicut University';
    } else if (eventId === 'wedding') {
      startStr = '20261025T101500';
      endStr = '20261025T112000';
      eventName = 'Wedding Ceremony';
      venue = 'Reef Club Resort, Eranhikkal, Calicut';
    }
    
    const googleCalendarUrl = new URL('https://calendar.google.com/calendar/render');
    googleCalendarUrl.searchParams.append('action', 'TEMPLATE');
    googleCalendarUrl.searchParams.append('text', `${eventName} - Gana & Vinu's Wedding`);
    googleCalendarUrl.searchParams.append('dates', `${startStr}/${endStr}`);
    googleCalendarUrl.searchParams.append('details', `Join us for ${eventName} at Gana & Vinu's wedding celebration.`);
    googleCalendarUrl.searchParams.append('location', venue);
    
    window.open(googleCalendarUrl.toString(), '_blank');
  };

  const handleGetDirections = (eventId: string) => {
    if (eventId === 'reception') {
      window.open('https://maps.app.goo.gl/MGwUsmqn6E3M7teE7', '_blank');
    } else if (eventId === 'wedding') {
      window.open('https://www.google.com/maps/search/?api=1&query=Reef+Club+Resort+Eranhikkal+Calicut', '_blank');
    }
  };

  return (
    <section id="events" className="py-24 px-6 lg:px-12 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm tracking-[0.3em] uppercase text-black/60 font-sans mb-4"
            >
              Save the Dates
            </motion.p>
            <h2 className="font-serif text-5xl md:text-6xl text-black mb-6">
              Wedding Events
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
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.5, 
                  type: "spring",
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
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
          </div>
        </ScrollReveal>

        {/* Events Cards */}
        <div className="space-y-6">
          {/* RECEPTION CARD - ALWAYS ACTIVE / OPEN */}
          <ScrollReveal delay={0.1}>
            <motion.div
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
              className="border border-[#C4A57B]/40 bg-white/80 backdrop-blur-sm shadow-md transition-all duration-300 hover:border-[#C4A57B] hover:shadow-xl p-8 rounded-sm"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs tracking-widest text-[#C4A57B] font-semibold uppercase font-sans">
                    Event 01
                  </span>
                  <h3 className="font-serif text-3xl text-black mt-1 mb-2 font-semibold">
                    Reception
                  </h3>
                  <p className="text-sm tracking-wider text-black/80 font-medium font-sans">
                    24 October 2026 · 5:00 PM – 8:00 PM
                  </p>
                </div>
                <span className="px-3 py-1 bg-[#C4A57B]/15 text-[#C4A57B] text-xs font-semibold uppercase tracking-wider rounded-full font-sans">
                  Always Active
                </span>
              </div>

              <div className="pt-6 mt-6 border-t border-black/10 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#C4A57B] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs tracking-widest uppercase text-black/50 font-sans mb-1">Venue</p>
                    <p className="font-serif text-lg text-black font-medium">Century Convention Centre, Mele Chelari, Near Calicut University</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleAddToCalendar('reception')}
                    className="flex items-center gap-2 px-6 py-2.5 bg-black border border-black text-white hover:bg-[#C4A57B] hover:border-[#C4A57B] hover:text-black transition-all duration-300 text-xs tracking-wider uppercase font-sans font-medium cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-[#C4A57B]" />
                    Add to Calendar
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleGetDirections('reception')}
                    className="flex items-center gap-2 px-6 py-2.5 bg-[#C4A57B] border border-[#C4A57B] text-black hover:bg-black hover:text-white transition-all duration-300 text-xs tracking-wider uppercase font-sans font-semibold cursor-pointer"
                  >
                    <MapPin className="w-4 h-4" />
                    Get Directions
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* WEDDING CARD - ONLY ACTIVE WHEN DROPDOWN CLICKED */}
          <ScrollReveal delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
              className="border border-black/10 bg-white/70 backdrop-blur-sm transition-all duration-300 hover:border-[#C4A57B]/60 shadow-md rounded-sm overflow-hidden"
            >
              {/* Clickable Header Dropdown Bar */}
              <button
                onClick={() => setIsWeddingOpen(!isWeddingOpen)}
                className="w-full text-left p-8 flex items-center justify-between cursor-pointer hover:bg-black/5 transition-colors group"
              >
                <div>
                  <span className="text-xs tracking-widest text-[#C4A57B] font-semibold uppercase font-sans">
                    Event 02 · Click to View Details
                  </span>
                  <h3 className="font-serif text-3xl text-black mt-1 mb-1 font-semibold group-hover:text-[#C4A57B] transition-colors">
                    Wedding
                  </h3>
                  <p className="text-sm tracking-wider text-black/70 font-sans">
                    25 October 2026 · Muhurtam: 10:15 AM – 11:20 AM
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline-block text-xs uppercase tracking-wider font-sans font-semibold text-[#C4A57B]">
                    {isWeddingOpen ? 'Hide Details' : 'Show Details'}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-[#C4A57B]/40 flex items-center justify-center bg-white group-hover:border-[#C4A57B] transition-all">
                    <ChevronDown className={`w-5 h-5 text-[#C4A57B] transition-transform duration-300 ${isWeddingOpen ? 'rotate-180' : ''}`} />
                  </div>
                </div>
              </button>

              {/* Inside Card Details - Expanded when clicked */}
              <AnimatePresence>
                {isWeddingOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="px-8 pb-8 pt-4 border-t border-black/10 bg-[#FAF8F5]/80 space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-5 border border-[#C4A57B]/30 rounded-sm">
                      <div>
                        <p className="text-xs tracking-widest uppercase text-black/50 font-sans mb-1">Date</p>
                        <p className="font-serif text-xl text-black font-semibold">25 October 2026 (Sunday)</p>
                      </div>
                      <div>
                        <p className="text-xs tracking-widest uppercase text-black/50 font-sans mb-1">Muhurtam Time</p>
                        <p className="font-serif text-xl text-[#C4A57B] font-bold">10:15 AM – 11:20 AM</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-[#C4A57B] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-xs tracking-widest uppercase text-black/50 font-sans mb-1">Venue</p>
                        <p className="font-serif text-lg text-black font-medium">Reef Club Resort, Eranhikkal, Calicut</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handleAddToCalendar('wedding')}
                        className="flex items-center gap-2 px-6 py-2.5 bg-black border border-black text-white hover:bg-[#C4A57B] hover:border-[#C4A57B] hover:text-black transition-all duration-300 text-xs tracking-wider uppercase font-sans font-medium cursor-pointer"
                      >
                        <Calendar className="w-4 h-4 text-[#C4A57B]" />
                        Add to Calendar
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handleGetDirections('wedding')}
                        className="flex items-center gap-2 px-6 py-2.5 bg-[#C4A57B] border border-[#C4A57B] text-black hover:bg-black hover:text-white transition-all duration-300 text-xs tracking-wider uppercase font-sans font-semibold cursor-pointer"
                      >
                        <MapPin className="w-4 h-4" />
                        Get Directions
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}