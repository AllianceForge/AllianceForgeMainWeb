export const navItems = [
  { id: "home", label: "Home", href: "#home", external: false, hidden: false },
  { id: "forgenomics", label: "Forgenomics", href: "#", isModal: true },
  { id: "faq", label: "FAQ", href: "#faq", external: false, hidden: false },
  { id: "whitepaper", label: "Whitepaper", href: "#", external: false, hidden: false, isModal: true },
  { id: "marketplace", label: "Marketplace", href: "/marketplace", external: false, hidden: false },
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
    href: "C:\Users\spwon\OneDrive\Escritorio\ALLFORGE\AllianceForge\public\forgenomics.html",
    external: true,
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
    external: true,
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
export const navItemsWithExternalLinks = [
  ...navItems,
  {
    id: "whitepaper",
    label: "Whitepaper",
    href: "https://gemini.google.com/share/9a19f321e25c", // Link to your document
    external: true,
    hidden: false
  }
  // Add more external links as needed
  // { id: "externalLink", label: "External Link", href: "https://example.com", external: true, hidden: false }
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
    id: "whitepaper",
    label: "Whitepaper",
    href: "#",
    external: false,
    hidden: false,
    isModal: true // Indicates this item should open a modal
  }
];
export const navItemsWithMarketplace = [
  ...navItems,
  {
    id: "marketplace",
    label: "Marketplace",
    href: "/marketplace",
    external: false,
    hidden: false
  }
];
export const navItemsWithAll = [
  ...navItems,
  {
    id: "allItems",
    label: "All Items",
    href: "#all",
    external: false,
    hidden: false
  }
];
export const navItemsWithExternal = [
  ...navItems,
  {
    id: "externalLink",
    label: "External Link",
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
      id: "whitepaper",
      label: "Whitepaper",
      href: "/whitepaper",    
      external: false,
      hidden: false,
      isModal: false           
    } 
  ];
  export const navItemsWithAllFeatures = [
  ...navItems,
  {
    id: "allFeatures",
    label: "All Features",
    href: "#allFeatures",
    external: false,
    hidden: false
  }
];
export const navItemsWithExternalAndHidden = [
  ...navItems,
  {
    id: "externalHidden",
    label: "External Hidden",
    href: "https://example.com",
    external: true,
    hidden: true
  }
];
  

export const showFeature = true;