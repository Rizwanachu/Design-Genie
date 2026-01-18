import { type Room } from "@shared/schema";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Users, BedDouble, Bath, ArrowRight } from "lucide-react";

interface RoomModalProps {
  room: Room | null;
  isOpen: boolean;
  onClose: () => void;
  onBook: (room: Room) => void;
}

export function RoomModal({ room, isOpen, onClose, onBook }: RoomModalProps) {
  if (!room) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-card border-white/10 text-card-foreground p-0 overflow-hidden">
        <div className="flex flex-col md:flex-row h-[80vh] md:h-auto overflow-y-auto md:overflow-hidden">
          {/* Image Side */}
          <div className="md:w-1/2 h-64 md:h-auto relative">
            <img 
              src={room.imageUrl} 
              alt={room.name} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent md:hidden" />
            <div className="absolute bottom-4 left-4 md:hidden">
              <h3 className="text-xl font-display font-bold text-white">{room.name}</h3>
            </div>
          </div>

          {/* Content Side */}
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col gap-6">
            <DialogHeader className="hidden md:block">
              <DialogTitle className="text-3xl font-display text-primary">{room.name}</DialogTitle>
            </DialogHeader>

            <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/10">
              <div className="flex flex-col items-center text-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Capacity</span>
                <span className="font-semibold">{room.adults} Adults, {room.children} Kids</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <BedDouble className="h-5 w-5 text-primary" />
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Beds</span>
                <span className="font-semibold">{room.beds}</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Bath className="h-5 w-5 text-primary" />
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Bath</span>
                <span className="font-semibold">{room.bathrooms}</span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-display font-semibold text-white">Room Details</h4>
              <p className="text-sm text-muted-foreground whitespace-pre-line">
                {room.description}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-display font-semibold text-white">Room Facilities</h4>
              <ul className="grid grid-cols-1 gap-2">
                {room.features?.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-6">
              <a href="tel:+918129468888">
                <Button 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg font-display"
                >
                  Book This Room <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
