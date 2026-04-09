import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { BUSINESS, SEO_CONFIG } from "@/lib/site-data";
import { CTASection, GlassCard, PageHero } from "@/components/shared";

export const metadata: Metadata = {
  title: SEO_CONFIG["about-us"]?.title,
  description: SEO_CONFIG["about-us"]?.description,
};

export default function AboutPage() {
  const seo = SEO_CONFIG["about-us"] || SEO_CONFIG.home;
  return (
    <>
      <PageHero 
        eyebrow="About Us" 
        title={seo.title} 
        description={seo.description} 
      />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <GlassCard>
            <h2 className="text-3xl font-semibold text-slate-900">Who We Are</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              {BUSINESS.name} is a specialized automotive service center based in Middle Village, NY, focused on precision ADAS calibration for all vehicle makes and models. With advanced equipment and trained technicians, we help ensure that cameras, radar systems, and safety sensors are calibrated to factory standards after repairs, windshield replacement, or collision work.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-600">
              In addition to calibration services, we provide reliable maintenance and repair solutions including oil changes, NYS inspections, and supporting services that keep vehicles road-ready.
            </p>
          </GlassCard>
          <GlassCard>
            <h2 className="text-3xl font-semibold text-slate-900">Our Mission</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              To deliver accurate, safe, and dependable service drivers, body shops, and insurance partners can trust.
            </p>
            <div className="mt-10 rounded-2xl border border-orange-100 bg-orange-50 p-6">
              <p className="text-sm font-semibold text-accent uppercase tracking-widest">Our Standard</p>
              <p className="mt-2 text-xl font-medium text-slate-900 italic">"Precision isn't optional — it's the foundation of road safety."</p>
            </div>
          </GlassCard>
        </div>
      </section>
      <CTASection />
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-100 bg-white p-8 text-center shadow-sm">
          <h3 className="text-3xl font-semibold text-slate-900">Looking for a trusted ADAS calibration center?</h3>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 font-medium text-white transition hover:bg-slate-800 shadow-xl shadow-slate-900/10">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <Link href="/services/" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 font-medium text-slate-700 transition hover:bg-slate-50">
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
