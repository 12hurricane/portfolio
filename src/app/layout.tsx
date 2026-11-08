import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/data/portfolioData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tariqkhattak.dev"),
  title: `${personalInfo.fullName} | AI Engineer & LLM Applications`,
  description: personalInfo.supportingDescription,
  keywords: [
    "Tariq Khattak",
    "AI Engineer",
    "Generative AI",
    "Large Language Models",
    "RAG",
    "Retrieval-Augmented Generation",
    "Agentic AI",
    "Machine Learning",
    "FastAPI",
    "Python",
    "SafeSight-AI",
    "MediAssist",
    "Peshawar",
    "Pakistan",
  ],
  authors: [{ name: personalInfo.fullName, url: personalInfo.gitHubUrl }],
  creator: personalInfo.fullName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tariqkhattak.dev",
    title: `${personalInfo.fullName} — AI Engineer Portfolio`,
    description: personalInfo.headline,
    siteName: `${personalInfo.fullName} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.fullName} | AI Engineer`,
    description: personalInfo.headline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.fullName,
    jobTitle: "AI Engineer Intern",
    worksFor: {
      "@type": "Organization",
      name: "TechCitySoft",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "CECOS University",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Peshawar",
        addressCountry: "PK",
      },
    },
    url: "https://tariqkhattak.dev",
    sameAs: [personalInfo.linkedInUrl, personalInfo.gitHubUrl],
    knowsAbout: [
      "Artificial Intelligence",
      "Generative AI",
      "Large Language Models",
      "Retrieval-Augmented Generation",
      "Python",
      "FastAPI",
      "Flutter",
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-bg-primary text-text-primary selection:bg-accent-primary selection:text-bg-primary min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
