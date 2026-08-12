import { ButtonHTMLAttributes, useState } from 'react';
import { motion } from 'motion/react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const baseStyles = 'px-8 py-3 rounded-none font-sans text-sm tracking-wider uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group';
  
  const variants = {
    primary: 'bg-black text-white hover:bg-[#C4A57B] hover:text-black border border-black hover:border-[#C4A57B]',
    secondary: 'bg-[#C4A57B] text-black hover:bg-black hover:text-white border border-[#C4A57B] hover:border-black',
    outline: 'bg-transparent text-black border border-black hover:bg-black hover:text-white'
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {/* Button text */}
      <span className="relative z-10">{children}</span>
      
      {/* Shimmer effect */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: isHovered ? '100%' : '-100%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
      
      {/* Corner accents */}
      <motion.span
        className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2, delay: 0.05 }}
      />
      <motion.span
        className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
      />
      <motion.span
        className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2, delay: 0.15 }}
      />
    </motion.button>
  );
}