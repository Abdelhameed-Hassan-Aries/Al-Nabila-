import type { Metadata } from "next";
import { getDictionary, type Locale } from "@/lib/i18n/dictionaries";
import { resolveLocale } from "@/lib/i18n";
import HomeExperience from "@/components/home/home-experience";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const resolvedParams = await params;
  const locale = resolveLocale(resolvedParams.locale);
  const dictionary = await getDictionary(locale);

  return {
    title: "Al Nabila Developments | Home",
    description: dictionary.meta.siteDescription,
  };
};

const LocaleHomePage = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const locale = resolveLocale(resolvedParams.locale);
  const dictionary = await getDictionary(locale);

  return <HomeExperience dictionary={dictionary} locale={locale as Locale} />;
};

export default LocaleHomePage;
