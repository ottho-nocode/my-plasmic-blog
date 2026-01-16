import React from "react";

export interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
}

export function HeroSection({
  title = "Bienvenue sur mon blog",
  subtitle = "Découvre mes articles sur le développement, le design et la tech. Des conseils pratiques et des retours d'expérience pour progresser.",
  buttonText = "Découvrir les articles",
  buttonLink = "#articles",
  backgroundImage,
  backgroundColor = "#1a1a2e",
  textColor = "#ffffff",
  className = "",
}: HeroSectionProps) {
  return (
    <section
      className={`relative flex min-h-[70vh] items-center justify-center px-6 py-24 ${className}`}
      style={{
        backgroundColor: backgroundImage ? undefined : backgroundColor,
        backgroundImage: backgroundImage
          ? `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: textColor,
      }}
    >
      <div className="max-w-4xl text-center">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-xl opacity-90">
          {subtitle}
        </p>
        {buttonText && (
          <a
            href={buttonLink}
            className="inline-flex items-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-gray-900 transition-all hover:bg-opacity-90 hover:shadow-lg"
          >
            {buttonText}
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        )}
      </div>
    </section>
  );
}
