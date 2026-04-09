"use client";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import {
  Activity,
  AlignJustify,
  ArrowRight,
  CalendarDays,
  Camera,
  CheckCircle2,
  Clock3,
  Droplets,
  MapPin,
  Phone,
  Radar,
  ScanLine,
  Search,
  Settings2,
  Star,
  type LucideIcon,
} from "lucide-react";
import { BUSINESS, type ServicePage, trustPoints } from "@/lib/site-data";
import { fadeUp, motion, stagger } from "@/components/motion";
import { useSchedule } from "./site-shell";

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

export function BackgroundGlow() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.05),transparent_40%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]" />
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-24 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full blur-3xl glow-blob"
        animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <motion.div initial="hidden" animate="visible" variants={stagger} className="rounded-[2.5rem] border border-slate-100 bg-slate-50/50 p-8 sm:p-10 lg:p-14 shadow-sm">
        <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.32em] text-accent font-semibold">{eyebrow}</motion.p>
        <motion.h1 variants={fadeUp} className="mt-4 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-slate-900 sm:text-6xl lg:text-7xl">{title}</motion.h1>
        <motion.p variants={fadeUp} className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{description}</motion.p>
      </motion.div>
    </section>
  );
}

export function GlassCard({ children }: { children: React.ReactNode }) {
  return <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">{children}</div>;
}

export function List({ items }: { items: string[] }) {
  return (
    <div className="mt-6 grid gap-3">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/50 px-4 py-4 text-slate-700">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

export function InfoRow({ icon: Icon, text, href }: { icon: React.ComponentType<{ className?: string }>; text: string; href?: string }) {
  return (
    <div className="flex items-start gap-4">
      <Icon className="mt-1 h-5 w-5 text-accent" />
      {href ? <a href={href} className="transition hover:text-slate-900">{text}</a> : <span className="text-slate-600">{text}</span>}
    </div>
  );
}

import { sendContactEmail } from "@/lib/actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <button 
      type="submit" 
      disabled={pending}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 font-medium text-white transition hover:bg-slate-800 shadow-lg shadow-slate-900/10 active:scale-[0.98] ${pending ? 'opacity-70 cursor-not-allowed' : ''}`}
    >
      {pending ? (
        <>
          Sending...
          <Clock3 className="h-4 w-4 animate-spin" />
        </>
      ) : (
        <>
          Submit Request
          <ArrowRight className="h-4 w-4" />
        </>
      )}
    </button>
  );
}

export function QuickForm() {
  return (
    <form action={sendContactEmail} className="mt-8 grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input 
          name="name"
          type="text"
          required
          className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-slate-900 outline-none placeholder:text-slate-400 focus:border-accent/40 transition-colors" 
          placeholder="Full Name" 
        />
        <input 
          name="email"
          type="email"
          required
          className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-slate-900 outline-none placeholder:text-slate-400 focus:border-accent/40 transition-colors" 
          placeholder="Email Address" 
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input 
          name="phone"
          type="tel"
          required
          className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-slate-900 outline-none placeholder:text-slate-400 focus:border-accent/40 transition-colors" 
          placeholder="Phone Number" 
        />
        <input 
          name="vehicle"
          type="text"
          required
          className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-slate-900 outline-none placeholder:text-slate-400 focus:border-accent/40 transition-colors" 
          placeholder="Vehicle (Year, Make, Model)" 
        />
      </div>
      <input 
        name="service_type"
        type="text"
        className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-slate-900 outline-none placeholder:text-slate-400 focus:border-accent/40 transition-colors" 
        placeholder="Service Needed (e.g. ADAS, Calibration)" 
      />
      <textarea 
        name="message"
        required
        className="min-h-[120px] rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-accent/40 transition-colors" 
        placeholder="Tell us about the damage or service required..." 
      />
      
      <SubmitButton />
    </form>
  );
}

export function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} className="overflow-hidden rounded-[2.5rem] border border-accent/20 bg-gradient-to-br from-accent/5 via-white to-accent/10 p-8 sm:p-10 lg:p-12 shadow-sm">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.32em] text-accent font-semibold">Need Calibration After a Repair or Windshield Replacement?</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-5xl">Let’s get your vehicle back to factory-level accuracy.</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 font-medium text-white transition hover:bg-slate-800 shadow-lg shadow-slate-900/10">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <button onClick={useSchedule().openModal} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 font-medium text-slate-700 transition hover:bg-slate-50">
              <CalendarDays className="h-4 w-4" />
              Schedule Service
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function ContactSnapshot() {
  return (
    <section id="schedule" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.32em] text-accent font-semibold">Contact Snapshot</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-900">Schedule your service in Middle Village.</h2>
          <div className="mt-8 space-y-5 text-slate-600">
            <InfoRow icon={MapPin} text={BUSINESS.address} />
            <InfoRow icon={Phone} text={BUSINESS.phoneDisplay} href={BUSINESS.phoneHref} />
            <InfoRow icon={Clock3} text={BUSINESS.hours} />
          </div>
          <QuickForm />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.75, delay: 0.05 }} className="overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50 relative group">
          <div className="relative flex h-full min-h-[420px] items-end p-8 overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.4440518662304!2d-73.8726353!3d40.708240200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25e7195cf3721%3A0x9fcf02fe35e97ae0!2s79-17%20Cooper%20Ave%2C%20Glendale%2C%20NY%2011385%2C%20EE.%20UU.!5e0!3m2!1ses!2sec!4v1775095311973!5m2!1ses!2sec" 
              className="absolute inset-0 h-full w-full grayscale opacity-70 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100"
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="relative w-full rounded-[1.75rem] border border-slate-200/50 bg-white/90 p-6 backdrop-blur-xl shadow-xl">
              <p className="text-sm uppercase tracking-[0.32em] text-accent font-semibold">Location</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">Visit {BUSINESS.name}</h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">Our Middle Village facility is equipped with factory-grade targets for all calibration needs.</p>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {["ADAS", "Radar", "Windshield"].map((item) => (
                  <div key={item} className="rounded-xl border border-slate-100 bg-slate-50 px-2 py-3 text-center text-xs font-medium text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function PremiumVisual() {
  return (
    <motion.div initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }} className="relative">
      <div className="absolute inset-0 rounded-[2rem] blur-2xl" style={{ background: "linear-gradient(to top right, rgb(var(--accent) / 0.1), rgba(0,0,0,0.02), rgba(var(--accent) / 0.05))" }} />
      <div className="relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-3 shadow-2xl">
        <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-slate-100 bg-slate-50 relative">
          <div className="relative h-full w-full p-6 sm:p-8" style={{ background: "radial-gradient(circle at top left, rgb(var(--accent) / 0.12), transparent 40%), linear-gradient(180deg,#f8fafc 0%,#f1f5f9 100%)" }}>
            <div className="absolute right-6 top-6 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-500 shadow-sm">All Makes & Models</div>
            <div className="mt-8 rounded-[1.75rem] border border-slate-100 bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-accent font-semibold">Live Bay View</p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-900">Calibration in Progress</h3>
                </div>
              </div>
              <div className="grid gap-4">
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="rounded-[1.5rem] border border-slate-100 bg-slate-50/50 p-4">
                  <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-slate-400 font-bold">
                    <span>Vehicle Platform</span>
                    <span>Front Camera System</span>
                  </div>
                  <div className="relative h-44 overflow-hidden rounded-[1.25rem] border border-slate-200 bg-slate-900 shadow-inner">
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t to-transparent" style={{ backgroundImage: "linear-gradient(to top, rgb(var(--accent) / 0.3), transparent)" }} />
                    <div className="absolute left-1/2 top-1/2 h-28 w-40 -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/10 bg-white/5 shadow-2xl" />
                    <div className="absolute left-1/2 top-[24%] h-20 w-[2px] -translate-x-1/2" style={{ background: "rgb(var(--accent) / 0.82)" }} />
                    <div className="absolute left-1/2 top-[24%] h-[2px] w-40 -translate-x-1/2" style={{ background: "rgb(var(--accent) / 0.82)" }} />
                    <div className="absolute left-[18%] top-[28%] h-16 w-10 rounded-lg border border-white/15 bg-white/5" />
                    <div className="absolute right-[18%] top-[28%] h-16 w-10 rounded-lg border border-white/15 bg-white/5" />
                    <motion.div className="absolute left-1/2 top-8 h-24 w-24 -translate-x-1/2 rounded-full border border-accent/40" animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.5, 0.9, 0.5] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }} />
                  </div>
                </motion.div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-[1.25rem] border border-slate-100 bg-slate-50/50 p-4"><p className="text-xs uppercase tracking-[0.25em] text-slate-400 font-bold">Accuracy Status</p><p className="mt-3 text-2xl font-bold text-accent">Factory-Level</p></div>
                  <div className="rounded-[1.25rem] border border-slate-100 bg-slate-50/50 p-4"><p className="text-xs uppercase tracking-[0.25em] text-slate-400 font-bold">Turnaround</p><p className="mt-3 text-2xl font-bold text-slate-900">1-Day</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ServiceDetailLayout({ service }: { service: ServicePage }) {
  const Icon = SERVICE_ICONS[service.slug] ?? ScanLine;
  return (
    <>
      <PageHero eyebrow={service.title} title={service.heroTitle} description={service.heroText} />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <GlassCard>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <Icon className="h-6 w-6" />
            </div>
            <h2 className="mt-6 text-3xl font-semibold text-slate-900">What this service includes</h2>
            <List items={service.includes} />
          </GlassCard>
          <GlassCard>
            <h2 className="text-3xl font-semibold text-slate-900">When you need this service</h2>
            <List items={service.needs} />
          </GlassCard>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <GlassCard>
            <h2 className="text-3xl font-semibold text-slate-900">Why it matters</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">{service.matters}</p>
          </GlassCard>
          <GlassCard>
            <h2 className="text-3xl font-semibold text-slate-900">Why choose {BUSINESS.name}</h2>
            <List items={trustPoints} />
          </GlassCard>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-semibold tracking-[-0.04em] text-slate-900">Frequently asked questions</h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {service.faqs.map(([q, a]) => (
            <GlassCard key={q}>
              <h3 className="text-xl font-semibold text-slate-900">{q}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{a}</p>
            </GlassCard>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-accent/20 bg-gradient-to-br from-accent/5 to-white p-8 text-center shadow-sm">
          <h3 className="text-3xl font-semibold text-slate-900">Need help with {service.title.toLowerCase()}?</h3>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 font-medium text-white transition hover:bg-slate-800">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <button onClick={useSchedule().openModal} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 font-medium text-slate-700 transition hover:bg-slate-50">
              Schedule Service
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export function ReviewsSection() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="mb-12 text-center">
          <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.32em] text-accent font-semibold">Trust Indicators</motion.p>
          <motion.h2 variants={fadeUp} className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-5xl">Industry-leading calibration support.</motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger} className="grid gap-6 lg:grid-cols-3">
          {[
            { title: "Factory-Level Accuracy", text: "Trust-focused messaging designed to reassure customers and referral partners immediately." },
            { title: "Referral-Friendly Positioning", text: "Perfect for body shops and insurance relationships that need dependable calibration support." },
            { title: "Secondary Upsell Services", text: "Maintenance and repair services support the core calibration offer without diluting the brand." }
          ].map((item) => (
            <motion.div key={item.title} variants={fadeUp} className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm">
              <div className="flex items-center gap-1 text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
