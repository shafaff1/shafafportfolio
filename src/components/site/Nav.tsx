import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/projects";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const nextDark = !dark;
    const root = document.documentElement;
    root.classList.add("theme-transition");
    root.classList.toggle("dark", nextDark);
    setDark(nextDark);
    window.setTimeout(() => root.classList.remove("theme-transition"), 600);
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <a
          href="#top"
          className="min-w-0 truncate font-display text-sm font-medium tracking-[0.28em] uppercase"
        >
          S Shafaf
        </a>

        <div className="flex shrink-0 items-center gap-1 sm:gap-6">
          <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-underline text-[13px] tracking-[0.1em] text-muted-foreground uppercase transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden bg-primary px-5 py-2.5 text-[11px] font-medium tracking-[0.18em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5 sm:inline-block"
          >
            Hire Me
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="p-2 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col px-5 py-2" aria-label="Mobile">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-sm tracking-[0.12em] uppercase last:border-b-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="my-4 bg-primary px-5 py-3.5 text-center text-[11px] font-medium tracking-[0.18em] text-primary-foreground uppercase"
            >
              Hire Me on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
