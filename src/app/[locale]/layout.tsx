import type { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";
import { getDictionary, locales, type Locale } from "@/lib/i18n/dictionaries";
import { resolveLocale } from "@/lib/i18n";
import LanguageSwitcher from "@/components/language-switcher";
import NavLinkHighlight from "@/components/nav-link-highlight";
import MobileNav from "@/components/mobile-nav";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export const dynamicParams = false;

export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> => {
  const resolvedParams = await params;
  const locale = resolveLocale(resolvedParams.locale);
  const dictionary = await getDictionary(locale);

  return {
    title: "Al Nabila Developments",
    description: dictionary.meta.siteDescription,
  };
};

const navigationLinkMap: Record<string, string> = {
  home: "",
  about: "about",
  projects: "projects",
  contact: "contact",
};

const buildHref = (locale: Locale, key: keyof typeof navigationLinkMap) => {
  const suffix = navigationLinkMap[key];
  return suffix ? `/${locale}/${suffix}` : `/${locale}`;
};

type Awaitable<T> = T | Promise<T>;

const resolveParams = async <T,>(params: Awaitable<T>): Promise<T> => {
  return params instanceof Promise ? await params : params;
};

const LocaleLayout = async ({ params, children }: LocaleLayoutProps) => {
  const resolvedParams = await resolveParams(params);
  const locale = resolveLocale(resolvedParams.locale);

  if (!locales.includes(locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale);

  // Check if this is the home page by looking at the pathname
  const headersList = await headers();
  const pathname =
    headersList.get("x-pathname") || headersList.get("x-invoke-path") || "";
  const pathSegments = pathname.split("/").filter(Boolean);
  // Home page is when we only have the locale segment or empty path
  const isHomePage =
    pathSegments.length === 0 ||
    (pathSegments.length === 1 && locales.includes(pathSegments[0] as Locale));

  return (
    <div
      className={clsx(
        "app-body",
        locale === "ar" && "rtl",
        isHomePage && "home-layout"
      )}
    >
      <header className={clsx("nav-bar", isHomePage && "nav-bar-fixed")}>
        <Link href={buildHref(locale, "home")} className="brand">
          <Image
            src="/alresalah_group_logo_preview.png"
            alt="Alresalah Group logo"
            width={160}
            height={48}
            priority
            quality={100}
            className="logo"
          />
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {dictionary.nav.links.map((link) => (
            <NavLinkHighlight
              key={link.hrefKey}
              href={buildHref(locale, link.hrefKey)}
            >
              {link.label}
            </NavLinkHighlight>
          ))}
        </nav>
        <div className="cta-stack">
          <div className="desktop-lang-switcher">
            <LanguageSwitcher
              currentLocale={locale}
              label={dictionary.nav.languageLabel}
              languages={dictionary.nav.languages}
            />
          </div>
          <MobileNav
            locale={locale}
            links={dictionary.nav.links}
            languageLabel={dictionary.nav.languageLabel}
            languages={dictionary.nav.languages}
          />
        </div>
      </header>
      <main>{children}</main>
      {!isHomePage && (
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
      )}
    </div>
  );
};

export default LocaleLayout;
