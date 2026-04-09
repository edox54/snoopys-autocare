import { Metadata } from "next";
import { SEO_CONFIG } from "@/lib/site-data";
import HomePage from "@/components/home-client";

export const metadata: Metadata = {
  title: SEO_CONFIG.home.title,
  description: SEO_CONFIG.home.description,
  keywords: SEO_CONFIG.home.keywords,
  openGraph: {
    title: SEO_CONFIG.home.title,
    description: SEO_CONFIG.home.description,
    images: SEO_CONFIG.home.ogImage ? [{ url: SEO_CONFIG.home.ogImage }] : undefined,
  },
};

export default function Page() {
  return <HomePage />;
}
