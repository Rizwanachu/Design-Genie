import {
  rooms,
  bookingRequests,
  inquiries,
  type Room,
  type InsertRoom,
  type BookingRequest,
  type InsertBookingRequest,
  type Inquiry,
  type InsertInquiry,
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // Rooms
  getRooms(): Promise<Room[]>;
  getRoomBySlug(slug: string): Promise<Room | undefined>;
  createRoom(room: InsertRoom): Promise<Room>;

  // Bookings
  createBookingRequest(booking: InsertBookingRequest): Promise<BookingRequest>;

  // Inquiries
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
}

export class DatabaseStorage implements IStorage {
  // Rooms
  async getRooms(): Promise<Room[]> {
    return await db.select().from(rooms);
  }

  async getRoomBySlug(slug: string): Promise<Room | undefined> {
    const [room] = await db.select().from(rooms).where(eq(rooms.slug, slug));
    return room;
  }

  async createRoom(room: InsertRoom): Promise<Room> {
    const [newRoom] = await db.insert(rooms).values(room).returning();
    return newRoom;
  }

  // Bookings
  async createBookingRequest(booking: InsertBookingRequest): Promise<BookingRequest> {
    const [newBooking] = await db.insert(bookingRequests).values(booking).returning();
    return newBooking;
  }

  // Inquiries
  async createInquiry(inquiry: InsertInquiry): Promise<Inquiry> {
    const [newInquiry] = await db.insert(inquiries).values(inquiry).returning();
    return newInquiry;
  }
}

export const storage = new DatabaseStorage();
