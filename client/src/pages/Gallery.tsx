import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import aboutImage from "@assets/image.png_202609091558_1788949705121.webp";
import heroImage from "@assets/Adjust_lighting_and_remove_person_202609031225_1788949741132.webp";

type Category =
  | "All"
  | "Hotel"
  | "Standard Rooms"
  | "Deluxe King Room"
  | "Premium King Room"
  | "Heritage Room"
  | "Restaurant";

interface GalleryImage {
  src: string;
  alt: string;
  category: Exclude<Category, "All">;
}

const allImages: GalleryImage[] = [
  // Hotel
  {
    src: "/assets/image_1768910772330.webp",
    alt: "Hotel lobby lounge",
    category: "Hotel",
  },
  {
    src: aboutImage,
    alt: "Hotel garden lounge and covered courtyard",
    category: "Hotel",
  },
  {
    src: heroImage,
    alt: "Hotel reception and lobby lounge",
    category: "Hotel",
  },
  {
    src: "/attached_assets/Cleaning_building_and_surroundings_2K_202608131947_1788950964866.webp",
    alt: "W&H View Residency exterior",
    category: "Hotel",
  },
  // Premium King Room
  {
    src: "/assets/image_1768910147198.webp",
    alt: "Premium King Room – bedroom overview",
    category: "Premium King Room",
  },
  {
    src: "/assets/image_1768910169247.webp",
    alt: "Premium King Room – river view angle",
    category: "Premium King Room",
  },
  {
    src: "/assets/image_1768910180678.webp",
    alt: "Premium King Room – en-suite bathroom",
    category: "Premium King Room",
  },
  {
    src: "/assets/image_1768910190709.webp",
    alt: "Premium King Room – double-door bathroom",
    category: "Premium King Room",
  },
  // Standard Rooms
  {
    src: "/attached_assets/image_1786021526150.webp",
    alt: "Standard Room – bedroom overview",
    category: "Standard Rooms",
  },
  {
    src: "/attached_assets/image_1786021533433.webp",
    alt: "Standard Room – bedroom angle",
    category: "Standard Rooms",
  },
  {
    src: "/attached_assets/image_1786021540505.webp",
    alt: "Standard Room – bathroom",
    category: "Standard Rooms",
  },
  // Heritage Room
  {
    src: "/assets/image_1786019758544.webp",
    alt: "Heritage Room – four-poster bedroom",
    category: "Heritage Room",
  },
  {
    src: "/assets/image_1786019842267.webp",
    alt: "Heritage Room – bedroom angle",
    category: "Heritage Room",
  },
  {
    src: "/assets/image_1786019850532.webp",
    alt: "Heritage Room – bathroom",
    category: "Heritage Room",
  },
  {
    src: "/assets/image_1786019869041.webp",
    alt: "Heritage Room – bathroom overview",
    category: "Heritage Room",
  },
  // Deluxe King Room
  {
    src: "/attached_assets/image_1786021526150.webp",
    alt: "Deluxe King Room – bedroom overview",
    category: "Deluxe King Room",
  },
  {
    src: "/attached_assets/image_1786021533433.webp",
    alt: "Deluxe King Room – bedroom angle",
    category: "Deluxe King Room",
  },
  {
    src: "/attached_assets/image_1786021540505.webp",
    alt: "Deluxe King Room – bathroom",
    category: "Deluxe King Room",
  },
  // Restaurant
  {
    src: "/assets/arabian-sea-delights.webp",
    alt: "WH Restaurant – Arabian Sea Delights",
    category: "Restaurant",
  },
  {
    src: "/attached_assets/Clean_restaurant_and_fix_lighting_202608071057_1786080488154.webp",
    alt: "WH Restaurant – bright dining area",
    category: "Restaurant",
  },
  {
    src: "/attached_assets/Clean_empty_restaurant_202608071053_1786080488157.webp",
    alt: "WH Restaurant – dining area and lounge",
    category: "Restaurant",
  },
];

const TABS: Category[] = [
  "All",
  "Hotel",
  "Standard Rooms",
  "Deluxe King Room",
  "Premium King Room",
  "Heritage Room",
  "Restaurant",
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeTab === "All"
      ? allImages
      : allImages.filter((img) => img.category === activeTab);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Hotel Rooms & Property Gallery | W&H View Residency, Kochi"
        description="View photos of guest rooms, hotel spaces, and dining at W&H View Residency in Mattancherry, Kochi."
        path="/gallery"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ]}
      />
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
              Explore the elegance and comfort of W &amp; H View Residency
              through our curated collection of images.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Gallery */}
      <section className="py-16 bg-[#0F0F0F]">
        <div className="container mx-auto px-4 md:px-6">

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setLightboxIndex(null);
                }}
                className={`px-4 py-2 rounded-md text-sm font-display font-bold tracking-widest uppercase transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground"
                    : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid or empty state */}
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-32 text-center gap-4"
              >
                <ImageOff className="w-12 h-12 text-white/20" />
                <p className="text-muted-foreground font-display tracking-widest uppercase text-sm">
                  Photos coming soon
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {filtered.map((img, idx) => (
                  <motion.div
                    key={`${img.category}-${img.src}`}
                    className="relative aspect-square overflow-hidden rounded group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.06 }}
                    onClick={() => openLightbox(idx)}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-black font-display font-bold tracking-widest uppercase border-b-2 border-black pb-1">
                        View
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
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
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <motion.img
              key={lightboxIndex}
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              className="max-h-[85vh] max-w-[85vw] object-contain rounded"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-4 md:right-8 text-white/70 hover:text-white p-2 z-10 bg-black/40 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <ChevronRight className="h-8 w-8" />
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-display tracking-wider">
              {lightboxIndex + 1} / {filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
