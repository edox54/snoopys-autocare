"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, CalendarDays, Clock3, Gauge, MapPin, Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { BUSINESS, servicePages } from "@/lib/site-data";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ScheduleModal } from "./schedule-modal";

const ScheduleContext = React.createContext<{ openModal: () => void }>({ openModal: () => {} });

function Logo({ className = "h-14" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center bg-slate-50 border border-slate-200 rounded-xl px-3 py-1 shadow-sm ${className}`}>
      <img 
        src={BUSINESS.logo} 
        alt={BUSINESS.name} 
        className="h-full w-auto object-contain" 
      />
    </div>
  );
}

export const useSchedule = () => React.useContext(ScheduleContext);

export function ScheduleProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ScheduleContext.Provider value={{ openModal }}>
      {children}
      <ScheduleModal isOpen={isOpen} onClose={closeModal} />
    </ScheduleContext.Provider>
  );
}

function NavLink({ href, children, onMobileClick }: { href: string; children: React.ReactNode; onMobileClick?: () => void }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link 
      href={href} 
      onClick={onMobileClick}
      className="relative block text-sm font-medium transition-colors hover:text-slate-900"
    >
      <span className={active ? "text-slate-900" : "text-slate-500"}>
        {children}
      </span>
      {active && (
        <motion.div
          layoutId="nav-underline"
          className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-accent"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </Link>
  );
}

export function TopBar() {
  const { openModal } = useSchedule();
  return (
    <div className="border-b border-slate-100 bg-slate-50/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 text-sm text-slate-600 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" />
            {BUSINESS.address}
          </span>
          <span className="hidden items-center gap-2 md:inline-flex">
            <Clock3 className="h-4 w-4 text-accent" />
            {BUSINESS.hours}
          </span>
        </div>
        <button onClick={openModal} className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 transition hover:bg-slate-50 md:inline-flex shadow-sm">
          Schedule Service
        </button>
      </div>
    </div>
  );
}

export function Header() {
  const { openModal } = useSchedule();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/80 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <Logo className="h-12" />
          <div className="hidden sm:block">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent/80 leading-none">SNOOPYS</p>
            <p className="text-[10px] text-slate-400 leading-none mt-1.5 uppercase tracking-widest">Calibration Specialist</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex border-x border-slate-100 px-10">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about-us/">About Us</NavLink>
          <NavLink href="/services/">Services</NavLink>
          <NavLink href="/blog/">Blog</NavLink>
          <NavLink href="/contact/">Contact</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-3">
            <ThemeSwitcher />
            <a href={BUSINESS.phoneHref} className="hidden lg:inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-700 transition hover:bg-slate-100">
              Call Now
            </a>
          </div>
          <button onClick={openModal} className="hidden sm:inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 shadow-xl shadow-slate-900/10">
            Schedule
            <ArrowRight className="h-4 w-4" />
          </button>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-600 lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-[77px] z-30 bg-slate-900/10 backdrop-blur-sm lg:hidden"
            />
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="absolute inset-x-0 top-full z-40 border-b border-slate-100 bg-white p-6 lg:hidden shadow-2xl"
            >
              <div className="grid gap-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                   <Logo className="h-10" />
                   <button onClick={() => setMobileMenuOpen(false)} className="text-slate-400"><X className="h-6 w-6" /></button>
                </div>
                <div className="grid gap-4 border-b border-slate-100 pb-6">
                   <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">Navigation</p>
                   <NavLink href="/" onMobileClick={() => setMobileMenuOpen(false)}>Home</NavLink>
                   <NavLink href="/about-us/" onMobileClick={() => setMobileMenuOpen(false)}>About Us</NavLink>
                   <NavLink href="/services/" onMobileClick={() => setMobileMenuOpen(false)}>Services</NavLink>
                   <NavLink href="/contact/" onMobileClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
                   <NavLink href="/blog/" onMobileClick={() => setMobileMenuOpen(false)}>Blog</NavLink>
                </div>
                <div className="grid gap-4 pt-2">
                   <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">Theme Settings</p>
                   <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4">
                     <span className="text-sm text-slate-500">Choose Accent Color</span>
                     <ThemeSwitcher />
                   </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 text-sm text-slate-500 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo className="mb-6 h-16" />
          <p className="mt-4 max-w-xs leading-7">Precision ADAS calibration and advanced auto care for all vehicle makes in Middle Village, NY.</p>
        </div>
        <div>
          <h3 className="font-medium text-slate-900">Quick Links</h3>
          <div className="mt-4 space-y-3">
            <Link href="/" className="block transition hover:text-slate-900">Home</Link>
            <Link href="/about-us/" className="block transition hover:text-slate-900">About Us</Link>
            <Link href="/services/" className="block transition hover:text-slate-900">Services</Link>
            <Link href="/contact/" className="block transition hover:text-slate-900">Contact</Link>
          </div>
        </div>
        <div>
          <h3 className="font-medium text-slate-900">Services</h3>
          <div className="mt-4 space-y-3">
            {servicePages.slice(0, 4).map((service) => (
              <Link key={service.slug} href={`/${service.slug}/`} className="block transition hover:text-slate-900">
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-medium text-slate-900">Contact</h3>
          <div className="mt-4 space-y-3 leading-7">
            <p>{BUSINESS.address}</p>
            <p>{BUSINESS.phoneDisplay}</p>
            <p>{BUSINESS.hours}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-100 px-4 py-8 text-center text-xs text-slate-400 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
      </div>
    </footer>
  );
}

export function MobileStickyCTA() {
  const { openModal } = useSchedule();
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-100 bg-white/90 p-3 backdrop-blur-xl lg:hidden shadow-[0_-10px_40px_rgba(0,0,0,0.04)]">
      <div className="mx-auto flex max-w-md items-center gap-3">
        <a href={BUSINESS.phoneHref} className="flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <button onClick={openModal} className="flex flex-1 items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800 shadow-xl shadow-slate-900/10">
          <CalendarDays className="h-4 w-4" />
          Schedule
        </button>
      </div>
    </div>
  );
}
