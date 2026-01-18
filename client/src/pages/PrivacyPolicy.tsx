import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <Card className="border-none bg-card/50 backdrop-blur-sm">
          <CardHeader className="text-center pb-8 border-b border-white/5">
            <CardTitle className="text-3xl md:text-4xl font-display font-bold text-primary">Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="pt-8 space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <p>
                W&H View Residency (herein referred to as “W&H”, “the Company”, “we”, “us”, or “our”) is committed to respecting your privacy and ensuring that your personal information is handled responsibly and in compliance with applicable data protection laws.
              </p>
              <p className="mt-4">
                This Privacy Policy (“Policy”) applies to all users (“you”, “your”, “User”) who interact with:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Our website: https://whv-residency.com</li>
                <li>Any digital platforms, applications, or services operated by W&H</li>
              </ul>
              <p className="mt-4">
                Except where specified, you may browse our website or use our platforms without disclosing your identity. However, certain features or services may require the collection and use of personal information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-display font-semibold text-white">1. Personal Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-primary/90">A. Information Provided by You</h3>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Contact Information: Name, phone number, postal address, email address</li>
                    <li>Reservation Details: Dates of stay, special requests, number of guests</li>
                    <li>Identification Information: Government-issued ID, nationality (as required by law)</li>
                    <li>Payment Information: Payment method, transaction details (not stored by us)</li>
                    <li>Account Information (if you register): Username, email, password</li>
                    <li>Feedback or Inquiry Data: Any information submitted through forms or communication</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-primary/90">B. Information Collected Automatically</h3>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>IP address</li>
                    <li>Browser and device type</li>
                    <li>Operating system</li>
                    <li>Pages viewed, duration of visit, referring URL</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-display font-semibold text-white">2. Cookies & Tracking Technologies</h2>
              <p>
                Our website may use cookies to provide a better user experience, analyze traffic, customize content, and improve functionality. You can disable cookies through your browser settings, but some features may not work properly as a result.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-display font-semibold text-white">3. How We Collect Information</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Online forms and booking systems</li>
                <li>Customer surveys and feedback</li>
                <li>Telephone, email, WhatsApp or in-person interactions</li>
                <li>Third-party travel partners and booking platforms (e.g., Booking.com, Airbnb, Makemytrip, etc.)</li>
                <li>Social media engagement</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-display font-semibold text-white">4. Why We Collect Personal Information</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Managing reservations and providing hospitality services</li>
                <li>Verifying identity and complying with legal/KYC requirements</li>
                <li>Responding to queries, complaints, or feedback</li>
                <li>Improving our website, services, and customer experience</li>
                <li>Marketing, promotions, and service updates (with consent where required)</li>
                <li>Ensuring safety and preventing fraud</li>
                <li>Compliance with legal obligations and government requirements</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-display font-semibold text-white">5. Sharing Your Personal Information</h2>
              <p>We may share your personal information with:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Service providers and vendors such as IT partners, payment processors, booking engines</li>
                <li>Government authorities when required by law (e.g., for police guest registration)</li>
                <li>Business partners or affiliates for providing services and offers</li>
                <li>Legal or regulatory authorities when necessary</li>
              </ul>
              <p>We do not sell, rent, or trade your personal information.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-display font-semibold text-white">6. Data Storage, Security & Retention</h2>
              <p>
                Your data is stored securely on controlled servers or trusted third-party providers. We use security measures to protect against unauthorized access, loss, or misuse of data.
              </p>
              <p>
                We retain personal information only as long as necessary to fulfill the purpose for which it was collected or to comply with legal requirements.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-display font-semibold text-white">7. International Transfers</h2>
              <p>
                We do not routinely transfer personal data outside India. If such transfer becomes necessary, we will take measures to ensure adequate protection in compliance with applicable laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-display font-semibold text-white">8. Your Privacy Rights</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate or incomplete data</li>
                <li>Request deletion of your data (where legally permissible)</li>
                <li>Withdraw consent to marketing communications</li>
                <li>Restrict or object to certain processing activities</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-display font-semibold text-white">9. Third-Party Links</h2>
              <p>
                Our website may include links to external websites or platforms. We are not responsible for the privacy practices, content, or policies of such third parties. We encourage you to read their policies separately.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-display font-semibold text-white">10. Contact Us</h2>
              <div className="bg-white/5 p-6 rounded-md">
                <p className="font-semibold text-primary">Data Protection Contact</p>
                <p>W&H View Residency</p>
                <p>Address: 6/153, Jew Town Rd, Kappalandimukku, Mattancherry, Kochi, Kerala 682002, India</p>
                <p>Phone: +91 484 291 2900</p>
                <p>Email: info@whv-residency.com</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-display font-semibold text-white">11. Policy Updates</h2>
              <p>
                This Privacy Policy may be updated periodically. Any updates will be posted on our website with the revised date. Continued use of our services after changes implies acceptance of the updated policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-display font-semibold text-white">12. Jurisdiction</h2>
              <p>
                This Privacy Policy is governed by the laws of India. Any disputes shall fall under the exclusive jurisdiction of the courts of Kerala.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
