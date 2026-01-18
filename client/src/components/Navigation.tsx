import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@assets/Logo2-black-1-2-2_1768773677477.png";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Rooms", href: "#rooms" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Location", href: "#location" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-2" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 group"
          >
            <div className="bg-white/90 p-1.5 rounded-sm transition-transform group-hover:scale-105">
              <img src={logo} alt="W & H View Residency" className="h-8 md:h-10 w-auto object-contain" />
            </div>
            <span className={`text-xl font-display font-bold tracking-wider ${scrolled ? 'text-white' : 'text-white text-shadow'}`}>
              W & H
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors ${
                  scrolled ? "text-foreground" : "text-white text-shadow"
                }`}
              >
                {link.name}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection("#rooms")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 font-display tracking-widest uppercase text-xs"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center space-y-8"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-muted-foreground hover:text-foreground p-2"
            >
              <X className="h-8 w-8" />
            </button>

            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-2xl font-display font-light text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </button>
            ))}
            
            <Button 
              onClick={() => scrollToSection("#rooms")}
              size="lg"
              className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 px-12 text-lg font-display"
            >
              Book Your Stay
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
