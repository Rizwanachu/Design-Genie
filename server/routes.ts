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
      description: "Experience unmatched luxury with our AI-powered king-size bed featuring massage functionality, premium pillow options, smart controls, and a serene river view.",
      size: "34 sqm",
      beds: "1",
      bathrooms: 1,
      adults: 2,
      children: 2,
      view: "River View",
      price: 15000,
      roomNumbers: ["105", "210"],
      features: [
        "Breakfast Included", "Flat TV", "Hairdryer", "Writing Desk", 
        "Towel Warmer", "Bathtub", "Balcony", "Ironing Board", 
        "Kettle", "Telephone", "Safe"
      ],
      imageUrl: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop",
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
      features: [
        "Breakfast Included", "Flat TV", "Hairdryer", "Writing Desk", 
        "Towel Warmer", "Bathtub", "Balcony", "Ironing Board", 
        "Kettle", "Telephone", "Safe"
      ],
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
      features: [
        "Breakfast Included", "Flat TV", "Hairdryer", "Writing Desk", 
        "Towel Warmer", "Bathtub", "Balcony", "Ironing Board", 
        "Kettle", "Telephone", "Safe"
      ],
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
