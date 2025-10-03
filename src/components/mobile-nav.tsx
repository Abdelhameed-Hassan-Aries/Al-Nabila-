"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n/dictionaries";
import LanguageSwitcher from "./language-switcher";

type MobileNavProps = {
  locale: Locale;
  links: Array<{ label: string; hrefKey: string }>;
  languageLabel: string;
  languages: Record<Locale, string>;
};

const navigationLinkMap: Record<string, string> = {
  home: "",
  about: "about",
  projects: "projects",
  contact: "contact",
};

const MobileNav = ({
  locale,
  links,
  languageLabel,
  languages,
}: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const buildHref = (locale: Locale, key: string) => {
    const suffix = navigationLinkMap[key];
    return suffix ? `/${locale}/${suffix}` : `/${locale}`;
  };

  return (
    <>
      <button
        className="mobile-menu-button"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        type="button"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M3 7h14M3 12h14" />
        </svg>
      </button>

      <div
        className={`mobile-overlay ${isOpen ? "open" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <button
          className="mobile-menu-close"
          onClick={closeMenu}
          aria-label="Close menu"
          type="button"
        >
          ×
        </button>
        <nav className="mobile-menu-links">
          {links.map((link) => {
            const href = buildHref(locale, link.hrefKey);
            // For home page, only match exact pathname
            const isHome = link.hrefKey === "home";
            const isActive = isHome
              ? pathname === href
              : pathname === href || pathname?.startsWith(href + "/");
            return (
              <Link
                key={link.hrefKey}
                href={href}
                className={isActive ? "active" : ""}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="mobile-menu-footer">
          <LanguageSwitcher
            currentLocale={locale}
            label={languageLabel}
            languages={languages}
          />
        </div>
      </div>
    </>
  );
};

export default MobileNav;
