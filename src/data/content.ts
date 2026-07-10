import {
  Sparkles,
  TrendingUp,
  ClipboardCheck,
  Wallet,
  Cpu,
  Headset,
  type LucideIcon,
} from "lucide-react";

export const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We understand your business, target audience, competitors, and goals through detailed research.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "We create a customized digital marketing roadmap tailored to your business objectives.",
  },
  {
    step: "03",
    title: "Execution",
    description:
      "Our team implements marketing campaigns using industry-leading tools and proven strategies.",
  },
  {
    step: "04",
    title: "Optimization",
    description:
      "We continuously monitor, analyze, and optimize campaigns to maximize performance.",
  },
  {
    step: "05",
    title: "Growth",
    description:
      "We scale successful campaigns and help your business achieve long-term digital growth.",
  },
];

export const industries: string[] = [
  "Healthcare",
  "Real Estate",
  "Education",
  "Construction",
  "Manufacturing",
  "Textile",
  "Restaurants",
  "Hotels",
  "Retail",
  "E-Commerce",
  "Fashion",
  "Beauty",
  "Fitness",
  "IT",
  "Finance",
];

export interface WhyItem {
  icon: LucideIcon;
  title: string;
}

export const whyChooseUs: WhyItem[] = [
  { icon: Sparkles, title: "Customized Marketing Strategies" },
  { icon: TrendingUp, title: "ROI-Focused Campaigns" },
  { icon: ClipboardCheck, title: "Transparent Reporting" },
  { icon: Wallet, title: "Affordable Pricing" },
  { icon: Cpu, title: "AI-Powered Solutions" },
  { icon: Headset, title: "Dedicated Support" },
];

export const stats = [
  { to: 11, suffix: "", label: "Core Digital Services" },
  { to: 15, suffix: "+", label: "Industries Served" },
  { to: 5, suffix: "-Step", label: "Proven Growth Process" },
  { to: 100, suffix: "%", label: "Transparent Reporting" },
];

export const contact = {
  phone: "+91 94881 25200",
  phoneHref: "tel:+919488125200",
  whatsappHref: "https://wa.me/919488125200",
  email: "keywordcrew@gmail.com",
  address: "Arumugakavundanur, Perur Chettipalayam, Coimbatore - 641010",
};
