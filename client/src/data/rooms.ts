import { type Room } from "@shared/schema";

export const roomsData: Room[] = [
  {
    id: 1,
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
    imageUrl: "/attached_assets/image_1768910147198.png",
    gallery: [
      "/attached_assets/image_1768910147198.png",
      "/attached_assets/image_1768910169247.png",
      "/attached_assets/image_1768910180678.png",
      "/attached_assets/image_1768910190709.png"
    ]
  },
  {
    id: 2,
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
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: 3,
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
    gallery: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544124499-58912cbddaad?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611048238356-9fcf197ff642?q=80&w=1000&auto=format&fit=crop"
    ]
  }
];
