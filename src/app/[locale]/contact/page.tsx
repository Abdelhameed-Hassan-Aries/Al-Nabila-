import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { resolveLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n/dictionaries";

const ContactForm = dynamic(() => import("@/components/shared/contact-form"));

type ContactPageProps = {
  params: Promise<{ locale: string }>;
};

export const generateMetadata = async ({
  params,
}: ContactPageProps): Promise<Metadata> => {
  const resolvedParams = await params;
  const locale = resolveLocale(resolvedParams.locale);
  const dictionary = await getDictionary(locale);

  return {
    title: "Al Nabila Developments | Contact",
    description: dictionary.contact.hero.subtitle,
  };
};

const ContactPage = async ({ params }: ContactPageProps) => {
  const resolvedParams = await params;
  const locale = resolveLocale(resolvedParams.locale);
  const dictionary = await getDictionary(locale);

  const { hero, form, visit } = dictionary.contact;

  return (
    <>
      <div className="hero-section" data-page="contact">
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">{hero.subtitle}</span>
            <h1 className="hero-title">{hero.title}</h1>
          </div>
        </div>
      </div>

      <section className="page-section compact">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">{form.title}</span>
            <h2 className="section-title">Send Us a Message</h2>
          </div>
          <ContactForm dictionary={form} locale={locale} />
        </div>
      </section>

      <section className="page-section compact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{visit.title}</h2>
            <p className="section-subtitle">{visit.caption}</p>
          </div>
          <div className="map-container">
            <iframe
              title="Al Nabila Developments Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.1045293634684!2d31.442706999999998!3d29.995424999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583b9f0f61f4d7%3A0xda1bffb07d3b7c52!2sSouth%2090th%20Street!5e0!3m2!1sen!2seg!4v1700000000000"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
