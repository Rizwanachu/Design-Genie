import { type Room } from "@shared/schema";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Users, BedDouble, Bath, ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

interface RoomModalProps {
  room: Room | null;
  isOpen: boolean;
  onClose: () => void;
  onBook: (room: Room) => void;
}

export function RoomModal({ room, isOpen, onClose, onBook }: RoomModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  if (!room) return null;

  const images = room.gallery && room.gallery.length > 0 ? room.gallery : [room.imageUrl];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-card border-white/10 text-card-foreground p-0 overflow-hidden max-h-[90vh] flex flex-col sm:my-8">
        <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors focus:outline-none">
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </DialogClose>
        
        <div className="flex flex-col overflow-y-auto">
          {/* Virtual Tour / Gallery Section */}
          <div className="relative h-64 md:h-[400px] w-full bg-black shrink-0">
            <img 
              src={images[currentImageIndex]} 
              alt={`${room.name} View ${currentImageIndex + 1}`} 
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            
            {images.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`h-1.5 w-1.5 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-primary' : 'bg-white/30'}`}
                    />
                  ))}
                </div>
              </>
            )}
            
            <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded text-xs font-bold uppercase tracking-widest">
              Virtual Tour
            </div>
          </div>

          <div className="p-6 md:p-8 flex flex-col gap-8">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div>
                <h3 className="text-3xl font-display font-bold text-primary">{room.name}</h3>
                <p className="text-muted-foreground mt-1">Experience luxury from every angle</p>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center px-4 py-2 bg-white/5 rounded">
                  <span className="text-xs text-muted-foreground uppercase tracking-tighter">Size</span>
                  <span className="font-bold">{room.size}</span>
                </div>
                <div className="flex flex-col items-center px-4 py-2 bg-white/5 rounded">
                  <span className="text-xs text-muted-foreground uppercase tracking-tighter">Beds</span>
                  <span className="font-bold">{room.beds}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-display font-semibold text-white border-b border-white/10 pb-2">Room Details</h4>
                <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                  {room.description}
                </p>
                {room.roomNumbers && (
                  <div className="mt-4">
                    <h5 className="text-xs font-bold uppercase tracking-widest text-white mb-2">Room Numbers</h5>
                    <div className="flex gap-2">
                      {room.roomNumbers.map(num => (
                        <span key={num} className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs font-bold">
                          {num}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-display font-semibold text-white border-b border-white/10 pb-2 mb-4">Quick Specs</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{room.adults} Adults, {room.children} Children</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Bath className="h-4 w-4 text-primary" />
                      <span>{room.bathrooms} Bathrooms</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-display font-semibold text-white border-b border-white/10 pb-2 mb-4">Room Facilities</h4>
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                    {room.features?.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check className="h-3 w-3 text-primary shrink-0" />
                        <span className="truncate">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <a href="tel:+918129468888" className="w-full">
                <Button 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-7 text-xl font-display font-bold group"
                >
                  Book This Suite Now 
                  <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
