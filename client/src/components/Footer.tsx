import logo from "@assets/Logo2-black-1-2-2_1768773677477.png";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-sm">
                <img src={logo} alt="Logo" className="h-8 w-auto" />
              </div>
              <span className="text-xl font-display font-bold text-white tracking-widest">W & H VIEW</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Experience the perfect blend of luxury and comfort. Your sanctuary away from home, where every detail is crafted for your peace of mind.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold text-primary mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "Rooms", "Services", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-display font-semibold text-primary mb-6">Contact Us</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>6/153, Jew Town Rd, Kappalandimukku, Mattancherry, Kochi, Kerala 682002</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <div className="flex flex-col">
                  <span>+91 8129 46 8888</span>
                  <span>+91 484 291 2900</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>info@whv-residency.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-display font-semibold text-primary mb-6">Follow Us</h4>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} W & H View Residency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
