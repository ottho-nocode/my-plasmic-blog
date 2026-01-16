import React, { useState } from "react";

export interface NewsletterFormProps {
  title?: string;
  description?: string;
  buttonText?: string;
  placeholder?: string;
  className?: string;
}

export function NewsletterForm({
  title = "Inscris-toi à la newsletter",
  description = "Reçois les derniers articles directement dans ta boîte mail.",
  buttonText = "S'inscrire",
  placeholder = "ton@email.com",
  className = "",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simule un appel API
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
    setEmail("");
  };

  return (
    <div className={`rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white ${className}`}>
      <h3 className="mb-2 text-2xl font-bold">{title}</h3>
      <p className="mb-6 text-blue-100">{description}</p>

      {status === "success" ? (
        <p className="text-lg font-medium text-green-200">✓ Merci pour ton inscription !</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            required
            className="flex-1 rounded-lg border-0 px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-50 disabled:opacity-50"
          >
            {status === "loading" ? "..." : buttonText}
          </button>
        </form>
      )}
    </div>
  );
}
