// src/constants/index.js
export const navItems = [
  { id: "home", label: "Home", href: "#home", external: false, hidden: false, isModal: false },
  { id: "whitepaper", label: "Whitepaper", href: "#", external: false, hidden: false, isModal: true }, // Will open ForgenomicsModal
  { id: "forgenomics", label: "Forgenomics", href: "#", external: false, hidden: false, isModal: true },
  { id: "marketplace", label: "Marketplace", href: "/marketplace", external: false, hidden: false, isModal: false },
  { id: "faq", label: "FAQ", href: "#", external: false, hidden: false, isModal: true }, // Will open FAQModal
];

export const footerItems = [
  {
    id: "home",
    label: "Home",
    href: "#home",
    external: false,
    hidden: false
  },
  {
    id: "forgenomics",
    label: "Forgenomics",
    href: "#",
    external: true, // This is an external link in the footer, not a modal
    hidden: false
  },
  {
    id: "faq",
    label: "FAQ",
    href: "#faq",
    external: false,
    hidden: false
  },
  {
    id: "whitepaper",
    label: "Whitepaper",
    href: "https://gemini.google.com/share/9a19f321e25c", // Link to your document
    external: true, // This is an external link in the footer, not a modal
    hidden: false
  },
  {
    id: "marketplace",
    label: "Marketplace",
    href: "/marketplace",
    external: false,
    hidden: false
  }
  // Add more items as needed
];
// Keep other navItemsWith... arrays if you use them elsewhere, but ensure this base navItems is correct.
// These are examples and might not be used in your App or Navbar directly.
export const navItemsWithExternalLinks = [
  ...navItems,
  {
    id: "externalLinkExample",
    label: "External Link Example",
    href: "https://example.com",
    external: true,
    hidden: false
  }
];
export const navItemsWithHidden = [
  ...navItems,
  {
    id: "hiddenItem",
    label: "Hidden Item",
    href: "#hidden",
    external: false,
    hidden: true
  }
];
export const navItemsWithModal = [
  ...navItems,
  {
    id: "whitepaperModalExample",
    label: "Whitepaper Modal Example",
    href: "#",
    external: false,
    hidden: false,
    isModal: true
  }
];
export const navItemsWithMarketplace = [
  ...navItems,
  {
    id: "marketplaceExample",
    label: "Marketplace Example",
    href: "/marketplace",
    external: false,
    hidden: false
  }
];
export const navItemsWithAll = [
  ...navItems,
  {
    id: "allItemsExample",
    label: "All Items Example",
    href: "#all",
    external: false,
    hidden: false
  }
];
export const navItemsWithExternal = [
  ...navItems,
  {
    id: "externalLinkOnly",
    label: "External Link Only",
    href: "https://example.com",
    external: true,
    hidden: false
  }
];
export const navItemsWithHiddenAndExternal = [
  ...navItems,
  {
    id: "hiddenExternal",
    label: "Hidden External",
    href: "https://example.com",
    external: true,
    hidden: true
  }
];
export const navItemsWithModalAndMarketplace =
  [
    ...navItems,
    {
      id: "whitepaperRouteExample",
      label: "Whitepaper Route Example",
      href: "/whitepaper",    
      external: false,
      hidden: false,
      isModal: false            
    } 
  ];
export const navItemsWithAllFeatures = [
  ...navItems,
  {
    id: "allFeaturesExample",
    label: "All Features Example",
    href: "#allFeatures",
    external: false,
    hidden: false
  }
];
export const navItemsWithExternalAndHidden = [
  ...navItems,
  {
    id: "externalHiddenExample",
    label: "External Hidden Example",
    href: "https://example.com",
    external: true,
    hidden: true
  }
];
  
export const showFeature = true;
