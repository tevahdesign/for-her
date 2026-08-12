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
    venue: 'Century Auditorium, Mele Chelari'
  },
  {
    id: 'wedding',
    name: 'Wedding',
    date: 'Sunday, Oct 25th, 2026',
    time: '10:30 AM',
    venue: 'Reef Club'
  }
];

export function EventsSection() {
  const [openEvent, setOpenEvent] = useState<string | null>('reception');

  const toggleEvent = (eventId: string) => {
    setOpenEvent(openEvent === eventId ? null : eventId);
  };

  const handleAddToCalendar = (event: Event) => {
    // Format dates for Google Calendar
    // Google Calendar uses format: YYYYMMDDTHHmmss
    const formatDateForGoogle = (dateStr: string, timeStr: string) => {
      // Parse the date and time
      const dateParts = dateStr.split(' ');
      const day = parseInt(dateParts[1]);
      const month = dateParts[2];
      const year = parseInt(dateParts[3] || '2026');
      
      // Convert month name to number
      const monthMap: { [key: string]: number } = {
        'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3,
        'May': 4, 'Jun': 5, 'Jul': 6, 'Aug': 7,
        'Sep': 8, 'Oct': 9, 'November': 10, 'December': 11
      };
      
      // Parse time
      const timeParts = timeStr.split(' – ')[0] || timeStr; // Get start time
      const [time, period] = timeParts.split(' ');
      let [hours, minutes] = time.split(':').map(Number);
      if (isNaN(minutes)) minutes = 0;
      
      // Convert to 24-hour format
      if (period === 'PM' && hours !== 12) hours += 12;
      if (period === 'AM' && hours === 12) hours = 0;
      
      // Create date object
      const startDate = new Date(year, monthMap[month] ?? 9, day || 24, hours || 17, minutes || 0);
      
      // Set end time
      const endDate = new Date(startDate);
      endDate.setHours(startDate.getHours() + (event.id === 'wedding' ? 3 : 3));
      
      // Format as YYYYMMDDTHHmmss
      const formatDateTime = (date: Date) => {
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const d = String(date.getDate()).padStart(2, '0');
        const h = String(date.getHours()).padStart(2, '0');
        const min = String(date.getMinutes()).padStart(2, '0');
        const s = '00';
        return `${y}${m}${d}T${h}${min}${s}`;
      };
      
      return {
        start: formatDateTime(startDate),
        end: formatDateTime(endDate)
      };
    };
    
    const { start, end } = formatDateForGoogle(event.date, event.time);
    
    // Create Google Calendar URL
    const googleCalendarUrl = new URL('https://calendar.google.com/calendar/render');
    googleCalendarUrl.searchParams.append('action', 'TEMPLATE');
    googleCalendarUrl.searchParams.append('text', `${event.name} - Vinu & Gana's Wedding`);
    googleCalendarUrl.searchParams.append('dates', `${start}/${end}`);
    googleCalendarUrl.searchParams.append('details', `Join us for ${event.name} at Vinu & Gana's wedding celebration.`);
    googleCalendarUrl.searchParams.append('location', event.venue);
    
    // Open in new window
    window.open(googleCalendarUrl.toString(), '_blank');
  };

  const handleGetDirections = (eventId: string) => {
    if (eventId === 'reception') {
      window.open('https://www.google.com/maps/search/?api=1&query=Century+Auditorium+Mele+Chelari', '_blank');
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

        {/* Events */}
        <div className="space-y-4">
          {events.map((event, index) => (
            <ScrollReveal key={event.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                className="border border-black/10 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:border-[#C4A57B]/50 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleEvent(event.id)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group"
                >
                  <div className="flex-1">
                    <h3 className="font-serif text-3xl text-black mb-2 group-hover:text-[#C4A57B] transition-colors">
                      {event.name}
                    </h3>
                    <p className="text-sm tracking-wider text-black/60 font-sans">
                      {event.date} · {event.time}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: openEvent === event.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-[#C4A57B]" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openEvent === event.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-4 border-t border-black/5">
                        <div className="space-y-6">
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="flex items-start gap-4"
                          >
                            <MapPin className="w-5 h-5 text-[#C4A57B] mt-1 flex-shrink-0" />
                            <div>
                              <p className="text-xs tracking-widest uppercase text-black/50 font-sans mb-1">Venue</p>
                              <p className="font-serif text-lg text-black">{event.venue}</p>
                            </div>
                          </motion.div>
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            className="flex flex-wrap gap-3 pt-4"
                          >
                            <motion.button
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleAddToCalendar(event)}
                              className="flex items-center gap-2 px-6 py-2.5 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-sm tracking-wider uppercase font-sans"
                            >
                              <Calendar className="w-4 h-4" />
                              Add to Calendar
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleGetDirections(event.id)}
                              className="flex items-center gap-2 px-6 py-2.5 border border-[#C4A57B] text-black hover:bg-[#C4A57B] transition-all duration-300 text-sm tracking-wider uppercase font-sans"
                            >
                              <MapPin className="w-4 h-4" />
                              Get Directions
                            </motion.button>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}