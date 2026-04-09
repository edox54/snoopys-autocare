import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailLayout } from "@/components/shared";
import { getServiceBySlug } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Radar Calibration | Snoopys Auto Care",
  description: "Advanced front radar calibration for adaptive cruise control and collision systems in Middle Village, NY.",
};

export default function Page() {
  const service = getServiceBySlug("radar-calibration");
  if (!service) return notFound();
  return <ServiceDetailLayout service={service} />;
}
