import { Builder } from "@builder.io/react";
import { BlogPostCard } from "./components/BlogPostCard";
import { NewsletterForm } from "./components/NewsletterForm";
import { HeroSection } from "./components/HeroSection";
import { BlogGrid } from "./components/BlogGrid";
import { Footer } from "./components/Footer";
import { FullHomepage } from "./components/FullHomepage";

// Clé API Builder.io
export const BUILDER_API_KEY = "7594b6937fba48a8b37e976efe2e441c";

// ============================================
// COMPOSANTS CUSTOM DISPONIBLES DANS BUILDER
// ============================================

Builder.registerComponent(FullHomepage, {
  name: "FullHomepage",
  friendlyName: "🏠 Page Complète Blog",
  inputs: [
    { name: "className", type: "string" },
    { name: "heroTitle", type: "string", defaultValue: "Bienvenue sur mon blog" },
    { name: "heroSubtitle", type: "string", defaultValue: "Découvre mes articles sur le développement, le design et la tech." },
    { name: "heroButtonText", type: "string", defaultValue: "Voir les articles" },
    { name: "heroBackgroundColor", type: "color", defaultValue: "#1a1a2e" },
    { name: "blogSectionTitle", type: "string", defaultValue: "Derniers articles" },
    { name: "article1Title", type: "string", defaultValue: "Comment débuter avec Next.js" },
    { name: "article1Excerpt", type: "longText", defaultValue: "Un guide complet pour créer ta première application Next.js." },
    { name: "article1Image", type: "file", allowedFileTypes: ["jpeg", "png", "webp"] },
    { name: "article2Title", type: "string", defaultValue: "Les meilleures pratiques TypeScript" },
    { name: "article2Excerpt", type: "longText", defaultValue: "Découvre les patterns pour écrire du TypeScript maintenable." },
    { name: "article2Image", type: "file", allowedFileTypes: ["jpeg", "png", "webp"] },
    { name: "article3Title", type: "string", defaultValue: "Tailwind CSS : astuces avancées" },
    { name: "article3Excerpt", type: "longText", defaultValue: "Maîtrise Tailwind CSS avec ces techniques avancées." },
    { name: "article3Image", type: "file", allowedFileTypes: ["jpeg", "png", "webp"] },
    { name: "newsletterTitle", type: "string", defaultValue: "Inscris-toi à la newsletter" },
    { name: "newsletterDescription", type: "string", defaultValue: "Reçois les derniers articles directement dans ta boîte mail." },
    { name: "siteName", type: "string", defaultValue: "Mon Blog" },
    { name: "email", type: "email", defaultValue: "contact@monblog.com" },
  ],
});

Builder.registerComponent(HeroSection, {
  name: "HeroSection",
  friendlyName: "🎯 Hero Section",
  inputs: [
    { name: "title", type: "string", defaultValue: "Bienvenue sur mon blog" },
    { name: "subtitle", type: "longText", defaultValue: "Découvre mes articles sur le développement, le design et la tech." },
    { name: "buttonText", type: "string", defaultValue: "Découvrir les articles" },
    { name: "buttonLink", type: "url", defaultValue: "#articles" },
    { name: "backgroundImage", type: "file", allowedFileTypes: ["jpeg", "png", "webp"] },
    { name: "backgroundColor", type: "color", defaultValue: "#1a1a2e" },
    { name: "textColor", type: "color", defaultValue: "#ffffff" },
  ],
});

Builder.registerComponent(BlogGrid, {
  name: "BlogGrid",
  friendlyName: "📰 Grille Articles",
  inputs: [
    { name: "sectionTitle", type: "string", defaultValue: "Derniers articles" },
    { name: "sectionSubtitle", type: "string", defaultValue: "Retrouve ici mes dernières publications" },
    { name: "article1Title", type: "string", defaultValue: "Comment débuter avec Next.js" },
    { name: "article1Excerpt", type: "longText", defaultValue: "Un guide complet." },
    { name: "article1Image", type: "file", allowedFileTypes: ["jpeg", "png", "webp"] },
    { name: "article1Date", type: "string", defaultValue: "15 Jan 2026" },
    { name: "article1Author", type: "string", defaultValue: "Thibault" },
    { name: "article2Title", type: "string", defaultValue: "Les meilleures pratiques TypeScript" },
    { name: "article2Excerpt", type: "longText", defaultValue: "Découvre les patterns." },
    { name: "article2Image", type: "file", allowedFileTypes: ["jpeg", "png", "webp"] },
    { name: "article2Date", type: "string", defaultValue: "12 Jan 2026" },
    { name: "article2Author", type: "string", defaultValue: "Thibault" },
    { name: "article3Title", type: "string", defaultValue: "Tailwind CSS avancé" },
    { name: "article3Excerpt", type: "longText", defaultValue: "Maîtrise Tailwind." },
    { name: "article3Image", type: "file", allowedFileTypes: ["jpeg", "png", "webp"] },
    { name: "article3Date", type: "string", defaultValue: "8 Jan 2026" },
    { name: "article3Author", type: "string", defaultValue: "Thibault" },
  ],
});

Builder.registerComponent(NewsletterForm, {
  name: "NewsletterForm",
  friendlyName: "📧 Newsletter",
  inputs: [
    { name: "title", type: "string", defaultValue: "Inscris-toi à la newsletter" },
    { name: "description", type: "string", defaultValue: "Reçois les derniers articles." },
    { name: "buttonText", type: "string", defaultValue: "S'inscrire" },
    { name: "placeholder", type: "string", defaultValue: "ton@email.com" },
  ],
});

Builder.registerComponent(Footer, {
  name: "Footer",
  friendlyName: "🦶 Footer",
  inputs: [
    { name: "siteName", type: "string", defaultValue: "Mon Blog" },
    { name: "description", type: "string", defaultValue: "Articles sur le dev et la tech." },
    { name: "twitterUrl", type: "url", defaultValue: "https://twitter.com" },
    { name: "githubUrl", type: "url", defaultValue: "https://github.com" },
    { name: "linkedinUrl", type: "url", defaultValue: "https://linkedin.com" },
    { name: "email", type: "email", defaultValue: "contact@monblog.com" },
    { name: "copyrightText", type: "string", defaultValue: "© 2026 Mon Blog." },
    { name: "backgroundColor", type: "color", defaultValue: "#1a1a2e" },
    { name: "textColor", type: "color", defaultValue: "#ffffff" },
  ],
});

Builder.registerComponent(BlogPostCard, {
  name: "BlogPostCard",
  friendlyName: "📄 Carte Article",
  inputs: [
    { name: "title", type: "string", defaultValue: "Titre de l'article" },
    { name: "excerpt", type: "longText", defaultValue: "Résumé de l'article..." },
    { name: "imageUrl", type: "file", allowedFileTypes: ["jpeg", "png", "webp"] },
    { name: "date", type: "string", defaultValue: "15 Jan 2026" },
    { name: "author", type: "string", defaultValue: "Thibault" },
    { name: "href", type: "url", defaultValue: "#" },
  ],
});
