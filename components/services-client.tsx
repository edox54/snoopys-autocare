"use client";
import React from "react";
import Link from "next/link";
import { Activity, AlignJustify, Camera, ChevronRight, Droplets, Radar, ScanLine, Search, Settings2, type LucideIcon } from "lucide-react";
import { servicePages } from "@/lib/site-data";
import { GlassCard, PageHero } from "@/components/shared";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "adas-calibration": ScanLine,
  "front-windshield-calibration": Camera,
  "radar-calibration": Radar,
  "dynamic-radar-calibration": Activity,
  "wheel-alignment": AlignJustify,
  "maintenance-services": Settings2,
  "oil-change": Droplets,
  "pre-purchase-inspection": Search,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Specialized ADAS calibration and advanced auto care." description="Explore the full range of services designed around accuracy, safety, performance, and long-term vehicle care." />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {servicePages.map((service) => { 
            const Icon = SERVICE_ICONS[service.slug] ?? ScanLine; 
            return (
              <GlassCard key={service.slug}>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-accent group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">{service.heroText}</p>
                <Link href={`/${service.slug}/`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition group-hover:gap-3">
                  Learn More
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </GlassCard>
            ); 
          })}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {["Safety", "Accuracy", "Performance", "Preventive care", "Manufacturer-standard procedures"].map((item) => (
            <div key={item} className="rounded-[1.75rem] border border-slate-100 bg-white px-5 py-6 text-center text-sm font-medium text-slate-600 shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
