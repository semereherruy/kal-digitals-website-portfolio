import { Service, PortfolioItem, Testimonial, ProcessStep, Stat } from "./types";

export const SERVICES: Service[] = [
  {
    id: "web-design",
    title: "Experience Design",
    description: "Creating immersive, user-centric interfaces that blend aesthetic elegance with functional precision.",
    icon: "Palette",
  },
  {
    id: "web-dev",
    title: "Engineering",
    description: "Building high-performance, secure digital products using modern tech stacks like React, Next.js, and Node.js.",
    icon: "Code2",
  },
  {
    id: "digital-marketing",
    title: "Growth Marketing",
    description: "Data-driven strategies designed to scale your brand and maximize ROI through precision targeting.",
    icon: "Megaphone",
  },
  {
    id: "brand-identity",
    title: "Brand Strategy",
    description: "Crafting distinctive visual identities and strategic positioning that resonates on a global scale.",
    icon: "Briefcase",
  },
  {
    id: "content-creation",
    title: "Creative Content",
    description: "High-end visual storytelling and copywriting that creates emotional connections with your audience.",
    icon: "Layout",
  },
  {
    id: "seo-strategy",
    title: "SEO Excellence",
    description: "Technical search engine optimization to ensure your brand dominates the digital landscape.",
    icon: "Search",
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "1",
    title: "EcoVibe Global",
    category: "Full Stack Development",
    image: "https://picsum.photos/seed/ecovibe/800/1000",
    description: "A sustainable luxury fashion platform built for high-scale performance and international reach.",
  },
  {
    id: "2",
    title: "TechFlow Systems",
    category: "Brand Architecture",
    image: "https://picsum.photos/seed/techflow/800/1000",
    description: "Modern visual identity and design system for a silicon-valley based software ecosystem.",
  },
  {
    id: "3",
    title: "Zenith Growth",
    category: "Performance Marketing",
    image: "https://picsum.photos/seed/zenith/800/1000",
    description: "An integrated multi-channel campaign that expanded market reach by over 200%.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Dawit Abraham",
    role: "Director, EthioTech",
    content: "Kal Digitals completely redefined our digital strategy. Their precision and creative vision are truly world-class.",
    avatar: "https://picsum.photos/seed/dawit/200/200",
  },
  {
    id: "2",
    name: "Selamawit Tadesse",
    role: "CEO, Addis Global",
    content: "The level of expertise and dedication this team brings to the table is unmatched. They exceeded every expectation.",
    avatar: "https://picsum.photos/seed/selam/200/200",
  },
];

export const PROCESS: ProcessStep[] = [
  { id: 1, title: "Discovery", description: "Deep analysis of your ecosystem, audience, and North Star goals." },
  { id: 2, title: "Architecture", description: "Strategic mapping and logical structuring of the solution." },
  { id: 3, title: "Manifestation", description: "Visualizing the brand experience through high-fidelity design." },
  { id: 4, title: "Engineering", description: "Developing robust, pixel-perfect solutions with absolute precision." },
  { id: 5, title: "Evolution", description: "Seamless deployment and continuous strategic refinement." },
  { id: 6, title: "Scale", description: "Global optimization to ensure your brand stays ahead of the curve." },
];

export const STATS: Stat[] = [
  { label: "High-End Projects", value: "100+" },
  { label: "Global Clients", value: "45+" },
  { label: "Creative Awards", value: "12" },
  { label: "Team Experts", value: "25+" },
];
