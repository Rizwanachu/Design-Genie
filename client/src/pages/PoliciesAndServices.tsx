import { motion } from "framer-motion";
import {
  Wifi,
  Car,
  Utensils,
  Ban,
  Leaf,
  CalendarCheck,
  PawPrint,
  CreditCard,
  ScrollText,
  Lock,
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
    icon: CalendarCheck,
  },
  {
    id: "pets",
    title: "Pets",
    content: "Pets not allowed",
    icon: PawPrint,
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
    icon: Ban,
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
    icon: CreditCard,
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
    icon: Leaf,
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
    icon: ScrollText,
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
    icon: Lock,
  },
];

const additionalServices = [
  {
    title: "The Kerala Spa",
    description:
      "Relax. Rejuvenate. Restore. Soulful spa services including relaxation massages, aromatherapy, deep tissue, facials, and body scrubs. Couple rooms available.",
    link: "https://www.thekeralaspa.com",
    image: "/kerala-spa.png",
    naturalSize: true,
  },
  {
    title: "WH Restaurant — Arabian Sea Delights",
    description:
      "Now open at W&H View Residency. Savour Kerala, Arabian & Chinese cuisine — traditional breakfast, snacks, biryanis, grills, and more. Comfort in every stay, delight in every bite.",
    phone: "+91 7994912900",
    image: "/arabian-sea-delights.jpeg",
    naturalSize: true,
  },
  {
    title: "Airport Transfer",
    description:
      "Convenient and reliable airport pickup and drop-off services for a stress-free journey.",
    image: cochinAirportImg,
    naturalSize: false,
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
                  {service.naturalSize ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

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
                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary/80 text-primary-foreground transition-colors font-display font-bold tracking-widest uppercase text-sm px-4 py-2 rounded-md"
                      >
                        Visit Website
                      </a>
                    ) : service.phone ? (
                      <a
                        href={`https://wa.me/${service.phone.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 hover:bg-[#1ebe5d] transition-colors font-display font-bold tracking-widest uppercase text-sm px-4 py-2 rounded-md text-[#171717] bg-[#d4af35cc]"
                      >
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Chat on WhatsApp
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
