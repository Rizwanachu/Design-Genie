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

function requireDb() {
  if (!db) throw new Error("DATABASE_URL is not set — database unavailable in this environment.");
  return db;
}

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
    return await requireDb().select().from(rooms);
  }

  async getRoomBySlug(slug: string): Promise<Room | undefined> {
    const [room] = await requireDb().select().from(rooms).where(eq(rooms.slug, slug));
    return room;
  }

  async createRoom(room: InsertRoom): Promise<Room> {
    const [newRoom] = await requireDb().insert(rooms).values(room).returning();
    return newRoom;
  }

  // Bookings
  async createBookingRequest(booking: InsertBookingRequest): Promise<BookingRequest> {
    const [newBooking] = await requireDb().insert(bookingRequests).values(booking).returning();
    return newBooking;
  }

  // Inquiries
  async createInquiry(inquiry: InsertInquiry): Promise<Inquiry> {
    const [newInquiry] = await requireDb().insert(inquiries).values(inquiry).returning();
    return newInquiry;
  }
}

export const storage = new DatabaseStorage();
