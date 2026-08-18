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
    date: 'Saturday, Oct 24th, 2026',
    time: '5:00 PM – 8:00 PM',
    venue: 'Century Convention Centre, Mele Chelari, Near Calicut University'
  },
  {
    id: 'wedding',
    name: 'Wedding',
    date: 'Sunday, Oct 25th, 2026',
    time: '10:30 AM',
    venue: 'Reef Club Resort, Eranhikkal, Calicut'
  }
];

export function EventsSection() {
  const [openEvent, setOpenEvent] = useState<string | null>('reception');

  const toggleEvent = (eventId: string) => {
    setOpenEvent(openEvent === eventId ? null : eventId);
  };

  const handleAddToCalendar = (event: Event) => {
    let startStr = '';
    let endStr = '';

    if (event.id === 'reception') {
      // Saturday, 24 October 2026: 5:00 PM to 8:00 PM
      startStr = '20261024T170000';
      endStr = '20261024T200000';
    } else if (event.id === 'wedding') {
      // Sunday, 25 October 2026: 10:30 AM to 1:30 PM
      startStr = '20261025T103000';
      endStr = '20261025T133000';
    } else {
      // Fallback parser
      const dayMatch = event.date.match(/\b(\d{1,2})(st|nd|rd|th)?\b/i);
      const yearMatch = event.date.match(/\b(20\d\d)\b/);
      const day = dayMatch ? parseInt(dayMatch[1]) : 24;
      const year = yearMatch ? parseInt(yearMatch[1]) : 2026;

      const pad = (n: number) => String(n).padStart(2, '0');
      const dayFormatted = pad(day);

      if (event.time.includes('10:30')) {
        startStr = `${year}10${dayFormatted}T103000`;
        endStr = `${year}10${dayFormatted}T133000`;
      } else {
        startStr = `${year}10${dayFormatted}T170000`;
        endStr = `${year}10${dayFormatted}T200000`;
      }
    }
    
    // Create Google Calendar URL
    const googleCalendarUrl = new URL('https://calendar.google.com/calendar/render');
    googleCalendarUrl.searchParams.append('action', 'TEMPLATE');
    googleCalendarUrl.searchParams.append('text', `${event.name} - Gana & Vinu's Wedding`);
    googleCalendarUrl.searchParams.append('dates', `${startStr}/${endStr}`);
    googleCalendarUrl.searchParams.append('details', `Join us for ${event.name} at Gana & Vinu's wedding celebration.`);
    googleCalendarUrl.searchParams.append('location', event.venue);
    
    // Open in new window
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

        {/* Events - Static Cards */}
        <div className="space-y-6">
          {events.map((event, index) => (
            <ScrollReveal key={event.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                className="border border-black/10 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:border-[#C4A57B]/50 hover:shadow-lg p-8"
              >
                <div>
                  <h3 className="font-serif text-3xl text-black mb-2">
                    {event.name}
                  </h3>
                  <p className="text-sm tracking-wider text-black/60 font-sans">
                    {event.date} · {event.time}
                  </p>
                </div>

                {event.id === 'reception' && (
                  <div className="pt-6 mt-6 border-t border-black/5 space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-[#C4A57B] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-xs tracking-widest uppercase text-black/50 font-sans mb-1">Venue</p>
                        <p className="font-serif text-lg text-black">{event.venue}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleAddToCalendar(event)}
                        className="flex items-center gap-2 px-6 py-2.5 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-sm tracking-wider uppercase font-sans cursor-pointer"
                      >
                        <Calendar className="w-4 h-4" />
                        Add to Calendar
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleGetDirections(event.id)}
                        className="flex items-center gap-2 px-6 py-2.5 border border-[#C4A57B] text-black hover:bg-[#C4A57B] transition-all duration-300 text-sm tracking-wider uppercase font-sans cursor-pointer"
                      >
                        <MapPin className="w-4 h-4" />
                        Get Directions
                      </motion.button>
                    </div>
                  </div>
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}