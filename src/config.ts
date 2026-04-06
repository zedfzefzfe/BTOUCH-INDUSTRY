// ─── Site ────────────────────────────────────────────────────────────────────

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "BTOUCH INDUSTRY - Aménagement Intérieur",
  description: "Aménagement cuisine, dressing sur mesure, habillage mural, maquette 3D, suivi de chantier. Design d'intérieur sur mesure au Maroc.",
  language: "fr",
};

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface MenuLink {
  label: string;
  href: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface NavigationConfig {
  brandName: string;
  menuLinks: MenuLink[];
  socialLinks: SocialLink[];
  searchPlaceholder: string;
  cartEmptyText: string;
  cartCheckoutText: string;
  continueShoppingText: string;
  menuBackgroundImage: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "BTOUCH INDUSTRY",
  menuLinks: [
    { label: "Accueil", href: "#hero" },
    { label: "Services", href: "#products" },
    { label: "À Propos", href: "#about" },
    { label: "Réalisations", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],
  socialLinks: [
    { icon: "Instagram", label: "Instagram", href: "https://instagram.com/btouchdesign" },
    { icon: "Facebook", label: "Facebook", href: "#" },
  ],
  searchPlaceholder: "Rechercher...",
  cartEmptyText: "Votre panier est vide",
  cartCheckoutText: "Commander",
  continueShoppingText: "Continuer les achats",
  menuBackgroundImage: "/images/11.jpg",
};

// ─── Hero ────────────────────────────────────────────────────────────────────

export interface HeroConfig {
  tagline: string;
  title: string;
  subtitle: string; 
  ctaPrimaryText: string;
  ctaPrimaryTarget: string;
  ctaSecondaryText: string;
  ctaSecondaryTarget: string;
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  tagline: "DESIGN D'INTÉRIEUR",
  title: "Transformez Votre Espace En Votre Rêve",
  subtitle: "Notre expertise est de donner vie à vos projets avec une approche unique et sur-mesure.",
  ctaPrimaryText: "Nos Services",
  ctaPrimaryTarget: "#products",
  ctaSecondaryText: "Nous Contacter",
  ctaSecondaryTarget: "#contact",
  backgroundImage: "/images/hero-bg.jpg",
};

// ─── SubHero ─────────────────────────────────────────────────────────────────

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface SubHeroConfig {
  tag: string;
  heading: string;
  bodyParagraphs: string[];
  linkText: string;
  linkTarget: string;
  image1: string;
  image2: string;
  stats: Stat[];
}

export const subHeroConfig: SubHeroConfig = {
  tag: "NOTRE PHILOSOPHIE",
  heading: "L'Excellence dans Chaque Détail",
  bodyParagraphs: [
    "Chez BTOUCH DESIGN, nous transformons vos espaces en lieux de vie uniques. Notre équipe passionnée allie créativité et expertise technique pour créer des intérieurs qui vous ressemblent.",
    "De la conception 3D à la réalisation finale, nous accompagnons chaque projet avec un souci du détail irréprochable et un engagement total envers la qualité."
  ],
  linkText: "En Savoir Plus",
  linkTarget: "#about",
  image1: "/images/11.jpg",
  image2: "/images/philosophy-5.jpg",
  stats: [
    { value: 76, suffix: "", label: "Projets Réalisés" },
    { value: 100, suffix: "%", label: "Clients Satisfaits" },
    { value: 100, suffix: "%", label: "Devis Gratuit" },
    { value: 5, suffix: "+", label: "Années d'Expérience" },
  ],
};

// ─── Video Section ───────────────────────────────────────────────────────────

export interface VideoSectionConfig {
  tag: string;
  heading: string;
  bodyParagraphs: string[];
  ctaText: string;
  ctaTarget: string;
  backgroundImage: string;
}

export const videoSectionConfig: VideoSectionConfig = {
  tag: "NOTRE PROCESSUS",
  heading: "De Votre Vision à Votre Espace",
  bodyParagraphs: [
    "Découvrez comment nous transformons vos idées en réalité. Notre processus commence par une consultation personnalisée pour comprendre vos besoins et vos envies.",
    "Grâce à nos maquettes 3D, vous visualisez votre projet avant même le début des travaux. Un suivi rigoureux garantit une réalisation impeccable."
  ],
  ctaText: "Voir Nos Réalisations",
  ctaTarget: "#blog",
  backgroundImage: "/images/2.jpg",
};

// ─── Products ────────────────────────────────────────────────────────────────

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  icon?: string;
  description?: string;
  link?: string;
}

export interface ProductsConfig {
  tag: string;
  heading: string;
  description: string;
  viewAllText: string;
  addToCartText: string;
  addedToCartText: string;
  categories: string[];
  products: Product[];
}

export const productsConfig: ProductsConfig = {
  tag: "NOS SERVICES",
  heading: "Des Solutions Sur Mesure",
  description: "Découvrez notre gamme complète de services d'aménagement intérieur, conçus pour transformer votre espace en un lieu unique et fonctionnel.",
  viewAllText: "Démarrer Mon Projet",
  addToCartText: "Demander un Devis",
  addedToCartText: "Demande Envoyée!",
  categories: ["Tous", "Cuisine", "Dressing", "Habillage", "3D"],
  products: [
    { 
      id: 1, 
      name: "La décoration d'intérieur", 
      price: 0, 
      category: "Cuisine", 
      image: "/images/product-1.jpg",
      icon: "HardHat",
      description: "Une décoration d'intérieur réussie et une décoration harmonieuse qui respecte les désirs et les besoins du client.",
      link: "#contact"
    },
    { 
      id: 2, 
      name: "Aménagement & Design intérieur", 
      price: 0, 
      category: "Dressing", 
      image: "/images/product-2.jpg",
      icon: "Sofa",
      description: "Notre mission est le conseil, tant au niveau des couleurs que des matériaux, de l'éclairage, du mobilier et des accessoires.",
      link: "#contact"
    },
    { 
      id: 3, 
      name: "Conception 2D/3D", 
      price: 0, 
      category: "Habillage", 
      image: "/images/product-3.jpg",
      icon: "Ruler",
      description: "Une fois le pré-projet établi, vient l'étape de la présentation au client. Nous visualisons le projet sous forme de croquis...",
      link: "#contact"
    },
    { 
      id: 4, 
      name: "Projet clé en main", 
      price: 0, 
      category: "3D", 
      image: "/images/product-4.jpg",
      icon: "Trophy",
      description: "Le manque de temps, la méconnaissance des tendances, l'inexpérience dans le bricolage ou tout simplement le besoin...",
      link: "#contact"
    },
    { 
      id: 5, 
      name: "Suivi de Chantier", 
      price: 0, 
      category: "Cuisine", 
      image: "/images/product-5.jpg",
      icon: "CheckCircle",
      description: "Un suivi rigoureux et professionnel de votre projet pour garantir une réalisation conforme à vos attentes.",
      link: "#contact"
    },
    { 
      id: 6, 
      name: "Consultation Design", 
      price: 0, 
      category: "3D", 
      image: "/images/product-6.jpg",
      icon: "MessageCircle",
      description: "Une consultation personnalisée avec nos experts en design pour définir la meilleure approche pour votre espace.",
      link: "#contact"
    },
  ],
};

// ─── Dressing ────────────────────────────────────────────────────────────────

export interface DressingConfig {
  tag: string;
  heading: string;
  description: string;
  paragraphs: string[];
  video1: string;
  video2: string;
}

export const dressingConfig: DressingConfig = {
  tag: "DRESSING SUR MESURE",
  heading: "Rangement Élégant et Fonctionnel",
  description: "Transformez votre espace de rangement en un dressing de luxe adapté à vos besoins.",
  paragraphs: [
    "Nos dressings sur mesure combinent esthétique moderne et fonctionnalité optimale. Chaque placard est conçu pour maximiser l'espace tout en reflétant votre style personnel.",
    "Du choix des matériaux aux finitions raffinées, nous prenons en charge chaque détail pour créer un espace de rangement que vous allez adorer utiliser quotidiennement."
  ],
  video1: "/videos/52.mp4",
  video2: "/videos/51.mp4",
};

// ─── Features ────────────────────────────────────────────────────────────────

export interface Feature {
  icon: "Truck" | "ShieldCheck" | "Leaf" | "Heart";
  title: string;
  description: string;
}

export interface FeaturesConfig {
  features: Feature[];
}

export const featuresConfig: FeaturesConfig = {
  features: [
    { icon: "Truck", title: "Conception 3D", description: "Visualisez votre projet avant réalisation avec nos maquettes 3D photoréalistes" },
    { icon: "ShieldCheck", title: "Garantie Qualité", description: "Un travail soigné et des matériaux de première qualité pour un résultat durable" },
    { icon: "Leaf", title: "Sur Mesure", description: "Chaque projet est unique et adapté à vos besoins spécifiques" },
    { icon: "Heart", title: "Suivi Complet", description: "Accompagnement de A à Z, de la conception à la réalisation finale" },
  ],
};

// ─── Blog ────────────────────────────────────────────────────────────────────

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

export interface BlogConfig {
  tag: string;
  heading: string;
  viewAllText: string;
  readMoreText: string;
  posts: BlogPost[];
}

export const blogConfig: BlogConfig = {
  tag: "RÉALISATIONS",
  heading: "Nos Projets Récents",
  viewAllText: "Demander Votre Devis Personnalisé",
  readMoreText: "Démarrer Mon Projet",
  posts: [
    { 
      id: 1, 
      title: "Salon TV Mural Haut de Gamme", 
      date: "Mars 2026", 
      image: "/images/1.jpg", 
      excerpt: "Un salon moderne avec un mur TV intégré en panneaux sombres, éclairage LED ambiant encastré." 
    },
    { 
      id: 2, 
      title: "Cuisine Bois Naturel Inox & Élégante", 
      date: "Février 2026", 
      image: "/images/60.jpg", 
      excerpt: "Une cuisine chaleureuse entièrement habillée de bois naturel avec des électroménagers encastrés en inox" 
    },
    { 
      id: 3, 
      title: "Cuisine Blanche Lumineuse ", 
      date: "Janvier 2026", 
      image: "/images/17.jpg", 
      excerpt: "Une cuisine blanche épurée avec un îlot central en marbre et des rangements dissimulés pour une esthétique minimaliste. " 
    },
    { 
      id: 4, 
      title: "Chambre Cocon Tout Blanc", 
      date: "Janvier 2026", 
      image: "/images/70.jpg", 
      excerpt: "Une chambre enveloppante aux tons crème et blanc cassé, avec tête de lit capitonnée XXL, lambris mural strié et éclairage LED plafond pour une ambiance douce." 
    },
    { 
      id: 5, 
      title: "Cuisine Bicolore Graphique Moderne", 
      date: "Janvier 2026", 
      image: "/images/71.jpg", 
      excerpt: "Une cuisine aux façades bicolores blanc et anthracite, avec hotte colonne centrale et fenêtre panoramique — un design contemporain et fonctionnel." 
    },
    { 
      id: 6, 
      title: "Cuisine Bois & Marbre — Suspension Géométrique", 
      date: "Janvier 2026", 
      image: "/images/72.jpg", 
      excerpt: "Une cuisine sophistiquée mêlant bois chaud, marbre veiné et suspensions géométriques noires, pour un résultat à la fois design." 
    },
  ],
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface FaqConfig {
  tag: string;
  heading: string;
  ctaText: string;
  ctaTarget: string;
  faqs: FaqItem[];
}

export const faqConfig: FaqConfig = {
  tag: "FAQ",
  heading: "Questions Fréquentes",
  ctaText: "Une autre question? Contactez-nous",
  ctaTarget: "#contact",
  faqs: [
    { 
      id: 1, 
      question: "Quels sont vos délais de réalisation?", 
      answer: "Les délais varient selon la complexité du projet. Une cuisine complète prend généralement 4 à 8 semaines, tandis qu'un dressing sur mesure peut être réalisé en 2 à 4 semaines. Nous établissons un planning détaillé lors du devis." 
    },
    { 
      id: 2, 
      question: "Proposez-vous des consultations à domicile?", 
      answer: "Oui, nous proposons des consultations gratuites à domicile pour évaluer votre espace, discuter de vos besoins et prendre les mesures nécessaires. Contactez-nous au 0665043333 pour prendre rendez-vous." 
    },
    { 
      id: 3, 
      question: "Comment se déroule le processus de conception 3D?", 
      answer: "Après notre première rencontre, nous créons une maquette 3D photoréaliste de votre projet. Vous pouvez visualiser chaque détail, tester différentes configurations et valider le design avant le début des travaux." 
    },
    { 
      id: 4, 
      question: "Quels types de matériaux utilisez-vous?", 
      answer: "Nous travaillons avec une large gamme de matériaux de qualité : bois massif, MDF laqué, stratifié haut de gamme, verre, aluminium, et bien d'autres. Nous adaptons les matériaux à votre budget et vos préférences esthétiques." 
    },
    { 
      id: 5, 
      question: "Proposez-vous un suivi de chantier?", 
      answer: "Absolument! Le suivi de chantier fait partie intégrante de notre service. Nous coordonnons les différents corps de métier, contrôlons la qualité à chaque étape et assurons le respect des délais." 
    },
  ],
};

// ─── About ───────────────────────────────────────────────────────────────────

export interface AboutSection {
  tag: string;
  heading: string;
  paragraphs: string[];
  quote: string;
  attribution: string;
  image: string;
  backgroundColor: string;
  textColor: string;
  cta?: {
    text: string;
    href: string;
  };
}

export interface AboutConfig {
  sections: AboutSection[];
}

export const aboutConfig: AboutConfig = {
  sections: [
    {
      tag: "NOTRE HISTOIRE",
      heading: "Une Vision, Un Héritage",
      paragraphs: [
        "BTOUCH DESIGN n'est pas qu'une agence. C'est le fruit d'une vision portée par une équipe de passionnés qui ont décidé de repenser l'aménagement intérieur. Depuis 2019, nous transformons des espaces vides en univers personnalisés, chacun racontant l'histoire unique de ses habitants.",
        "Chaque projet est une collaboration authentique où votre rêve devient notre mission. Nous mêlons créativité débridée, expertise technique pointue et écoute bienveillante pour créer des intérieurs qui s'éternisent dans les cœurs."
      ],
      quote: "",
      attribution: "",
      image: "/images/philosoph.jpg",
      backgroundColor: "#0f0f0f",
      textColor: "#e8e0d0",
      cta: {
        text: "Découvrir Nos Projets",
        href: "#projects"
      }
    },
    {
      tag: "NOTRE ENGAGEMENT",
      heading: "Excellence & Authenticité",
      paragraphs: [],
      quote: "Nous ne créons pas des espaces. Nous créons des expériences. Chaque détail, chaque matière, chaque couleur est choisi pour raconter votre histoire et créer un véritable sanctuaire du bien-être.",
      attribution: "— L'équipe BTOUCH DESIGN",
      image: "/images/80.jpg",
      backgroundColor: "#1a1410",
      textColor: "#e8e0d0",
      cta: {
        text: "Commencer Votre Projet",
        href: "#contact"
      }
    },
  ],
};

// ─── Contact ─────────────────────────────────────────────────────────────────

export interface FormFields {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
}

export interface ContactConfig {
  heading: string;
  description: string;
  locationLabel: string;
  location: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  formFields: FormFields;
  submitText: string;
  submittingText: string;
  submittedText: string;
  successMessage: string;
  backgroundImage: string;
}

export const contactConfig: ContactConfig = {
  heading: "Contactez-Nous",
  description: "Prêt à transformer votre espace? Contactez-nous pour une consultation gratuite. Nous serons ravis de discuter de votre projet et de vous accompagner dans sa réalisation.",
  locationLabel: "Zone d'Intervention",
  location: "Région de Casablanca et environs\nMaroc",
  emailLabel: "Email",
  email: "btouchdesign@gmail.com",
  phoneLabel: "Téléphone",
  phone: "+212 665-043333",
  formFields: {
    nameLabel: "Votre Nom",
    namePlaceholder: "Prénom Nom",
    emailLabel: "Adresse Email",
    emailPlaceholder: "votre@email.com",
    messageLabel: "Votre Message",
    messagePlaceholder: "Décrivez votre projet...",
  },
  submitText: "Envoyer",
  submittingText: "Envoi...",
  submittedText: "Envoyé!",
  successMessage: "Merci pour votre message. Nous vous contacterons dans les plus brefs délais.",
  backgroundImage: "/images/17.jpg",
};

// ─── Footer ──────────────────────────────────────────────────────────────────

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterSocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface FooterConfig {
  brandName: string;
  brandLogo?: string;
  brandDescription: string;
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterPlaceholder: string;
  newsletterButtonText: string;
  newsletterSuccessText: string;
  linkGroups: FooterLinkGroup[];
  legalLinks: FooterLink[];
  copyrightText: string;
  socialLinks: FooterSocialLink[];
}

export const footerConfig: FooterConfig = {
  brandName: "BTOUCH INDUSTRY",
  brandLogo: "/images/btouch-logo.png",
  brandDescription: "Aménagement cuisine, dressing sur mesure, habillage mural, maquette 3D et suivi de chantier au Maroc.",
  newsletterHeading: "Restez Informé",
  newsletterDescription: "Inscrivez-vous pour recevoir nos actualités et inspirations design.",
  newsletterPlaceholder: "Votre email",
  newsletterButtonText: "S'inscrire",
  newsletterSuccessText: "Bienvenue dans la communauté BTOUCH!",
  linkGroups: [
    {
      title: "Services",
      links: [
        { label: "Cuisine", href: "#products" },
        { label: "Dressing", href: "#products" },
        { label: "Habillage Mural", href: "#products" },
        { label: "Maquette 3D", href: "#products" },
        { label: "Suivi Chantier", href: "#products" },
      ],
    },
    {
      title: "Entreprise",
      links: [
        { label: "À Propos", href: "#about" },
        { label: "Nos Réalisations", href: "#blog" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "btouchdesign@gmail.com", href: "mailto:btouchdesign@gmail.com" },
        { label: "+212 665-043333", href: "tel:+212665043333" },
        { label: "Instagram", href: "https://instagram.com/btouchdesign" },
      ],
    },
  ],
  legalLinks: [
    { label: "Politique de Confidentialité", href: "#" },
    { label: "Mentions Légales", href: "#" },
  ],
  copyrightText: "© 2026 BTOUCH DESIGN. Tous droits réservés.",
  socialLinks: [
    { icon: "Instagram", label: "Instagram", href: "https://instagram.com/btouchdesign" },
    { icon: "Facebook", label: "Facebook", href: "#" },
  ],
};
