import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowDown, ArrowUpRight, Mail, Linkedin, MapPin, MessageCircle } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import { Lightbox } from "@/components/site/Lightbox";
import { ContactForm } from "@/components/site/ContactForm";
import { Chatbot } from "@/components/site/Chatbot";
import { CATEGORIES, PROJECTS, WHATSAPP_URL, EMAIL, LINKEDIN, type Category } from "@/lib/projects";

const TITLE = "S Shafaf | Freelance Graphic Designer";
const DESCRIPTION =
  "Portfolio of S Shafaf, a freelance graphic designer based in India specializing in branding, social media design, print design, advertising and product design.";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "S Shafaf",
          jobTitle: "Freelance Graphic Designer",
          address: { "@type": "PostalAddress", addressCountry: "IN" },
          email: `mailto:${EMAIL}`,
          sameAs: [LINKEDIN],
          description: DESCRIPTION,
        }),
      },
    ],
  }),
});

const SERVICES = [
  {
    n: "01",
    title: "Branding",
    body: "Visual identities and brand assets designed to create a consistent and memorable presence.",
  },
  {
    n: "02",
    title: "Business Cards",
    body: "Clean and professional business card designs that represent your brand effectively.",
  },
  {
    n: "03",
    title: "Posters & Flyers",
    body: "Eye-catching promotional designs that communicate information clearly.",
  },
  {
    n: "04",
    title: "Social Media Design",
    body: "Engaging social media graphics designed for modern digital platforms.",
  },
  {
    n: "05",
    title: "Instagram Advertising",
    body: "Promotional creatives designed to capture attention and communicate your message quickly.",
  },
  {
    n: "06",
    title: "Product Design",
    body: "Creative product visuals, packaging and promotional design concepts.",
  },
];

const SKILLS = [
  "Graphic Design",
  "Branding",
  "Typography",
  "Layout Design",
  "Social Media Design",
  "Print Design",
  "Advertising Design",
  "Product Design",
  "Visual Communication",
];

function Home() {
  const [filter, setFilter] = useState<Category>("All");
  const [openId, setOpenId] = useState<string | null>(null);
  const [imgIndex, setImgIndex] = useState(0);

  const visible = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter],
  );

  const openProject = visible.find((p) => p.id === openId) ?? null;
  const openPos = openProject ? visible.indexOf(openProject) : -1;

  const goProject = (step: number) => {
    if (openPos < 0 || visible.length === 0) return;
    const nextPos = (openPos + step + visible.length) % visible.length;
    const next = visible[nextPos];
    if (!next) return;
    setOpenId(next.id);
    setImgIndex(step > 0 ? 0 : next.images.length - 1);
  };

  return (
    <div id="top" className="min-h-screen bg-background">
      <Nav />

      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center px-5 pt-28 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="animate-rise" style={{ animationDelay: "60ms" }}>
            <p className="eyebrow">S Shafaf — Freelance Graphic Designer</p>
          </div>
          <h1
            className="display-xl animate-rise mt-8 max-w-[16ch] text-[clamp(2.6rem,9vw,7.5rem)]"
            style={{ animationDelay: "160ms" }}
          >
            Designs that make your brand stand out.
          </h1>
          <div
            className="animate-rise mt-10 max-w-xl border-t border-border pt-8"
            style={{ animationDelay: "280ms" }}
          >
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              I create thoughtful, modern and visually engaging designs for brands, businesses and
              individuals — from branding and promotional materials to social media and product
              design.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2 bg-primary px-7 py-4 text-[11px] font-medium tracking-[0.2em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5"
              >
                View My Work
                <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 border border-border-strong px-7 py-4 text-[11px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                Hire Me
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        <a
          href="#work"
          aria-label="Scroll to selected work"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground sm:flex"
        >
          <span className="text-[10px] tracking-[0.24em] uppercase">Scroll</span>
          <ArrowDown className="animate-scroll-hint h-4 w-4" />
        </a>
      </section>

      {/* WORK */}
      <section id="work" className="scroll-mt-20 px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow">01 — Portfolio</p>
            <div className="mt-6 grid gap-8 border-b border-border pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <h2 className="display-xl text-[clamp(2rem,6vw,4.5rem)]">Selected Work</h2>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                A selection of design projects created across branding, print, social media and
                product design.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Project category">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  role="tab"
                  aria-selected={filter === c}
                  onClick={() => setFilter(c)}
                  className={`border px-4 py-2.5 text-[11px] tracking-[0.16em] uppercase transition-all duration-300 ${
                    filter === c
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-6">
            {visible.map((p, i) => (
              <Reveal
                key={p.id}
                delay={(i % 3) * 90}
                as="article"
                className={p.wide ? "lg:col-span-4" : "lg:col-span-2"}
              >
                <button
                  type="button"
                  onClick={() => {
                    setOpenId(p.id);
                    setImgIndex(0);
                  }}
                  className="group block w-full text-left"
                >
                  <div className="relative overflow-hidden bg-surface">
                    <img
                      src={p.images[0]?.url}
                      alt={p.images[0]?.alt ?? p.title}
                      loading={i < 2 ? "eager" : "lazy"}
                      decoding="async"
                      className="w-full object-contain transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                    />
                    <div className="pointer-events-none absolute inset-0 flex items-end justify-end p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <span className="bg-primary px-3 py-2 text-[10px] tracking-[0.18em] text-primary-foreground uppercase">
                        View
                      </span>
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 border-t border-border pt-4">
                    <div className="min-w-0">
                      <h3 className="text-base font-medium sm:text-lg">{p.title}</h3>
                      <p className="eyebrow mt-1.5">{p.category}</p>
                    </div>
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                  </div>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-20 bg-surface px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow">02 — Services</p>
            <div className="mt-6 grid gap-8 border-b border-border pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <h2 className="display-xl text-[clamp(2rem,6vw,4.5rem)]">What I Do</h2>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                Creative design solutions built to communicate clearly and look professional.
              </p>
            </div>
          </Reveal>

          <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal
                key={s.n}
                delay={(i % 3) * 90}
                className="group border-b border-border py-10 md:px-8 md:odd:border-r lg:not-last:border-r"
              >
                <p className="eyebrow">{s.n}</p>
                <h3 className="mt-4 text-xl font-medium">{s.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-20 px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow">03 — About</p>
            <h2 className="display-xl mt-6 border-b border-border pb-10 text-[clamp(2rem,6vw,4.5rem)]">
              About Me
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-14 lg:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <p className="text-lg leading-relaxed sm:text-xl sm:leading-relaxed">
                I&apos;m S Shafaf, a freelance graphic designer based in India, passionate about
                turning ideas into clear, engaging and visually memorable designs. I specialize in
                branding, promotional materials, social media graphics and product-focused design. I
                enjoy combining thoughtful typography, composition and visual storytelling to create
                work that not only looks good, but communicates with purpose. I&apos;m currently
                growing my freelance practice and looking forward to working with businesses, brands
                and individuals who want to bring their ideas to life.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <p className="eyebrow">Skills</p>
              <ul className="mt-6 flex flex-col">
                {SKILLS.map((s) => (
                  <li
                    key={s}
                    className="border-t border-border py-3.5 text-sm tracking-wide last:border-b"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-[1400px] border-y border-border py-24 text-center">
          <h2 className="display-xl mx-auto max-w-[20ch] text-[clamp(2rem,7vw,5rem)]">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base text-muted-foreground">
            Let&apos;s turn your idea into a design that gets noticed.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-2 bg-primary px-9 py-4.5 text-[11px] font-medium tracking-[0.2em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5"
          >
            Hire Me
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-20 px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow">04 — Contact</p>
            <h2 className="display-xl mt-6 border-b border-border pb-10 text-[clamp(2rem,6vw,4.5rem)]">
              Let&apos;s Work Together
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_1fr]">
            <Reveal>
              <ContactForm />
            </Reveal>

            <div className="flex flex-col gap-10">
              <Reveal delay={100}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-6 bg-primary px-7 py-8 text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <span className="min-w-0">
                    <span className="block text-[11px] tracking-[0.22em] uppercase opacity-60">
                      Primary contact
                    </span>
                    <span className="mt-2 block font-display text-2xl">Message on WhatsApp</span>
                    <span className="mt-1 block text-sm opacity-70">+91 94457 50889</span>
                  </span>
                  <MessageCircle className="h-7 w-7 shrink-0" />
                </a>
              </Reveal>

              <Reveal delay={120}>
                <ul className="flex flex-col">
                  {[
                    {
                      label: "Email",
                      value: EMAIL,
                      href: `mailto:${EMAIL}`,
                      Icon: Mail,
                      external: false,
                    },
                    {
                      label: "LinkedIn",
                      value: "linkedin.com/in/shafafl",
                      href: LINKEDIN,
                      Icon: Linkedin,
                      external: true,
                    },
                    {
                      label: "WhatsApp",
                      value: "+91 94457 50889",
                      href: WHATSAPP_URL,
                      Icon: MessageCircle,
                      external: true,
                    },
                  ].map(({ label, value, href, Icon, external }) => (
                    <li key={label} className="border-t border-border last:border-b">
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 py-5"
                      >
                        <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                        <span className="min-w-0">
                          <span className="eyebrow block">{label}</span>
                          <span className="mt-1 block truncate text-sm">{value}</span>
                        </span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                      </a>
                    </li>
                  ))}
                  <li className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 border-t border-border py-5">
                    <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <span className="min-w-0">
                      <span className="eyebrow block">Location</span>
                      <span className="mt-1 block text-sm">Based in India</span>
                    </span>
                  </li>
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-sm tracking-[0.28em] uppercase">S Shafaf</p>
            <p className="mt-2 text-sm text-muted-foreground">Freelance Graphic Designer</p>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              &ldquo;Designing ideas into visual experiences.&rdquo;
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="eyebrow">Menu</p>
            <ul className="mt-4 space-y-2 text-sm">
              {["work", "services", "about", "contact"].map((id) => (
                <li key={id}>
                  <a href={`#${id}`} className="link-underline capitalize">
                    {id}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="eyebrow">Elsewhere</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="link-underline">
                  Email
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-[1400px] border-t border-border pt-6 text-xs text-muted-foreground">
          © 2026 S Shafaf. All rights reserved.
        </p>
      </footer>

      {openProject && (
        <Lightbox
          project={openProject}
          index={Math.min(imgIndex, openProject.images.length - 1)}
          onIndexChange={setImgIndex}
          onClose={() => setOpenId(null)}
          onPrevProject={() => goProject(-1)}
          onNextProject={() => goProject(1)}
        />
      )}

      <Chatbot />
    </div>
  );
}
