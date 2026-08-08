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
    imageUrl: "/assets/image_1768910147198.png",
    gallery: [
      "/assets/image_1768910147198.png",
      "/assets/image_1768910169247.png",
      "/assets/image_1768910180678.png",
      "/assets/image_1768910190709.png"
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
    imageUrl: "/attached_assets/image_1786021526150.png",
    gallery: [
      "/attached_assets/image_1786021526150.png",
      "/attached_assets/image_1786021533433.png",
      "/attached_assets/image_1786021540505.png"
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
    imageUrl: "/attached_assets/image_1786020196801.png",
    gallery: [
      "/attached_assets/image_1786020196801.png",
      "/attached_assets/image_1786020204795.png",
      "/attached_assets/image_1786020211781.png",
      "/attached_assets/image_1786020218959.png"
    ]
  },
  {
    id: 4,
    name: "Heritage Room",
    slug: "heritage-room",
    description: "Settle into a warm, traditional stay with a four-poster bed, handcrafted wood details, and thoughtful modern comforts.",
    size: "30 sqm",
    beds: "1",
    bathrooms: 1,
    adults: 2,
    children: 1,
    view: "Heritage View",
    price: 10000,
    roomNumbers: ["104", "212"],
    features: [
      "Breakfast Included", "Flat TV", "Hairdryer", "Writing Desk",
      "Towel Warmer", "Shower", "Ironing Board", "Kettle",
      "Telephone", "Safe", "Air Conditioning"
    ],
    imageUrl: "/assets/image_1786019758544.png",
    gallery: [
      "/assets/image_1786019758544.png",
      "/assets/image_1786019842267.png",
      "/assets/image_1786019850532.png",
      "/assets/image_1786019869041.png"
    ]
  }
];
