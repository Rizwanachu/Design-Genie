import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@assets/Logo2-black-1-2-2_1768773677477.png";
import logoScrolled from "@assets/image_1768813235608.png";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Rooms", href: "#rooms" },
  { name: "Explore", href: "#nearby" },
  { name: "Policies & Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Location", href: "#location" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (id === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        scrolled ? "glass py-2" : "bg-transparent py-6"
      } ${isOpen ? "z-[101]" : "z-50"}`}
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
            <div className="p-1.5 rounded-sm transition-transform group-hover:scale-105 bg-[#ffffff00] text-[#a6a6a600]">
              <img src={scrolled ? logoScrolled : logo} alt="W & H View Residency" className="h-[60px] w-[60px] object-contain transition-all duration-300" />
            </div>
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
            <a href="tel:+918129468888">
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 font-display tracking-widest uppercase text-xs"
              >
                Book Now
              </Button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 transition-colors ${
              scrolled ? "text-foreground" : "text-white"
            } bg-black/20 backdrop-blur-sm lg:bg-transparent rounded-full`}
            onClick={() => setIsOpen(true)}
            data-testid="button-menu-open"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-[#121212] lg:hidden z-[100] flex flex-col p-6 shadow-2xl"
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-white p-2"
                  data-testid="button-menu-close"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-lg font-display font-light text-white hover:text-primary transition-colors text-left py-2 border-b border-white/10"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
              
              <div className="mt-auto pt-6">
                <a href="tel:+918129468888" className="block w-full">
                  <Button 
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display tracking-widest uppercase text-sm"
                  >
                    Book Now
                  </Button>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
