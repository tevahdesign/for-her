import { Heart, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        {/* Main Content */}
        <div className="text-center space-y-6">
          {/* Couple Names */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: "var(--couple-font, 'Barrington', 'Great Vibes', cursive)" }}
            className="text-4xl md:text-5xl tracking-wide text-[#C4A57B] font-normal py-1"
          >
            Gana <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-block text-white/70 mx-1 text-2xl md:text-3xl"
            >&</motion.span> Vinu
          </motion.h3>
          
          {/* Date */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm tracking-[0.3em] uppercase text-white/60 font-sans"
          >
            24 & 25 October 2026
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-4 py-6"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-px bg-[#C4A57B]"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-4 h-4 text-[#C4A57B] fill-[#C4A57B]" />
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-px bg-[#C4A57B]"
            />
          </motion.div>

          {/* Made with Love */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-serif text-lg text-white/80 italic"
          >
            Made with love
          </motion.p>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-4"
          >
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.instagram.com/thegvstories?igsh=Mm4xZmtkejBjenBq&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 border border-white/20 hover:border-[#C4A57B] hover:bg-[#C4A57B] transition-all duration-300 group"
            >
              <Instagram className="w-5 h-5 text-white group-hover:text-black transition-colors" />
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-xs tracking-wider uppercase text-white/40 font-sans">
            © 2026 Gana & Vinu. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}