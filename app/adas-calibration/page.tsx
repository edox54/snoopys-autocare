import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailLayout } from "@/components/shared";
import { getServiceBySlug, SEO_CONFIG } from "@/lib/site-data";

export const metadata: Metadata = {
  title: SEO_CONFIG["adas-calibration"]?.title,
  description: SEO_CONFIG["adas-calibration"]?.description,
};

export default function Page() {
  const service = getServiceBySlug("adas-calibration");
  if (!service) return notFound();
  return <ServiceDetailLayout service={service} />;
}
