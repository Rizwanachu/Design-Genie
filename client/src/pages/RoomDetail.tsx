import { Link } from "wouter";
import { ArrowLeft, ArrowRight, BedDouble, Bath, Users } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { roomsData } from "@/data/rooms";
import { PHONE } from "@/lib/site";

type RoomDetailProps = {
  params: {
    slug: string;
  };
};

export default function RoomDetail({ params }: RoomDetailProps) {
  const room = roomsData.find((item) => item.slug === params.slug);

  if (!room) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SEO
          title="Room Not Found | W&H View Residency"
          description="The room page you requested could not be found."
          path={`/rooms/${encodeURIComponent(params.slug)}`}
          noindex
        />
        <Navigation />
        <main className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 pt-24 text-center">
          <h1 className="mb-4 text-4xl font-display font-bold text-white">
            Room not found
          </h1>
          <p className="mb-8 max-w-lg text-muted-foreground">
            This room page may have moved. Browse the available suites to find
            the right stay.
          </p>
          <Link href="/#rooms">
            <Button className="bg-primary text-primary-foreground">
              Browse rooms
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const description = `${room.description} View room facilities, occupancy, and contact W&H View Residency in Mattancherry, Kochi to ask about availability.`;
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/#rooms" },
    { name: room.name, path: `/rooms/${room.slug}` },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={`${room.name} | W&H View Residency, Kochi`}
        description={description}
        path={`/rooms/${room.slug}`}
        image={room.imageUrl}
        breadcrumbs={breadcrumbs}
        schema={{
          "@type": "HotelRoom",
          "@id": `https://www.whv-residency.com/rooms/${room.slug}#room`,
          name: room.name,
          description: room.description,
          image: room.gallery?.length ? room.gallery : [room.imageUrl],
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
          containedInPlace: { "@id": "https://www.whv-residency.com/#hotel" },
        }}
      />
      <Navigation />
      <main className="pt-28">
        <div className="container mx-auto px-4 py-6 md:px-6">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/#rooms" className="hover:text-primary">
                  Rooms
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">
                {room.name}
              </li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="overflow-hidden rounded-lg border border-white/10 bg-card">
              <img
                src={room.imageUrl}
                alt={`${room.name} at W&H View Residency in Kochi`}
                loading="eager"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
              {room.gallery && room.gallery.length > 1 && (
                <div className="grid grid-cols-3 gap-2 border-t border-white/10 p-2">
                  {room.gallery.slice(0, 3).map((image, index) => (
                    <img
                      key={image}
                      src={image}
                      alt={`${room.name} room view ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full rounded object-cover"
                    />
                  ))}
                </div>
              )}
            </div>

            <section>
              <Link
                href="/#rooms"
                className="mb-5 inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80"
              >
                <ArrowLeft size={16} aria-hidden="true" />
                All rooms
              </Link>
              <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-primary">
                W&H View Residency · Mattancherry, Kochi
              </p>
              <h1 className="mb-5 text-4xl font-display font-bold text-white md:text-5xl">
                {room.name}
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                {room.description}
              </p>

              <div className="mb-8 grid grid-cols-2 gap-4 rounded-lg border border-white/10 bg-card p-5 sm:grid-cols-4">
                <div className="flex items-center gap-2 text-sm text-white">
                  <BedDouble className="h-4 w-4 text-primary" />
                  <span>{room.beds}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white">
                  <Users className="h-4 w-4 text-primary" />
                  <span>{room.adults} adults</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white">
                  <Bath className="h-4 w-4 text-primary" />
                  <span>{room.bathrooms} bathroom</span>
                </div>
                <div className="text-sm text-white">{room.size}</div>
              </div>

              <h2 className="mb-4 text-2xl font-display font-semibold text-white">
                Room facilities
              </h2>
              <ul className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {(room.features ?? []).map((feature) => (
                  <li
                    key={feature}
                    className="rounded border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-muted-foreground"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              <a href={`tel:${PHONE}`} className="inline-block">
                <Button className="bg-primary px-7 py-6 text-base text-primary-foreground hover:bg-primary/90">
                  Ask about availability
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </a>
              <p className="mt-4 text-sm text-muted-foreground">
                Contact the hotel directly for current rates and availability.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}