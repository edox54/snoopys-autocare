import { notFound } from "next/navigation";
import { ServiceDetailLayout } from "@/components/shared";
import { getServiceBySlug } from "@/lib/site-data";

export default function Page() {
  const service = getServiceBySlug("wheel-alignment");
  if (!service) return notFound();
  return <ServiceDetailLayout service={service} />;
}
