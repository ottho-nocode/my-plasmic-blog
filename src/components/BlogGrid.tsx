import React from "react";

export interface BlogGridProps {
  sectionTitle?: string;
  sectionSubtitle?: string;
  // Article 1
  article1Title?: string;
  article1Excerpt?: string;
  article1Image?: string;
  article1Date?: string;
  article1Author?: string;
  article1Link?: string;
  // Article 2
  article2Title?: string;
  article2Excerpt?: string;
  article2Image?: string;
  article2Date?: string;
  article2Author?: string;
  article2Link?: string;
  // Article 3
  article3Title?: string;
  article3Excerpt?: string;
  article3Image?: string;
  article3Date?: string;
  article3Author?: string;
  article3Link?: string;
  className?: string;
}

export function BlogGrid({
  sectionTitle = "Derniers articles",
  sectionSubtitle = "Retrouve ici mes dernières publications",
  article1Title = "Comment débuter avec Next.js en 2026",
  article1Excerpt = "Un guide complet pour créer ta première application avec Next.js, de l'installation au déploiement sur Vercel.",
  article1Image = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
  article1Date = "15 Jan 2026",
  article1Author = "Thibault",
  article1Link = "#",
  article2Title = "Les meilleures pratiques TypeScript",
  article2Excerpt = "Découvre les patterns et bonnes pratiques pour écrire du TypeScript maintenable et performant.",
  article2Image = "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop",
  article2Date = "12 Jan 2026",
  article2Author = "Thibault",
  article2Link = "#",
  article3Title = "Tailwind CSS : astuces avancées",
  article3Excerpt = "Maîtrise Tailwind CSS avec ces techniques avancées pour des designs uniques et maintenables.",
  article3Image = "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&h=400&fit=crop",
  article3Date = "8 Jan 2026",
  article3Author = "Thibault",
  article3Link = "#",
  className = "",
}: BlogGridProps) {
  const articles = [
    { title: article1Title, excerpt: article1Excerpt, image: article1Image, date: article1Date, author: article1Author, link: article1Link },
    { title: article2Title, excerpt: article2Excerpt, image: article2Image, date: article2Date, author: article2Author, link: article2Link },
    { title: article3Title, excerpt: article3Excerpt, image: article3Image, date: article3Date, author: article3Author, link: article3Link },
  ];

  return (
    <section id="articles" className={`bg-gray-50 px-6 py-20 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            {sectionTitle}
          </h2>
          <p className="text-lg text-gray-600">{sectionSubtitle}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-lg"
            >
              <a href={article.link} className="block">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-blue-600">
                    {article.title}
                  </h3>
                  <p className="mb-4 text-gray-600 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{article.author}</span>
                    <time>{article.date}</time>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
