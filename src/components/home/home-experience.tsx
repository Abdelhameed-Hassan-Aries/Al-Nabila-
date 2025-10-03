"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import type { Dictionary, Locale } from "@/lib/i18n/dictionaries";
import ContactForm from "@/components/shared/contact-form";
import SnapNavDots from "./snap-nav-dots";

type HomeExperienceProps = {
  dictionary: Dictionary;
  locale: Locale;
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const HomeExperience = ({ dictionary, locale }: HomeExperienceProps) => {
  const [mounted, setMounted] = useState(false);

  const {
    hero,
    metrics,
    architecturalStatement,
    projectShowcase,
    pillars,
    contact,
  } = dictionary.home;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <SnapNavDots />
      <div
        className="home-snap"
        data-page="home"
        style={
          {
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          } as React.CSSProperties
        }
      >
        <section className="snap-section" id="hero">
          <div className="inner">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="hero-content"
            >
              <span className="hero-badge">{hero.kicker}</span>
              <h1 className="hero-title">{hero.title}</h1>
              <p className="hero-subtitle">{hero.subtitle}</p>
              <div className="cta-stack" style={{ gap: "1.25rem" }}>
                <a href="#projects" className="button-primary">
                  {hero.primaryCta}
                </a>
                <a href="#story" className="button-secondary">
                  {hero.secondaryCta}
                </a>
              </div>
            </motion.div>

            <motion.div className="grid-3" style={{ marginTop: "5rem" }}>
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="metric-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: mounted ? 0.3 + index * 0.15 : 0, // Only delay when mounted
                    ease: "easeOut",
                  }}
                >
                  <span className="metric-value">{metric.value}</span>
                  <span className="metric-label">{metric.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="projects" className="snap-section">
          <div className="inner">
            <motion.div
              className="section-header"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              variants={fadeInUp}
            >
              <span className="section-badge">{projectShowcase.caption}</span>
              <h2 className="section-title">{projectShowcase.heading}</h2>
            </motion.div>
            <div className="grid-3">
              {projectShowcase.items.map((item, index) => (
                <motion.article
                  key={item.name}
                  className="project-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
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
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="story" className="snap-section">
          <div className="inner">
            <motion.div
              className="section-header"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              variants={fadeInUp}
            >
              <span className="section-badge">{pillars.title}</span>
              <h2 className="section-title">{architecturalStatement.title}</h2>
              <p className="section-subtitle">{architecturalStatement.body}</p>
            </motion.div>
            <div className="grid-3">
              {pillars.items.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  className="card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <h3 className="card-title">{pillar.title}</h3>
                  <p className="card-text">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="home-contact" className="snap-section contact-section">
          <div className="inner">
            <motion.div
              className="section-header"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              variants={fadeInUp}
            >
              <span className="section-badge">{contact.subtitle}</span>
              <h2 className="section-title">{contact.title}</h2>
            </motion.div>
            <ContactForm dictionary={contact} locale={locale} />
          </div>
        </section>

        <section id="footer" className="snap-section footer-section">
          <div className="inner">
            <div className="footer-grid">
              <div className="footer-brand">
                <Image
                  src="/alresalah_group_logo_preview.png"
                  alt="Alresalah Group"
                  width={200}
                  height={60}
                  quality={100}
                />
                <p>{dictionary.footer.about}</p>
              </div>
              <div>
                <h4 className="footer-title">
                  {dictionary.footer.contactTitle}
                </h4>
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
                <h4 className="footer-title">
                  {dictionary.footer.socialsLabel}
                </h4>
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
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeExperience;
