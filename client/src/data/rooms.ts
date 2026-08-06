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
    imageUrl: "/assets/image_1786016987936.png",
    gallery: [
      "/assets/image_1786016987936.png",
      "/assets/image_1786016996748.png",
      "/assets/image_1786017034298.png",
      "/assets/image_1786017050895.png"
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
    imageUrl: "/assets/image_1786017471542.png",
    gallery: [
      "/assets/image_1786017471542.png",
      "/assets/image_1786017506682.png",
      "/assets/image_1786017513547.png",
      "/assets/image_1786017522550.png"
    ]
  }
];
