import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const images = [
  "/assets/image_1768910147198.png",
  "/assets/image_1768910169247.png",
  "/assets/image_1768910180678.png",
  "/assets/image_1768910190709.png",
  "/assets/image_1768910772330.png",
  "/assets/image_1768780481805.png",
  "/assets/image_1768910347128.png",
  "/assets/image_1768911244463.png",
  "/assets/image_1768912566517.png",
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % images.length);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Page Header */}
      <div className="relative pt-32 pb-20 bg-[#0A0A0A] border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-display font-medium tracking-[0.2em] uppercase mb-3 block">
              Visual Tour
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
              Our Gallery
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Explore the elegance and comfort of W &amp; H View Residency through our curated collection of images.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-20 bg-[#0F0F0F]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((src, idx) => (
              <motion.div
                key={idx}
                className="relative aspect-square overflow-hidden rounded group cursor-pointer"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-black font-display font-bold tracking-widest uppercase border-b-2 border-black pb-1">
                    View
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-10"
              onClick={closeLightbox}
            >
              <X className="h-8 w-8" />
            </button>
            <button
              className="absolute left-4 md:left-8 text-white/70 hover:text-white p-2 z-10 bg-black/40 rounded-full"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <motion.img
              key={lightboxIndex}
              src={images[lightboxIndex]}
              alt={`Gallery image ${lightboxIndex + 1}`}
              className="max-h-[85vh] max-w-[85vw] object-contain rounded"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-4 md:right-8 text-white/70 hover:text-white p-2 z-10 bg-black/40 rounded-full"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight className="h-8 w-8" />
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-display tracking-wider">
              {lightboxIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
