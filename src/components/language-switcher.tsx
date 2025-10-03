"use client";

import { clsx } from "clsx";
import { useTransition } from "react";
import { useRouter, usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n/dictionaries";
import { resolveLocale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  label: string;
  languages: Record<Locale, string>;
};

const LanguageSwitcher = ({
  currentLocale,
  label,
  languages,
}: LanguageSwitcherProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleSwitch = (locale: Locale) => {
    if (locale === currentLocale || !locales.includes(locale)) return;

    const segments = pathname ? pathname.split("/").filter(Boolean) : [];

    if (segments.length === 0) {
      router.push(`/${locale}`);
      return;
    }

    if (locales.includes(resolveLocale(segments[0]))) {
      segments[0] = locale;
    } else {
      segments.unshift(locale);
    }

    startTransition(() => {
      router.push(`/${segments.join("/")}`);
    });
  };

  return (
    <div
      className={clsx("language-switcher", isPending && "pending")}
      aria-label={label}
      role="group"
    >
      {locales.map((locale) => (
        <button
          key={locale}
          type="button"
          className={clsx(locale === currentLocale && "active")}
          onClick={() => handleSwitch(locale)}
          disabled={isPending && locale === currentLocale}
        >
          {languages[locale]}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
