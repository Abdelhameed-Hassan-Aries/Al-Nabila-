"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "projects", label: "Projects" },
  { id: "story", label: "Story" },
  { id: "home-contact", label: "Contact" },
  { id: "footer", label: "Footer" },
];

const SnapNavDots = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(".home-snap");
      if (!container) return;

      // Check if scrolled to bottom (last section)
      const isAtBottom =
        Math.abs(
          container.scrollHeight - container.scrollTop - container.clientHeight
        ) < 10;

      if (isAtBottom) {
        setActiveSection(sections.length - 1);
        return;
      }

      // Find which section is currently most visible in viewport
      const sectionElements = sections.map(
        (section) =>
          document.querySelector(`#${section.id}`) as HTMLElement | null
      );

      let closestSection = 0;
      let minDistance = Infinity;

      sectionElements.forEach((element, index) => {
        if (!element) return;
        const rect = element.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        // Calculate distance from top of container to top of section
        const distance = Math.abs(rect.top - containerRect.top);

        if (distance < minDistance) {
          minDistance = distance;
          closestSection = index;
        }
      });

      setActiveSection(closestSection);
    };

    const container = document.querySelector(".home-snap");
    if (container) {
      container.addEventListener("scroll", handleScroll);
      // Use setTimeout to ensure DOM is ready and initial render is complete
      setTimeout(() => handleScroll(), 100);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToSection = (index: number) => {
    const section = sections[index];
    const element = document.querySelector(`#${section.id}`) as HTMLElement;
    const container = document.querySelector(".home-snap");

    if (element && container) {
      const rect = element.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const scrollTop = container.scrollTop;
      const targetScrollTop = scrollTop + rect.top - containerRect.top;

      container.scrollTo({
        top: targetScrollTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="snap-nav-dots">
      {sections.map((section, index) => (
        <button
          key={section.id}
          className={`snap-nav-dot ${index === activeSection ? "active" : ""}`}
          onClick={() => scrollToSection(index)}
          aria-label={`Go to ${section.label}`}
          type="button"
        >
          <span className="dot-inner" />
        </button>
      ))}
    </div>
  );
};

export default SnapNavDots;
