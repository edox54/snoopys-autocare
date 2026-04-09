"use client";
import React from "react";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { getBlogPostBySlug, BUSINESS } from "@/lib/site-data";
import { GlassCard } from "@/components/shared";
import { fadeUp, motion } from "@/components/motion";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  return (
    <>
      <article className="relative pt-12">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <Link 
            href="/blog/" 
            className="group mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-slate-900"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white transition group-hover:-translate-x-1 group-hover:border-slate-300 group-hover:bg-slate-50">
               <ArrowLeft className="h-4 w-4" />
            </div>
            Back to Blog
          </Link>
          
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-accent">
              <span className="rounded-full bg-accent/10 px-3 py-1">{post.category}</span>
              <span className="flex items-center gap-1.5 text-slate-400 font-normal normal-case tracking-normal">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>
            
            <h1 className="mt-8 text-4xl font-bold leading-[1.1] text-slate-900 sm:text-5xl lg:text-6xl tracking-tight">
              {post.title}
            </h1>
            
            <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-y border-slate-100 py-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 text-accent">
                   <User className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-base font-semibold text-slate-900">{post.author}</div>
                  <div className="flex items-center gap-1.5 text-sm text-slate-400">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-300 mr-2 flex items-center gap-2">
                  <Share2 className="h-3.5 w-3.5" />
                  Share
                </span>
                {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                  <button key={i} className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900">
                    <Icon className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="prose prose-slate mt-12 max-w-none 
              prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-slate-900
              prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-slate-800
              prose-p:text-lg prose-p:leading-8 prose-p:text-slate-600 prose-p:mb-6
              prose-ul:text-slate-600 prose-ul:mb-8 prose-li:mb-2
              prose-strong:text-slate-900 prose-strong:font-bold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-20 rounded-[2.5rem] border border-slate-100 bg-slate-50/50 p-10">
             <div className="grid gap-10 md:grid-cols-[auto_1fr] items-center">
                <div className="relative h-24 w-24 overflow-hidden rounded-3xl bg-white border border-slate-100 flex items-center justify-center shadow-sm">
                   <User className="h-12 w-12 text-accent" />
                </div>
                <div>
                   <h4 className="text-xl font-bold text-slate-900">About the Author</h4>
                   <p className="mt-3 text-base leading-7 text-slate-600">
                      The team at {BUSINESS.name} is dedicated to making precision ADAS calibration accessible and understandable for everyone. We stay at the forefront of automotive technology to ensure your safety.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </article>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <GlassCard>
           <div className="p-4 text-center">
             <h3 className="text-3xl font-semibold text-slate-900">Require specialized calibration?</h3>
             <p className="mt-4 text-lg text-slate-600">Our experts are ready to ensure your vehicle systems are 100% aligned with factory accuracy.</p>
             <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link href="/adas-calibration/" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 font-bold text-white transition hover:bg-slate-800 shadow-xl shadow-slate-900/10">
                  Get Started Today
                </Link>
             </div>
           </div>
        </GlassCard>
      </section>
    </>
  );
}
