import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Wifi, Car, Utensils, Shield, HeartHandshake, Wind, 
  MapPin, Phone, Mail, ChevronDown,
  ChevronLeft, ChevronRight
} from "lucide-react";

import { useRooms } from "@/hooks/use-rooms";
import { type Room } from "@shared/schema";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RoomModal } from "@/components/RoomModal";
import { BookingModal } from "@/components/BookingModal";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import aboutImage from "@assets/image.png_202609091558_1788949705121.jpeg";
import heroImage from "@assets/Adjust_lighting_and_remove_person_202609031225_1788949741132.jpeg";

// --- HERO SECTION ---
function HeroSection() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image - Luxury Lobby */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="W&H View Residency reception and lounge"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative h-full container mx-auto px-4 md:px-6 flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-primary font-display font-medium tracking-[0.2em] uppercase mb-4 block">
            Welcome to W & H View Residency
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Comfortable Stays. <br />
            <span className="text-primary italic">Premium Experience.</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-gray-300 mb-8 font-light leading-relaxed">
            Discover a sanctuary of elegance and tranquility. Your perfect getaway tailored for comfort, luxury, and unforgettable memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918129468888">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 font-display min-w-[180px]"
              >
                Book Your Stay
              </Button>
            </a>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6 font-display min-w-[180px]"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </motion.div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </div>
    </section>
  );
}

// --- ABOUT SECTION ---
function AboutSection() {
  const features = [
    { icon: Car, title: "Transportations", desc: "Convenient options to explore the city with ease." },
    { icon: HeartHandshake, title: "SPA", desc: "Indulge in relaxation and rejuvenation at our luxurious spa." },
    { icon: Wifi, title: "Fast Wifi", desc: "High-speed WiFi available throughout the hotel." },
    { icon: Utensils, title: "Food & Drink", desc: "Kerala and Arabian delicacies delivered right to you." },
    { icon: Shield, title: "Hygienic Rooms", desc: "Modern best-practices to ensure high safety and cleanliness." },
    { icon: Wind, title: "Lake View", desc: "Amazing view of Willingdon Island and Harbor Bridge from 3 floor" },
  ];

  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-display font-medium tracking-widest uppercase mb-2 block">Who We Are</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Discover Our Story and Commitment to Excellence</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At W&H View Residency, we are dedicated to delivering exceptional hospitality in Kochi. Our friendly team is committed to creating a welcoming atmosphere where every guest feels at home.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our mission is to deliver exceptional hospitality and create memorable experiences for every guest. Discover unmatched comfort and luxury, where every detail is designed to enhance your stay.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {features.map((f, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="bg-white/5 p-2 rounded-lg text-primary">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white">{f.title}</h4>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-white/10">
              <img 
                src={aboutImage}
                alt="W&H View Residency garden dining courtyard"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-4 border border-white/20 z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- ROOMS SECTION ---
function RoomsSection() {
  const { data: rooms, isLoading } = useRooms();
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleViewDetails = (room: Room) => {
    setSelectedRoom(room);
    setIsDetailsOpen(true);
  };

  const handleBookNow = (room: Room) => {
    setSelectedRoom(room);
    setIsDetailsOpen(false);
    setIsBookingOpen(true);
  };

  return (
    <section id="rooms" className="py-24 bg-[#0F0F0F]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-display font-medium tracking-widest uppercase mb-2 block">Accommodations</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Select Your Suite</h2>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-[500px] w-full bg-white/5 rounded-lg" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rooms?.map((room, idx) => (
              <motion.div
                key={room.id}
                className="group bg-card border border-white/5 rounded-lg overflow-hidden hover:border-primary/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="relative h-64 overflow-hidden room-card-container">
                  <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        const gallery = room.gallery && room.gallery.length > 0 ? room.gallery : [room.imageUrl];
                        const container = e.currentTarget.closest('.room-card-container');
                        const img = container?.querySelector('img');
                        if (img) {
                          const currentSrc = img.getAttribute('src');
                          const currentIndex = gallery.indexOf(currentSrc || '');
                          const prevIndex = (currentIndex - 1 + gallery.length) % gallery.length;
                          img.setAttribute('src', gallery[prevIndex]);
                        }
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-colors"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        const gallery = room.gallery && room.gallery.length > 0 ? room.gallery : [room.imageUrl];
                        const container = e.currentTarget.closest('.room-card-container');
                        const img = container?.querySelector('img');
                        if (img) {
                          const currentSrc = img.getAttribute('src');
                          const currentIndex = gallery.indexOf(currentSrc || '');
                          const nextIndex = (currentIndex + 1) % gallery.length;
                          img.setAttribute('src', gallery[nextIndex]);
                        }
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-colors"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="w-full h-full">
                    <img 
                      src={room.imageUrl} 
                      alt={room.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end pointer-events-none">
                    <div className="text-white font-bold font-display text-xl">{room.name}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/5">
                    <div className="text-sm text-muted-foreground">{room.size} Sq Ft</div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-6 line-clamp-2">{room.description}</p>

                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      className="flex-1 border-white/20 hover:bg-white hover:text-black hover:border-white transition-colors"
                      onClick={() => handleViewDetails(room)}
                    >
                      Details
                    </Button>
                    <a href="tel:+918129468888" className="flex-1">
                      <Button 
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        Book Now
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <RoomModal 
        room={selectedRoom} 
        isOpen={isDetailsOpen} 
        onClose={() => setIsDetailsOpen(false)} 
        onBook={handleBookNow} 
      />
      
      <BookingModal 
        room={selectedRoom} 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </section>
  );
}

// --- NEARBY SECTION ---
function NearbySection() {
  const attractions = [
    {
      title: "Paradesi Synagogue",
      distance: "0.2 km",
      description: "A 16th-century synagogue known for its Chinese tiles and Belgian chandeliers.",
      image: "https://images.unsplash.com/photo-1548013146-72479768bbf4?q=80&w=2070&auto=format&fit=crop",
      category: "Heritage",
      lat: 9.9575,
      lng: 76.2594
    },
    {
      title: "Mattancherry Palace",
      distance: "0.4 km",
      description: "Also known as the Dutch Palace, featuring mural paintings and Cochin Rajas' portraits.",
      image: "https://images.unsplash.com/photo-1582510003544-2d095665039b?q=80&w=2070&auto=format&fit=crop",
      category: "History",
      lat: 9.9583,
      lng: 76.2592
    },
    {
      title: "Chinese Fishing Nets",
      distance: "1.2 km",
      description: "Iconic fixed cantilever fishing nets, especially beautiful at sunset.",
      image: "https://images.unsplash.com/photo-1566373059005-7f5e1f0e42d7?q=80&w=2070&auto=format&fit=crop",
      category: "Landmark",
      lat: 9.9675,
      lng: 76.2428
    }
  ];

  const [selectedLocation, setSelectedLocation] = useState(attractions[0]);

  return (
    <section id="nearby" className="py-24 bg-[#0A0A0A]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <span className="text-primary font-display font-medium tracking-widest uppercase mb-2 block">Explore Kochi</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Nearby Attractions</h2>
            <p className="text-muted-foreground mb-8">
              Discover the rich heritage and vibrant culture of Mattancherry. Everything you want to see is just a short walk away.
            </p>
            <div className="space-y-4">
              {attractions.map((item, idx) => (
                <motion.div 
                  key={idx}
                  className={`border p-4 rounded-lg transition-all cursor-pointer group ${
                    selectedLocation.title === item.title 
                      ? "bg-primary/10 border-primary/50" 
                      : "bg-card border-white/5 hover:border-primary/50"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setSelectedLocation(item)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold uppercase tracking-tighter text-primary">{item.category}</span>
                    <span className="text-xs text-muted-foreground">{item.distance}</span>
                  </div>
                  <h4 className="text-lg font-display font-bold text-white mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="relative h-full min-h-[400px] rounded-lg overflow-hidden border border-white/10 flex flex-col">
              <iframe 
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3929.1!2d${selectedLocation.lng}!3d${selectedLocation.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1768770256217!5m2!1sen!2sin`}
                className="w-full grow"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-[12px] border-black/10 z-10" />
              <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded flex items-center gap-4 z-20">
                <div className="bg-primary/20 p-2 rounded">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-white font-display font-bold text-sm">{selectedLocation.title}</div>
                  <div className="text-muted-foreground text-xs">{selectedLocation.distance} from Residency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- LOCATION SECTION ---
function LocationSection() {
  return (
    <section id="location" className="py-24 bg-[#0A0A0A]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-display font-medium tracking-widest uppercase mb-2 block">Location</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Visit Us</h2>
        </div>

        <div className="relative h-[500px] w-full bg-muted rounded-lg overflow-hidden border border-white/10 flex flex-col">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d268.9751782666839!2d76.26067298800133!3d9.953513634998393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b086d005e347f79%3A0xb7b817edd7fef581!2sW%26H%20View%20Residency!5e0!3m2!1sen!2sin!4v1768777989570!5m2!1sen!2sin" 
            className="w-full grow h-full"
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
          <div className="absolute top-8 right-4 md:right-12 bg-card/90 backdrop-blur border border-white/10 p-8 rounded max-w-sm hidden md:block">
            <h3 className="text-2xl font-display font-bold text-white mb-4">Visit Us</h3>
            <p className="text-muted-foreground mb-4">
              Experience premium hospitality in the heart of Kochi.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-white">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>6/153, Jew Town Rd, Kappalandimukku,<br />Mattancherry, Kochi, Kerala 682002</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white">
                <Phone className="h-4 w-4 text-primary" />
                +91 8129 46 8888 / +91 484 291 2900
              </div>
              <div className="flex items-center gap-3 text-sm text-white">
                <Mail className="h-4 w-4 text-primary" />
                info@whv-residency.com
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Visit Us Card */}
        <div className="md:hidden bg-card border-t border-white/10 p-6 rounded-b-lg">
          <h3 className="text-xl font-display font-bold text-white mb-4">Visit Us</h3>
          <p className="text-muted-foreground mb-4 text-sm">
            Experience premium hospitality in the heart of Kochi.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3 text-sm text-white">
              <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span>6/153, Jew Town Rd, Kappalandimukku,<br />Mattancherry, Kochi, Kerala 682002</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-white">
              <Phone className="h-4 w-4 text-primary" />
              +91 8129 46 8888 / +91 484 291 2900
            </div>
            <div className="flex items-center gap-3 text-sm text-white">
              <Mail className="h-4 w-4 text-primary" />
              info@whv-residency.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useEffect(() => {
    const target = sessionStorage.getItem("scrollTarget");
    if (!target) return;
    sessionStorage.removeItem("scrollTarget");
    // Wait for the page to render before scrolling
    const timer = setTimeout(() => {
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <RoomsSection />
        <NearbySection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
