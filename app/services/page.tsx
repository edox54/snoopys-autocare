import { Metadata } from "next";
import { SEO_CONFIG } from "@/lib/site-data";
import ServicesPage from "@/components/services-client";

export const metadata: Metadata = {
  title: "Professional ADAS & Auto Services | Snoopys Auto Care",
  description: "Explore our full range of calibration and maintenance services. We specialize in ADAS, radar, windshield calibration and premium auto care in Middle Village.",
};

export default function Page() {
  return <ServicesPage />;
}
