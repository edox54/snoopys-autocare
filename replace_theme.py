import os, re

def migrate_theme():
    dirs_to_scan = ['app', 'components']
    for d in dirs_to_scan:
        for root, dirs, files in os.walk(d):
            for file in files:
                if file.endswith((".tsx", ".ts")):
                    path = os.path.join(root, file)
                    with open(path, "r") as f:
                        content = f.read()
                    
                    orig = content
                    
                    # 1. Backgrounds to Light
                    content = content.replace("bg-[#050816]", "bg-white")
                    content = content.replace("bg-[#04070f]", "bg-slate-50 border-t border-slate-200")
                    content = content.replace("bg-[#0b1020]", "bg-slate-50")
                    content = content.replace("bg-[#0a1020]", "bg-white")
                    content = content.replace("bg-[#0b1326]", "bg-slate-50")
                    content = content.replace("bg-[#0a0f1d]", "bg-slate-50")
                    content = content.replace("bg-white/[0.045]", "bg-slate-50/50")
                    content = content.replace("bg-white/[0.04]", "bg-slate-50/50")
                    content = content.replace("bg-white/[0.03]", "bg-slate-50/30")
                    content = content.replace("bg-white/[0.025]", "bg-slate-50/20")
                    content = content.replace("bg-white/5", "bg-slate-100")
                    content = content.replace("bg-white/10", "bg-slate-100")
                    content = content.replace("bg-accent/5", "bg-accent/10")
                    
                    # 2. Translucent Text to Dark Slates
                    content = content.replace("text-white/80", "text-slate-800")
                    content = content.replace("text-white/75", "text-slate-700")
                    content = content.replace("text-white/70", "text-slate-700")
                    content = content.replace("text-white/65", "text-slate-500")
                    content = content.replace("text-white/60", "text-slate-500")
                    content = content.replace("text-white/50", "text-slate-400")
                    content = content.replace("text-white/45", "text-slate-400")
                    content = content.replace("text-white/40", "text-slate-400")
                    content = content.replace("text-white/30", "text-slate-300")
                    content = content.replace("text-white/25", "text-slate-300")
                    
                    # 3. Solid Text to Slate-900
                    # Avoid replacing text-white in buttons that should be white text on dark bg
                    # But for now let's do a general replacement and fix buttons later if needed
                    content = re.sub(r'text-white(?![A-Za-z0-9/\-])', 'text-slate-900', content)
                    content = content.replace("text-slate-950", "text-white") # swap existing button colors
                    content = content.replace("bg-white", "TEMP_WHITE_BG")
                    content = content.replace("bg-slate-950", "bg-slate-900")
                    
                    # 4. Borders to Light
                    content = content.replace("border-white/10", "border-slate-200")
                    content = content.replace("border-white/15", "border-slate-300")
                    content = content.replace("border-white/20", "border-slate-300")
                    content = content.replace("border-white/5", "border-slate-100")
                    content = content.replace("border-white", "border-slate-200")
                    
                    # 5. Fix UI Elements
                    content = content.replace("TEMP_WHITE_BG", "bg-slate-900") # make buttons dark
                    content = content.replace("bg-slate-900 shadow-2xl", "bg-white shadow-xl border border-slate-200") # specific fix for some cards

                    if orig != content:
                        with open(path, "w") as f:
                            f.write(content)
                        print(f"Updated {path}")

migrate_theme()
