import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { motion, AnimatePresence } from 'motion/react';
import imgTogether from '@/imports/PremiumWeddingInvitationWebsite-2/f2620f3ada46f4253490618623d4b411fba7cae6.png';
import imgCelebrations from '@/imports/PremiumWeddingInvitationWebsite/eff8209a870d74aaac3e7bdcfb817ab959242085.png';
import imgMoments from '@/imports/PremiumWeddingInvitationWebsite/59e8811671b260eb2ad7760092f378a5f8e89d4d.png';
import imgForever from '@/imports/PremiumWeddingInvitationWebsite/193921cf0ec6df597324de4ce406260d3c07622f.jpg';
import imgJoy from '@/imports/PremiumWeddingInvitationWebsite-1/f53863290033ef9687cffed5bf4aeb863323222a.png';

interface GalleryImage {
  id: number;
  src: string;
  caption: string;
  gridClass: string;
}

// Layout mirrors the Figma design:
// [Together  ] [Celebrations          ]  row 1
// [Together  ] [Moments   ] [Forever  ]  row 2
// [Joy               ] [Forever  ]       row 3
const galleryImages: GalleryImage[] = [
  { id: 1, src: imgTogether,     caption: 'Together',     gridClass: 'col-start-1 col-end-2 row-start-1 row-end-3' },
  { id: 2, src: imgCelebrations, caption: 'Celebrations', gridClass: 'col-start-2 col-end-4 row-start-1 row-end-2' },
  { id: 3, src: imgMoments,      caption: 'Moments',      gridClass: 'col-start-2 col-end-3 row-start-2 row-end-3' },
  { id: 4, src: imgForever,      caption: 'Forever',      gridClass: 'col-start-3 col-end-4 row-start-2 row-end-4' },
  { id: 5, src: imgJoy,          caption: 'Joy',          gridClass: 'col-start-1 col-end-3 row-start-3 row-end-4' },
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

        {/* Gallery Grid - Bento Box Style */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 auto-rows-[250px] md:auto-rows-[280px]">
          {galleryImages.map((image, index) => (
            <motion.button
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.05,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              onClick={() => openLightbox(image.id)}
              className={`relative overflow-hidden group cursor-pointer ${image.gridClass}`}
            >
              {/* Image with frame effect */}
              <div className="absolute inset-0 p-2 md:p-3">
                <div className="relative w-full h-full overflow-hidden">
                  {/* Golden border frame */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 border-2 border-[#C4A57B] z-10 pointer-events-none"
                  />
                  
                  {/* Corner accents */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#C4A57B] z-10 pointer-events-none"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#C4A57B] z-10 pointer-events-none"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#C4A57B] z-10 pointer-events-none"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#C4A57B] z-10 pointer-events-none"
                  />

                  {/* Image */}
                  <motion.img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  />

                  {/* Gradient Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                  />

                  {/* Caption */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="absolute bottom-0 left-0 right-0 p-4 md:p-6"
                  >
                    <p className="font-serif text-white text-lg md:text-2xl tracking-wide mb-1">
                      {image.caption}
                    </p>
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="h-px bg-[#C4A57B]"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Shine effect on hover */}
              <motion.div
                initial={{ x: '-100%', opacity: 0 }}
                whileHover={{ x: '200%', opacity: [0, 0.3, 0] }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none"
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
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Decorative corners in lightbox */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.3, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#C4A57B] pointer-events-none"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.3, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[#C4A57B] pointer-events-none"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.3, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-[#C4A57B] pointer-events-none"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.3, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[#C4A57B] pointer-events-none"
            />

            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
              whileHover={{ scale: 1.2, rotate: 90 }}
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-white hover:text-[#C4A57B] transition-colors z-10 bg-black/30 backdrop-blur-sm rounded-full"
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Previous Button */}
            <motion.button
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              whileHover={{ scale: 1.2, x: -5 }}
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-6 w-12 h-12 flex items-center justify-center text-white hover:text-[#C4A57B] transition-colors z-10 bg-black/30 backdrop-blur-sm rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Next Button */}
            <motion.button
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              whileHover={{ scale: 1.2, x: 5 }}
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-6 w-12 h-12 flex items-center justify-center text-white hover:text-[#C4A57B] transition-colors z-10 bg-black/30 backdrop-blur-sm rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -20 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 20 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-5xl max-h-[80vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Frame around image */}
              <div className="relative p-4 md:p-8 bg-gradient-to-br from-[#1a1a1a] to-black">
                <div className="absolute inset-0 border-2 border-[#C4A57B]/50 pointer-events-none" />
                <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#C4A57B] pointer-events-none" />
                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#C4A57B] pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#C4A57B] pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#C4A57B] pointer-events-none" />
                
                <motion.img
                  key={currentImage.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  src={currentImage.src}
                  alt={currentImage.caption}
                  className="max-w-full max-h-[70vh] object-contain"
                />
              </div>
              
              {/* Caption */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="text-center mt-6"
              >
                <p className="font-serif text-white text-3xl tracking-wide mb-2">
                  {currentImage.caption}
                </p>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="h-px bg-gradient-to-r from-transparent via-[#C4A57B] to-transparent mx-auto"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}