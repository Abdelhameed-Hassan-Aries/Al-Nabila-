"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { locales, type Locale, type Dictionary } from "@/lib/i18n/dictionaries";

type FooterWrapperProps = {
  dictionary: Dictionary;
  locale: Locale;
};

const FooterWrapper = ({ dictionary, locale }: FooterWrapperProps) => {
  const pathname = usePathname();

  // Home page is when the pathname is just "/{locale}" (e.g., "/en", "/ar")
  const pathSegments = pathname.split("/").filter(Boolean);
  const isHomePage =
    pathSegments.length === 1 && locales.includes(pathSegments[0] as Locale);

  if (isHomePage) {
    return null;
  }

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <Image
            src="/alresalah_group_logo_preview.png"
            alt="Alresalah Group"
            width={240}
            height={72}
            quality={100}
          />
          <p>{dictionary.footer.about}</p>
        </div>
        <div>
          <h4 className="footer-title">{dictionary.footer.contactTitle}</h4>
          <div className="footer-nav">
            <span>{dictionary.footer.contactInfo.phone}</span>
            <a href="mailto:info@alnabila.com">
              {dictionary.footer.contactInfo.email}
            </a>
            {dictionary.footer.contactInfo.address.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="footer-title">{dictionary.footer.socialsLabel}</h4>
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <span>Fb</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <span>Ig</span>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <span>Yt</span>
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <span>Tk</span>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>{dictionary.footer.rights}</span>
      </div>
    </footer>
  );
};

export default FooterWrapper;
