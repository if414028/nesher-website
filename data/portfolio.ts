import {
  adaInventoryDetail,
  diTenunDetail,
  parakaJakartaDetail,
  pantiSosialMutiaraKarawangDetail,
  zoeEverblossomDetail,
} from "@/lib/landing-data";

export type FeatureIcon =
  | "orders"
  | "hierarchy"
  | "chart"
  | "contest"
  | "report"
  | "access"
  | "export"
  | "members"
  | "content"
  | "prayer"
  | "notification"
  | "website"
  | "device"
  | "code";

export interface ProjectImage {
  src: string;
  alt: string;
  variant?: "desktop" | "mobile";
}

export interface ProjectFeature {
  title: string;
  description: string;
  icon: FeatureIcon;
}

export interface ProjectImpact {
  title: string;
  description: string;
  /** Only add a value when a verified client metric is available. */
  value?: string;
}

export interface GalleryImage extends ProjectImage {
  title: string;
  description: string;
  wide?: boolean;
  lang?: string;
}

export interface PortfolioProject {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  heroDescription: string;
  client: string;
  industry: string;
  platforms: string[];
  services: string[];
  problemStatement: string;
  solutionStatement: string;
  technologies: string[];
  challenge: string[];
  solution: {
    description: string;
    principles: { title: string; description: string }[];
  };
  features: ProjectFeature[];
  impact: ProjectImpact[];
  thumbnail: ProjectImage;
  heroImage: ProjectImage;
  secondaryImage?: ProjectImage;
  gallery: GalleryImage[];
  featured: boolean;
  order: number;
  liveUrl?: string;
}

function screenshot(
  slug: string,
  file: string,
  alt: string,
  variant: ProjectImage["variant"] = "desktop",
): ProjectImage {
  return { src: `/portfolio/${slug}/${file}`, alt, variant };
}

function existingGallery(
  items: { src: string; title: string; description: string }[],
  variant: ProjectImage["variant"] = "desktop",
): GalleryImage[] {
  return items.map((item, index) => ({
    ...item,
    alt: `${item.title}: ${item.description}`,
    lang: "id",
    variant,
    wide: index === 0 && variant !== "mobile",
  }));
}

const projects: PortfolioProject[] = [
  {
    slug: "letsgrowacademy",
    title: "LetsGrowAcademy",
    category: "Sales & Distributor Management Platform",
    shortDescription:
      "A centralized sales management platform designed to help distributor teams manage sales hierarchy, orders, team performance, contests, and operational reporting.",
    heroDescription:
      "A centralized platform built to simplify sales operations, team management, and performance tracking.",
    client: "LetsGrowAcademy",
    industry: "Sales & Distribution",
    platforms: ["Web Application"],
    services: [
      "Product Development",
      "UI Implementation",
      "Backend Development",
    ],
    problemStatement:
      "Sales orders, team hierarchy, and performance needed one shared operational view.",
    solutionStatement:
      "A role-based workspace that brings orders, teams, contests, and reporting together.",
    technologies: ["Laravel", "MySQL", "Tailwind CSS", "REST API"],
    challenge: [
      "The sales organization operates through a multi-level structure of Sales Managers, Health Managers, and Health Planners. Each role needs a different view of the same operation.",
      "Managing sales orders, team performance, hierarchy, contests, and reporting across these roles called for a centralized system with clear access control and reliable operational data.",
    ],
    solution: {
      description:
        "We built one operational workspace around the way the distributor team works. Connected modules give sales teams and management a consistent path from daily orders to performance reviews.",
      principles: [
        {
          title: "Centralized operations",
          description:
            "Orders, partner structure, and contests live in one connected platform.",
        },
        {
          title: "Role-based access",
          description:
            "Each team member sees the tools and information relevant to their responsibility.",
        },
        {
          title: "Automated reporting",
          description:
            "Period-based reports and exports support recurring operational reviews.",
        },
        {
          title: "Performance visibility",
          description:
            "Dashboards and leaderboards make team progress easier to follow.",
        },
      ],
    },
    features: [
      {
        title: "Sales Order Management",
        description:
          "Review orders, track verification and payment status, and find the records that need attention.",
        icon: "orders",
      },
      {
        title: "Team Hierarchy Management",
        description:
          "Explore partner relationships and direct reports across the sales organization.",
        icon: "hierarchy",
      },
      {
        title: "Performance Dashboard",
        description:
          "Read individual and team sales activity in a consolidated performance view.",
        icon: "chart",
      },
      {
        title: "Contest & Leaderboard",
        description:
          "Manage contest rules, rewards, qualification, and participant performance.",
        icon: "contest",
      },
      {
        title: "Automated Reporting",
        description:
          "Review operational and sales reports by period for regular team evaluations.",
        icon: "report",
      },
      {
        title: "Role-Based Access",
        description:
          "Keep responsibilities clear with access tailored to each sales role.",
        icon: "access",
      },
      {
        title: "Excel Export",
        description:
          "Bring reporting data into spreadsheets for follow-up analysis and sharing.",
        icon: "export",
      },
    ],
    impact: [
      {
        title: "One centralized workflow",
        description:
          "Daily sales operations and team management share the same workspace.",
      },
      {
        title: "Clearer team visibility",
        description:
          "Hierarchy and performance can be reviewed together, in context.",
      },
      {
        title: "Structured performance monitoring",
        description:
          "Consistent dashboards and contests support recurring team reviews.",
      },
      {
        title: "More accessible reporting",
        description:
          "Period-based reports and exports support operational follow-up.",
      },
    ],
    thumbnail: screenshot(
      "letsgrowacademy",
      "overview-dashboard.png",
      "LetsGrowAcademy dashboard showing sales trends, team performance, and active contests",
    ),
    heroImage: screenshot(
      "letsgrowacademy",
      "overview-dashboard.png",
      "LetsGrowAcademy sales overview with performance summaries and contest monitoring",
    ),
    gallery: [
      {
        ...screenshot(
          "letsgrowacademy",
          "sales-orders-screen.png",
          "Sales orders table with verification status, filters, and order actions",
        ),
        title: "Daily orders, in one place",
        description:
          "A focused operational view for reviewing and following up on sales orders.",
        wide: true,
      },
      {
        ...screenshot(
          "letsgrowacademy",
          "partner-tree-screen.png",
          "Partner tree displaying the sales team hierarchy and direct reports",
        ),
        title: "A clearer view of the team",
        description:
          "Team relationships made visible through the partner hierarchy.",
      },
      {
        ...screenshot(
          "letsgrowacademy",
          "performance-screen.png",
          "Individual and team performance with sales status breakdowns",
        ),
        title: "Performance with context",
        description: "A consistent view of team activity and sales status.",
      },
      {
        ...screenshot(
          "letsgrowacademy",
          "reports-screen.png",
          "Sales leaderboard report filtered by date range",
        ),
        title: "Reports for regular reviews",
        description:
          "Period-based leaderboards help teams review their progress.",
      },
      {
        ...screenshot(
          "letsgrowacademy",
          "contest-detail-screen.png",
          "Sales contest detail showing qualification rules and rewards",
        ),
        title: "Contests that teams can follow",
        description:
          "Qualification, rewards, and participant evaluation in one view.",
      },
    ],
    featured: true,
    order: 1,
  },
  {
    slug: "myhananeelcinta",
    title: "My Hananeel Cinta",
    category: "Church Digital Platform",
    shortDescription:
      "A digital ecosystem designed to connect church members with announcements, prayer requests, family altar content, pastoral messages, and church information.",
    heroDescription:
      "One connected digital ecosystem for church life, member communication, and everyday ministry.",
    client: "JKI Hananeel Cinta",
    industry: "Church & Community",
    platforms: ["Android", "iOS", "Web CMS"],
    services: [
      "Mobile Development",
      "UI Implementation",
      "Backend Development",
      "CMS Development",
    ],
    problemStatement:
      "Members needed accessible church information while ministry teams needed a shared way to manage it.",
    solutionStatement:
      "Native mobile apps and a connected Laravel CMS bring church content and communication together.",
    technologies: [
      "Android / Kotlin",
      "iOS / SwiftUI",
      "Laravel",
      "Firebase",
      "REST API",
    ],
    challenge: [
      "Church life includes announcements, worship schedules, pastoral messages, prayer requests, and family altar communities. Members need a clear way to find and participate in these activities.",
      "The ministry team also needs to maintain content and member information without managing disconnected tools for every channel.",
    ],
    solution: {
      description:
        "We connected member-facing Android and iOS applications with a Laravel admin workspace and REST API. The result gives members familiar access to church life and gives ministry teams a place to manage the information behind it.",
      principles: [
        {
          title: "Connected channels",
          description:
            "Mobile apps, public website, and admin tools share the same content foundation.",
        },
        {
          title: "Member-first experience",
          description:
            "Announcements, messages, and ministry information are easy to find.",
        },
        {
          title: "Considered privacy",
          description:
            "Prayer requests support anonymous and confidential submissions.",
        },
        {
          title: "Manageable content",
          description:
            "Ministry teams update information through a dedicated CMS.",
        },
      ],
    },
    features: [
      {
        title: "Member Information",
        description:
          "Maintain church member records within the admin workspace.",
        icon: "members",
      },
      {
        title: "Announcements",
        description:
          "Publish church updates and make them accessible across member channels.",
        icon: "content",
      },
      {
        title: "Prayer Request",
        description:
          "Let members share requests with anonymous and confidential options.",
        icon: "prayer",
      },
      {
        title: "Mezbah Keluarga",
        description:
          "Share family altar locations, schedules, and community contacts.",
        icon: "hierarchy",
      },
      {
        title: "Pastor Message",
        description:
          "Give members a clear place to read and revisit pastoral messages.",
        icon: "content",
      },
      {
        title: "Push Notifications",
        description:
          "Bring relevant church updates to members on their mobile devices.",
        icon: "notification",
      },
      {
        title: "Content Management",
        description:
          "Manage announcements, messages, and ministry information from one CMS.",
        icon: "website",
      },
    ],
    impact: [
      {
        title: "Connected church information",
        description:
          "Members have a common place to access updates and ministry content.",
      },
      {
        title: "A clearer publishing workflow",
        description:
          "Ministry teams manage digital content in one admin workspace.",
      },
      {
        title: "Accessible member participation",
        description:
          "Prayer requests and family altar information bring services closer to members.",
      },
      {
        title: "Consistent across channels",
        description: "A shared backend supports mobile and web experiences.",
      },
    ],
    thumbnail: screenshot(
      "myhananeelcinta",
      "admin-dashboard.png",
      "My Hananeel Cinta admin dashboard with members, announcements, and prayer requests",
    ),
    heroImage: screenshot(
      "myhananeelcinta",
      "admin-dashboard.png",
      "Church CMS overview with member information and ministry activity",
    ),
    secondaryImage: screenshot(
      "myhananeelcinta",
      "home.webp",
      "My Hananeel Cinta mobile home with church updates and ministry shortcuts",
      "mobile",
    ),
    gallery: [
      {
        ...screenshot(
          "myhananeelcinta",
          "home.webp",
          "Mobile app home with announcements, pastoral messages, and church shortcuts",
          "mobile",
        ),
        title: "Church life, close at hand",
        description:
          "A familiar starting point for members on Android and iOS.",
      },
      {
        ...screenshot(
          "myhananeelcinta",
          "permintaan-doa.webp",
          "Mobile prayer request form with category and confidentiality options",
          "mobile",
        ),
        title: "A thoughtful space for prayer",
        description: "An accessible path to submit a personal prayer request.",
      },
      {
        ...screenshot(
          "myhananeelcinta",
          "admin-prayer-request.png",
          "Admin prayer request management with categories, statuses, and confidential markers",
        ),
        title: "Tools for the ministry team",
        description:
          "Review prayer requests with clear status and privacy controls.",
        wide: true,
      },
      {
        ...screenshot(
          "myhananeelcinta",
          "admin-mezbah-keluarga.png",
          "CMS listing of family altar communities, schedules, and contacts",
        ),
        title: "Community information, organized",
        description:
          "Manage locations, schedules, and contacts for Mezbah Keluarga.",
      },
      {
        ...screenshot(
          "myhananeelcinta",
          "website-home.png",
          "Public church website with introduction and ministry navigation",
        ),
        title: "An open door on the web",
        description:
          "Public church information connected to the same content ecosystem.",
      },
    ],
    featured: true,
    order: 2,
  },
  {
    slug: "juanggroup",
    title: "Juang Group / Yeshua Cafe",
    category: "Corporate & Business Website",
    shortDescription:
      "A modern digital presence for a growing business group, designed to communicate its story, business units, mission, and opportunities to customers and investors.",
    heroDescription:
      "A considered digital presence that connects a business group's story, its ventures, and the people it hopes to reach.",
    client: "JuangGroup",
    industry: "Lifestyle & Hospitality",
    platforms: ["Web"],
    services: [
      "Website Development",
      "UI Implementation",
      "Information Architecture",
      "Business Planning",
      "Marketing Strategy",
    ],
    problemStatement:
      "A growing group needed a coherent story for its businesses, customers, and potential partners.",
    solutionStatement:
      "An editorial corporate website gives the group and each business a clear, connected presence.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    challenge: [
      "JuangGroup brings together lifestyle and hospitality ventures with a cross-cultural vision connecting Indonesia and Africa. Its digital presence needed to explain both the group's ambition and the character of its individual businesses.",
      "Customers and potential partners needed clear paths into the business story, mission, and opportunities—including the inclusive hospitality concept behind Yeshua Cafe.",
    ],
    solution: {
      description:
        "We built a responsive, bilingual company profile with a shared information architecture for the group and its business units. Alongside the website, we developed business planning and marketing materials to give the wider story a concrete foundation.",
      principles: [
        {
          title: "One coherent story",
          description:
            "A shared narrative links the group's mission and individual ventures.",
        },
        {
          title: "Space for each business",
          description:
            "Dedicated pages let Yeshua Cafe and other units express their own identity.",
        },
        {
          title: "Clear opportunities",
          description:
            "Business information supports conversations with customers and partners.",
        },
        {
          title: "Responsive by design",
          description:
            "The experience remains readable and useful across screen sizes.",
        },
      ],
    },
    features: [
      {
        title: "Corporate Website",
        description:
          "Introduce the group, its direction, and its cross-cultural ambition.",
        icon: "website",
      },
      {
        title: "Business Unit Pages",
        description: "Give each venture a clear home within the wider group.",
        icon: "hierarchy",
      },
      {
        title: "Business Story",
        description:
          "Connect the mission, brand positioning, and inclusive hospitality concept.",
        icon: "content",
      },
      {
        title: "Investor Information",
        description:
          "Present business context and opportunities for potential partners.",
        icon: "report",
      },
      {
        title: "Content Management",
        description:
          "Organize business content in a reusable page structure that can evolve.",
        icon: "code",
      },
      {
        title: "Responsive Design",
        description:
          "Keep the group's story accessible on desktop, tablet, and mobile.",
        icon: "device",
      },
    ],
    impact: [
      {
        title: "A unified digital presence",
        description:
          "The group's businesses share a consistent narrative and navigational structure.",
      },
      {
        title: "Clearer business positioning",
        description:
          "Each venture has space to communicate its identity and purpose.",
      },
      {
        title: "A foundation for conversations",
        description:
          "Website and planning materials help introduce the vision to potential partners.",
      },
      {
        title: "Accessible across devices",
        description:
          "A responsive website supports customers wherever they explore the group.",
      },
    ],
    thumbnail: screenshot(
      "juanggroup",
      "company-profile-home.png",
      "JuangGroup company profile homepage introducing its cross-cultural business vision",
    ),
    heroImage: screenshot(
      "juanggroup",
      "company-profile-home.png",
      "JuangGroup editorial homepage with its mission and business introduction",
    ),
    gallery: [
      {
        ...screenshot(
          "juanggroup",
          "yeshua-cafe-home.png",
          "Yeshua Cafe business page introducing its inclusive hospitality concept",
        ),
        title: "A home for Yeshua Cafe",
        description:
          "A dedicated business page connects the cafe's story with its welcoming hospitality concept.",
        wide: true,
      },
      {
        ...screenshot(
          "juanggroup",
          "business-plan-inclusive-employment.png",
          "Business plan slide describing inclusive employment at Yeshua Cafe",
        ),
        title: "Purpose made concrete",
        description:
          "Business planning communicates the inclusive employment concept.",
      },
      {
        ...screenshot(
          "juanggroup",
          "business-plan-connected-operations.png",
          "Business planning diagram connecting ordering, kitchen, inventory, and management workflows",
        ),
        title: "The operations behind the idea",
        description:
          "Planning materials map the proposed connected business workflow.",
      },
      {
        ...screenshot(
          "juanggroup",
          "marketing-strategy-target-market.png",
          "Marketing strategy presentation identifying the cafe's target audiences",
        ),
        title: "Understanding the audience",
        description:
          "A clear picture of the communities the business aims to serve.",
      },
      {
        ...screenshot(
          "juanggroup",
          "marketing-strategy-go-to-market.png",
          "Go-to-market strategy presentation covering digital, campus, community, and partnership channels",
        ),
        title: "A path into the market",
        description:
          "Marketing strategy built around community and relevant channels.",
      },
    ],
    liveUrl: "https://juanggroup.com",
    featured: true,
    order: 3,
  },
  {
    slug: "zoe-everblossom",
    title: "Zoe Everblossom",
    category: "Official Brand Website",
    shortDescription:
      "A considered brand website for candles, flowers, gifts, and hampers.",
    heroDescription:
      "A warm digital home for a gifting brand, with a clear catalog and direct paths to ordering.",
    client: zoeEverblossomDetail.client,
    industry: "Retail & Gifting",
    platforms: ["Web"],
    services: ["Website Development", "UI Implementation"],
    technologies: zoeEverblossomDetail.stack,
    problemStatement:
      "A gifting brand needed to bring its character and product range into one digital home.",
    solutionStatement:
      "A responsive brand website connects product discovery with ordering enquiries.",
    challenge: [
      "Candles, flowers, gifts, and hampers needed a digital presentation that reflects the brand and helps visitors explore the range.",
    ],
    solution: {
      description:
        "We built an official brand website with product catalog pages, brand storytelling, and clear ordering calls to action.",
      principles: [
        {
          title: "Brand-led presentation",
          description:
            "A consistent visual direction across product and brand pages.",
        },
        {
          title: "Clear product discovery",
          description:
            "Catalog and gifting pages help visitors find relevant products.",
        },
      ],
    },
    features: [
      {
        title: "Product Catalog",
        description: "Explore candles, flowers, gifts, and hampers.",
        icon: "content",
      },
      {
        title: "Brand Story",
        description: "Introduce the people and purpose behind the products.",
        icon: "website",
      },
      {
        title: "Ordering Enquiries",
        description: "Give visitors a direct path to contact the brand.",
        icon: "orders",
      },
    ],
    impact: [
      {
        title: "One official brand home",
        description:
          "Brand story, catalog, and contact information are available together.",
      },
      {
        title: "Clearer product discovery",
        description:
          "Dedicated pages make the gifting range easier to explore.",
      },
    ],
    thumbnail: screenshot(
      "zoe-everblossom",
      "home.png",
      "Zoe Everblossom website introducing candles, flowers, and gifts",
    ),
    heroImage: screenshot(
      "zoe-everblossom",
      "home.png",
      "Zoe Everblossom brand homepage",
    ),
    gallery: existingGallery(zoeEverblossomDetail.gallery),
    liveUrl: zoeEverblossomDetail.url,
    featured: false,
    order: 4,
  },
  {
    slug: "adainventory",
    title: "AdaInventory",
    category: "RFID Inventory Application",
    shortDescription:
      "An Android operational app connecting RFID tagging, inventory checks, and label printing.",
    heroDescription:
      "Field workflows connected to RFID hardware, a Bluetooth printer, and operational data.",
    client: adaInventoryDetail.client,
    industry: "Waste Management & Operations",
    platforms: ["Android"],
    services: [
      "Mobile Development",
      "Hardware Integration",
      "Backend Integration",
    ],
    technologies: adaInventoryDetail.stack,
    problemStatement:
      "Field tagging and inventory workflows needed to work with specialized hardware.",
    solutionStatement:
      "An Android app connects RFID reading, writing, and Bluetooth label printing.",
    challenge: [
      "Operational teams needed to classify and tag waste while working with an RFID UHF-RH03 handheld and a thermal Bluetooth printer.",
    ],
    solution: {
      description:
        "We built an Android application for device connection, labelling, RFID configuration, tag writing, and stock checks, connected to a Flask and PostgreSQL backend.",
      principles: [
        {
          title: "Hardware-aware workflow",
          description:
            "Device connections and tagging are part of the same operational journey.",
        },
        {
          title: "Connected records",
          description:
            "Label and inventory information connects with the backend.",
        },
      ],
    },
    features: [
      {
        title: "RFID Tagging",
        description: "Read and write tags with the handheld RFID device.",
        icon: "device",
      },
      {
        title: "Label Printing",
        description:
          "Print operational labels through a thermal Bluetooth printer.",
        icon: "export",
      },
      {
        title: "Stock Checks",
        description: "Support stock opname from the Android app.",
        icon: "orders",
      },
    ],
    impact: [
      {
        title: "Connected field tools",
        description: "RFID tagging and label printing share one application.",
      },
      {
        title: "Structured operational records",
        description: "Tagging and inventory workflows connect to backend data.",
      },
    ],
    thumbnail: screenshot(
      "adainventory",
      "home.png",
      "AdaInventory home with RFID and Bluetooth device connections",
      "mobile",
    ),
    heroImage: screenshot(
      "adainventory",
      "home.png",
      "AdaInventory operational app home",
      "mobile",
    ),
    gallery: existingGallery(adaInventoryDetail.gallery, "mobile"),
    featured: false,
    order: 5,
  },
  {
    slug: "paraka-jakarta",
    title: "Paraka Jakarta",
    category: "Field Survey & Mapping Platform",
    shortDescription:
      "An Android survey app and admin dashboard for location-based field reporting.",
    heroDescription:
      "A connected workflow from field surveys to location-based monitoring and team oversight.",
    client: parakaJakartaDetail.client,
    industry: "Field Research & Civic Engagement",
    platforms: ["Android", "Web Dashboard"],
    services: [
      "Mobile Development",
      "Dashboard Development",
      "Backend Development",
    ],
    technologies: parakaJakartaDetail.stack,
    problemStatement:
      "Survey teams needed location-based collection and centralized monitoring.",
    solutionStatement:
      "An Android field app connects collected reports to a Laravel dashboard.",
    challenge: [
      "Field surveys for the 2024 Jakarta gubernatorial election needed a consistent way to capture responses, locations, and supporting information while allowing admins to monitor surveyor activity.",
    ],
    solution: {
      description:
        "We connected an Android survey application with a Laravel 11 dashboard for reviewing survey data, map markers, and surveyor activity.",
      principles: [
        {
          title: "Field-first collection",
          description:
            "Survey forms, camera capture, and map views support on-site work.",
        },
        {
          title: "Central monitoring",
          description:
            "Admins review collected reports and their location context.",
        },
      ],
    },
    features: [
      {
        title: "Survey Collection",
        description: "Capture structured responses through the Android app.",
        icon: "report",
      },
      {
        title: "Location Mapping",
        description: "Review survey locations and map markers.",
        icon: "hierarchy",
      },
      {
        title: "Surveyor Management",
        description: "Monitor field team activity from the dashboard.",
        icon: "members",
      },
    ],
    impact: [
      {
        title: "A shared reporting workflow",
        description: "Field collection connects directly with admin review.",
      },
      {
        title: "Location context",
        description:
          "Maps make collected reports easier to interpret geographically.",
      },
    ],
    thumbnail: screenshot(
      "paraka-jakarta",
      "dashboard-map.png",
      "Paraka Jakarta admin map showing field survey locations",
    ),
    heroImage: screenshot(
      "paraka-jakarta",
      "dashboard-overview.png",
      "Paraka Jakarta survey monitoring dashboard",
    ),
    secondaryImage: screenshot(
      "paraka-jakarta",
      "map-survey.jpeg",
      "Paraka Jakarta mobile survey map",
      "mobile",
    ),
    gallery: [
      ...existingGallery(parakaJakartaDetail.dashboardGallery),
      ...existingGallery(parakaJakartaDetail.mobileGallery, "mobile"),
    ],
    featured: false,
    order: 6,
  },
  {
    slug: "ditenun",
    title: "DiTenun",
    category: "AI-Assisted Textile Application",
    shortDescription:
      "An Android experience for exploring and creating digital weaving motifs with AI.",
    heroDescription:
      "Bringing AI-assisted motif exploration into an accessible mobile experience inspired by Indonesian weaving.",
    client: diTenunDetail.client,
    industry: "Education & Creative Technology",
    platforms: ["Android"],
    services: ["Mobile Development", "UI Implementation", "AI Integration"],
    technologies: diTenunDetail.stack,
    problemStatement:
      "Digital motif generation needed a clear, approachable mobile workflow.",
    solutionStatement:
      "An Android interface guides users through AI-assisted motif creation and exploration.",
    challenge: [
      "Institut Teknologi Del's textile exploration work needed a mobile experience that connects Indonesian weaving inspiration with AI-assisted digital motif creation.",
    ],
    solution: {
      description:
        "We built a mobile interface for exploring motifs and following the generation workflow, bringing the underlying AI capabilities into an approachable Android application.",
      principles: [
        {
          title: "Guided creation",
          description:
            "A clear flow helps users move through motif generation.",
        },
        {
          title: "Cultural context",
          description:
            "A motif gallery connects the experience with Nusantara weaving inspiration.",
        },
      ],
    },
    features: [
      {
        title: "Motif Generation",
        description: "Explore AI-assisted digital weaving motif creation.",
        icon: "code",
      },
      {
        title: "Motif Gallery",
        description: "Browse weaving patterns and visual inspiration.",
        icon: "content",
      },
      {
        title: "Mobile Experience",
        description: "Access the creation workflow through Android.",
        icon: "device",
      },
    ],
    impact: [
      {
        title: "An accessible creative workflow",
        description:
          "Mobile UI gives users a clear path into motif generation.",
      },
      {
        title: "Technology with cultural context",
        description:
          "Digital creation is presented alongside weaving inspiration.",
      },
    ],
    thumbnail: screenshot(
      "ditenun",
      "home.png",
      "DiTenun Android home introducing digital weaving motif creation",
      "mobile",
    ),
    heroImage: screenshot(
      "ditenun",
      "home.png",
      "DiTenun motif creation app home",
      "mobile",
    ),
    gallery: existingGallery(diTenunDetail.gallery, "mobile"),
    featured: false,
    order: 7,
  },
  {
    slug: "panti-sosial-mutiara-karawang",
    title: "Panti Sosial Mutiara Karawang",
    category: "Organization Website",
    shortDescription:
      "A public digital home for an organization, its services, activities, and contact information.",
    heroDescription:
      "Making an organization's story and services easier for the public to find and understand.",
    client: pantiSosialMutiaraKarawangDetail.client,
    industry: "Social Care",
    platforms: ["Web"],
    services: ["Website Development", "UI Implementation"],
    technologies: pantiSosialMutiaraKarawangDetail.stack,
    problemStatement:
      "The organization needed an accessible official source of information.",
    solutionStatement:
      "A responsive website presents its profile, services, activity gallery, and contact details.",
    challenge: [
      "Panti Sosial Mutiara Karawang needed to introduce its work and services to the public through an accessible, organized digital presence.",
    ],
    solution: {
      description:
        "We built a Next.js company profile website that brings the organization's introduction, services, activity gallery, and contact information into one official destination.",
      principles: [
        {
          title: "Clear public information",
          description:
            "Visitors can find the organization's profile and services.",
        },
        {
          title: "An approachable introduction",
          description:
            "Activities and imagery give context to the organization's work.",
        },
      ],
    },
    features: [
      {
        title: "Organization Profile",
        description: "Introduce the organization and its purpose.",
        icon: "website",
      },
      {
        title: "Services & Activities",
        description: "Present services and an activity gallery.",
        icon: "content",
      },
      {
        title: "Contact Information",
        description: "Make it easy for the public to get in touch.",
        icon: "members",
      },
    ],
    impact: [
      {
        title: "One official destination",
        description:
          "Public information is organized in a single accessible website.",
      },
      {
        title: "A clearer introduction",
        description:
          "Profile, services, and activities communicate the organization's work.",
      },
    ],
    thumbnail: screenshot(
      "panti-sosial-mutiara-karawang",
      "home.png",
      "Panti Sosial Mutiara Karawang homepage introducing the organization",
    ),
    heroImage: screenshot(
      "panti-sosial-mutiara-karawang",
      "home.png",
      "Panti Sosial Mutiara Karawang official website home",
    ),
    gallery: existingGallery(pantiSosialMutiaraKarawangDetail.gallery),
    liveUrl: pantiSosialMutiaraKarawangDetail.url,
    featured: false,
    order: 8,
  },
];

export const portfolioProjects = [...projects].sort(
  (a, b) => a.order - b.order,
);
export const featuredProjects = portfolioProjects.filter(
  (project) => project.featured,
);
export const otherProjects = portfolioProjects.filter(
  (project) => !project.featured,
);

export function getProject(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const index = portfolioProjects.findIndex((project) => project.slug === slug);
  return portfolioProjects[(index + 1) % portfolioProjects.length];
}
