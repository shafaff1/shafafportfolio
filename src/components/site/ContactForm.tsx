import { useState } from "react";
import { z } from "zod";
import { ArrowUpRight, Check, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { EMAIL } from "@/lib/projects";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
  projectType: z.string().trim().max(100, "Project type is too long"),
  message: z
    .string()
    .trim()
    .min(1, "Please tell me about your project")
    .max(2000, "Message is too long (2000 characters max)"),
});

const PROJECT_TYPES = [
  "Branding",
  "Business Card",
  "Poster / Flyer",
  "Social Media Design",
  "Instagram Advertising",
  "Product Design",
  "Other",
];

const FIELD =
  "mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none transition-colors duration-300 focus:border-border-strong";

export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", projectType: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (key: keyof typeof values) => (v: string) =>
    setValues((prev) => ({ ...prev, [key]: v }));

  const mailtoFallback = `mailto:${EMAIL}?subject=${encodeURIComponent(
    `Portfolio Enquiry: ${values.projectType || "General"} from ${values.name || "Client"}`,
  )}&body=${encodeURIComponent(
    `Name: ${values.name}\nEmail: ${values.email}\nProject Type: ${values.projectType || "General"}\n\nMessage:\n${values.message}`,
  )}`;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setStatus("sending");

    let emailSent = false;
    let dbSaved = false;

    // 1. Send enquiry directly to EMAIL (shafaf.cool2008@gmail.com) via FormSubmit AJAX
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: parsed.data.name,
          email: parsed.data.email,
          project_type: parsed.data.projectType || "General Enquiry",
          message: parsed.data.message,
          _subject: `New Portfolio Enquiry from ${parsed.data.name} (${parsed.data.projectType || "General"})`,
          _replyto: parsed.data.email,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (res.ok) {
        emailSent = true;
      }
    } catch (err) {
      console.warn("Email delivery via FormSubmit failed:", err);
    }

    // 2. Also record in Supabase database table
    try {
      const { error } = await supabase.from("contact_enquiries").insert({
        name: parsed.data.name,
        email: parsed.data.email,
        project_type: parsed.data.projectType || null,
        message: parsed.data.message,
      });
      if (!error) {
        dbSaved = true;
      }
    } catch (err) {
      console.warn("Supabase record failed:", err);
    }

    // If either email or DB succeeded, consider it sent
    if (emailSent || dbSaved) {
      setStatus("sent");
      setValues({ name: "", email: "", projectType: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="border border-border bg-surface px-7 py-12 text-center">
        <Check className="mx-auto h-8 w-8 text-foreground" />
        <h3 className="mt-5 font-display text-2xl">Enquiry received</h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thank you for reaching out. Your enquiry has been received and saved. I&apos;ll get
          back to you as soon as possible.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="border border-border-strong px-6 py-3 text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            Send another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="border border-border p-6 sm:p-8">
      <p className="eyebrow">Send an enquiry</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="text-[11px] tracking-[0.18em] uppercase">
            Name
          </label>
          <input
            id="cf-name"
            value={values.name}
            onChange={(e) => set("name")(e.target.value)}
            maxLength={100}
            autoComplete="name"
            className={FIELD}
          />
          {errors["name"] && <p className="mt-2 text-xs text-destructive">{errors["name"]}</p>}
        </div>

        <div>
          <label htmlFor="cf-email" className="text-[11px] tracking-[0.18em] uppercase">
            Email
          </label>
          <input
            id="cf-email"
            type="email"
            value={values.email}
            onChange={(e) => set("email")(e.target.value)}
            maxLength={255}
            autoComplete="email"
            className={FIELD}
          />
          {errors["email"] && <p className="mt-2 text-xs text-destructive">{errors["email"]}</p>}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="cf-type" className="text-[11px] tracking-[0.18em] uppercase">
          Project type
        </label>
        <select
          id="cf-type"
          value={values.projectType}
          onChange={(e) => set("projectType")(e.target.value)}
          className={FIELD}
        >
          <option value="">Select a service (optional)</option>
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="cf-message" className="text-[11px] tracking-[0.18em] uppercase">
          Project details
        </label>
        <textarea
          id="cf-message"
          rows={5}
          value={values.message}
          onChange={(e) => set("message")(e.target.value)}
          maxLength={2000}
          className={`${FIELD} resize-y`}
        />
        {errors["message"] && <p className="mt-2 text-xs text-destructive">{errors["message"]}</p>}
      </div>

      {status === "error" && (
        <div className="mt-5 border border-destructive/40 bg-destructive/10 p-4">
          <p className="text-xs text-destructive">
            Something went wrong submitting online. You can send your message directly using the
            email link below:
          </p>
          <a
            href={mailtoFallback}
            className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-foreground underline"
          >
            <Mail className="h-3.5 w-3.5" />
            Open in Email App ({EMAIL})
          </a>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-7 inline-flex items-center gap-2 bg-primary px-8 py-4 text-[11px] font-medium tracking-[0.2em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Enquiry"}
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </form>
  );
}
