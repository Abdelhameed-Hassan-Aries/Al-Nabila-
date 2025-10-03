import type { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";
import { getDictionary, locales, type Locale } from "@/lib/i18n/dictionaries";
import { resolveLocale } from "@/lib/i18n";
import LanguageSwitcher from "@/components/language-switcher";
import NavLinkHighlight from "@/components/nav-link-highlight";
import MobileNav from "@/components/mobile-nav";
import FooterWrapper from "@/components/footer-wrapper";

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

  return (
    <div className={clsx("app-body", locale === "ar" && "rtl")}>
      <header className="nav-bar">
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
      <FooterWrapper dictionary={dictionary} locale={locale} />
    </div>
  );
};

export default LocaleLayout;
