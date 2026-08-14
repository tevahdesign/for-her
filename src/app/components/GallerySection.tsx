import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { motion, AnimatePresence } from 'motion/react';
import imgTogether from '@/imports/PremiumWeddingInvitationWebsite-2/f2620f3ada46f4253490618623d4b411fba7cae6.png';
import imgCelebrations from '@/imports/PremiumWeddingInvitationWebsite-2/eff8209a870d74aaac3e7bdcfb817ab959242085.png';
import imgMoments from '@/imports/PremiumWeddingInvitationWebsite-2/59e8811671b260eb2ad7760092f378a5f8e89d4d.png';
import imgForever from '@/imports/PremiumWeddingInvitationWebsite-2/193921cf0ec6df597324de4ce406260d3c07622f.jpg';
import imgJoy from '@/imports/PremiumWeddingInvitationWebsite-2/f53863290033ef9687cffed5bf4aeb863323222a.png';

interface GalleryImage {
  id: number;
  src: string;
  caption: string;
  gridClass: string;
  objectPosition?: string;
}

// Layout mirrors the Figma design:
// [Together  ] [Celebrations          ]  row 1
// [Together  ] [Moments   ] [Forever  ]  row 2
// [Joy               ] [Forever  ]       row 3
const galleryImages: GalleryImage[] = [
  { id: 1, src: imgTogether,     caption: 'Together',     gridClass: 'md:col-span-1 md:row-span-2', objectPosition: 'object-center' },
  { id: 2, src: imgForever,      caption: 'Celebrations', gridClass: 'md:col-span-2 md:row-span-1', objectPosition: 'object-[center_15%]' },
  { id: 3, src: imgMoments,      caption: 'Moments',      gridClass: 'md:col-span-1 md:row-span-1', objectPosition: 'object-center' },
  { id: 4, src: imgCelebrations, caption: 'Forever',      gridClass: 'md:col-span-1 md:row-span-1', objectPosition: 'object-center' },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
    }
    
    setSelectedImage(galleryImages[newIndex].id);
  };

  const currentImage = galleryImages.find(img => img.id === selectedImage);

  return (
    <section id="gallery" className="py-24 px-6 lg:px-12 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.05, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-20 right-10 w-64 h-64 border border-[#C4A57B] rounded-full pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.05, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-20 left-10 w-48 h-48 border border-[#C4A57B] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <Heart className="w-8 h-8 text-[#C4A57B] mx-auto" fill="#C4A57B" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm tracking-[0.3em] uppercase text-black/60 font-sans mb-4"
            >
              Cherished Memories
            </motion.p>
            <h2 className="font-serif text-5xl md:text-6xl text-black mb-4">
              Our Gallery
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-black/70 max-w-2xl mx-auto mb-8"
            >
              A collection of moments that tell our story
            </motion.p>
            <div className="flex items-center justify-center gap-4">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-px bg-gradient-to-r from-transparent via-[#C4A57B] to-transparent"
              />
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
                className="w-3 h-3 rotate-45 border border-[#C4A57B]"
              />
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-px bg-gradient-to-r from-transparent via-[#C4A57B] to-transparent"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Bento Grid matching reference screenshot - Pure photos without frame or text before click */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 h-auto md:h-[580px] lg:h-[620px]">
          {galleryImages.map((image, index) => (
            <motion.button
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              onClick={() => openLightbox(image.id)}
              className={`relative overflow-hidden group cursor-pointer w-full h-[280px] md:h-full bg-black ${image.gridClass}`}
            >
              {/* Pure Photo edge-to-edge - No border frame or text overlay before click */}
              <motion.img
                src={image.src}
                alt={image.caption}
                className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out ${image.objectPosition || 'object-center'}`}
              />

              {/* Subtle hover shine effect */}
              <motion.div
                initial={{ x: '-100%', opacity: 0 }}
                whileHover={{ x: '200%', opacity: [0, 0.2, 0] }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                style={{ skewX: -20 }}
              />
            </motion.button>
          ))}
        </div>

        {/* Decorative text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="font-serif text-2xl text-black/40 italic">
            Every picture tells a story
          </p>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 md:p-8 backdrop-blur-md"
            onClick={closeLightbox}
          >
            {/* Decorative corners in lightbox backdrop */}
            <div className="absolute top-6 left-6 w-12 h-12 md:w-16 md:h-16 border-t-2 border-l-2 border-[#C4A57B]/40 pointer-events-none" />
            <div className="absolute top-6 right-6 w-12 h-12 md:w-16 md:h-16 border-t-2 border-r-2 border-[#C4A57B]/40 pointer-events-none" />
            <div className="absolute bottom-6 left-6 w-12 h-12 md:w-16 md:h-16 border-b-2 border-l-2 border-[#C4A57B]/40 pointer-events-none" />
            <div className="absolute bottom-6 right-6 w-12 h-12 md:w-16 md:h-16 border-b-2 border-r-2 border-[#C4A57B]/40 pointer-events-none" />

            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.15 }}
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-white hover:text-[#C4A57B] transition-colors z-20 bg-black/50 backdrop-blur-sm rounded-full border border-white/20 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Navigation Buttons */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              whileHover={{ scale: 1.15, x: -4 }}
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-4 md:left-8 w-12 h-12 flex items-center justify-center text-white hover:text-[#C4A57B] transition-colors z-20 bg-black/50 backdrop-blur-sm rounded-full border border-white/20 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              whileHover={{ scale: 1.15, x: 4 }}
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-4 md:right-8 w-12 h-12 flex items-center justify-center text-white hover:text-[#C4A57B] transition-colors z-20 bg-black/50 backdrop-blur-sm rounded-full border border-white/20 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Modal Content Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Frame container */}
              <div className="relative p-3 md:p-6 bg-gradient-to-br from-[#1c1a17] via-[#121110] to-[#0a0a0a] rounded-lg border border-[#C4A57B]/40 shadow-2xl flex items-center justify-center overflow-hidden">
                {/* Frame Inner Accent Border */}
                <div className="absolute inset-2 border border-[#C4A57B]/30 pointer-events-none rounded" />

                {/* Frame Corner Ornaments */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#C4A57B] pointer-events-none z-10" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#C4A57B] pointer-events-none z-10" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#C4A57B] pointer-events-none z-10" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#C4A57B] pointer-events-none z-10" />

                {/* Image */}
                <motion.img
                  key={currentImage.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  src={currentImage.src}
                  alt={currentImage.caption}
                  className="max-w-full max-h-[60vh] md:max-h-[65vh] object-contain rounded select-none z-0"
                />
              </div>

              {/* Caption */}
              <motion.div
                key={`caption-${currentImage.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.3 }}
                className="text-center mt-4 md:mt-6"
              >
                <p className="font-serif text-white text-2xl md:text-3xl tracking-wide mb-2">
                  {currentImage.caption}
                </p>
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C4A57B] to-transparent mx-auto" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}