import { useState, useRef, useEffect, type FormEvent } from "react";
import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  ExternalLink,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";
import { EMAIL, WHATSAPP_URL, LINKEDIN } from "@/lib/projects";

interface Message {
  id: string;
  sender: "user" | "bot";
  text?: string;
  html?: string;
  actions?: Array<{
    label: string;
    href?: string;
    onClick?: () => void;
    icon?: "mail" | "whatsapp" | "link" | "arrow";
  }>;
  quickQuestions?: string[];
}

const INITIAL_QUICK_QUESTIONS = [
  "Who is Shafaf?",
  "What services do you offer?",
  "What are your skills?",
  "Show me your portfolio",
  "How can I hire Shafaf?",
  "How can I contact Shafaf?",
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasOpenedBefore, setHasOpenedBefore] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      sender: "bot",
      html: `
        <p class="font-medium text-foreground">Hi! 👋 I'm <strong>Shafaf AI</strong>.</p>
        <p class="mt-1.5 text-muted-foreground text-xs leading-relaxed">
          I'm here to help you learn more about <strong>Shafaf</strong>, his graphic design work, services, skills, and background.
        </p>
        <p class="mt-2 text-foreground font-medium text-xs">What would you like to know?</p>
      `,
      quickQuestions: INITIAL_QUICK_QUESTIONS,
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
      if (!hasOpenedBefore) setHasOpenedBefore(true);
    }
  }, [isOpen, messages, isTyping, hasOpenedBefore]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getBotResponse = (question: string): Omit<Message, "id" | "sender"> => {
    const q = question.toLowerCase().trim();

    // BASIC GREETINGS (hi, hello, hey, etc.)
    if (
      /\b(hi|hello|hey|heyy|heya|hola|greetings)\b/i.test(q) ||
      q.startsWith("good morning") ||
      q.startsWith("good afternoon") ||
      q.startsWith("good evening")
    ) {
      return {
        html: `
          <p class="font-medium text-foreground">Hello there! 👋</p>
          <p class="mt-1.5 text-muted-foreground text-xs leading-relaxed">
            Welcome to <strong>Shafaf's portfolio</strong>. I'm Shafaf AI, his interactive assistant.
          </p>
          <p class="mt-1.5 text-foreground font-medium text-xs">How can I assist you today?</p>
        `,
        quickQuestions: [
          "Who is Shafaf?",
          "What services do you offer?",
          "Show me your portfolio",
          "How can I hire Shafaf?",
        ],
      };
    }

    // HOW ARE YOU / COURTESY
    if (
      q.includes("how are you") ||
      q.includes("how r u") ||
      q.includes("how do you do") ||
      q.includes("how's it going") ||
      q.includes("how is it going") ||
      q.includes("what's up") ||
      q.includes("whats up") ||
      /\b(sup)\b/i.test(q)
    ) {
      return {
        html: `
          <p class="font-medium text-foreground">I'm doing great, thank you for asking! 😊</p>
          <p class="mt-1.5 text-muted-foreground text-xs leading-relaxed">
            I'm ready to help you explore Shafaf's graphic design work, discuss potential projects, or answer any questions about his skills.
          </p>
          <p class="mt-1.5 text-foreground font-medium text-xs">What would you like to explore?</p>
        `,
        quickQuestions: [
          "Show me your portfolio",
          "What services do you offer?",
          "How can I hire Shafaf?",
        ],
      };
    }

    // GRATITUDE (thanks, thank you, etc.)
    if (
      q.includes("thank") ||
      q.includes("thx") ||
      q.includes("tysm") ||
      q.includes("appreciate it")
    ) {
      return {
        html: `
          <p class="font-medium text-foreground">You're very welcome! 🙌</p>
          <p class="mt-1.5 text-muted-foreground text-xs leading-relaxed">
            Let me know if there's anything else you'd like to discover or if you're interested in working together on a design project.
          </p>
        `,
        actions: [
          {
            label: "Start a Project",
            onClick: () => scrollToSection("contact"),
            icon: "arrow",
          },
          {
            label: "Chat on WhatsApp",
            href: WHATSAPP_URL,
            icon: "whatsapp",
          },
        ],
      };
    }

    // GOODBYES (bye, goodbye, see ya, etc.)
    if (/\b(bye|goodbye|see ya|cya|take care|have a good day)\b/i.test(q)) {
      return {
        html: `
          <p class="font-medium text-foreground">Goodbye! 👋</p>
          <p class="mt-1.5 text-muted-foreground text-xs leading-relaxed">
            Thanks for checking out the portfolio! Feel free to return anytime or drop a message whenever you have a design project.
          </p>
        `,
        actions: [
          {
            label: "Get in Touch",
            onClick: () => scrollToSection("contact"),
            icon: "arrow",
          },
        ],
      };
    }

    // WHAT CAN YOU DO / HELP
    if (
      q.includes("what can you do") ||
      q.includes("what do you know") ||
      q === "help" ||
      q === "help me"
    ) {
      return {
        html: `
          <p class="font-medium text-foreground">Here is what I can help you with: 💡</p>
          <ul class="mt-1.5 space-y-1 text-xs text-muted-foreground">
            <li>• Learn about Shafaf's design background and education</li>
            <li>• Discover his branding, social media, and packaging services</li>
            <li>• Explore featured portfolio projects</li>
            <li>• Connect directly via WhatsApp or Email to hire him</li>
          </ul>
        `,
        quickQuestions: [
          "Who is Shafaf?",
          "What services do you offer?",
          "Show me your portfolio",
          "How can I contact Shafaf?",
        ],
      };
    }

    // WHO IS SHAFAF
    if (
      q.includes("who is shafaf") ||
      q.includes("about shafaf") ||
      q.includes("about you") ||
      q.includes("who are you") ||
      q.includes("biography") ||
      q.includes("bio")
    ) {
      return {
        html: `
          <p class="font-medium text-foreground">I'm Shafaf AI, portfolio assistant for <strong>S Shafaf</strong>.</p>
          <p class="mt-1.5 text-muted-foreground text-xs leading-relaxed">
            Shafaf is a freelance graphic designer based in India and a <strong>Computer Science & Engineering (AI & ML)</strong> student.
          </p>
          <p class="mt-1.5 text-muted-foreground text-xs leading-relaxed">
            He crafts clean, editorial, and visually engaging designs that elevate brands and communicate ideas clearly.
          </p>
        `,
        actions: [
          {
            label: "Read About Section",
            onClick: () => scrollToSection("about"),
            icon: "arrow",
          },
        ],
      };
    }

    // SERVICES
    if (
      q.includes("service") ||
      q.includes("what can shafaf do") ||
      q.includes("what do you do") ||
      q.includes("offer") ||
      q.includes("design service")
    ) {
      return {
        html: `
          <p class="font-medium text-foreground">Shafaf provides bespoke graphic design solutions:</p>
          <ul class="mt-2 space-y-1 text-xs text-muted-foreground">
            <li>• 🎨 <strong>Branding & Visual Identity</strong></li>
            <li>• 🪪 <strong>Business Card Design</strong></li>
            <li>• 📱 <strong>Social Media Post Creatives</strong></li>
            <li>• 📢 <strong>Advertising Creatives</strong></li>
            <li>• 🖼️ <strong>Posters & Editorial Layouts</strong></li>
            <li>• 📄 <strong>Flyers & Brochures</strong></li>
            <li>• ✏️ <strong>Logo Design</strong></li>
            <li>• 📦 <strong>Product & Packaging Visuals</strong></li>
          </ul>
        `,
        actions: [
          {
            label: "Explore Services",
            onClick: () => scrollToSection("services"),
            icon: "arrow",
          },
          {
            label: "Start a Project",
            onClick: () => scrollToSection("contact"),
            icon: "arrow",
          },
        ],
      };
    }

    // SKILLS / TOOLS
    if (
      q.includes("skill") ||
      q.includes("tool") ||
      q.includes("software") ||
      q.includes("photoshop") ||
      q.includes("canva") ||
      q.includes("stack")
    ) {
      return {
        html: `
          <p class="font-medium text-foreground">Core Design & Technical Skills:</p>
          <ul class="mt-2 space-y-1 text-xs text-muted-foreground">
            <li>• 🎨 <strong>Graphic Design & Art Direction</strong></li>
            <li>• 🖌️ <strong>Adobe Photoshop</strong></li>
            <li>• ✨ <strong>Canva</strong></li>
            <li>• 🧠 <strong>Visual Hierarchy & Typography</strong></li>
            <li>• 📱 <strong>Social Media & Ad Design</strong></li>
            <li>• 🖼️ <strong>Poster & Print Production</strong></li>
            <li>• 🏷️ <strong>Brand Systems & Identity</strong></li>
          </ul>
        `,
        actions: [
          {
            label: "View Skills Section",
            onClick: () => scrollToSection("about"),
            icon: "arrow",
          },
        ],
      };
    }

    // PORTFOLIO / WORK
    if (
      q.includes("portfolio") ||
      q.includes("work") ||
      q.includes("project") ||
      q.includes("show me") ||
      q.includes("case study") ||
      q.includes("sample")
    ) {
      return {
        html: `
          <p class="font-medium text-foreground">Shafaf's portfolio features selected projects across:</p>
          <ul class="mt-2 space-y-1 text-xs text-muted-foreground">
            <li>• <strong>Product Packaging:</strong> Fresh Orange Juice can & label</li>
            <li>• <strong>Branding:</strong> Media black-and-gold business card</li>
            <li>• <strong>Social Media:</strong> Marketing agency & gadget store concepts</li>
            <li>• <strong>Print:</strong> Folded brochures, sneaker event flyers & travel posters</li>
          </ul>
        `,
        actions: [
          {
            label: "View All Projects",
            onClick: () => scrollToSection("work"),
            icon: "arrow",
          },
        ],
      };
    }

    // HIRE / COLLABORATE
    if (
      q.includes("hire") ||
      q.includes("work with") ||
      q.includes("freelance") ||
      q.includes("rate") ||
      q.includes("price") ||
      q.includes("quote") ||
      q.includes("collaborat")
    ) {
      return {
        html: `
          <p class="font-medium text-foreground">🤝 <strong>Interested in working with Shafaf?</strong></p>
          <p class="mt-1.5 text-muted-foreground text-xs leading-relaxed">
            He collaborates with brands, agencies, and startups on custom design projects.
          </p>
          <p class="mt-2 text-foreground font-medium text-xs">Helpful details to include:</p>
          <ul class="mt-1 space-y-0.5 text-xs text-muted-foreground">
            <li>• Your brand/company name</li>
            <li>• Design requirements & deliverables</li>
            <li>• Preferred timeline or deadline</li>
          </ul>
        `,
        actions: [
          {
            label: "Open Contact Form",
            onClick: () => scrollToSection("contact"),
            icon: "arrow",
          },
          {
            label: "Chat on WhatsApp",
            href: WHATSAPP_URL,
            icon: "whatsapp",
          },
        ],
      };
    }

    // EDUCATION
    if (
      q.includes("education") ||
      q.includes("college") ||
      q.includes("study") ||
      q.includes("student") ||
      q.includes("degree") ||
      q.includes("university")
    ) {
      return {
        html: `
          <p class="font-medium text-foreground">🎓 Academic Background:</p>
          <p class="mt-1.5 text-xs text-foreground font-semibold">
            B.E. Computer Science & Engineering<br>
            <span class="text-muted-foreground font-normal">(Artificial Intelligence & Machine Learning)</span>
          </p>
          <p class="mt-2 text-muted-foreground text-xs leading-relaxed">
            Shafaf merges analytical problem-solving in AI with creative visual design aesthetics.
          </p>
        `,
        actions: [
          {
            label: "About Shafaf",
            onClick: () => scrollToSection("about"),
            icon: "arrow",
          },
        ],
      };
    }

    // CONTACT / SOCIAL
    if (
      q.includes("contact") ||
      q.includes("email") ||
      q.includes("reach") ||
      q.includes("whatsapp") ||
      q.includes("linkedin") ||
      q.includes("phone") ||
      q.includes("message")
    ) {
      return {
        html: `
          <p class="font-medium text-foreground">📩 <strong>Get in touch directly:</strong></p>
          <div class="mt-2 space-y-1.5 text-xs">
            <p><span class="text-muted-foreground">Email:</span> <a href="mailto:${EMAIL}" class="text-foreground underline">${EMAIL}</a></p>
            <p><span class="text-muted-foreground">LinkedIn:</span> <a href="${LINKEDIN}" target="_blank" rel="noreferrer" class="text-foreground underline">S Shafaf</a></p>
            <p><span class="text-muted-foreground">Location:</span> India</p>
          </div>
        `,
        actions: [
          {
            label: "Send Email",
            href: `mailto:${EMAIL}`,
            icon: "mail",
          },
          {
            label: "WhatsApp",
            href: WHATSAPP_URL,
            icon: "whatsapp",
          },
          {
            label: "LinkedIn",
            href: LINKEDIN,
            icon: "link",
          },
        ],
      };
    }

    // GRAPHIC DESIGN
    if (q.includes("graphic design") || q.includes("graphic designer") || q.includes("design")) {
      return {
        html: `
          <p class="font-medium text-foreground">Design Philosophy:</p>
          <p class="mt-1.5 text-muted-foreground text-xs leading-relaxed">
            Shafaf focuses on high-impact visual simplicity: strong typography, restrained color harmony, and clear messaging that translates across both digital screens and physical print.
          </p>
        `,
        actions: [
          {
            label: "See Portfolio",
            onClick: () => scrollToSection("work"),
            icon: "arrow",
          },
        ],
      };
    }

    // DEFAULT FALLBACK
    return {
      html: `
        <p class="font-medium text-foreground">I can assist you with details on:</p>
        <p class="mt-1 text-muted-foreground text-xs leading-relaxed">
          Shafaf's background, design services, skills, portfolio projects, or how to contact him.
        </p>
      `,
      quickQuestions: [
        "Who is Shafaf?",
        "What services does Shafaf offer?",
        "Show me his portfolio",
        "How can I contact Shafaf?",
      ],
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const rawText = textToSend ?? inputMessage;
    const text = rawText.trim();
    if (!text || isTyping) return;

    const userMsgId = `user-${Date.now()}`;
    const userMsg: Message = {
      id: userMsgId,
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) {
      setInputMessage("");
    }
    setIsTyping(true);

    setTimeout(() => {
      const responseData = getBotResponse(text);
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        ...responseData,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSendMessage();
  };

  const handleQuickQuestion = (q: string) => {
    handleSendMessage(q);
  };

  return (
    <aside aria-label="AI Chatbot Assistant" className="fixed bottom-5 right-5 z-50 select-none">
      {/* FLOATING TOGGLE BUTTON */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-primary/25 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={isOpen ? "Close AI Assistant" : "Open Shafaf AI Assistant"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="h-6 w-6 transition-transform duration-200 group-hover:rotate-90" />
        ) : (
          <div className="relative">
            <MessageCircle className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
            </span>
          </div>
        )}
      </button>

      {/* CHAT WINDOW */}
      <div
        className={`fixed bottom-22 right-5 flex w-[370px] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-2xl transition-all duration-300 ease-out sm:w-[390px] ${
          isOpen
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-4 scale-95 opacity-0"
        }`}
        style={{
          height: "min(580px, calc(100vh - 120px))",
        }}
      >
        {/* HEADER */}
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-border bg-surface px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground shadow-sm">
              S
              <span className="absolute right-0 bottom-0 block h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-surface" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-display text-sm font-semibold text-foreground tracking-tight">
                  Shafaf AI
                </h3>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-1.5 py-0.2 text-[10px] font-medium text-foreground">
                  <Sparkles className="mr-0.5 h-2.5 w-2.5" /> Assistant
                </span>
              </div>
              <p className="flex items-center gap-1 text-[11px] text-muted-foreground">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Online • Graphic Design AI
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Close chat"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* MESSAGES CONTAINER */}
        <div className="flex-1 space-y-3.5 overflow-y-auto p-4 text-sm scroll-smooth">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 ${
                msg.sender === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              {msg.sender === "bot" && (
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-xs">
                  S
                </div>
              )}

              <div className={`max-w-[85%] space-y-2`}>
                <div
                  className={`rounded-2xl px-3.5 py-2.5 shadow-xs ${
                    msg.sender === "user"
                      ? "rounded-tr-xs bg-primary text-primary-foreground"
                      : "rounded-tl-xs border border-border/80 bg-surface text-foreground"
                  }`}
                >
                  {msg.text && <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>}
                  {msg.html && (
                    <div
                      className="text-xs leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: msg.html }}
                    />
                  )}
                </div>

                {/* BOT ACTIONS */}
                {msg.actions && msg.actions.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {msg.actions.map((act) => {
                      if (act.href) {
                        return (
                          <a
                            key={act.label}
                            href={act.href}
                            target={act.href.startsWith("http") ? "_blank" : undefined}
                            rel={act.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-1 text-[11px] font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground shadow-2xs"
                          >
                            {act.icon === "mail" && <Mail className="h-3 w-3" />}
                            {act.icon === "whatsapp" && <Phone className="h-3 w-3" />}
                            {act.icon === "link" && <ExternalLink className="h-3 w-3" />}
                            {act.label}
                          </a>
                        );
                      }
                      return (
                        <button
                          key={act.label}
                          type="button"
                          onClick={() => {
                            act.onClick?.();
                          }}
                          className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-1 text-[11px] font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground shadow-2xs"
                        >
                          {act.icon === "arrow" && <ArrowRight className="h-3 w-3" />}
                          {act.label}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* QUICK QUESTION PILLS */}
                {msg.quickQuestions && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {msg.quickQuestions.map((q) => (
                      <button
                        key={q}
                        type="button"
                        onClick={() => handleQuickQuestion(q)}
                        className="rounded-full border border-border bg-surface/80 px-2.5 py-1 text-[11px] text-muted-foreground transition-all duration-200 hover:border-foreground/40 hover:bg-surface hover:text-foreground active:scale-95 shadow-2xs"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* TYPING INDICATOR */}
          {isTyping && (
            <div className="flex items-start gap-2.5">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-xs">
                S
              </div>
              <div className="flex items-center gap-1 rounded-2xl rounded-tl-xs border border-border bg-surface px-3.5 py-2.5 shadow-xs">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* INPUT FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex shrink-0 items-center gap-2 border-t border-border bg-surface p-2.5"
        >
          <input
            ref={inputRef}
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask me something about Shafaf..."
            className="flex-1 rounded-full border border-border bg-card px-4 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          />
          <button
            type="submit"
            disabled={!inputMessage.trim() || isTyping}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
            aria-label="Send message"
          >
            <Send className="h-3.5 w-3.5" />
          </button>
        </form>
      </div>
    </aside>
  );
}
