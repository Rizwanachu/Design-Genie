import { useEffect } from "react";
import {
  ADDRESS,
  absoluteUrl,
  EMAIL,
  GEO,
  HOTEL_DESCRIPTION,
  HOTEL_NAME,
  HOTEL_SOCIAL_IMAGE,
  PHONE,
  SITE_URL,
  SOCIAL_LINKS,
} from "@/lib/site";

type Breadcrumb = {
  name: string;
  path: string;
};

type SEOProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  breadcrumbs?: Breadcrumb[];
  schema?: Record<string, unknown>;
};

function setMeta(
  attribute: "name" | "property",
  key: string,
  content: string,
) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
}

export function SEO({
  title,
  description,
  path,
  image = HOTEL_SOCIAL_IMAGE,
  type = "website",
  noindex = false,
  breadcrumbs,
  schema,
}: SEOProps) {
  useEffect(() => {
    const canonicalUrl = absoluteUrl(path);
    const imageUrl = absoluteUrl(image);

    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex,nofollow" : "index,follow");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("property", "og:locale", "en_IN");
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", imageUrl);
    setMeta("property", "og:site_name", HOTEL_NAME);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", imageUrl);

    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const graph: Record<string, unknown>[] = [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}#organization`,
        name: HOTEL_NAME,
        url: SITE_URL,
        logo: absoluteUrl("/favicon.png"),
        sameAs: SOCIAL_LINKS,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        url: SITE_URL,
        name: HOTEL_NAME,
        description: HOTEL_DESCRIPTION,
        publisher: { "@id": `${SITE_URL}#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        description,
        isPartOf: { "@id": `${SITE_URL}#website` },
      },
    ];

    if (schema) {
      graph.push(schema);
    }

    if (breadcrumbs && breadcrumbs.length > 0) {
      graph.push({
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((breadcrumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: breadcrumb.name,
          item: absoluteUrl(breadcrumb.path),
        })),
      });
    }

    const hotelReference = {
      "@type": "Hotel",
      "@id": `${SITE_URL}#hotel`,
      name: HOTEL_NAME,
      url: SITE_URL,
      description: HOTEL_DESCRIPTION,
      telephone: PHONE,
      email: EMAIL,
      image: imageUrl,
      sameAs: SOCIAL_LINKS,
      address: {
        "@type": "PostalAddress",
        ...ADDRESS,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: GEO.latitude,
        longitude: GEO.longitude,
      },
    };

    if (path === "/") {
      graph.push(hotelReference);
    }

    const existingSchema = document.head.querySelector(
      'script[data-seo-structured-data="true"]',
    );
    existingSchema?.remove();

    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.dataset.seoStructuredData = "true";
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": graph,
    });
    document.head.appendChild(schemaScript);
  }, [
    breadcrumbs,
    description,
    image,
    noindex,
    path,
    schema,
    title,
    type,
  ]);

  return null;
}