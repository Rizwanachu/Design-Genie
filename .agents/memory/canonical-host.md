---
name: Canonical host
description: The production Vercel site uses the www hostname as its canonical host.
---

Use `https://www.whv-residency.com` for canonical page URLs, sitemap entries, the robots.txt sitemap reference, Open Graph URLs, and structured-data identifiers. The apex domain redirects to `www`.

**Why:** Sitemap entries and canonical metadata must match the host Vercel actually serves, or crawlers may encounter redirects and inconsistent host signals.

**How to apply:** Before changing the SEO host, verify the live Vercel redirect behavior. Keep the www host consistent unless the Vercel domain redirect configuration changes.