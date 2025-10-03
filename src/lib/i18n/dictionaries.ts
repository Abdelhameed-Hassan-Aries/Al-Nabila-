export const locales = ["en", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

type NavLink = {
  label: string;
  hrefKey: "home" | "about" | "projects" | "contact";
};

type HeroContent = {
  kicker: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
};

type Metric = {
  label: string;
  value: string;
  helper: string;
};

type ProjectHighlight = {
  name: string;
  location: string;
  description: string;
  image: string;
};

type BoardMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

type HistoryEvent = {
  year: string;
  summary: string;
  details: string;
};

type ContactField = {
  name: string;
  label: string;
  placeholder: string;
  type?: "text" | "email" | "tel" | "select" | "textarea";
  options?: string[];
};

export type Dictionary = {
  meta: {
    siteDescription: string;
  };
  nav: {
    links: NavLink[];
    contactCta: string;
    languageLabel: string;
    languages: Record<Locale, string>;
  };
  footer: {
    about: string;
    contactTitle: string;
    contactInfo: {
      phone: string;
      email: string;
      address: string[];
    };
    socialsLabel: string;
    rights: string;
  };
  home: {
    hero: HeroContent;
    metrics: Metric[];
    architecturalStatement: {
      title: string;
      body: string;
      highlight: string;
    };
    projectShowcase: {
      heading: string;
      caption: string;
      items: ProjectHighlight[];
    };
    pillars: {
      title: string;
      items: { title: string; description: string }[];
    };
    contact: {
      title: string;
      subtitle: string;
      submitLabel: string;
      successMessage: string;
      fields: ContactField[];
    };
  };
  about: {
    hero: {
      title: string;
      subtitle: string;
      statement: string;
    };
    history: {
      title: string;
      items: HistoryEvent[];
    };
    board: {
      title: string;
      subtitle: string;
      members: BoardMember[];
    };
    principles: {
      title: string;
      items: { title: string; description: string }[];
    };
  };
  projects: {
    hero: {
      title: string;
      subtitle: string;
    };
    counters: {
      projects: string;
      clients: string;
    };
    categories: {
      title: string;
      items: ProjectHighlight[];
    };
    methodology: {
      title: string;
      steps: { title: string; description: string }[];
    };
  };
  contact: {
    hero: {
      title: string;
      subtitle: string;
    };
    form: {
      title: string;
      submitLabel: string;
      successMessage: string;
      fields: ContactField[];
    };
    visit: {
      title: string;
      caption: string;
    };
  };
};

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    meta: {
      siteDescription:
        "Al Nabila Developments crafts iconic destinations across Egypt by blending visionary architecture with timeless lifestyles.",
    },
    nav: {
      links: [
        { label: "Home", hrefKey: "home" },
        { label: "About", hrefKey: "about" },
        { label: "Projects", hrefKey: "projects" },
        { label: "Contact", hrefKey: "contact" },
      ],
      contactCta: "Partner With Us",
      languageLabel: "Language",
      languages: {
        en: "English",
        ar: "العربية",
      },
    },
    footer: {
      about:
        "Al Nabila Developments is a future-forward Egyptian real estate developer delivering landmark residential and commercial destinations since 1980.",
      contactTitle: "Let's Connect",
      contactInfo: {
        phone: "+20 (0)19046",
        email: "info@alnabila.com",
        address: [
          "South 90th Street",
          "2nd Sector, M4 Building",
          "New Cairo, Egypt",
        ],
      },
      socialsLabel: "Follow our journey",
      rights: "© 2025 Al Nabila Developments. Crafted with purpose.",
    },
    home: {
      hero: {
        kicker: "VISIONARY REAL ESTATE",
        title:
          "Designing immersive lifestyles that redefine skylines across Egypt.",
        subtitle:
          "We conceive, craft, and curate transformative destinations that harmonize bold architecture with sustainable living.",
        primaryCta: "View Our Projects",
        secondaryCta: "Discover Our Story",
      },
      metrics: [
        {
          label: "Delivered destinations",
          value: "280+",
          helper: "Residential, commercial, and hospitality landmarks",
        },
        {
          label: "Clients served",
          value: "6,000+",
          helper: "Families and enterprises empowered across Egypt",
        },
        {
          label: "Years of excellence",
          value: "45",
          helper: "A multigenerational legacy of innovation",
        },
      ],
      architecturalStatement: {
        title: "Architecting the future today",
        body: "Our design language fuses sculptural silhouettes with purposeful functionality. Each community emerges from deep research to anticipate how people will live, work, and thrive in the decades ahead.",
        highlight:
          "Signature developments in New Cairo, New Obour, the North Coast, and beyond showcase our commitment to resilient urbanism.",
      },
      projectShowcase: {
        heading: "Flagship Destinations",
        caption:
          "A curated selection from our residential and commercial universe",
        items: [
          {
            name: "Serenity Residences",
            location: "New Cairo",
            description:
              "Refined villas and elevated community amenities arranged around lush green canopies and water features.",
            image:
              "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600",
          },
          {
            name: "Quest Business District",
            location: "New Obour City",
            description:
              "A mixed-use business quarter with flexible office modules, retail boulevards, and elevated hospitality experiences.",
            image:
              "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?q=80&w=1600",
          },
          {
            name: "NXT Waterfront",
            location: "North Coast",
            description:
              "A contemporary seaside lifestyle hub featuring terraced residences that frame the Mediterranean horizon.",
            image:
              "https://images.unsplash.com/photo-1487956382158-bb926046304a?q=80&w=1600",
          },
        ],
      },
      pillars: {
        title: "Our Pillars",
        items: [
          {
            title: "Immersive placemaking",
            description:
              "We choreograph multisensory journeys across architecture, landscape, and digital services to elevate everyday life.",
          },
          {
            title: "Sustainable progress",
            description:
              "Low-impact materials, energy-efficient systems, and regenerative landscaping anchor every project vision.",
          },
          {
            title: "Collaborative excellence",
            description:
              "We work with global studios and local artisans to deliver precision at every stage from concept to handover.",
          },
        ],
      },
      contact: {
        title: "Design the next destination with us",
        subtitle:
          "Share your vision and our advisory team will craft a bespoke development roadmap tailored to your goals.",
        submitLabel: "Submit Inquiry",
        successMessage:
          "Thank you. Our consultancy team will reach out within 48 hours.",
        fields: [
          {
            name: "name",
            label: "Full name",
            placeholder: "Enter your full name",
            type: "text",
          },
          {
            name: "email",
            label: "Email address",
            placeholder: "name@company.com",
            type: "email",
          },
          {
            name: "phone",
            label: "Phone number",
            placeholder: "+20 1X XXX XXXX",
            type: "tel",
          },
          {
            name: "interest",
            label: "Project interest",
            placeholder: "Select an option",
            type: "select",
            options: [
              "Residential partnership",
              "Commercial leasing",
              "Investment opportunity",
              "Media inquiry",
            ],
          },
          {
            name: "message",
            label: "How can we help?",
            placeholder: "Share details about your vision",
            type: "textarea",
          },
        ],
      },
    },
    about: {
      hero: {
        title: "A multigenerational legacy shaping Egypt's skyline",
        subtitle:
          "From boutique residences to mixed-use districts, Al Nabila continues to imagine new dimensions for urban life.",
        statement:
          "We harness a collaborative ecosystem of architects, technologists, and artisans to deliver timeless value for residents, investors, and communities.",
      },
      history: {
        title: "Timeline",
        items: [
          {
            year: "1980",
            summary: "Founded with a vision for human-centric design",
            details:
              "Our story began with boutique developments in Cairo that placed families at the heart of design decisions.",
          },
          {
            year: "1995",
            summary: "Expanded into integrated communities",
            details:
              "We pioneered mixed-use hubs that introduced retail promenades, landscaped plazas, and cultural venues.",
          },
          {
            year: "2010",
            summary: "Adopted sustainable innovation",
            details:
              "Smart infrastructure, renewable energy systems, and digital concierge services became standard across our projects.",
          },
          {
            year: "2022",
            summary: "International collaborations",
            details:
              "Partnerships with global studios elevated our architectural language and accelerated smart city integrations.",
          },
        ],
      },
      board: {
        title: "Board of Visionaries",
        subtitle:
          "Seasoned leaders guiding Al Nabila's strategy, craftsmanship, and community impact.",
        members: [
          {
            name: "Khaled Al Nabila",
            role: "Executive Chairman",
            bio: "A third-generation developer steering the company's ambitious expansion across Egypt and the region.",
            image:
              "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600",
          },
          {
            name: "Mariam Al Nabila",
            role: "Chief Design Officer",
            bio: "Architect and futurist leading experiential design strategies and global collaborations.",
            image:
              "https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=1600",
          },
          {
            name: "Omar Elkady",
            role: "Chief Development Officer",
            bio: "Real estate strategist overseeing end-to-end delivery with a focus on sustainability and technology.",
            image:
              "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1600",
          },
        ],
      },
      principles: {
        title: "Guiding principles",
        items: [
          {
            title: "People-first urbanism",
            description:
              "We cultivate inclusive, walkable environments that enhance wellbeing and social connection.",
          },
          {
            title: "Design intelligence",
            description:
              "Every project is informed by rigorous research, data modeling, and community listening.",
          },
          {
            title: "Long-term stewardship",
            description:
              "We remain engaged beyond handover to ensure operational excellence and evolving experiences.",
          },
        ],
      },
    },
    projects: {
      hero: {
        title: "Curating a portfolio of progressive destinations",
        subtitle:
          "Explore residential, commercial, and hospitality environments crafted for tomorrow's lifestyles.",
      },
      counters: {
        projects: "Completed & Ongoing Projects",
        clients: "Clients & Residents Served",
      },
      categories: {
        title: "Selected highlights",
        items: [
          {
            name: "Quest Towers",
            location: "Administrative Capital",
            description:
              "Twin mixed-use towers with sky lounges, integrated co-working, and panoramic city views.",
            image:
              "https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=1600",
          },
          {
            name: "Reveal Residences",
            location: "New Cairo",
            description:
              "Layered residential terraces featuring biophilic courtyards and curated wellness amenities.",
            image:
              "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=1600",
          },
          {
            name: "Hope Medical Hub",
            location: "New Obour City",
            description:
              "Next-generation healthcare campus combining specialized clinics with digital-first patient services.",
            image:
              "https://images.unsplash.com/photo-1503389152951-9f343605f61e?q=80&w=1600",
          },
          {
            name: "NXT Marina Residences",
            location: "North Coast",
            description:
              "Elevated marina living with cascading pools, experiential retail, and oceanfront gastronomy.",
            image:
              "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1600",
          },
          {
            name: "Serenity Gardens",
            location: "6th of October City",
            description:
              "Family-focused enclave with community farms, learning centers, and nature-inspired play spaces.",
            image:
              "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600",
          },
          {
            name: "Atlas Corporate Campus",
            location: "Smart Village",
            description:
              "Adaptive office ecosystem integrating digital twin technology and wellness-centric amenities.",
            image:
              "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=1600",
          },
        ],
      },
      methodology: {
        title: "How we build the extraordinary",
        steps: [
          {
            title: "Discover",
            description:
              "Urban analytics, community listening, and market research define the development blueprint.",
          },
          {
            title: "Design",
            description:
              "Interdisciplinary studios craft immersive placemaking, sustainability, and digital experience strategies.",
          },
          {
            title: "Deliver",
            description:
              "We manage construction with precision partners, ensuring quality, transparency, and timely handover.",
          },
        ],
      },
    },
    contact: {
      hero: {
        title: "Let's shape the future together",
        subtitle:
          "From strategic partnerships to bespoke developments, our advisors are ready to collaborate.",
      },
      form: {
        title: "Send us a message",
        submitLabel: "Send Message",
        successMessage: "Thank you. We will reach out within 48 hours.",
        fields: [
          {
            name: "name",
            label: "Full name",
            placeholder: "Enter your full name",
            type: "text",
          },
          {
            name: "email",
            label: "Email address",
            placeholder: "name@company.com",
            type: "email",
          },
          {
            name: "phone",
            label: "Phone number",
            placeholder: "+20 1X XXX XXXX",
            type: "tel",
          },
          {
            name: "interest",
            label: "Inquiry type",
            placeholder: "Select an option",
            type: "select",
            options: [
              "Residential partnership",
              "Commercial leasing",
              "Investment opportunity",
              "Press & media",
            ],
          },
          {
            name: "message",
            label: "Message",
            placeholder: "Tell us about your project",
            type: "textarea",
          },
        ],
      },
      visit: {
        title: "Visit our experience center",
        caption: "South 90th Street, 2nd Sector, M4 Building, New Cairo, Egypt",
      },
    },
  },
  ar: {
    meta: {
      siteDescription:
        "تُبدع شركة النبيلة للتطوير وجهات معمارية أيقونية في مصر، وتمزج بين الرؤية المستقبلية وأنماط الحياة الراقية.",
    },
    nav: {
      links: [
        { label: "الرئيسية", hrefKey: "home" },
        { label: "من نحن", hrefKey: "about" },
        { label: "مشروعاتنا", hrefKey: "projects" },
        { label: "تواصل معنا", hrefKey: "contact" },
      ],
      contactCta: "ابدأ الشراكة",
      languageLabel: "اللغة",
      languages: {
        en: "English",
        ar: "العربية",
      },
    },
    footer: {
      about:
        "النبيلة للتطوير العقاري شركة مصرية رائدة تقدّم وجهات سكنية وتجارية متميزة منذ عام 1980.",
      contactTitle: "تحدّث معنا",
      contactInfo: {
        phone: "+20 (0)19046",
        email: "info@alnabila.com",
        address: [
          "شارع التسعين الجنوبي",
          "القطاع الثاني، مبنى M4",
          "التجمع الخامس، القاهرة الجديدة",
        ],
      },
      socialsLabel: "تابع رحلتنا",
      rights: "© 2025 شركة النبيلة للتطوير. صُمّم بإتقان.",
    },
    home: {
      hero: {
        kicker: "رؤية معمارية معاصرة",
        title: "نصمم أنماط حياة غامرة تعيد تشكيل الأفق المصري.",
        subtitle:
          "نبتكر وجهات متكاملة تمزج بين الهندسة الجريئة والاستدامة لتُلهم الأجيال القادمة.",
        primaryCta: "استكشف المشروعات",
        secondaryCta: "تعرف على رحلتنا",
      },
      metrics: [
        {
          label: "مشروعات منجزة",
          value: "280+",
          helper: "مجتمعات سكنية وتجارية وسياحية رائدة",
        },
        {
          label: "عملاء سعداء",
          value: "6000+",
          helper: "عائلات وشركات نرافقها في رحلاتها",
        },
        {
          label: "سنوات الخبرة",
          value: "45",
          helper: "إرث متجدد عبر ثلاثة أجيال",
        },
      ],
      architecturalStatement: {
        title: "نبني المستقبل اليوم",
        body: "نعتمد نهجًا متكاملاً يجمع بين البحث والتحليل لفهم احتياجات المجتمعات، ثم نحولها إلى وجهات نابضة بالحياة.",
        highlight:
          "مشروعاتنا في القاهرة الجديدة، ومدينة العبور الجديدة، والساحل الشمالي تجسد التزامنا بالتنمية المستدامة.",
      },
      projectShowcase: {
        heading: "وجهات مميزة",
        caption: "اختيار متنوع من محفظة مشروعاتنا السكنية والتجارية",
        items: [
          {
            name: "سيرينيتي ريزيدنس",
            location: "القاهرة الجديدة",
            description:
              "فلل راقية ومرافق مجتمعية محاطة بالمسطحات الخضراء والمسطحات المائية الهادئة.",
            image:
              "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600",
          },
          {
            name: "حي كويست للأعمال",
            location: "مدينة العبور الجديدة",
            description:
              "منطقة أعمال متعددة الاستخدامات تضم مساحات مكتبية مرنة وممشى تجاري وتجار تجزئة مميزين.",
            image:
              "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?q=80&w=1600",
          },
          {
            name: "NXT واجهة بحرية",
            location: "الساحل الشمالي",
            description:
              "مجتمع ساحلي معاصر يطل على البحر المتوسط مع تراسات سكنية متدرجة.",
            image:
              "https://images.unsplash.com/photo-1487956382158-bb926046304a?q=80&w=1600",
          },
        ],
      },
      pillars: {
        title: "مرتكزاتنا",
        items: [
          {
            title: "تجربة متكاملة",
            description:
              "نصمم رحلات حسية متجانسة بين العمارة والطبيعة والخدمات الرقمية لتثري حياة السكان.",
          },
          {
            title: "استدامة متطورة",
            description:
              "مواد منخفضة الأثر، وأنظمة موفرة للطاقة، وتشجير متجدد في قلب كل مشروع.",
          },
          {
            title: "شراكات خلاقة",
            description:
              "نتعاون مع بيوت خبرة عالمية وحرفيين محليين لضمان أعلى جودة في كل مرحلة.",
          },
        ],
      },
      contact: {
        title: "صمّم وجهتك التالية معنا",
        subtitle:
          "شاركنا تطلعاتك وسيعمل فريق الاستشارات لدينا على إعداد رؤية تطوير متكاملة.",
        submitLabel: "إرسال الطلب",
        successMessage: "شكرًا لك. سيتواصل معك فريقنا خلال ٤٨ ساعة.",
        fields: [
          {
            name: "name",
            label: "الاسم الكامل",
            placeholder: "اكتب اسمك الكامل",
            type: "text",
          },
          {
            name: "email",
            label: "البريد الإلكتروني",
            placeholder: "name@company.com",
            type: "email",
          },
          {
            name: "phone",
            label: "رقم الهاتف",
            placeholder: "+20 1X XXX XXXX",
            type: "tel",
          },
          {
            name: "interest",
            label: "نوع المشروع",
            placeholder: "اختر فئة",
            type: "select",
            options: [
              "شراكة سكنية",
              "تأجير تجاري",
              "فرص استثمار",
              "استفسار إعلامي",
            ],
          },
          {
            name: "message",
            label: "كيف يمكننا المساعدة؟",
            placeholder: "شاركنا رؤيتك بالتفصيل",
            type: "textarea",
          },
        ],
      },
    },
    about: {
      hero: {
        title: "إرث متجدد يعيد تشكيل المشهد المصري",
        subtitle:
          "من المشروعات السكنية البوتيكية إلى الوجهات متعددة الاستخدامات، تواصل النبيلة استشراف مستقبل المدن.",
        statement:
          "نقود منظومة متكاملة من الخبرات الهندسية والتقنية والحرفية لنقدم قيمة راسخة للسكان والمستثمرين والمجتمع.",
      },
      history: {
        title: "محطات تاريخية",
        items: [
          {
            year: "1980",
            summary: "البداية برؤية تركّز على الإنسان",
            details:
              "انطلقت مسيرتنا من مشاريع راقية في القاهرة تضع الأسرة في صميم التصميم.",
          },
          {
            year: "1995",
            summary: "التوسع في المجتمعات المتكاملة",
            details:
              "قدّمنا وجهات تجمع بين السكن والبيع بالتجزئة والترفيه في بيئات حيوية مترابطة.",
          },
          {
            year: "2010",
            summary: "اعتماد الابتكار المستدام",
            details:
              "عززنا مشروعاتنا بالبنية التحتية الذكية والطاقة المتجددة والخدمات الرقمية.",
          },
          {
            year: "2022",
            summary: "شراكات عالمية",
            details:
              "تعاوننا مع مكاتب دولية مرموقة لتطوير لغتنا المعمارية وتسريع دمج تقنيات المدن الذكية.",
          },
        ],
      },
      board: {
        title: "مجلس الإدارة",
        subtitle:
          "قيادات بخبرات عميقة تقود استراتيجية النبيلة وتأثيرها المجتمعي.",
        members: [
          {
            name: "خالد النبيلة",
            role: "رئيس مجلس الإدارة",
            bio: "رائد من الجيل الثالث يقود توسع الشركة الطموح داخل مصر وخارجها.",
            image:
              "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600",
          },
          {
            name: "مريم النبيلة",
            role: "رئيسة التصميم",
            bio: "معمارية ورائدة مستقبلية تقود استراتيجيات التجربة والتعاون العالمي.",
            image:
              "https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=1600",
          },
          {
            name: "عمر القاضي",
            role: "رئيس التطوير",
            bio: "خبير تطوير عقاري يشرف على التنفيذ الشامل مع التركيز على الاستدامة والتقنية.",
            image:
              "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1600",
          },
        ],
      },
      principles: {
        title: "قيمنا",
        items: [
          {
            title: "مدن للناس",
            description:
              "ننشئ بيئات نابضة بالحياة تعزز الصحة والاتصال الاجتماعي.",
          },
          {
            title: "ذكاء التصميم",
            description:
              "يدعم كل مشروع تحليل معمق للبيانات ودراسة متطلبات المجتمع.",
          },
          {
            title: "استمرارية الرعاية",
            description:
              "نبقى شركاء للعملاء بعد التسليم لضمان التشغيل المتميز وتطور الخدمات.",
          },
        ],
      },
    },
    projects: {
      hero: {
        title: "محفظة من الوجهات المتطورة",
        subtitle:
          "استكشف بيئات سكنية وتجارية وسياحية صممت لأنماط الحياة المستقبلية.",
      },
      counters: {
        projects: "مشروعات منجزة وقيد التطوير",
        clients: "عملاء وسكان تم خدمتهم",
      },
      categories: {
        title: "مختارات مميزة",
        items: [
          {
            name: "أبراج كويست",
            location: "العاصمة الإدارية",
            description:
              "برجان متعدد الاستخدامات مع صالات سماوية ومساحات عمل مشتركة وإطلالات بانورامية.",
            image:
              "https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=1600",
          },
          {
            name: "Reveal ريزيدنس",
            location: "القاهرة الجديدة",
            description:
              "تراسات سكنية متدرجة مع أفنية خضراء ومرافق رفاهية متكاملة.",
            image:
              "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=1600",
          },
          {
            name: "Hope ميديكال هب",
            location: "مدينة العبور الجديدة",
            description:
              "مجمع رعاية صحية متطور يجمع العيادات التخصصية والخدمات الرقمية الذكية.",
            image:
              "https://images.unsplash.com/photo-1503389152951-9f343605f61e?q=80&w=1600",
          },
          {
            name: "NXT مارينا ريزيدنس",
            location: "الساحل الشمالي",
            description:
              "حياة بحرية راقية مع مسابح متدرجة وتجارب تجزئة ومطاعم مطلة على البحر.",
            image:
              "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1600",
          },
          {
            name: "Serenity Gardens",
            location: "مدينة السادس من أكتوبر",
            description:
              "مجتمع عائلي يضم مزارع مجتمعية ومراكز تعليمية ومساحات لعب مستوحاة من الطبيعة.",
            image:
              "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600",
          },
          {
            name: "Atlas Corporate Campus",
            location: "سمارت فيليدج",
            description:
              "منظومة مكاتب متكيفة تدمج التقنية الرقمية مع تجارب رفاهية شاملة.",
            image:
              "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=1600",
          },
        ],
      },
      methodology: {
        title: "منهجيتنا",
        steps: [
          {
            title: "اكتشف",
            description:
              "تحليلات حضرية واستماع للمجتمع ودراسات سوق لصياغة خطة التطوير.",
          },
          {
            title: "صمّم",
            description:
              "فرق متعددة التخصصات تبتكر استراتيجيات المكان والاستدامة والتجربة الرقمية.",
          },
          {
            title: "نفّذ",
            description:
              "ندير التنفيذ مع شركاء موثوقين لضمان الجودة والشفافية والتسليم في الوقت المحدد.",
          },
        ],
      },
    },
    contact: {
      hero: {
        title: "لنبنِ المستقبل معًا",
        subtitle:
          "فريقنا جاهز للتعاون في الشراكات والاستثمارات والمشروعات المخصصة.",
      },
      form: {
        title: "أرسل رسالة",
        submitLabel: "إرسال",
        successMessage: "شكرًا لتواصلك. سنتواصل معك خلال ٤٨ ساعة.",
        fields: [
          {
            name: "name",
            label: "الاسم الكامل",
            placeholder: "اكتب اسمك الكامل",
            type: "text",
          },
          {
            name: "email",
            label: "البريد الإلكتروني",
            placeholder: "name@company.com",
            type: "email",
          },
          {
            name: "phone",
            label: "رقم الهاتف",
            placeholder: "+20 1X XXX XXXX",
            type: "tel",
          },
          {
            name: "interest",
            label: "نوع الاستفسار",
            placeholder: "اختر فئة",
            type: "select",
            options: [
              "شراكة سكنية",
              "تأجير تجاري",
              "فرص استثمار",
              "إعلام وصحافة",
            ],
          },
          {
            name: "message",
            label: "رسالتك",
            placeholder: "أخبرنا بتفاصيل رؤيتك",
            type: "textarea",
          },
        ],
      },
      visit: {
        title: "تفضل بزيارتنا",
        caption:
          "شارع التسعين الجنوبي، القطاع الثاني، مبنى M4، القاهرة الجديدة",
      },
    },
  },
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
};
