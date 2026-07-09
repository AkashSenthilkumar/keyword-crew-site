import {
  Search,
  MapPin,
  MousePointerClick,
  Share2,
  Code2,
  Palette,
  TrendingUp,
  PenTool,
  Mail,
  Target,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  items: string[];
}

export const services: Service[] = [
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    tagline: "Rank Higher. Get More Traffic. Generate More Leads.",
    description:
      "We help your business rank higher on Google, increase organic website traffic, improve search engine rankings, and attract customers actively searching for your products and services.",
    icon: Search,
    items: [
      "Keyword Research & Competitor Analysis",
      "On-Page SEO",
      "Off-Page SEO",
      "Technical SEO",
      "Local SEO",
      "Link Building",
      "SEO & Website Audit",
      "Content Optimization",
      "Website Speed Optimization",
      "Monthly SEO Performance Reports",
    ],
  },
  {
    id: "google-business-profile",
    title: "Google Business Profile Optimization",
    tagline: "Dominate Local Google Search & Google Maps",
    description:
      "Increase your local visibility with Google Business Profile optimization. We help businesses appear in Google Maps, improve local rankings, attract nearby customers, and build trust through optimized business listings.",
    icon: MapPin,
    items: [
      "Google Business Profile Setup",
      "Business Profile Optimization",
      "Category & Keyword Optimization",
      "Review Management",
      "Google Maps Ranking",
      "Photo & Post Management",
      "Monthly Performance Reports",
    ],
  },
  {
    id: "google-ads",
    title: "Google Ads (PPC Advertising)",
    tagline: "Reach Customers Ready to Buy",
    description:
      "Generate instant leads and sales with Google Ads management. We create high-converting campaigns that maximize ROI while reducing advertising costs.",
    icon: MousePointerClick,
    items: [
      "Google Search Ads",
      "Display Advertising",
      "Shopping Ads & Performance Max Campaigns",
      "YouTube Ads",
      "Remarketing Campaigns",
      "Conversion Tracking",
      "Landing Page Optimization",
      "Campaign Management",
      "Monthly Performance Reports",
    ],
  },
  {
    id: "social-media",
    title: "Social Media Marketing & Management",
    tagline: "Grow Your Brand Across Every Social Platform",
    description:
      "Build a powerful online presence through end-to-end social media management. We create engaging content, manage your pages, run paid campaigns, and help you build lasting customer relationships across Instagram, Facebook, LinkedIn, YouTube, and X.",
    icon: Share2,
    items: [
      "Social Media Strategy",
      "End-to-End Account Management",
      "Content Creation & Creative Post Design",
      "Reels & Short Videos",
      "Content Calendar",
      "Community Management",
      "Meta Ads",
      "Audience Engagement",
      "Monthly Analytics Reports",
    ],
  },
  {
    id: "web-app-development",
    title: "Website & Mobile App Development",
    tagline: "Build Fast, Modern & SEO-Friendly Digital Experiences",
    description:
      "Your website is your digital storefront. We develop responsive, mobile-friendly, and SEO-optimized websites and mobile applications that convert visitors into customers.",
    icon: Code2,
    items: [
      "Business & Corporate Websites",
      "E-Commerce Websites",
      "Portfolio Websites & Landing Pages",
      "WordPress Websites",
      "Shopify Stores",
      "Android Apps",
      "iOS Apps",
      "Cross-Platform Mobile Applications",
    ],
  },
  {
    id: "branding",
    title: "Branding & Graphic Design",
    tagline: "Build a Brand Customers Remember",
    description:
      "Create a strong and professional brand identity that builds trust and sets your business apart from the competition.",
    icon: Palette,
    items: [
      "Logo Design",
      "Brand Identity Design",
      "Company Profile Design",
      "Business Cards & Brochures",
      "Flyers & Packaging Design",
      "Social Media Creatives",
      "Marketing Collaterals",
      "Brand Guidelines",
    ],
  },
  {
    id: "performance-marketing",
    title: "Performance Marketing",
    tagline: "Maximize ROI with Data-Driven Advertising",
    description:
      "Scale your business using performance marketing strategies focused on generating qualified leads, increasing conversions, and improving return on investment.",
    icon: TrendingUp,
    items: [
      "Google Ads & Meta Ads",
      "Conversion Rate Optimization (CRO)",
      "Retargeting Campaigns",
      "Sales Funnel Optimization",
      "Landing Page Optimization",
      "Campaign Analytics & ROI Reporting",
    ],
  },
  {
    id: "content-marketing",
    title: "Content Marketing",
    tagline: "Content That Ranks, Engages & Converts",
    description:
      "Create valuable, SEO-optimized content that improves Google rankings, builds trust, and turns visitors into customers.",
    icon: PenTool,
    items: [
      "Website Content Writing",
      "SEO Blog Writing",
      "Landing Page Copy",
      "Product Descriptions",
      "Email Marketing Content",
      "Social Media Content",
      "Marketing Copywriting",
      "AI-Assisted Content Creation",
    ],
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    tagline: "Convert Subscribers into Loyal Customers",
    description:
      "Reach your audience with personalized email campaigns designed to increase customer engagement, repeat business, and sales.",
    icon: Mail,
    items: [
      "Email Campaign Strategy",
      "Promotional Emails & Automation",
      "Newsletter Design",
      "Customer Automation",
      "Lead Nurturing",
      "Email Performance Analytics",
    ],
  },
  {
    id: "lead-generation",
    title: "Lead Generation",
    tagline: "Generate High-Quality Leads That Convert",
    description:
      "We help businesses generate qualified leads using SEO, Google Ads, Meta Ads, landing pages, social media marketing, WhatsApp marketing, and conversion optimization.",
    icon: Target,
    items: [
      "B2B & B2C Lead Generation",
      "Landing Page Development",
      "Sales Funnel Creation",
      "WhatsApp Lead Campaigns",
      "Meta Lead Ads",
      "Google Lead Campaigns",
      "CRM Integration",
    ],
  },
  {
    id: "whatsapp-marketing",
    title: "WhatsApp Marketing",
    tagline: "Reach Customers Instantly with WhatsApp Business",
    description:
      "Boost customer engagement, generate quality leads, and increase sales with personalized messaging, promotional campaigns, automation, and WhatsApp Business solutions.",
    icon: MessageCircle,
    items: [
      "WhatsApp Business Setup",
      "Bulk WhatsApp Campaigns",
      "Broadcast Messaging",
      "Click-to-WhatsApp Ads",
      "Automated Replies",
      "Lead Nurturing & Customer Engagement",
      "Product Catalog Setup",
      "Campaign Analytics",
      "CRM Integration",
    ],
  },
];
