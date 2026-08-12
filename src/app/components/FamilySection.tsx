import { Users, Heart } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { motion } from 'motion/react';

interface FamilyMember {
  name: string;
  relation: string;
}

const groomFamily: FamilyMember[] = [
  { name: 'Dr K S Ravi', relation: 'Father' },
  { name: 'Mrs Sreekala Ravi', relation: 'Mother' },
  { name: 'Vidhu K Ravi', relation: 'Brother' }
];

const brideFamily: FamilyMember[] = [
  { name: 'Preman Paruthikkad', relation: 'Father' },
  { name: 'Vasa Preman', relation: 'Mother' },
  { name: 'Gadha', relation: 'Sister' },
  { name: 'Subin', relation: 'Brother-in-law' },
  { name: 'Daksh Dayan', relation: 'Nephew' }
];

export function FamilySection() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white relative overflow-hidden">
      {/* Floating background elements */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-10 w-32 h-32 border border-[#C4A57B]/10 rounded-full pointer-events-none blur-sm"
      />
      <motion.div
        animate={{ 
          y: [0, 40, 0],
          x: [0, -30, 0],
          rotate: [0, -15, 0]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 left-10 w-24 h-24 border border-[#C4A57B]/10 pointer-events-none blur-sm"
        style={{ borderRadius: '40% 60% 60% 40% / 40% 40% 60% 60%' }}
      />

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
              With Blessings From
            </motion.p>
            <h2 className="font-serif text-5xl md:text-6xl text-black mb-6">
              Our Families
            </h2>
            <div className="flex items-center justify-center gap-4">
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
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-2 h-2 rounded-full bg-[#C4A57B]"
              />
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-px bg-gradient-to-l from-transparent via-[#C4A57B] to-[#C4A57B]"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Family Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <ScrollReveal delay={0.1}>
            {/* Bride's Family */}
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="border border-black/10 p-8 lg:p-10 bg-[#FAF8F5]/50 hover:border-[#C4A57B]/50 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Shimmer effect */}
              <motion.div
                initial={{ x: '-100%', opacity: 0 }}
                whileHover={{ x: '200%', opacity: [0, 0.1, 0] }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C4A57B]/20 to-transparent pointer-events-none"
                style={{ skewX: -20 }}
              />

              <div className="flex items-center justify-center mb-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-full bg-[#C4A57B]/10 flex items-center justify-center"
                >
                  <Heart className="w-8 h-8 text-[#C4A57B]" fill="#C4A57B" />
                </motion.div>
              </div>
              
              <h3 className="font-serif text-3xl text-center text-black mb-8">
                Bride's Side
              </h3>
              
              <div className="space-y-6">
                {brideFamily.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="text-center pb-6 border-b border-black/5 last:border-0"
                  >
                    <p className="font-serif text-xl text-black mb-1">
                      {member.name}
                    </p>
                    <p className="text-sm tracking-wider uppercase text-black/50 font-sans">
                      {member.relation}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            {/* Groom's Family */}
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="border border-black/10 p-8 lg:p-10 bg-[#FAF8F5]/50 hover:border-[#C4A57B]/50 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Shimmer effect */}
              <motion.div
                initial={{ x: '-100%', opacity: 0 }}
                whileHover={{ x: '200%', opacity: [0, 0.1, 0] }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C4A57B]/20 to-transparent pointer-events-none"
                style={{ skewX: -20 }}
              />

              <div className="flex items-center justify-center mb-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-full bg-[#C4A57B]/10 flex items-center justify-center"
                >
                  <Users className="w-8 h-8 text-[#C4A57B]" />
                </motion.div>
              </div>
              
              <h3 className="font-serif text-3xl text-center text-black mb-8">
                Groom's Side
              </h3>
              
              <div className="space-y-6">
                {groomFamily.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="text-center pb-6 border-b border-black/5 last:border-0"
                  >
                    <p className="font-serif text-xl text-black mb-1">
                      {member.name}
                    </p>
                    <p className="text-sm tracking-wider uppercase text-black/50 font-sans">
                      {member.relation}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}