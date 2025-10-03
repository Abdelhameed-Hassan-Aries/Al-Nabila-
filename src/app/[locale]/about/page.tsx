import type { Metadata } from "next";
import Image from "next/image";
import { resolveLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n/dictionaries";

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

export const generateMetadata = async ({
  params,
}: AboutPageProps): Promise<Metadata> => {
  const resolvedParams = await params;
  const locale = resolveLocale(resolvedParams.locale);
  const dictionary = await getDictionary(locale);

  return {
    title: "Al Nabila Developments | About",
    description: dictionary.about.hero.subtitle,
  };
};

const AboutPage = async ({ params }: AboutPageProps) => {
  const resolvedParams = await params;
  const locale = resolveLocale(resolvedParams.locale);
  const dictionary = await getDictionary(locale);

  const { hero, history, board, principles } = dictionary.about;

  return (
    <>
      <div className="hero-section" data-page="about">
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">{hero.subtitle}</span>
            <h1 className="hero-title">{hero.title}</h1>
            <p className="hero-subtitle">{hero.statement}</p>
          </div>
        </div>
      </div>

      <section className="page-section compact">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">{history.title}</span>
            <h2 className="section-title">Our Journey</h2>
          </div>
          <div className="history-timeline">
            {history.items.map((event) => (
              <article key={event.year} className="history-item">
                <span className="history-year">{event.year}</span>
                <h3 className="card-title">{event.summary}</h3>
                <p className="card-text">{event.details}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">{board.subtitle}</span>
            <h2 className="section-title">{board.title}</h2>
          </div>
          <div className="grid-3">
            {board.members.map((member) => (
              <article key={member.name} className="board-card">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={520}
                  height={440}
                />
                <div className="details">
                  <h3 className="card-title">{member.name}</h3>
                  <span className="role">{member.role}</span>
                  <p className="card-text">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section compact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{principles.title}</h2>
          </div>
          <div className="grid-3">
            {principles.items.map((item) => (
              <article key={item.title} className="card">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
