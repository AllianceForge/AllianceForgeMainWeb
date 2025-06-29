import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { id: "home", label: "Home" },
  { id: "feature", label: "Features", hidden: true },   // 👈 hidden
  { id: "forgenomics", label: "Forgenomics" },
  { id: "roadmap", label: "Roadmap" },
  { id: "marketplace", label: "Marketplace", hidden: true }, // 👈 hidden
  { id: "faq", label: "FAQ" }
];
export const showFeature = true; // Toggle feature section visibility
export const showMarketplace = true; // Toggle marketplace section visibility
export const showRoadmap = true; // Toggle roadmap section visibility
export const showForgenomics = true; // Toggle forgenomics section visibility
export const showFAQ = true; // Toggle FAQ section visibility
export const showFooter = true; // Toggle footer visibility
export const showWalletConnectButton = true; // Toggle WalletConnect button visibility
export const showNavbar = true; // Toggle navbar visibility
export const showHeroSection = true; // Toggle hero section visibility
export const showNotFound = true; // Toggle NotFound page visibility
export const showCodeMerge = true; // Toggle Code Merge section visibility
export const showReviewCode = true; // Toggle Review Code section visibility
export const showAI = true; // Toggle AI Assistance section visibility
export const showShareWork = true; // Toggle Share Work section visibility
export const showTestimonials = true; // Toggle testimonials section visibility
export const showPricing = true; // Toggle pricing section visibility
export const showResources = true; // Toggle resources section visibility
export const showPlatform = true; // Toggle platform section visibility
export const showCommunity = true; // Toggle community section visibility
export const showFooterLinks = true; // Toggle footer links visibility
export const showFooterSocials = true; // Toggle footer socials visibility
export const showFooterCopyright = true; // Toggle footer copyright visibility

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Renee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
export const footerLinks = [
  { href: "#", text: "Privacy Policy" },
  { href: "#", text: "Terms of Service" },
  { href: "#", text: "Contact Us" },
  { href: "#", text: "Support" },
  { href: "#", text: "Feedback" },
];
export const footerSocials = [
  { href: "https://x.com/AllianceForgeHQ", icon: "fab fa-twitter" },
  { href: "https://github.com/AllianceForge", icon: "fab fa-github" },
];
export const footerCopyright = "© 2025 Alliance Forge. All rights reserved.";
export const footerLogo = "https://allianceforge.online/logo.png"; // Replace with your actual logo URL
export const footerDescription =
  "Alliance Forge is a cutting-edge platform that revolutionizes the way developers create and share virtual reality applications. With its intuitive drag-and-drop interface, multi-platform compatibility, and powerful collaboration tools, Alliance Forge empowers developers to bring their VR visions to life with ease and efficiency.";
export const footerContact = {
  email: "allianceforge22@gmail.com"
};
export const footerAddress = "1234 Alliance Forge St, VR City, VR 56789";
export const footerPhone = "+1 (123) 456-7890"; // Replace with your actual phone number
export const footerLinksData = {
  resources: resourcesLinks,
  platform: platformLinks,
  community: communityLinks,
  footer: footerLinks,
  socials: footerSocials,
};
export const footerData = {
  logo: footerLogo,
  description: footerDescription,
  contact: footerContact,
  address: footerAddress,
  phone: footerPhone,
}