"use client";
import React, { useEffect, useState } from "react";
import { Palette, Check } from "lucide-react";

type Theme = "orange" | "blue" | "emerald" | "violet";

const THEMES: { id: Theme; label: string; color: string }[] = [
  { id: "orange",  label: "Orange",  color: "#ea580c" },
  { id: "blue",    label: "Blue",    color: "#2563eb" },
  { id: "emerald", label: "Emerald", color: "#059669" },
  { id: "violet",  label: "Violet",  color: "#7c3aed" },
];

const STORAGE_KEY = "snoopys-theme-v2";

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(STORAGE_KEY, theme);
}

export function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Theme>("orange");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (saved && THEMES.find((t) => t.id === saved)) {
      setActive(saved);
      applyTheme(saved);
    } else {
      applyTheme("orange");
    }
  }, []);

  function select(theme: Theme) {
    setActive(theme);
    applyTheme(theme);
    setOpen(false);
  }

  return (
    <div className="relative" id="theme-switcher">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Change color theme"
        className={`flex h-10 w-10 items-center justify-center rounded-2xl border transition-all duration-300 shadow-sm ${
          open 
            ? "border-accent bg-accent/5 text-accent ring-4 ring-accent/10" 
            : "border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:bg-slate-50"
        }`}
      >
        <Palette className="h-5 w-5" />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-14 z-50 flex w-48 flex-col gap-1 rounded-[2rem] border border-slate-100 bg-white/80 p-3 shadow-2xl backdrop-blur-2xl">
            <p className="mb-2 px-3 pt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
              Accent Palette
            </p>
            {THEMES.map((t) => (
              <button
                key={t.id}
                onClick={() => select(t.id)}
                className={`flex items-center gap-3 rounded-2xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                  active === t.id
                    ? "bg-slate-900 text-white shadow-lg shadow-slate-900/10"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span
                  className="h-4 w-4 shrink-0 rounded-full shadow-sm"
                  style={{ background: t.color }}
                />
                {t.label}
                {active === t.id && (
                  <Check className="ml-auto h-3.5 w-3.5" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
