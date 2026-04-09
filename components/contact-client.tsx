"use client";
import { GlassCard, InfoRow, PageHero, QuickForm } from "@/components/shared";
import { BUSINESS } from "@/lib/site-data";
import { Clock3, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact Us" title="Schedule your ADAS calibration or auto service in Middle Village, NY" description="Reach out for calibration, maintenance, inspections, or partner referral support." />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <GlassCard>
            <h2 className="text-3xl font-semibold text-slate-900">Contact Information</h2>
            <div className="mt-8 space-y-5 text-slate-600">
              <InfoRow icon={MapPin} text={BUSINESS.address} />
              <InfoRow icon={Phone} text={BUSINESS.phoneDisplay} href={BUSINESS.phoneHref} />
              <InfoRow icon={Clock3} text={BUSINESS.hours} />
            </div>
            <QuickForm />
          </GlassCard>
          <GlassCard>
            <h2 className="text-3xl font-semibold text-slate-900">Map & Visit</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Visit our facility in Middle Village for precision ADAS calibration and auto care.
            </p>
            <div className="mt-8 h-[450px] overflow-hidden rounded-[1.75rem] border border-slate-100 bg-slate-50 shadow-inner">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.4440518662304!2d-73.8726353!3d40.708240200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25e7195cf3721%3A0x9fcf02fe35e97ae0!2s79-17%20Cooper%20Ave%2C%20Glendale%2C%20NY%2011385%2C%20EE.%20UU.!5e0!3m2!1ses!2sec!4v1775095311973!5m2!1ses!2sec" 
                className="h-full w-full transition-opacity duration-500 hover:opacity-90"
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
