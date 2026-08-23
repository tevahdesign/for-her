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
    time: '10:30 AM',
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
      startStr = '20261025T103000';
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
          {/* RECEPTION CARD */}
          <ScrollReveal delay={0.1}>
            <motion.div
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
              className="border border-black/10 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:border-[#C4A57B]/50 hover:shadow-lg p-8"
            >
              <div>
                <h3 className="font-serif text-3xl text-black">
                  Reception
                </h3>
                <p className="text-sm font-sans tracking-widest text-black uppercase mt-1">
                  24 October 2026 (Saturday)
                </p>
                <p className="text-sm font-sans tracking-widest text-black/70 uppercase mt-0.5">
                  5:00 PM – 8:00 PM
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-black/5 space-y-6">
                <div className="flex items-start gap-4">
                  <Calendar className="w-5 h-5 text-[#C4A57B] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs tracking-widest uppercase text-black/50 font-sans mb-1">Date & Time</p>
                    <p className="font-serif text-lg text-black font-medium">24 October 2026 (Saturday) · 5:00 PM – 8:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#C4A57B] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs tracking-widest uppercase text-black/50 font-sans mb-1">Venue</p>
                    <p className="font-serif text-lg text-black">Century Convention Centre, Mele Chelari, Near Calicut University</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAddToCalendar('reception')}
                    className="flex items-center gap-2 px-6 py-2.5 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-sm tracking-wider uppercase font-sans cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    Add to Calendar
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleGetDirections('reception')}
                    className="flex items-center gap-2 px-6 py-2.5 border border-[#C4A57B] text-black hover:bg-[#C4A57B] transition-all duration-300 text-sm tracking-wider uppercase font-sans cursor-pointer"
                  >
                    <MapPin className="w-4 h-4" />
                    Get Directions
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* WEDDING CARD WITH CLICKABLE DROPDOWN */}
          <ScrollReveal delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
              className="border border-black/10 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:border-[#C4A57B]/50 hover:shadow-lg p-8 cursor-pointer"
              onClick={() => setIsWeddingOpen(!isWeddingOpen)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-serif text-3xl text-black">
                    Wedding
                  </h3>
                  <p className="text-sm font-sans tracking-widest text-black uppercase mt-1">
                    25 October 2026 (Sunday)
                  </p>
                  <p className="text-sm font-sans tracking-widest text-black/70 uppercase mt-0.5">
                    10:30 AM
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full border border-[#C4A57B]/40 flex items-center justify-center bg-white/80 shrink-0 ml-4">
                  <ChevronDown className={`w-5 h-5 text-[#C4A57B] transition-transform duration-300 ${isWeddingOpen ? 'rotate-180' : ''}`} />
                </div>
              </div>

              {/* Inside Card Details - Expanded when clicked */}
              <AnimatePresence>
                {isWeddingOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden"
                    onClick={(e) => e.stopPropagation()} // Prevent card toggle when clicking inside buttons
                  >
                    <div className="pt-6 mt-6 border-t border-black/5 space-y-6">
                      <div className="flex items-start gap-4">
                        <Calendar className="w-5 h-5 text-[#C4A57B] mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-xs tracking-widest uppercase text-black/50 font-sans mb-1">Date & Time</p>
                          <p className="font-serif text-lg text-black font-medium">25 October 2026 (Sunday) · 10:30 AM</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <MapPin className="w-5 h-5 text-[#C4A57B] mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-xs tracking-widest uppercase text-black/50 font-sans mb-1">Venue</p>
                          <p className="font-serif text-lg text-black">Reef Club Resort, Eranhikkal, Calicut</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 pt-2">
                        <motion.button
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleAddToCalendar('wedding')}
                          className="flex items-center gap-2 px-6 py-2.5 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-sm tracking-wider uppercase font-sans cursor-pointer"
                        >
                          <Calendar className="w-4 h-4" />
                          Add to Calendar
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleGetDirections('wedding')}
                          className="flex items-center gap-2 px-6 py-2.5 border border-[#C4A57B] text-black hover:bg-[#C4A57B] transition-all duration-300 text-sm tracking-wider uppercase font-sans cursor-pointer"
                        >
                          <MapPin className="w-4 h-4" />
                          Get Directions
                        </motion.button>
                      </div>
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