import React from "react";
import { HeroSection } from "./HeroSection";
import { BlogGrid } from "./BlogGrid";
import { NewsletterForm } from "./NewsletterForm";
import { Footer } from "./Footer";

export interface FullHomepageProps {
  // Hero
  heroTitle?: string;
  heroSubtitle?: string;
  heroButtonText?: string;
  heroBackgroundColor?: string;
  // Blog section
  blogSectionTitle?: string;
  article1Title?: string;
  article1Excerpt?: string;
  article1Image?: string;
  article2Title?: string;
  article2Excerpt?: string;
  article2Image?: string;
  article3Title?: string;
  article3Excerpt?: string;
  article3Image?: string;
  // Newsletter
  newsletterTitle?: string;
  newsletterDescription?: string;
  // Footer
  siteName?: string;
  footerDescription?: string;
  twitterUrl?: string;
  githubUrl?: string;
  email?: string;
}

export function FullHomepage({
  // Hero defaults
  heroTitle = "Bienvenue sur mon blog",
  heroSubtitle = "Découvre mes articles sur le développement, le design et la tech.",
  heroButtonText = "Voir les articles",
  heroBackgroundColor = "#1a1a2e",
  // Blog defaults
  blogSectionTitle = "Derniers articles",
  article1Title = "Comment débuter avec Next.js",
  article1Excerpt = "Un guide complet pour créer ta première application Next.js.",
  article1Image = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
  article2Title = "Les meilleures pratiques TypeScript",
  article2Excerpt = "Découvre les patterns pour écrire du TypeScript maintenable.",
  article2Image = "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop",
  article3Title = "Tailwind CSS : astuces avancées",
  article3Excerpt = "Maîtrise Tailwind CSS avec ces techniques avancées.",
  article3Image = "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&h=400&fit=crop",
  // Newsletter defaults
  newsletterTitle = "Inscris-toi à la newsletter",
  newsletterDescription = "Reçois les derniers articles directement dans ta boîte mail.",
  // Footer defaults
  siteName = "Mon Blog",
  footerDescription = "Articles sur le dev, le design et la tech.",
  twitterUrl = "https://twitter.com",
  githubUrl = "https://github.com",
  email = "contact@monblog.com",
}: FullHomepageProps) {
  return (
    <div className="w-full">
      <HeroSection
        title={heroTitle}
        subtitle={heroSubtitle}
        buttonText={heroButtonText}
        backgroundColor={heroBackgroundColor}
      />

      <BlogGrid
        sectionTitle={blogSectionTitle}
        article1Title={article1Title}
        article1Excerpt={article1Excerpt}
        article1Image={article1Image}
        article2Title={article2Title}
        article2Excerpt={article2Excerpt}
        article2Image={article2Image}
        article3Title={article3Title}
        article3Excerpt={article3Excerpt}
        article3Image={article3Image}
      />

      <div className="px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <NewsletterForm
            title={newsletterTitle}
            description={newsletterDescription}
          />
        </div>
      </div>

      <Footer
        siteName={siteName}
        description={footerDescription}
        twitterUrl={twitterUrl}
        githubUrl={githubUrl}
        email={email}
      />
    </div>
  );
}
