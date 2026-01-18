import { pgTable, text, serial, integer, boolean, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === ROOMS TABLE ===
export const rooms = pgTable("rooms", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(), // for friendly URLs if needed
  description: text("description").notNull(),
  size: text("size").notNull(),
  beds: text("beds").notNull(),
  bathrooms: integer("bathrooms").notNull(),
  adults: integer("adults").notNull(),
  children: integer("children").notNull(),
  view: text("view"),
  price: integer("price"), // Stored in lowest currency unit (e.g., cents/paisa) or just display text if variable
  roomNumbers: text("room_numbers").array(),
  features: text("features").array(),
  imageUrl: text("image_url").notNull(), // Placeholder for now
});

export const insertRoomSchema = createInsertSchema(rooms).omit({ id: true });
export type Room = typeof rooms.$inferSelect;
export type InsertRoom = z.infer<typeof insertRoomSchema>;

// === BOOKING REQUESTS TABLE ===
export const bookingRequests = pgTable("booking_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  checkIn: timestamp("check_in"),
  checkOut: timestamp("check_out"),
  adults: integer("adults"),
  children: integer("children"),
  roomType: text("room_type"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
  status: text("status").default("pending"), // pending, contacted, resolved
});

export const insertBookingRequestSchema = createInsertSchema(bookingRequests).omit({ id: true, createdAt: true, status: true });
export type BookingRequest = typeof bookingRequests.$inferSelect;
export type InsertBookingRequest = z.infer<typeof insertBookingRequestSchema>;

// === CONTACT INQUIRIES TABLE ===
export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  subject: text("subject"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertInquirySchema = createInsertSchema(inquiries).omit({ id: true, createdAt: true });
export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;
