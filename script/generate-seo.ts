import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { roomsData } from "../client/src/data/rooms";
import {
  ADDRESS,
  EMAIL,
  GEO,
  HOTEL_DESCRIPTION,
  HOTEL_NAME,
  PHONE,
  SITE_URL,
  SOCIAL_LINKS,
  absoluteUrl,
} from "../client/src/lib/site";

type Page = {
  file: string;
  path: string;
  title: string;
  description: string;
  image?: string;
  breadcrumbs?: { name: string; path: string }[];
  extraSchema?: Record<string, unknown>;
};

const basePages: Page[] = [
  {
    file: "policies.html",
    path: "/policies",
    title: "Hotel Policies & Services | W&H View Residency, Kochi",
    description:
      "Review check-in and check-out times, hotel policies, dining availability, parking, Wi-Fi, and additional services at W&H View Residency in Kochi.",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Policies & Services", path: "/policies" },
    ],
  },
  {
    file: "gallery.html",
    path: "/gallery",
    title: "Hotel Rooms & Property Gallery | W&H View Residency, Kochi",
    description:
      "View photos of guest rooms, hotel spaces, and dining at W&H View Residency in Mattancherry, Kochi.",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Gallery", path: "/gallery" },
    ],
  },
  {
    file: "contact.html",
    path: "/contact",
    title: "Contact & Location | W&H View Residency, Mattancherry",
    description:
      "Contact W&H View Residency to ask about room availability and hotel services. Find our address in Mattancherry, Kochi, Kerala.",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ],
    extraSchema: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#hotel`,
      name: HOTEL_NAME,
      telephone: PHONE,
      email: EMAIL,
      address: { "@type": "PostalAddress", ...ADDRESS },
      geo: {
        "@type": "GeoCoordinates",
        latitude: GEO.latitude,
        longitude: GEO.longitude,
      },
    },
  },
  {
    file: "privacy-policy.html",
    path: "/privacy-policy",
    title: "Privacy Policy | W&H View Residency",
    description:
      "Read how W&H View Residency handles personal information submitted through hotel booking inquiries and website interactions.",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Privacy Policy", path: "/privacy-policy" },
    ],
  },
];

function jsonLdForPage(page: Page) {
  const canonicalUrl = absoluteUrl(page.path);
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: HOTEL_NAME,
      url: SITE_URL,
      logo: absoluteUrl("/favicon.png"),
      sameAs: SOCIAL_LINKS,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: HOTEL_NAME,
      description: HOTEL_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: page.title,
      description: page.description,
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
  ];

  if (page.extraSchema) graph.push(page.extraSchema);
  if (page.breadcrumbs?.length) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: page.breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: absoluteUrl(item.path),
      })),
    });
  }

  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph })
    .replace(/</g, "\\u003c");
}

function setMeta(html: string, selector: string, tag: string) {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`<meta ${escapedSelector}[^>]*>`);
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace("</head>", `    ${tag}\n  </head>`);
}

function buildHtml(template: string, page: Page) {
  const canonicalUrl = absoluteUrl(page.path);
  const imageUrl = absoluteUrl(
    page.image ??
      "/attached_assets/Adjust_lighting_and_remove_person_202609031225_1788949741132.jpeg",
  );
  let html = template.replace(/<title>[\s\S]*?<\/title>/, `<title>${page.title}</title>`);
  html = setMeta(html, 'name="description"', `<meta name="description" content="${page.description}" />`);
  html = setMeta(html, 'name="robots"', '<meta name="robots" content="index,follow" />');
  html = setMeta(html, 'property="og:title"', `<meta property="og:title" content="${page.title}" />`);
  html = setMeta(html, 'property="og:description"', `<meta property="og:description" content="${page.description}" />`);
  html = setMeta(html, 'property="og:type"', '<meta property="og:type" content="website" />');
  html = setMeta(html, 'property="og:url"', `<meta property="og:url" content="${canonicalUrl}" />`);
  html = setMeta(html, 'property="og:image"', `<meta property="og:image" content="${imageUrl}" />`);
  html = setMeta(html, 'name="twitter:card"', '<meta name="twitter:card" content="summary_large_image" />');
  html = setMeta(html, 'name="twitter:title"', `<meta name="twitter:title" content="${page.title}" />`);
  html = setMeta(html, 'name="twitter:description"', `<meta name="twitter:description" content="${page.description}" />`);
  html = setMeta(html, 'name="twitter:image"', `<meta name="twitter:image" content="${imageUrl}" />`);
  html = html.replace(
    /<link rel="canonical"[^>]*>/,
    `<link rel="canonical" href="${canonicalUrl}" />`,
  );
  html = html.replace(
    "</head>",
    `    <script type="application/ld+json" data-seo-structured-data="true">${jsonLdForPage(page)}</script>\n  </head>`,
  );
  return html;
}

export async function generateSeoDocuments(publicDirectory: string) {
  const template = await readFile(path.join(publicDirectory, "index.html"), "utf8");
  const home: Page = {
    file: "index.html",
    path: "/",
    title: "W&H View Residency | Boutique Hotel in Mattancherry, Kochi",
    description:
      "Stay at W&H View Residency in Mattancherry, Kochi. Explore comfortable hotel rooms, local attractions, and contact us to plan your stay.",
    extraSchema: {
      "@type": "LodgingBusiness",
      "@id": `${SITE_URL}/#hotel`,
      name: HOTEL_NAME,
      url: SITE_URL,
      description: HOTEL_DESCRIPTION,
      telephone: PHONE,
      email: EMAIL,
      address: { "@type": "PostalAddress", ...ADDRESS },
      geo: {
        "@type": "GeoCoordinates",
        latitude: GEO.latitude,
        longitude: GEO.longitude,
      },
    },
  };

  const roomPages: Page[] = roomsData.map((room) => ({
    file: `room-${room.slug}.html`,
    path: `/rooms/${room.slug}`,
    title: `${room.name} | W&H View Residency, Kochi`,
    description: `${room.description} View room facilities, occupancy, and contact W&H View Residency in Mattancherry, Kochi to ask about availability.`,
    image: room.imageUrl,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Rooms", path: "/#rooms" },
      { name: room.name, path: `/rooms/${room.slug}` },
    ],
    extraSchema: {
      "@type": "HotelRoom",
      "@id": `${SITE_URL}/rooms/${room.slug}#room`,
      name: room.name,
      description: room.description,
      image: room.gallery?.length ? room.gallery.map(absoluteUrl) : [absoluteUrl(room.imageUrl)],
      occupancy: {
        "@type": "QuantitativeValue",
        value: room.adults,
        unitText: "adults",
      },
      amenityFeature: (room.features ?? []).map((feature) => ({
        "@type": "LocationFeatureSpecification",
        name: feature,
        value: true,
      })),
      containedInPlace: { "@id": `${SITE_URL}/#hotel` },
    },
  }));
  const pages = [home, ...basePages, ...roomPages];
  const seoDirectory = path.join(publicDirectory, "seo");
  await mkdir(seoDirectory, { recursive: true });

  for (const page of pages) {
    const destination =
      page.file === "index.html"
        ? path.join(publicDirectory, page.file)
        : path.join(seoDirectory, page.file);
    await writeFile(destination, buildHtml(template, page), "utf8");
  }

  const date = new Date().toISOString().slice(0, 10);
  const sitemapUrls = pages
    .map(
      (page) =>
        `  <url><loc>${absoluteUrl(page.path)}</loc><lastmod>${date}</lastmod></url>`,
    )
    .join("\n");
  await writeFile(
    path.join(publicDirectory, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`,
    "utf8",
  );

  console.log(`Generated SEO documents for ${pages.length} public routes.`);
}