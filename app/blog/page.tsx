import { Metadata } from "next";
import { SEO_CONFIG } from "@/lib/site-data";
import BlogListingPage from "@/components/blog-client";

export const metadata: Metadata = {
  title: SEO_CONFIG.blog.title,
  description: SEO_CONFIG.blog.description,
};

export default function Page() {
  return <BlogListingPage />;
}
