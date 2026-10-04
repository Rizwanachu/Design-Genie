import cochinAirportImg from "@/assets/images/cochin-airport.jpg";

type AdditionalService = {
  title: string;
  description: string;
  link?: string;
  phone?: string;
  image: string;
  naturalSize: boolean;
};

export const additionalServices: AdditionalService[] = [
  {
    title: "WH Restaurant — Arabian Sea Delights",
    description:
      "Restaurant services may be temporarily unavailable due to maintenance. Please contact us at +91 7994912900 to confirm availability before planning your meals.",
    phone: "+91 7994912900",
    image: "/attached_assets/Remove_menu_and_recommendations_2K_202608071418_1786092945579.jpeg",
    naturalSize: true,
  },
  {
    title: "Airport Transfer",
    description:
      "Convenient and reliable airport pickup and drop-off services for a stress-free journey.",
    image: cochinAirportImg,
    naturalSize: false,
  },
];