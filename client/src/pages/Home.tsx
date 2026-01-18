import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { 
  Wifi, Car, Utensils, Shield, HeartHandshake, Wind, 
  MapPin, Phone, Mail, ChevronDown, CheckCircle2 
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

// --- HERO SECTION ---
function HeroSection() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image - Luxury Hotel Interior/Exterior */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Hotel" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background" />
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
    { icon: Shield, title: "Hygiene", desc: "Top-tier cleanliness standards" },
    { icon: Wind, title: "Peace", desc: "Tranquil environment away from noise" },
    { icon: HeartHandshake, title: "Service", desc: "24/7 dedicated staff support" },
    { icon: CheckCircle2, title: "Trust", desc: "Thousands of happy guests" },
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
            <span className="text-primary font-display font-medium tracking-widest uppercase mb-2 block">About Us</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Redefining Luxury Hospitality</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nestled in the heart of nature, W & H View Residency offers more than just a place to sleep. We provide an experience—a harmonious blend of modern luxury and natural serenity.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you are here for a business retreat or a family vacation, our meticulously designed spaces ensure your stay is comfortable, memorable, and absolutely stress-free.
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
            <div className="absolute -bottom-6 -left-6 bg-card border border-white/10 p-6 rounded shadow-xl hidden md:block">
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
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={room.imageUrl} 
                    alt={room.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
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

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
             <span className="text-primary font-display font-medium tracking-widest uppercase mb-2 block">Guest Services</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Policies & Services</h2>
            <p className="text-muted-foreground mb-8">
              We aim to provide a transparent and comfortable experience for all our guests. Please review our policies and available services.
            </p>
            {/* Service Image */}
            <div className="rounded-lg overflow-hidden h-[300px] border border-white/10 relative group">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" 
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
      </div>
    </section>
  );
}

// --- GALLERY SECTION ---
function GallerySection() {
  // Placeholder images
  const images = [
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2049&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop"
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
    <section id="location" className="py-0 relative h-[500px] w-full bg-muted">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15082.99026214218!2d72.93721345!3d19.0754876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin" 
        width="100%" 
        height="100%" 
        style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      
      <div className="absolute top-1/2 left-4 md:left-12 -translate-y-1/2 bg-card/90 backdrop-blur border border-white/10 p-8 rounded max-w-sm">
        <h3 className="text-2xl font-display font-bold text-white mb-4">Visit Us</h3>
        <p className="text-muted-foreground mb-4">
          Located in the serene hills, offering panoramic views of the valley.
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-white">
            <MapPin className="h-4 w-4 text-primary" />
            123 Hilltop Road, Scenic View Valley
          </div>
          <div className="flex items-center gap-3 text-sm text-white">
            <Phone className="h-4 w-4 text-primary" />
            +91 98765 43210
          </div>
          <div className="flex items-center gap-3 text-sm text-white">
            <Mail className="h-4 w-4 text-primary" />
            reservations@whview.com
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
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
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
        <ServicesSection />
        <GallerySection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
