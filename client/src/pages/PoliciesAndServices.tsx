import { motion } from "framer-motion";
import {
  Wifi,
  Car,
  Utensils,
  Shield,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import ayurvedicSpaImg from "@/assets/ayurvedic_spa_holist_8907cf1d.jpg";
import premiumHospitalityImg from "@/assets/image_1768910772330.png";
import cochinAirportImg from "@/assets/images/cochin-airport.jpg";

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
    icon: CheckCircle2,
  },
  {
    id: "pets",
    title: "Pets",
    content: "Pets not allowed",
    icon: HeartHandshake,
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
    icon: Shield,
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
    icon: CheckCircle2,
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
    icon: Utensils,
  },
  {
    id: "wifi",
    title: "Wi-Fi",
    content: "Complimentary high-speed Wi-Fi",
    icon: Wifi,
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
    icon: HeartHandshake,
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
    icon: Car,
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
    icon: Shield,
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
    icon: Shield,
  },
];

const additionalServices = [
  {
    title: "Kayaa Holistic Center",
    description:
      "Experience professional Ayurvedic wellness and holistic healing at Kayaa Holistic Center.",
    link: "https://kayaaholistic.com/",
    image: ayurvedicSpaImg,
  },
  {
    title: "Airport Transfer",
    description:
      "Convenient and reliable airport pickup and drop-off services for a stress-free journey.",
    image: cochinAirportImg,
  },
];

export default function PoliciesAndServices() {
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
              Guest Services
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
              Policies &amp; Services
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              We aim to provide a transparent and comfortable experience for all
              our guests.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Policies Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-6">
                Our Policies
              </h2>
              <p className="text-muted-foreground mb-8">
                Please review our policies and available services to ensure a
                smooth and enjoyable stay.
              </p>
              {/* Service Image */}
              <div className="rounded-lg overflow-hidden h-[300px] border border-white/10 relative group">
                <img
                  src={premiumHospitalityImg}
                  alt="Premium Hospitality"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-6 left-6 text-white font-display text-2xl font-bold">
                  Premium Hospitality
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <Accordion type="single" collapsible className="w-full">
                {services.map((service) => (
                  <AccordionItem
                    key={service.id}
                    value={service.id}
                    className="border-b border-white/10"
                  >
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-center gap-4 text-left">
                        <div className="p-2 bg-white/5 rounded text-primary">
                          <service.icon className="h-5 w-5" />
                        </div>
                        <span className="text-lg font-display text-white">
                          {service.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pl-14 pb-4">
                      {service.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>

          {/* Additional Services */}
          <div className="pt-20 border-t border-white/5">
            <div className="text-center mb-12">
              <span className="text-primary font-display font-medium tracking-widest uppercase mb-2 block">
                Premium Add-ons
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
                Additional Services
              </h2>
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
                    <h3 className="text-2xl font-display font-bold text-white mb-2">
                      {service.title}
                    </h3>
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

      <Footer />
    </div>
  );
}
