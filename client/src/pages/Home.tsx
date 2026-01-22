import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { 
  Wifi, Car, Utensils, Shield, HeartHandshake, Wind, 
  MapPin, Phone, Mail, ChevronDown, CheckCircle2,
  ChevronLeft, ChevronRight
} from "lucide-react";

import { useRooms } from "@/hooks/use-rooms";
import { useCreateInquiry } from "@/hooks/use-contact";
import { insertInquirySchema, type Room } from "@shared/schema";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RoomModal } from "@/components/RoomModal";
import { BookingModal } from "@/components/BookingModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormControl, FormMessage, FormLabel } from "@/components/ui/form";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";

import luxuryLobbyBg from '@/assets/luxury-lobby-bg.png';

// --- HERO SECTION ---
function HeroSection() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image - Luxury Lobby */}
      <div className="absolute inset-0">
        <img 
          src={luxuryLobbyBg} 
          alt="Luxury Hotel Lobby" 
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
    { icon: Wind, title: "Lake View", desc: "Amazing view of Willingdon Island and Harbor Bridge." },
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
             {/* Abstract interior or architectural detail */}
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop" 
                alt="Interior" 
                className="w-full h-full object-cover"
              />
              {/* Decorative Frame */}
              <div className="absolute inset-4 border border-white/20 z-10" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-left-6 bg-card border border-white/10 p-6 rounded shadow-xl">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-display font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Years of <br/>Excellence</div>
              </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-[500px] w-full bg-white/5 rounded-lg" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

// --- SERVICES SECTION ---
function ServicesSection() {
  const services = [
    { 
      id: "checkin", 
      title: "Check-in & Check-out", 
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Check-in: 14:00 hrs</li>
          <li>Check-out: 12:00 noon</li>
          <li>Early/late check-in subject to availability</li>
        </ul>
      ), 
      icon: CheckCircle2 
    },
    { 
      id: "pets", 
      title: "Pets", 
      content: "Pets not allowed", 
      icon: HeartHandshake 
    },
    { 
      id: "cancellation", 
      title: "Cancellation", 
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Free cancellation up to 24 hours before check-in</li>
          <li>One-night charge within 24 hours</li>
          <li>No-shows charged full amount</li>
        </ul>
      ), 
      icon: Shield 
    },
    { 
      id: "payment", 
      title: "Payment", 
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Advance payment at booking or 48 hrs before check-in</li>
          <li>Cash, UPI, Credit/Debit Cards</li>
        </ul>
      ), 
      icon: CheckCircle2 
    },
    { 
      id: "dining", 
      title: "Dining", 
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>In-house restaurant under renovation</li>
          <li>Online food orders available</li>
          <li>No alcohol served</li>
        </ul>
      ), 
      icon: Utensils 
    },
    { 
      id: "wifi", 
      title: "Wi-Fi", 
      content: "Complimentary high-speed Wi-Fi", 
      icon: Wifi 
    },
    { 
      id: "wellness", 
      title: "Wellness", 
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Ayurvedic massage with advance booking</li>
          <li>Doctor-supervised treatments</li>
        </ul>
      ), 
      icon: HeartHandshake 
    },
    { 
      id: "parking", 
      title: "Parking", 
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Secure parking</li>
          <li>Valet available on request</li>
        </ul>
      ), 
      icon: Car 
    },
    { 
      id: "terms", 
      title: "General Terms", 
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Valid government ID required</li>
          <li>Damage charged to guest</li>
          <li>Smoking only in designated areas</li>
          <li>Management reserves right to refuse service</li>
        </ul>
      ), 
      icon: Shield 
    },
    { 
      id: "privacy", 
      title: "Privacy Summary", 
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Guest data used only for booking</li>
          <li>Not shared with third parties</li>
          <li>Data correction/deletion via info@whv-residency.com</li>
        </ul>
      ), 
      icon: Shield 
    },
  ];

  const additionalServices = [
    {
      title: "Kayaa Holistic Center",
      description: "Experience professional Ayurvedic wellness and holistic healing at Kayaa Holistic Center.",
      link: "https://kayaaholistic.com/",
      image: "/assets/ayurvedic_spa_holist_8907cf1d.jpg"
    },
    {
      title: "Airport Transfer",
      description: "Convenient and reliable airport pickup and drop-off services for a stress-free journey.",
      image: "/assets/luxury_airport_trans_c547bf81.jpg"
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
             <span className="text-primary font-display font-medium tracking-widest uppercase mb-2 block">Guest Services</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Policies & Services</h2>
            <p className="text-muted-foreground mb-8">
              We aim to provide a transparent and comfortable experience for all our guests. Please review our policies and available services.
            </p>
            {/* Service Image */}
            <div className="rounded-lg overflow-hidden h-[300px] border border-white/10 relative group">
              <img 
                src="/assets/image_1768910772330.png" 
                alt="Dining" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-6 left-6 text-white font-display text-2xl font-bold">Premium Hospitality</div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <Accordion type="single" collapsible className="w-full">
              {services.map((service) => (
                <AccordionItem key={service.id} value={service.id} className="border-b border-white/10">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-4 text-left">
                      <div className="p-2 bg-white/5 rounded text-primary">
                        <service.icon className="h-5 w-5" />
                      </div>
                      <span className="text-lg font-display text-white">{service.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pl-14 pb-4">
                    {service.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Additional Services */}
        <div className="pt-20 border-t border-white/5">
          <div className="text-center mb-12">
            <span className="text-primary font-display font-medium tracking-widest uppercase mb-2 block">Premium Add-ons</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Additional Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, idx) => (
              <motion.div
                key={idx}
                className="group relative overflow-hidden rounded-lg border border-white/5 bg-card hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 line-clamp-2 max-w-md">
                    {service.description}
                  </p>
                  
                  {service.link ? (
                    <a 
                      href={service.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-display font-bold tracking-widest uppercase text-sm border-b border-primary/30 pb-1"
                    >
                      Visit Website
                    </a>
                  ) : (
                    <div className="text-xs font-display font-bold tracking-widest uppercase text-primary/60">
                      Available on Request
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
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

// --- GALLERY SECTION ---
function GallerySection() {
  const images = [
    "/assets/image_1768910147198.png",
    "/assets/image_1768910169247.png",
    "/assets/image_1768910180678.png",
    "/assets/image_1768910190709.png",
    "/assets/image_1768910772330.png",
    "/assets/image_1768780481805.png"
  ];

  return (
    <section id="gallery" className="py-24 bg-[#0F0F0F]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-display font-medium tracking-widest uppercase mb-2 block">Gallery</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Visual Tour</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              className="relative aspect-square overflow-hidden rounded group cursor-pointer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <img 
                src={src} 
                alt={`Gallery ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-black font-display font-bold tracking-widest uppercase border-b-2 border-black pb-1">View</span>
              </div>
            </motion.div>
          ))}
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
          
          <div className="absolute top-1/2 left-4 md:left-12 -translate-y-1/2 bg-card/90 backdrop-blur border border-white/10 p-8 rounded max-w-sm hidden md:block">
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
        
        {/* Mobile Visit Us Card - Rendered below the map in the layout flow */}
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

// --- CONTACT SECTION ---
function ContactSection() {
  const mutation = useCreateInquiry();
  const form = useForm<z.infer<typeof insertInquirySchema>>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof insertInquirySchema>) => {
    mutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <section id="contact" className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 relative z-20">
          <span className="text-primary font-display font-medium tracking-widest uppercase mb-2 block">Get in Touch</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">We'd Love to Hear From You</h2>
          <p className="text-muted-foreground">
            Have questions about booking or planning an event? Send us a message and our team will assist you shortly.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-card border border-white/5 p-8 md:p-10 rounded-lg shadow-2xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" className="bg-background border-white/10" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="Your number" className="bg-background border-white/10" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Your email" className="bg-background border-white/10" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Subject" className="bg-background border-white/10" {...field} value={field.value || ''} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="How can we help?" className="bg-background border-white/10 min-h-[120px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg font-display font-bold"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <RoomsSection />
        <NearbySection />
        <ServicesSection />
        <GallerySection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
