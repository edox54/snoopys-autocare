"use client";
import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, CalendarDays, CheckCircle2 } from "lucide-react";
import { QuickForm } from "./shared";

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ScheduleModal({ isOpen, onClose }: ScheduleModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto p-4 py-8 sm:items-center sm:p-6">
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl rounded-[2.5rem] border border-slate-100 bg-white p-6 shadow-2xl sm:p-10 mb-auto sm:mb-0"
          >
            {/* Background Glows */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-orange-100/50 blur-3xl pointer-events-none" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold text-accent">
                  <CalendarDays className="h-4 w-4" />
                  Request Service Appointment
                </div>
                <button
                  onClick={onClose}
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 shadow-sm"
                >
                  <X className="h-5 w-5 transition group-hover:rotate-90" />
                </button>
              </div>

              <div className="mt-8">
                <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Schedule your calibration.</h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Fill out the form below and our ADAS specialists will contact you to confirm your appointment at our Middle Village facility.
                </p>
              </div>

              <div className="mt-10">
                <QuickForm />
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-slate-100 pt-8 text-xs font-medium text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  Factory accuracy
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  All makes & models
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  Insurance ready
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
