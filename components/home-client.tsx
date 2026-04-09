"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Building2, Briefcase, CalendarDays, Car, Camera, Gauge, Phone, Radar, ScanLine, ShieldCheck, Wrench } from "lucide-react";
import { BUSINESS, audience, calibrationTriggers, servicePages, trustPoints } from "@/lib/site-data";
import { CTASection, ContactSnapshot, PremiumVisual, ReviewsSection } from "@/components/shared";
import { fadeUp, motion, stagger } from "@/components/motion";
import { useSchedule } from "@/components/site-shell";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="relative z-10">
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-accent"><BadgeCheck className="h-4 w-4" />{BUSINESS.tagline}</motion.div>
            <motion.h1 variants={fadeUp} className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-slate-900 sm:text-6xl lg:text-7xl">ADAS Calibration Experts in<span className="block text-accent">Middle Village, NY</span></motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">Advanced Driver Assistance System calibration for all makes and models — built for drivers, body shops, and insurance partners who need speed, precision, and confidence.</motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
              <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 font-medium text-white transition hover:bg-slate-800 shadow-xl shadow-slate-900/10">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <button onClick={useSchedule().openModal} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 font-medium text-slate-700 transition hover:bg-slate-50">
                <CalendarDays className="h-4 w-4" />
                Schedule Service
              </button>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
              {trustPoints.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-100 bg-white/50 px-4 py-4 text-sm font-medium text-slate-600 shadow-sm backdrop-blur-sm">
                  {item}
                </div>
              ))}
            </motion.div>
          </motion.div>
          <PremiumVisual />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="mb-12">
          <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.32em] text-accent font-semibold">Core Services</motion.p>
          <motion.h2 variants={fadeUp} className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-5xl">Built around calibration. Backed by advanced auto care.</motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger} className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {[
            { service: servicePages[0], icon: ScanLine },
            { service: servicePages[1], icon: Camera },
            { service: servicePages[2], icon: Radar },
            { service: servicePages[4], icon: Wrench },
          ].map(({ service, icon: Icon }) => (
            <motion.div key={service.slug} variants={fadeUp} className="group rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-100 hover:shadow-md">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-accent group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">{service.heroText}</p>
              <Link href={`/${service.slug}/`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition group-hover:gap-3">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50/50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
            <p className="text-sm uppercase tracking-[0.32em] text-accent font-semibold">Why Choose Us</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-5xl">A specialist’s standard, not a generic shop.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Snoopys Auto Care is the go-to ADAS calibration center in Middle Village, with modern equipment, precise workflows, and a clean premium experience that builds trust fast.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger} className="grid gap-5 sm:grid-cols-2">
            {[
              { title: "Specialized ADAS Equipment", text: "Built for precise camera, radar, and sensor recalibration after service events.", icon: ScanLine },
              { title: "All Manufacturers Supported", text: "Service designed for a broad range of modern vehicles and safety systems.", icon: Car },
              { title: "Fast Turnaround", text: "Efficient workflows help get drivers, body shops, and partners back on schedule.", icon: Gauge },
              { title: "Insurance & Body Shop Friendly", text: "An ideal referral partner for post-repair calibration and documentation confidence.", icon: ShieldCheck }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} variants={fadeUp} className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{item.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="mb-12">
          <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.32em] text-accent font-semibold">Who We Serve</motion.p>
          <motion.h2 variants={fadeUp} className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-5xl">Designed for referral partners and drivers alike.</motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger} className="grid gap-6 md:grid-cols-3">
          {[{ ...audience[0], icon: Building2 }, { ...audience[1], icon: Briefcase }, { ...audience[2], icon: Car }].map((item) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} variants={fadeUp} className="rounded-[2rem] border border-slate-100 bg-white p-7 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">{item.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.32em] text-accent font-semibold">Why Proper Calibration Matters</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-900">Safety systems only work when they are accurate.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Today’s vehicles rely on cameras, radar, and sensors to power lane assistance, adaptive cruise control, and collision avoidance. If those systems are not calibrated properly, safety can be affected.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger} className="grid gap-4">
            {calibrationTriggers.map((item) => (
              <motion.div key={item} variants={fadeUp} className="flex items-center justify-between rounded-[1.75rem] border border-slate-100 bg-white px-6 py-5 shadow-sm">
                <span className="text-base font-medium text-slate-700">{item}</span>
                <ArrowRight className="h-5 w-5 text-accent" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-8 sm:p-10 lg:p-12 shadow-sm">
          <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-orange-100/30 blur-3xl" />
          <div className="absolute -bottom-20 left-0 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
              <p className="text-sm uppercase tracking-[0.32em] text-accent font-semibold">Featured Service</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-5xl">ADAS Calibration is the center of the brand.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">Snoopys Auto Care is positioned as the go-to ADAS calibration center — lead with safety, precision, and a clear path to accurate performance.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/adas-calibration/" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 font-medium text-white transition hover:bg-slate-800 shadow-xl shadow-slate-900/10">
                  Explore ADAS Service
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 font-medium text-slate-700 transition hover:bg-slate-50">
                  <Phone className="h-4 w-4" />
                  Speak With Us
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.8 }} className="grid gap-4 sm:grid-cols-2">
              {["Collision repairs", "Windshield replacement", "Suspension work", "Wheel alignment"].map((item, index) => (
                <div key={item} className="rounded-[1.75rem] border border-slate-100 bg-slate-50/50 p-6">
                  <div className="text-xs uppercase tracking-[0.25em] text-slate-400 font-bold">Trigger {index + 1}</div>
                  <div className="mt-5 text-2xl font-semibold text-slate-900">{item}</div>
                  <p className="mt-3 text-sm leading-7 text-slate-500">A common service event where calibration may be required.</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <ReviewsSection />
      <CTASection />
      <ContactSnapshot />
    </>
  );
}
