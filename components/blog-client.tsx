"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { blogPosts } from "@/lib/site-data";
import { GlassCard, PageHero } from "@/components/shared";
import { fadeUp, motion, stagger } from "@/components/motion";

export default function BlogListingPage() {
  return (
    <>
      <PageHero 
        eyebrow="Insights & News" 
        title="Stay informed on the latest in ADAS." 
        description="Our experts share technical insights, safety tips, and industry updates to help you understand the importance of precision calibration." 
      />
      
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={stagger} 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.slug} variants={fadeUp}>
              <Link href={`/blog/${post.slug}/`} className="group block h-full">
                <GlassCard>
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-accent">
                      <span className="rounded-full bg-accent/10 px-3 py-1">{post.category}</span>
                      <span className="flex items-center gap-1.5 text-slate-400 font-normal normal-case tracking-normal">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h2 className="mt-6 text-3xl font-semibold text-slate-900 group-hover:text-accent transition-colors duration-300">
                      {post.title}
                    </h2>
                    
                    <p className="mt-4 flex-grow text-lg leading-8 text-slate-600">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div className="flex items-center gap-3 text-sm text-slate-400">
                        <User className="h-4 w-4" />
                        {post.author}
                        <span className="inline-block h-1 w-1 rounded-full bg-slate-200" />
                        <Calendar className="h-4 w-4 ml-1" />
                        {post.date}
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-400 transition group-hover:bg-accent group-hover:text-white group-hover:border-accent">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-10 text-center shadow-lg sm:p-16">
          <div className="relative z-10">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Get the latest auto tech updates.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
              Join our newsletter to receive expert advice on ADAS maintenance and safety alerts directly in your inbox.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full max-w-sm h-14 rounded-full border border-slate-200 bg-slate-50 px-6 text-slate-900 outline-none focus:border-accent/40 transition-colors"
              />
              <button className="h-14 w-full sm:w-auto rounded-full bg-slate-900 px-8 font-semibold text-white transition hover:bg-slate-800 shadow-xl shadow-slate-900/10">
                Subscribe
              </button>
            </div>
          </div>
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-orange-100/50 blur-3xl" />
        </div>
      </section>
    </>
  );
}
