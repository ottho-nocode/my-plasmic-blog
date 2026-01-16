import React from "react";

export interface BlogPostCardProps {
  title: string;
  excerpt: string;
  imageUrl?: string;
  date?: string;
  author?: string;
  href?: string;
  className?: string;
}

export function BlogPostCard({
  title,
  excerpt,
  imageUrl,
  date,
  author,
  href = "#",
  className = "",
}: BlogPostCardProps) {
  return (
    <article
      className={`group rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg ${className}`}
    >
      <a href={href} className="block">
        {imageUrl && (
          <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
            <img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-5">
          <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-blue-600">
            {title}
          </h3>
          <p className="mb-4 text-gray-600 line-clamp-2">{excerpt}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            {author && <span>{author}</span>}
            {date && <time>{date}</time>}
          </div>
        </div>
      </a>
    </article>
  );
}
