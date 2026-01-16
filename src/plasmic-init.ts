import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { BlogPostCard } from "./components/BlogPostCard";
import { NewsletterForm } from "./components/NewsletterForm";

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
// COMPOSANTS CUSTOM - Disponibles dans Plasmic
// ============================================

PLASMIC.registerComponent(BlogPostCard, {
  name: "BlogPostCard",
  displayName: "Carte Article",
  props: {
    title: {
      type: "string",
      defaultValue: "Titre de l'article",
    },
    excerpt: {
      type: "string",
      defaultValue: "Résumé de l'article...",
    },
    imageUrl: {
      type: "string",
    },
    date: {
      type: "string",
      defaultValue: "15 Jan 2026",
    },
    author: {
      type: "string",
      defaultValue: "Thibault",
    },
    href: {
      type: "string",
      defaultValue: "#",
    },
  },
});

PLASMIC.registerComponent(NewsletterForm, {
  name: "NewsletterForm",
  displayName: "Newsletter",
  props: {
    title: {
      type: "string",
      defaultValue: "Inscris-toi à la newsletter",
    },
    description: {
      type: "string",
      defaultValue: "Reçois les derniers articles.",
    },
    buttonText: {
      type: "string",
      defaultValue: "S'inscrire",
    },
    placeholder: {
      type: "string",
      defaultValue: "ton@email.com",
    },
  },
});
