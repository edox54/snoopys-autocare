import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailLayout } from "@/components/shared";
import { getServiceBySlug } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Front Windshield Calibration | Snoopys Auto Care",
  description: "Required after windshield replacement to ensure your safety camera systems work correctly. Middle Village, NY expert recalibration.",
};

export default function Page() {
  const service = getServiceBySlug("front-windshield-calibration");
  if (!service) return notFound();
  return <ServiceDetailLayout service={service} />;
}
