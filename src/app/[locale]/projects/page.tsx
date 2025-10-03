import type { Metadata } from "next";
import Image from "next/image";
import dynamic from "next/dynamic";
import { resolveLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n/dictionaries";

const AnimatedCounter = dynamic(
  () => import("@/components/projects/animated-counter")
);

type ProjectsPageProps = {
  params: Promise<{ locale: string }>;
};

export const generateMetadata = async ({
  params,
}: ProjectsPageProps): Promise<Metadata> => {
  const resolvedParams = await params;
  const locale = resolveLocale(resolvedParams.locale);
  const dictionary = await getDictionary(locale);

  return {
    title: "Al Nabila Developments | Projects",
    description: dictionary.projects.hero.subtitle,
  };
};

const ProjectsPage = async ({ params }: ProjectsPageProps) => {
  const resolvedParams = await params;
  const locale = resolveLocale(resolvedParams.locale);
  const dictionary = await getDictionary(locale);

  const { hero, counters, categories, methodology } = dictionary.projects;

  // Get the number of counter items
  const counterItems = [
    { value: 15, duration: 1.2, suffix: "+", label: counters.projects },
    { value: 6000, duration: 1.8, suffix: "+", label: counters.clients },
  ];

  return (
    <>
      <div className="hero-section" data-page="projects">
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">{hero.subtitle}</span>
            <h1 className="hero-title">{hero.title}</h1>
          </div>
        </div>
      </div>

      <section className="page-section compact">
        <div className="container">
          <div
            className={`grid-${counterItems.length} ${
              counterItems.length === 2 ? "grid-center" : ""
            }`}
          >
            {counterItems.map((item, index) => (
              <AnimatedCounter
                key={index}
                from={0}
                to={item.value}
                duration={item.duration}
                suffix={item.suffix}
                label={item.label}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">{categories.title}</span>
            <h2 className="section-title">Our Portfolio</h2>
          </div>
          <div className="grid-3">
            {categories.items.map((item) => (
              <article key={item.name} className="project-card">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={600}
                  height={420}
                />
                <div className="content">
                  <span className="project-badge">{item.location}</span>
                  <h3 className="card-title">{item.name}</h3>
                  <p className="card-text">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section compact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{methodology.title}</h2>
          </div>
          <div className="history-timeline">
            {methodology.steps.map((step) => (
              <article key={step.title} className="history-item">
                <h3 className="card-title">{step.title}</h3>
                <p className="card-text">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
