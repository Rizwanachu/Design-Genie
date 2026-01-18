import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { insertBookingRequestSchema, insertInquirySchema } from "@shared/schema";

async function seedDatabase() {
  const existingRooms = await storage.getRooms();
  if (existingRooms.length === 0) {
    console.log("Seeding rooms...");
    await storage.createRoom({
      name: "Premium King Room",
      slug: "premium-king",
      description: `Experience unparalleled luxury and comfort in our Premium King Room, designed for travelers who seek sophistication and relaxation.

Unmatched Comfort and Style

AI-Powered King-Size Bed: Adjustable height and customizable head/foot positioning with a built-in full-body massage function for the ultimate relaxation experience.
Tailored Rest: Select from 5 premium pillow options to ensure your perfect night’s sleep.
Exclusive Massage Functionality: A special head and back massaging bed adds an extra touch of luxury.

Modern Amenities for a Seamless Stay

Fully Air-Conditioned Room: Enjoy a cool, refreshing ambiance.
Advanced Controls: Touch-screen panels for effortless control of lighting, temperature, and entertainment.
Premium Sound System: Elevate your experience with high-quality music and entertainment.

Hygienic and Practical Bathroom

Cleanliness Redefined: Separate WC, shower, hand-wash area, and neatly arranged bath linens ensure a premium, hygienic experience.
Stunning River View: Soak in the breathtaking Willingdon Island River View, offering a tranquil escape from the everyday.

Whether you're traveling for business or leisure, the Premium King Room promises an unforgettable stay.

Room No: 105 & 210`,
      size: "34sqm",
      beds: "1",
      bathrooms: 1,
      adults: 2,
      children: 2,
      view: "River View",
      price: 15000, // Example price
      roomNumbers: ["105", "210"],
      features: ["Breakfast Included", "Flat Screen TV", "Hairdryer", "Writing Desk", "Towel Warmer", "Shower bathtub", "Balcony or Terrace", "Ironing Board", "Kettle Tea", "Telephone", "Saving Safe", "Transportations", "Rules & Regulations", "Check-in: After 02:00pm", "Checkout: Before 11:00am", "Late Checkout: Additional charge 50% of the room rate", "No smoking inside the room and No pets", "Identification document is must for hotel registration"],
      imageUrl: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1000&auto=format&fit=crop"
      ],
    });

    await storage.createRoom({
      name: "Deluxe King Room",
      slug: "deluxe-king",
      description: "Elegant interiors, premium bedding, smart controls, and a calm river-facing atmosphere designed for comfort and relaxation.",
      size: "23 sqm",
      beds: "2 Beds",
      bathrooms: 2,
      adults: 1,
      children: 2,
      view: "River View",
      price: 12000,
      roomNumbers: ["101", "102", "103", "206", "207", "208"],
      features: ["Breakfast Included", "Flat TV", "Hairdryer", "Writing Desk", "Kettle", "Telephone", "Safe", "Smart Controls"],
      imageUrl: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000&auto=format&fit=crop",
    });

    await storage.createRoom({
      name: "Standard Room",
      slug: "standard-room",
      description: "A comfortable and practical stay with essential amenities, ideal for short visits and business travelers.",
      size: "23 sqm",
      beds: "2 Beds",
      bathrooms: 1,
      adults: 2,
      children: 1,
      view: "City View",
      price: 8000,
      roomNumbers: ["104", "209"],
      features: ["Breakfast Included", "Flat TV", "Writing Desk", "Kettle", "Telephone"],
      imageUrl: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1000&auto=format&fit=crop",
    });
    console.log("Rooms seeded successfully.");
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // Seed data on startup
  seedDatabase();

  // Rooms API
  app.get(api.rooms.list.path, async (_req, res) => {
    const rooms = await storage.getRooms();
    res.json(rooms);
  });

  app.get(api.rooms.get.path, async (req, res) => {
    const room = await storage.getRoomBySlug(req.params.slug);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.json(room);
  });

  // Booking Requests API
  app.post(api.bookings.create.path, async (req, res) => {
    try {
      const input = insertBookingRequestSchema.parse(req.body);
      const booking = await storage.createBookingRequest(input);
      res.status(201).json({ message: "Booking request received", id: booking.id });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid booking data", errors: err.errors });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Contact Inquiries API
  app.post(api.contact.create.path, async (req, res) => {
    try {
      const input = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json({ message: "Inquiry received", id: inquiry.id });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid inquiry data", errors: err.errors });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
