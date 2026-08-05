import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@assets/Logo2-black-1-2-2_1768773677477.png";
import logoScrolled from "@assets/image_1768813235608.png";
import { Button } from "@/components/ui/button";

const homeSubLinks = [
  { name: "Rooms", href: "#rooms" },
  { name: "Explore", href: "#nearby" },
  { name: "Location", href: "#location" },
];

const navLinks = [
  { name: "Policies & Services", href: "/policies" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [mobileHomeExpanded, setMobileHomeExpanded] = useState(false);
  const [location, navigate] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setHomeDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setHomeDropdownOpen(false);

    // Route navigation (pages)
    if (!href.startsWith("#")) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Anchor scroll — if not on home page, navigate via full href so browser scrolls
    if (location !== "/") {
      window.location.href = `/${href}`;
      return;
    }

    // On home page: scroll to anchor
    if (href === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHomeClick = () => {
    setIsOpen(false);
    setHomeDropdownOpen(false);
    if (location !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const linkClass = `text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors ${
    scrolled ? "text-foreground" : "text-white text-shadow"
  }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? "glass py-2" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleHomeClick();
            }}
            className="flex items-center gap-2 group"
          >
            <div className="p-1.5 rounded-sm transition-transform group-hover:scale-105 bg-[#ffffff00] text-[#a6a6a600]">
              <img
                src={scrolled ? logoScrolled : logo}
                alt="W & H View Residency"
                className="h-[60px] w-[60px] object-contain transition-all duration-300"
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Home with dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className={`flex items-center gap-1 ${linkClass}`}
                onClick={() => setHomeDropdownOpen((prev) => !prev)}
                onMouseEnter={() => setHomeDropdownOpen(true)}
              >
                Home
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${homeDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {homeDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    onMouseLeave={() => setHomeDropdownOpen(false)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-44 bg-[#181818] border border-white/10 rounded shadow-2xl overflow-hidden"
                  >
                    {/* Go to Home */}
                    <button
                      onClick={handleHomeClick}
                      className="w-full text-left px-5 py-3 text-xs font-medium uppercase tracking-widest text-white/60 hover:text-primary hover:bg-white/5 transition-colors border-b border-white/10"
                    >
                      Home Page
                    </button>
                    {homeSubLinks.map((sub) => (
                      <button
                        key={sub.name}
                        onClick={() => handleNavClick(sub.href)}
                        className="w-full text-left px-5 py-3 text-xs font-medium uppercase tracking-widest text-white hover:text-primary hover:bg-white/5 transition-colors"
                      >
                        {sub.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other nav links */}
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={linkClass}
              >
                {link.name}
              </button>
            ))}

            <a href="tel:+918129468888">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 font-display tracking-widest uppercase text-xs">
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[110] lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm h-screen w-screen"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 h-screen w-[280px] bg-[#121212] flex flex-col p-6 shadow-2xl overflow-y-auto"
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

              <div className="flex flex-col space-y-1">
                {/* Home with expandable sub-items */}
                <div>
                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <button
                      onClick={handleHomeClick}
                      className="text-lg font-display font-light text-white hover:text-primary transition-colors text-left"
                    >
                      Home
                    </button>
                    <button
                      onClick={() => setMobileHomeExpanded((prev) => !prev)}
                      className="p-1 text-white/50 hover:text-primary transition-colors"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${mobileHomeExpanded ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>

                  <AnimatePresence>
                    {mobileHomeExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        {homeSubLinks.map((sub) => (
                          <button
                            key={sub.name}
                            onClick={() => handleNavClick(sub.href)}
                            className="w-full text-left pl-5 py-2.5 text-sm font-display text-white/70 hover:text-primary transition-colors border-b border-white/5"
                          >
                            {sub.name}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Other nav links */}
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="text-lg font-display font-light text-white hover:text-primary transition-colors text-left py-2 border-b border-white/10"
                  >
                    {link.name}
                  </button>
                ))}
              </div>

              <div className="mt-auto pt-6 pb-8">
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
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
}
