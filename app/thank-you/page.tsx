import Link from "next/link";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { BackgroundGlow } from "@/components/shared";

export default function ThankYouPage() {
  return (
    <main className="relative min-h-screen">
      <BackgroundGlow />
      <div className="flex min-h-[85vh] flex-col items-center justify-center px-4 text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-lg shadow-emerald-200/50">
          <CheckCircle2 className="h-12 w-12" />
        </div>
        <h1 className="mt-10 text-5xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-6xl">Message Received!</h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
          Thank you for contacting Snoopy&apos;s Auto Care. Our ADAS specialists have received your request and will contact you shortly to confirm your service.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 font-medium text-white transition hover:bg-slate-800 shadow-xl shadow-slate-900/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 font-medium text-slate-700 transition hover:bg-slate-50"
          >
            View Services
          </Link>
        </div>
      </div>
    </main>
  );
}
