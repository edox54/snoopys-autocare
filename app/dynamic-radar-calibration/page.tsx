import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailLayout } from "@/components/shared";
import { getServiceBySlug } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Dynamic Radar Calibration | Snoopys Auto Care",
  description: "Specialized movement-based recalibration for vehicle radar systems. Ensuring safety and adaptive performance in real-world driving conditions.",
};

export default function Page() {
  const service = getServiceBySlug("dynamic-radar-calibration");
  if (!service) return notFound();
  return <ServiceDetailLayout service={service} />;
}
