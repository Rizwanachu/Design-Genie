import { type Room } from "@shared/schema";

export const roomsData: Room[] = [
  {
    id: 1,
    name: "Premium King Room",
    slug: "premium-king",
    description: "Experience unmatched luxury with our adjustable massage bed featuring dual massager, zero-gravity, TV, foot-recline modes, premium pillow options, smart controls, and a serene river view.",
    size: "34 sqm",
    beds: "1 Beds",
    bathrooms: 1,
    adults: 2,
    children: 2,
    view: "River View",
    price: 15000,
    roomNumbers: ["105", "210"],
    features: [
      "Breakfast available on request", "Flat TV", "Writing Desk",
      "Ironing Board",
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
    name: "Deluxe King Room with Massage Bed",
    slug: "deluxe-king",
    description: "Unlike the Standard Room, the Deluxe King Room includes an adjustable massage bed with smart wireless controls, multiple comfort modes, premium bedding, and a calm river-facing atmosphere.",
    size: "23 sqm",
    beds: "1 Beds",
    bathrooms: 1,
    adults: 2,
    children: 2,
    view: "River View",
    price: 12000,
    roomNumbers: ["102", "103", "207", "208"],
    features: [
      "Breakfast available on request", "Adjustable Massage Bed", "Flat TV", "Writing Desk",
      "Ironing Board",
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
    beds: "1 Beds",
    bathrooms: 1,
    adults: 2,
    children: 2,
    view: "City View",
    price: 8000,
    roomNumbers: ["101", "206"],
    features: [
      "Breakfast available on request", "Flat TV", "Writing Desk",
      "Ironing Board",
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
    id: 4,
    name: "Heritage Room",
    slug: "heritage-room",
    description: "Settle into a warm, traditional stay with a four-poster bed, handcrafted wood details, and thoughtful modern comforts.",
    size: "30 sqm",
    beds: "1 Beds",
    bathrooms: 1,
    adults: 2,
    children: 2,
    view: "Heritage View",
    price: 10000,
    roomNumbers: ["104", "209"],
    features: [
      "Breakfast available on request", "Flat TV", "Writing Desk",
      "Shower", "Ironing Board", "Kettle",
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
