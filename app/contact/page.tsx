import { Metadata } from "next";
import { BUSINESS } from "@/lib/site-data";
import ContactPage from "@/components/contact-client";

export const metadata: Metadata = {
  title: `Contact Us | ${BUSINESS.name} Middle Village`,
  description: `Schedule your ADAS calibration or auto service at our Middle Village center. We serve body shops, insurance partners, and individual drivers with factory-level precision.`,
};

export default function Page() {
  return <ContactPage />;
}
