import { useQuery } from "@tanstack/react-query";
import { type Room } from "@shared/schema";
import { roomsData } from "@/data/rooms";

export function useRooms() {
  return useQuery({
    queryKey: ["/api/rooms"],
    queryFn: async () => {
      return roomsData;
    },
  });
}

export function useRoom(slug: string) {
  return useQuery({
    queryKey: ["/api/rooms", slug],
    queryFn: async () => {
      return roomsData.find(r => r.slug === slug) || null;
    },
    enabled: !!slug,
  });
}
