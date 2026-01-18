import { z } from 'zod';
import { insertBookingRequestSchema, insertInquirySchema, rooms } from './schema';

export const api = {
  rooms: {
    list: {
      method: 'GET' as const,
      path: '/api/rooms',
      responses: {
        200: z.array(z.custom<typeof rooms.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/rooms/:slug',
      responses: {
        200: z.custom<typeof rooms.$inferSelect>(),
        404: z.object({ message: z.string() }),
      },
    },
  },
  bookings: {
    create: {
      method: 'POST' as const,
      path: '/api/bookings',
      input: insertBookingRequestSchema,
      responses: {
        201: z.object({ message: z.string(), id: z.number() }),
        400: z.object({ message: z.string() }),
      },
    },
  },
  contact: {
    create: {
      method: 'POST' as const,
      path: '/api/contact',
      input: insertInquirySchema,
      responses: {
        201: z.object({ message: z.string(), id: z.number() }),
        400: z.object({ message: z.string() }),
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
