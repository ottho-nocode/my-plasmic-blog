import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { BlogPostCard } from "./components/BlogPostCard";
import { NewsletterForm } from "./components/NewsletterForm";
import { HeroSection } from "./components/HeroSection";
import { BlogGrid } from "./components/BlogGrid";
import { Footer } from "./components/Footer";
import { FullHomepage } from "./components/FullHomepage";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "kkWiCdhdAMr8mFtuiSWwh4",
      token: "4PtZEhIRgSCUD8b6VB2HeZTaKcohUR5i1S6PWzFmmwNMphuEfk7lck1IYfzFkT6nXCkOMHZOHMc0HKo37Uw",
    },
  ],
  preview: true,
});

// ============================================
// 🏠 PAGE COMPLÈTE - Glisse et c'est prêt !
// ============================================

PLASMIC.registerComponent(FullHomepage, {
  name: "FullHomepage",
  displayName: "🏠 Page Complète Blog",
  props: {
    heroTitle: { type: "string", defaultValue: "Bienvenue sur mon blog" },
    heroSubtitle: { type: "string", defaultValue: "Découvre mes articles sur le développement, le design et la tech." },
    heroButtonText: { type: "string", defaultValue: "Voir les articles" },
    heroBackgroundColor: { type: "string", defaultValue: "#1a1a2e" },
    blogSectionTitle: { type: "string", defaultValue: "Derniers articles" },
    article1Title: { type: "string", defaultValue: "Comment débuter avec Next.js" },
    article1Excerpt: { type: "string", defaultValue: "Un guide complet pour créer ta première application Next.js." },
    article1Image: { type: "string", defaultValue: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop" },
    article2Title: { type: "string", defaultValue: "Les meilleures pratiques TypeScript" },
    article2Excerpt: { type: "string", defaultValue: "Découvre les patterns pour écrire du TypeScript maintenable." },
    article2Image: { type: "string", defaultValue: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop" },
    article3Title: { type: "string", defaultValue: "Tailwind CSS : astuces avancées" },
    article3Excerpt: { type: "string", defaultValue: "Maîtrise Tailwind CSS avec ces techniques avancées." },
    article3Image: { type: "string", defaultValue: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&h=400&fit=crop" },
    newsletterTitle: { type: "string", defaultValue: "Inscris-toi à la newsletter" },
    newsletterDescription: { type: "string", defaultValue: "Reçois les derniers articles directement dans ta boîte mail." },
    siteName: { type: "string", defaultValue: "Mon Blog" },
    footerDescription: { type: "string", defaultValue: "Articles sur le dev, le design et la tech." },
    twitterUrl: { type: "string", defaultValue: "https://twitter.com" },
    githubUrl: { type: "string", defaultValue: "https://github.com" },
    email: { type: "string", defaultValue: "contact@monblog.com" },
  },
});

// ============================================
// 📦 SECTIONS INDIVIDUELLES
// ============================================

PLASMIC.registerComponent(HeroSection, {
  name: "HeroSection",
  displayName: "🎯 Hero Section",
  props: {
    title: { type: "string", defaultValue: "Bienvenue sur mon blog" },
    subtitle: { type: "string", defaultValue: "Découvre mes articles sur le développement, le design et la tech." },
    buttonText: { type: "string", defaultValue: "Découvrir les articles" },
    buttonLink: { type: "string", defaultValue: "#articles" },
    backgroundImage: { type: "string" },
    backgroundColor: { type: "string", defaultValue: "#1a1a2e" },
    textColor: { type: "string", defaultValue: "#ffffff" },
  },
});

PLASMIC.registerComponent(BlogGrid, {
  name: "BlogGrid",
  displayName: "📰 Grille Articles (3)",
  props: {
    sectionTitle: { type: "string", defaultValue: "Derniers articles" },
    sectionSubtitle: { type: "string", defaultValue: "Retrouve ici mes dernières publications" },
    article1Title: { type: "string", defaultValue: "Comment débuter avec Next.js en 2026" },
    article1Excerpt: { type: "string", defaultValue: "Un guide complet pour créer ta première application avec Next.js." },
    article1Image: { type: "string", defaultValue: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop" },
    article1Date: { type: "string", defaultValue: "15 Jan 2026" },
    article1Author: { type: "string", defaultValue: "Thibault" },
    article1Link: { type: "string", defaultValue: "#" },
    article2Title: { type: "string", defaultValue: "Les meilleures pratiques TypeScript" },
    article2Excerpt: { type: "string", defaultValue: "Découvre les patterns et bonnes pratiques pour écrire du TypeScript." },
    article2Image: { type: "string", defaultValue: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop" },
    article2Date: { type: "string", defaultValue: "12 Jan 2026" },
    article2Author: { type: "string", defaultValue: "Thibault" },
    article2Link: { type: "string", defaultValue: "#" },
    article3Title: { type: "string", defaultValue: "Tailwind CSS : astuces avancées" },
    article3Excerpt: { type: "string", defaultValue: "Maîtrise Tailwind CSS avec ces techniques avancées." },
    article3Image: { type: "string", defaultValue: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&h=400&fit=crop" },
    article3Date: { type: "string", defaultValue: "8 Jan 2026" },
    article3Author: { type: "string", defaultValue: "Thibault" },
    article3Link: { type: "string", defaultValue: "#" },
  },
});

PLASMIC.registerComponent(NewsletterForm, {
  name: "NewsletterForm",
  displayName: "📧 Newsletter",
  props: {
    title: { type: "string", defaultValue: "Inscris-toi à la newsletter" },
    description: { type: "string", defaultValue: "Reçois les derniers articles directement dans ta boîte mail." },
    buttonText: { type: "string", defaultValue: "S'inscrire" },
    placeholder: { type: "string", defaultValue: "ton@email.com" },
  },
});

PLASMIC.registerComponent(Footer, {
  name: "Footer",
  displayName: "🦶 Footer",
  props: {
    siteName: { type: "string", defaultValue: "Mon Blog" },
    description: { type: "string", defaultValue: "Articles sur le développement web, le design et la tech." },
    twitterUrl: { type: "string", defaultValue: "https://twitter.com" },
    githubUrl: { type: "string", defaultValue: "https://github.com" },
    linkedinUrl: { type: "string", defaultValue: "https://linkedin.com" },
    email: { type: "string", defaultValue: "contact@monblog.com" },
    copyrightText: { type: "string", defaultValue: "© 2026 Mon Blog. Tous droits réservés." },
    backgroundColor: { type: "string", defaultValue: "#1a1a2e" },
    textColor: { type: "string", defaultValue: "#ffffff" },
  },
});

PLASMIC.registerComponent(BlogPostCard, {
  name: "BlogPostCard",
  displayName: "📄 Carte Article",
  props: {
    title: { type: "string", defaultValue: "Titre de l'article" },
    excerpt: { type: "string", defaultValue: "Résumé de l'article qui donne envie de lire la suite..." },
    imageUrl: { type: "string" },
    date: { type: "string", defaultValue: "15 Jan 2026" },
    author: { type: "string", defaultValue: "Thibault" },
    href: { type: "string", defaultValue: "#" },
  },
});
