import { r as __toESM } from "../_runtime.mjs";
import { a as WHATSAPP_URL, i as PROJECTS, n as EMAIL, r as LINKEDIN, t as CATEGORIES } from "./projects-CAXtk0U0.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as ArrowRight, a as Phone, c as Menu, d as Linkedin, f as ExternalLink, g as ArrowUpRight, h as Check, i as Send, l as MapPin, m as ChevronLeft, n as Sun, o as Moon, p as ChevronRight, r as Sparkles, s as MessageCircle, t as X, u as Mail, v as ArrowDown } from "../_libs/lucide-react.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DTk600VD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LINKS = [
	{
		href: "#work",
		label: "Work"
	},
	{
		href: "#services",
		label: "Services"
	},
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [dark, setDark] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : "border-b border-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#top",
				className: "min-w-0 truncate font-display text-sm font-medium tracking-[0.28em] uppercase",
				children: "S Shafaf"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center gap-1 sm:gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-7 md:flex",
						"aria-label": "Main",
						children: LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "link-underline text-[13px] tracking-[0.1em] text-muted-foreground uppercase transition-colors hover:text-foreground",
							children: l.label
						}, l.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: toggleTheme,
						"aria-label": dark ? "Switch to light mode" : "Switch to dark mode",
						className: "rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground",
						children: dark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: WHATSAPP_URL,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "hidden bg-primary px-5 py-2.5 text-[11px] font-medium tracking-[0.18em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5 sm:inline-block",
						children: "Hire Me"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen((v) => !v),
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						className: "p-2 md:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})
				]
			})]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-background md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col px-5 py-2",
				"aria-label": "Mobile",
				children: [LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "border-b border-border py-4 text-sm tracking-[0.12em] uppercase last:border-b-0",
					children: l.label
				}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: WHATSAPP_URL,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: () => setOpen(false),
					className: "my-4 bg-primary px-5 py-3.5 text-center text-[11px] font-medium tracking-[0.18em] text-primary-foreground uppercase",
					children: "Hire Me on WhatsApp"
				})]
			})
		})]
	});
}
function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (typeof IntersectionObserver === "undefined") {
			setShown(true);
			return;
		}
		const io = new IntersectionObserver((entries) => {
			for (const e of entries) if (e.isIntersecting) {
				setShown(true);
				io.disconnect();
			}
		}, {
			threshold: .12,
			rootMargin: "0px 0px -8% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className: `reveal ${shown ? "reveal-in" : ""} ${className}`,
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
function Lightbox({ project, index, onIndexChange, onClose, onPrevProject, onNextProject }) {
	const [closing, setClosing] = (0, import_react.useState)(false);
	const touchStart = (0, import_react.useRef)(null);
	const requestClose = (0, import_react.useCallback)(() => {
		setClosing(true);
		window.setTimeout(onClose, 220);
	}, [onClose]);
	const next = (0, import_react.useCallback)(() => {
		if (index < project.images.length - 1) onIndexChange(index + 1);
		else onNextProject();
	}, [
		index,
		project.images.length,
		onIndexChange,
		onNextProject
	]);
	const prev = (0, import_react.useCallback)(() => {
		if (index > 0) onIndexChange(index - 1);
		else onPrevProject();
	}, [
		index,
		onIndexChange,
		onPrevProject
	]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "Escape") requestClose();
			if (e.key === "ArrowRight") next();
			if (e.key === "ArrowLeft") prev();
		};
		window.addEventListener("keydown", onKey);
		const prevOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = prevOverflow;
		};
	}, [
		next,
		prev,
		requestClose
	]);
	const image = project.images[index] ?? project.images[0];
	if (!image) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "dialog",
		"aria-modal": "true",
		"aria-label": `${project.title} — image viewer`,
		className: `fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-sm transition-opacity duration-200 ${closing ? "opacity-0" : "opacity-100"}`,
		onClick: (e) => {
			if (e.target === e.currentTarget) requestClose();
		},
		onTouchStart: (e) => {
			const t = e.touches[0];
			if (t) touchStart.current = {
				x: t.clientX,
				y: t.clientY
			};
		},
		onTouchEnd: (e) => {
			const s = touchStart.current;
			const t = e.changedTouches[0];
			if (!s || !t) return;
			const dx = t.clientX - s.x;
			const dy = t.clientY - s.y;
			if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) if (dx < 0) next();
			else prev();
			touchStart.current = null;
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 px-4 pt-4 sm:px-8 sm:pt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow !text-white/55",
						children: project.category
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 truncate text-base font-medium sm:text-lg",
						children: project.title
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: requestClose,
					"aria-label": "Close image viewer",
					className: "shrink-0 rounded-full border border-white/20 p-2.5 text-white transition-colors hover:bg-white hover:text-black",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex min-h-0 flex-1 items-center justify-center px-3 py-4 sm:px-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: prev,
						"aria-label": "Previous image",
						className: "absolute left-2 z-10 hidden rounded-full border border-white/20 p-3 text-white transition-colors hover:bg-white hover:text-black sm:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: image.url,
						alt: image.alt,
						className: `max-h-full max-w-full object-contain ${closing ? "" : "animate-rise"}`
					}, image.url),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: next,
						"aria-label": "Next image",
						className: "absolute right-2 z-10 hidden rounded-full border border-white/20 p-3 text-white transition-colors hover:bg-white hover:text-black sm:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-4 pb-6 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl border-t border-white/15 pt-4 text-white",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-white/70",
							children: project.description
						}),
						project.images.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap gap-2",
							children: project.images.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => onIndexChange(i),
								className: `border px-3 py-1.5 text-[11px] tracking-[0.14em] uppercase transition-colors ${i === index ? "border-white bg-white text-black" : "border-white/25 text-white/70 hover:border-white/60"}`,
								children: img.label
							}, img.url))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center justify-between gap-4 text-[11px] tracking-[0.16em] text-white/45 uppercase",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									index + 1,
									" / ",
									project.images.length
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "Arrow keys to browse · Esc to close"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sm:hidden",
									children: "Swipe to browse"
								})
							]
						})
					]
				})
			})
		]
	});
}
function brokeredPreviewStorage() {
	if (typeof window === "undefined") return void 0;
	const host = location.hostname;
	const projectId = [
		"lovableproject.com",
		"lovableproject-dev.com",
		"lovable.app",
		"gpt-eng.com",
		"gptengineer.run"
	].some((z) => host === z || host.endsWith("." + z)) ? host.match(/* @__PURE__ */ new RegExp("^(?:id-preview(?:-[a-z0-9]+)?|project)--([0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})(?:-dev)?(?=\\.|$)", "i"))?.[1] ?? host.match(/* @__PURE__ */ new RegExp("^([0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})(?=[.-])", "i"))?.[1] : void 0;
	const framed = window.parent && window.parent !== window;
	if (!projectId || !framed) return localStorage;
	const dev = host.endsWith(".lovableproject-dev.com") || host.endsWith(".gpt-eng.com");
	const EDITOR = dev ? /^https:\/\/([a-z0-9-]+\.)*(lovable\.dev|gptengineer\.app)$|^http:\/\/localhost:3000$/ : /^https:\/\/([a-z0-9-]+\.)*(lovable\.dev|gptengineer\.app)$/;
	const ancestor = location.ancestorOrigins && location.ancestorOrigins[0] || (document.referrer ? new URL(document.referrer).origin : "");
	const editorOrigins = ancestor && EDITOR.test(ancestor) ? [ancestor] : dev ? ["https://lovable.dev", "http://localhost:3000"] : ["https://lovable.dev"];
	const RESULT = "lovable-preview-auth:result";
	const TIMEOUT = 2e3;
	const newId = () => Math.random().toString(36).slice(2) + Date.now().toString(36);
	const request = (type, key, value) => new Promise((resolve) => {
		const requestId = newId();
		let done = false;
		let timer;
		const finish = (r) => {
			if (done) return;
			done = true;
			clearTimeout(timer);
			window.removeEventListener("message", onMessage);
			resolve(r);
		};
		const onMessage = (e) => {
			if (editorOrigins.indexOf(e.origin) < 0) return;
			const d = e.data;
			if (d && d.type === RESULT && d.requestId === requestId) finish(d);
		};
		window.addEventListener("message", onMessage);
		const msg = {
			type,
			requestId,
			projectId,
			key
		};
		if (value !== void 0) msg["value"] = value;
		for (const origin of editorOrigins) window.parent.postMessage(msg, origin);
		timer = setTimeout(() => finish(null), TIMEOUT);
	});
	let firstGet = true;
	const RETRY_DELAY = 250;
	return {
		getItem: async (key) => {
			let res = await request("lovable-preview-auth:get", key);
			if (!res && firstGet) {
				await new Promise((r) => setTimeout(r, RETRY_DELAY));
				res = await request("lovable-preview-auth:get", key);
			}
			firstGet = false;
			if (res && res.ok && typeof res.value === "string") {
				if (res.value === "") {
					localStorage.removeItem(key);
					return null;
				}
				return res.value;
			}
			return localStorage.getItem(key);
		},
		setItem: (key, value) => {
			localStorage.setItem(key, value);
			return request("lovable-preview-auth:set", key, value).then(() => void 0);
		},
		removeItem: (key) => {
			localStorage.removeItem(key);
			return request("lovable-preview-auth:remove", key).then(() => void 0);
		}
	};
}
function isNewSupabaseApiKey(value) {
	return value.startsWith("sb_publishable_") || value.startsWith("sb_secret_");
}
function createSupabaseFetch(supabaseKey) {
	return (input, init) => {
		const headers = new Headers(typeof Request !== "undefined" && input instanceof Request ? input.headers : void 0);
		if (init?.headers) new Headers(init.headers).forEach((value, key) => headers.set(key, value));
		if (isNewSupabaseApiKey(supabaseKey) && headers.get("Authorization") === `Bearer ${supabaseKey}`) headers.delete("Authorization");
		headers.set("apikey", supabaseKey);
		return fetch(input, {
			...init,
			headers
		});
	};
}
function createSupabaseClient() {
	const SUPABASE_URL = {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_SUPABASE_PROJECT_ID": "gemloovvtepexmgvvzwb",
		"VITE_SUPABASE_PUBLISHABLE_KEY": "sb_publishable_WC3FQKFPJjDlxX-JAwuEQQ_cQMwqtbz",
		"VITE_SUPABASE_URL": "https://c--e0de25ca-091f-4062-9df9-8005e1c7e4e5-prod.lovable.cloud"
	}["VITE_SUPABASE_URL"] || process.env["SUPABASE_URL"] || "https://c--e0de25ca-091f-4062-9df9-8005e1c7e4e5-prod.lovable.cloud";
	const SUPABASE_PUBLISHABLE_KEY = {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_SUPABASE_PROJECT_ID": "gemloovvtepexmgvvzwb",
		"VITE_SUPABASE_PUBLISHABLE_KEY": "sb_publishable_WC3FQKFPJjDlxX-JAwuEQQ_cQMwqtbz",
		"VITE_SUPABASE_URL": "https://c--e0de25ca-091f-4062-9df9-8005e1c7e4e5-prod.lovable.cloud"
	}["VITE_SUPABASE_PUBLISHABLE_KEY"] || process.env["SUPABASE_PUBLISHABLE_KEY"] || "sb_publishable_WC3FQKFPJjDlxX-JAwuEQQ_cQMwqtbz";
	if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
		const message = `Missing Supabase environment variable(s): ${[...!SUPABASE_URL ? ["SUPABASE_URL"] : [], ...!SUPABASE_PUBLISHABLE_KEY ? ["SUPABASE_PUBLISHABLE_KEY"] : []].join(", ")}. Connect Supabase in Lovable Cloud.`;
		console.error(`[Supabase] ${message}`);
		throw new Error(message);
	}
	return createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
		global: { fetch: createSupabaseFetch(SUPABASE_PUBLISHABLE_KEY) },
		auth: {
			storage: brokeredPreviewStorage(),
			persistSession: true,
			autoRefreshToken: true
		}
	});
}
var _supabase;
var supabase = new Proxy({}, { get(_, prop, receiver) {
	if (!_supabase) _supabase = createSupabaseClient();
	return Reflect.get(_supabase, prop, receiver);
} });
var schema = objectType({
	name: stringType().trim().min(1, "Please enter your name").max(100, "Name is too long"),
	email: stringType().trim().email("Please enter a valid email").max(255, "Email is too long"),
	projectType: stringType().trim().max(100, "Project type is too long"),
	message: stringType().trim().min(1, "Please tell me about your project").max(2e3, "Message is too long (2000 characters max)")
});
var PROJECT_TYPES = [
	"Branding",
	"Business Card",
	"Poster / Flyer",
	"Social Media Design",
	"Instagram Advertising",
	"Product Design",
	"Other"
];
var FIELD = "mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none transition-colors duration-300 focus:border-border-strong";
function ContactForm() {
	const [values, setValues] = (0, import_react.useState)({
		name: "",
		email: "",
		projectType: "",
		message: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const set = (key) => (v) => setValues((prev) => ({
		...prev,
		[key]: v
	}));
	const mailtoFallback = `mailto:${EMAIL}?subject=${encodeURIComponent(`Portfolio Enquiry: ${values.projectType || "General"} from ${values.name || "Client"}`)}&body=${encodeURIComponent(`Name: ${values.name}\nEmail: ${values.email}\nProject Type: ${values.projectType || "General"}\n\nMessage:\n${values.message}`)}`;
	const onSubmit = async (e) => {
		e.preventDefault();
		const parsed = schema.safeParse(values);
		if (!parsed.success) {
			const next = {};
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
		try {
			if ((await fetch(`https://formsubmit.co/ajax/shafaf.cool2008@gmail.com`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				body: JSON.stringify({
					name: parsed.data.name,
					email: parsed.data.email,
					project_type: parsed.data.projectType || "General Enquiry",
					message: parsed.data.message,
					_subject: `New Portfolio Enquiry from ${parsed.data.name} (${parsed.data.projectType || "General"})`,
					_replyto: parsed.data.email,
					_template: "table",
					_captcha: "false"
				})
			})).ok) emailSent = true;
		} catch (err) {
			console.warn("Email delivery via FormSubmit failed:", err);
		}
		try {
			const { error } = await supabase.from("contact_enquiries").insert({
				name: parsed.data.name,
				email: parsed.data.email,
				project_type: parsed.data.projectType || null,
				message: parsed.data.message
			});
			if (!error) dbSaved = true;
		} catch (err) {
			console.warn("Supabase record failed:", err);
		}
		if (emailSent || dbSaved) {
			setStatus("sent");
			setValues({
				name: "",
				email: "",
				projectType: "",
				message: ""
			});
		} else setStatus("error");
	};
	if (status === "sent") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-border bg-surface px-7 py-12 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mx-auto h-8 w-8 text-foreground" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-5 font-display text-2xl",
				children: "Enquiry received"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground",
				children: "Thank you for reaching out. Your enquiry has been received and saved. I'll get back to you as soon as possible."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex flex-wrap justify-center gap-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setStatus("idle"),
					className: "border border-border-strong px-6 py-3 text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 hover:bg-primary hover:text-primary-foreground",
					children: "Send another"
				})
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		noValidate: true,
		className: "border border-border p-6 sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Send an enquiry"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "cf-name",
						className: "text-[11px] tracking-[0.18em] uppercase",
						children: "Name"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "cf-name",
						value: values.name,
						onChange: (e) => set("name")(e.target.value),
						maxLength: 100,
						autoComplete: "name",
						className: FIELD
					}),
					errors["name"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-destructive",
						children: errors["name"]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "cf-email",
						className: "text-[11px] tracking-[0.18em] uppercase",
						children: "Email"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "cf-email",
						type: "email",
						value: values.email,
						onChange: (e) => set("email")(e.target.value),
						maxLength: 255,
						autoComplete: "email",
						className: FIELD
					}),
					errors["email"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-destructive",
						children: errors["email"]
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "cf-type",
					className: "text-[11px] tracking-[0.18em] uppercase",
					children: "Project type"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					id: "cf-type",
					value: values.projectType,
					onChange: (e) => set("projectType")(e.target.value),
					className: FIELD,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "Select a service (optional)"
					}), PROJECT_TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: t,
						children: t
					}, t))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "cf-message",
						className: "text-[11px] tracking-[0.18em] uppercase",
						children: "Project details"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						id: "cf-message",
						rows: 5,
						value: values.message,
						onChange: (e) => set("message")(e.target.value),
						maxLength: 2e3,
						className: `${FIELD} resize-y`
					}),
					errors["message"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-destructive",
						children: errors["message"]
					})
				]
			}),
			status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 border border-destructive/40 bg-destructive/10 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-destructive",
					children: "Something went wrong submitting online. You can send your message directly using the email link below:"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: mailtoFallback,
					className: "mt-3 inline-flex items-center gap-2 text-xs font-medium text-foreground underline",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3.5 w-3.5" }),
						"Open in Email App (",
						"shafaf.cool2008@gmail.com",
						")"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "submit",
				disabled: status === "sending",
				className: "group mt-7 inline-flex items-center gap-2 bg-primary px-8 py-4 text-[11px] font-medium tracking-[0.2em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60",
				children: [status === "sending" ? "Sending…" : "Send Enquiry", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
			})
		]
	});
}
var INITIAL_QUICK_QUESTIONS = [
	"Who is Shafaf?",
	"What services do you offer?",
	"What are your skills?",
	"Show me your portfolio",
	"How can I hire Shafaf?",
	"How can I contact Shafaf?"
];
function Chatbot() {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [inputMessage, setInputMessage] = (0, import_react.useState)("");
	const [isTyping, setIsTyping] = (0, import_react.useState)(false);
	const [hasOpenedBefore, setHasOpenedBefore] = (0, import_react.useState)(false);
	const [messages, setMessages] = (0, import_react.useState)([{
		id: "welcome-1",
		sender: "bot",
		html: `
        <p class="font-medium text-foreground">Hi! 👋 I'm <strong>Shafaf AI</strong>.</p>
        <p class="mt-1.5 text-muted-foreground text-xs leading-relaxed">
          I'm here to help you learn more about <strong>Shafaf</strong>, his graphic design work, services, skills, and background.
        </p>
        <p class="mt-2 text-foreground font-medium text-xs">What would you like to know?</p>
      `,
		quickQuestions: INITIAL_QUICK_QUESTIONS
	}]);
	const messagesEndRef = (0, import_react.useRef)(null);
	const inputRef = (0, import_react.useRef)(null);
	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};
	(0, import_react.useEffect)(() => {
		if (isOpen) {
			scrollToBottom();
			inputRef.current?.focus();
			if (!hasOpenedBefore) setHasOpenedBefore(true);
		}
	}, [
		isOpen,
		messages,
		isTyping,
		hasOpenedBefore
	]);
	const scrollToSection = (id) => {
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: "smooth" });
	};
	const getBotResponse = (question) => {
		const q = question.toLowerCase().trim();
		if (/\b(hi|hello|hey|heyy|heya|hola|greetings)\b/i.test(q) || q.startsWith("good morning") || q.startsWith("good afternoon") || q.startsWith("good evening")) return {
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
				"How can I hire Shafaf?"
			]
		};
		if (q.includes("how are you") || q.includes("how r u") || q.includes("how do you do") || q.includes("how's it going") || q.includes("how is it going") || q.includes("what's up") || q.includes("whats up") || /\b(sup)\b/i.test(q)) return {
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
				"How can I hire Shafaf?"
			]
		};
		if (q.includes("thank") || q.includes("thx") || q.includes("tysm") || q.includes("appreciate it")) return {
			html: `
          <p class="font-medium text-foreground">You're very welcome! 🙌</p>
          <p class="mt-1.5 text-muted-foreground text-xs leading-relaxed">
            Let me know if there's anything else you'd like to discover or if you're interested in working together on a design project.
          </p>
        `,
			actions: [{
				label: "Start a Project",
				onClick: () => scrollToSection("contact"),
				icon: "arrow"
			}, {
				label: "Chat on WhatsApp",
				href: WHATSAPP_URL,
				icon: "whatsapp"
			}]
		};
		if (/\b(bye|goodbye|see ya|cya|take care|have a good day)\b/i.test(q)) return {
			html: `
          <p class="font-medium text-foreground">Goodbye! 👋</p>
          <p class="mt-1.5 text-muted-foreground text-xs leading-relaxed">
            Thanks for checking out the portfolio! Feel free to return anytime or drop a message whenever you have a design project.
          </p>
        `,
			actions: [{
				label: "Get in Touch",
				onClick: () => scrollToSection("contact"),
				icon: "arrow"
			}]
		};
		if (q.includes("what can you do") || q.includes("what do you know") || q === "help" || q === "help me") return {
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
				"How can I contact Shafaf?"
			]
		};
		if (q.includes("who is shafaf") || q.includes("about shafaf") || q.includes("about you") || q.includes("who are you") || q.includes("biography") || q.includes("bio")) return {
			html: `
          <p class="font-medium text-foreground">I'm Shafaf AI, portfolio assistant for <strong>S Shafaf</strong>.</p>
          <p class="mt-1.5 text-muted-foreground text-xs leading-relaxed">
            Shafaf is a freelance graphic designer based in India and a <strong>Computer Science & Engineering (AI & ML)</strong> student.
          </p>
          <p class="mt-1.5 text-muted-foreground text-xs leading-relaxed">
            He crafts clean, editorial, and visually engaging designs that elevate brands and communicate ideas clearly.
          </p>
        `,
			actions: [{
				label: "Read About Section",
				onClick: () => scrollToSection("about"),
				icon: "arrow"
			}]
		};
		if (q.includes("service") || q.includes("what can shafaf do") || q.includes("what do you do") || q.includes("offer") || q.includes("design service")) return {
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
			actions: [{
				label: "Explore Services",
				onClick: () => scrollToSection("services"),
				icon: "arrow"
			}, {
				label: "Start a Project",
				onClick: () => scrollToSection("contact"),
				icon: "arrow"
			}]
		};
		if (q.includes("skill") || q.includes("tool") || q.includes("software") || q.includes("photoshop") || q.includes("canva") || q.includes("stack")) return {
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
			actions: [{
				label: "View Skills Section",
				onClick: () => scrollToSection("about"),
				icon: "arrow"
			}]
		};
		if (q.includes("portfolio") || q.includes("work") || q.includes("project") || q.includes("show me") || q.includes("case study") || q.includes("sample")) return {
			html: `
          <p class="font-medium text-foreground">Shafaf's portfolio features selected projects across:</p>
          <ul class="mt-2 space-y-1 text-xs text-muted-foreground">
            <li>• <strong>Product Packaging:</strong> Fresh Orange Juice can & label</li>
            <li>• <strong>Branding:</strong> Media black-and-gold business card</li>
            <li>• <strong>Social Media:</strong> Marketing agency & gadget store concepts</li>
            <li>• <strong>Print:</strong> Folded brochures, sneaker event flyers & travel posters</li>
          </ul>
        `,
			actions: [{
				label: "View All Projects",
				onClick: () => scrollToSection("work"),
				icon: "arrow"
			}]
		};
		if (q.includes("hire") || q.includes("work with") || q.includes("freelance") || q.includes("rate") || q.includes("price") || q.includes("quote") || q.includes("collaborat")) return {
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
			actions: [{
				label: "Open Contact Form",
				onClick: () => scrollToSection("contact"),
				icon: "arrow"
			}, {
				label: "Chat on WhatsApp",
				href: WHATSAPP_URL,
				icon: "whatsapp"
			}]
		};
		if (q.includes("education") || q.includes("college") || q.includes("study") || q.includes("student") || q.includes("degree") || q.includes("university")) return {
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
			actions: [{
				label: "About Shafaf",
				onClick: () => scrollToSection("about"),
				icon: "arrow"
			}]
		};
		if (q.includes("contact") || q.includes("email") || q.includes("reach") || q.includes("whatsapp") || q.includes("linkedin") || q.includes("phone") || q.includes("message")) return {
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
					icon: "mail"
				},
				{
					label: "WhatsApp",
					href: WHATSAPP_URL,
					icon: "whatsapp"
				},
				{
					label: "LinkedIn",
					href: LINKEDIN,
					icon: "link"
				}
			]
		};
		if (q.includes("graphic design") || q.includes("graphic designer") || q.includes("design")) return {
			html: `
          <p class="font-medium text-foreground">Design Philosophy:</p>
          <p class="mt-1.5 text-muted-foreground text-xs leading-relaxed">
            Shafaf focuses on high-impact visual simplicity: strong typography, restrained color harmony, and clear messaging that translates across both digital screens and physical print.
          </p>
        `,
			actions: [{
				label: "See Portfolio",
				onClick: () => scrollToSection("work"),
				icon: "arrow"
			}]
		};
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
				"How can I contact Shafaf?"
			]
		};
	};
	const handleSendMessage = (textToSend) => {
		const text = (textToSend ?? inputMessage).trim();
		if (!text || isTyping) return;
		const userMsg = {
			id: `user-${Date.now()}`,
			sender: "user",
			text
		};
		setMessages((prev) => [...prev, userMsg]);
		if (!textToSend) setInputMessage("");
		setIsTyping(true);
		setTimeout(() => {
			const responseData = getBotResponse(text);
			const botMsg = {
				id: `bot-${Date.now()}`,
				sender: "bot",
				...responseData
			};
			setMessages((prev) => [...prev, botMsg]);
			setIsTyping(false);
		}, 600);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		handleSendMessage();
	};
	const handleQuickQuestion = (q) => {
		handleSendMessage(q);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		"aria-label": "AI Chatbot Assistant",
		className: "fixed bottom-5 right-5 z-50 select-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => setIsOpen((prev) => !prev),
			className: "group relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-primary/25 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
			"aria-label": isOpen ? "Close AI Assistant" : "Open Shafaf AI Assistant",
			"aria-expanded": isOpen,
			children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6 transition-transform duration-200 group-hover:rotate-90" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-6 w-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "absolute -top-1 -right-1 flex h-3 w-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-3 w-3 rounded-full bg-emerald-500" })]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `fixed bottom-22 right-5 flex w-[370px] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-2xl transition-all duration-300 ease-out sm:w-[390px] ${isOpen ? "pointer-events-auto translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-4 scale-95 opacity-0"}`,
			style: { height: "min(580px, calc(100vh - 120px))" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-16 shrink-0 items-center justify-between border-b border-border bg-surface px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground shadow-sm",
							children: ["S", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-0 bottom-0 block h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-surface" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-sm font-semibold text-foreground tracking-tight",
								children: "Shafaf AI"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center rounded-full bg-primary/10 px-1.5 py-0.2 text-[10px] font-medium text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mr-0.5 h-2.5 w-2.5" }), " Assistant"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-1 text-[11px] text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" }), "Online • Graphic Design AI"]
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setIsOpen(false),
						className: "rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
						"aria-label": "Close chat",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 space-y-3.5 overflow-y-auto p-4 text-sm scroll-smooth",
					children: [
						messages.map((msg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `flex items-start gap-2.5 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`,
							children: [msg.sender === "bot" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-xs",
								children: "S"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `max-w-[85%] space-y-2`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `rounded-2xl px-3.5 py-2.5 shadow-xs ${msg.sender === "user" ? "rounded-tr-xs bg-primary text-primary-foreground" : "rounded-tl-xs border border-border/80 bg-surface text-foreground"}`,
										children: [msg.text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "leading-relaxed whitespace-pre-wrap",
											children: msg.text
										}), msg.html && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs leading-relaxed",
											dangerouslySetInnerHTML: { __html: msg.html }
										})]
									}),
									msg.actions && msg.actions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-1.5 pt-1",
										children: msg.actions.map((act) => {
											if (act.href) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: act.href,
												target: act.href.startsWith("http") ? "_blank" : void 0,
												rel: act.href.startsWith("http") ? "noopener noreferrer" : void 0,
												className: "inline-flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-1 text-[11px] font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground shadow-2xs",
												children: [
													act.icon === "mail" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3 w-3" }),
													act.icon === "whatsapp" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3 w-3" }),
													act.icon === "link" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" }),
													act.label
												]
											}, act.label);
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => {
													act.onClick?.();
												},
												className: "inline-flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-1 text-[11px] font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground shadow-2xs",
												children: [act.icon === "arrow" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" }), act.label]
											}, act.label);
										})
									}),
									msg.quickQuestions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-1.5 pt-1",
										children: msg.quickQuestions.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handleQuickQuestion(q),
											className: "rounded-full border border-border bg-surface/80 px-2.5 py-1 text-[11px] text-muted-foreground transition-all duration-200 hover:border-foreground/40 hover:bg-surface hover:text-foreground active:scale-95 shadow-2xs",
											children: q
										}, q))
									})
								]
							})]
						}, msg.id)),
						isTyping && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-xs",
								children: "S"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1 rounded-2xl rounded-tl-xs border border-border bg-surface px-3.5 py-2.5 shadow-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: messagesEndRef })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "flex shrink-0 items-center gap-2 border-t border-border bg-surface p-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: inputRef,
						type: "text",
						value: inputMessage,
						onChange: (e) => setInputMessage(e.target.value),
						placeholder: "Ask me something about Shafaf...",
						className: "flex-1 rounded-full border border-border bg-card px-4 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-1 focus:ring-ring"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: !inputMessage.trim() || isTyping,
						className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40",
						"aria-label": "Send message",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-3.5 w-3.5" })
					})]
				})
			]
		})]
	});
}
var SERVICES = [
	{
		n: "01",
		title: "Branding",
		body: "Visual identities and brand assets designed to create a consistent and memorable presence."
	},
	{
		n: "02",
		title: "Business Cards",
		body: "Clean and professional business card designs that represent your brand effectively."
	},
	{
		n: "03",
		title: "Posters & Flyers",
		body: "Eye-catching promotional designs that communicate information clearly."
	},
	{
		n: "04",
		title: "Social Media Design",
		body: "Engaging social media graphics designed for modern digital platforms."
	},
	{
		n: "05",
		title: "Instagram Advertising",
		body: "Promotional creatives designed to capture attention and communicate your message quickly."
	},
	{
		n: "06",
		title: "Product Design",
		body: "Creative product visuals, packaging and promotional design concepts."
	}
];
var SKILLS = [
	"Graphic Design",
	"Branding",
	"Typography",
	"Layout Design",
	"Social Media Design",
	"Print Design",
	"Advertising Design",
	"Product Design",
	"Visual Communication"
];
function Home() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [openId, setOpenId] = (0, import_react.useState)(null);
	const [imgIndex, setImgIndex] = (0, import_react.useState)(0);
	const visible = (0, import_react.useMemo)(() => filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter), [filter]);
	const openProject = visible.find((p) => p.id === openId) ?? null;
	const openPos = openProject ? visible.indexOf(openProject) : -1;
	const goProject = (step) => {
		if (openPos < 0 || visible.length === 0) return;
		const nextPos = (openPos + step + visible.length) % visible.length;
		const next = visible[nextPos];
		if (!next) return;
		setOpenId(next.id);
		setImgIndex(step > 0 ? 0 : next.images.length - 1);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative flex min-h-[100svh] items-center px-5 pt-28 pb-24 sm:px-8 lg:px-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto w-full max-w-[1400px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "animate-rise",
							style: { animationDelay: "60ms" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "S Shafaf — Freelance Graphic Designer"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "display-xl animate-rise mt-8 max-w-[16ch] text-[clamp(2.6rem,9vw,7.5rem)]",
							style: { animationDelay: "160ms" },
							children: "Designs that make your brand stand out."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "animate-rise mt-10 max-w-xl border-t border-border pt-8",
							style: { animationDelay: "280ms" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base leading-relaxed text-muted-foreground sm:text-lg",
								children: "I create thoughtful, modern and visually engaging designs for brands, businesses and individuals — from branding and promotional materials to social media and product design."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-col gap-3 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#work",
									className: "group inline-flex items-center justify-center gap-2 bg-primary px-7 py-4 text-[11px] font-medium tracking-[0.2em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5",
									children: ["View My Work", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: WHATSAPP_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "group inline-flex items-center justify-center gap-2 border border-border-strong px-7 py-4 text-[11px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 hover:bg-primary hover:text-primary-foreground",
									children: ["Hire Me", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
								})]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#work",
					"aria-label": "Scroll to selected work",
					className: "absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground sm:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] tracking-[0.24em] uppercase",
						children: "Scroll"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "animate-scroll-hint h-4 w-4" })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "work",
				className: "scroll-mt-20 px-5 py-24 sm:px-8 lg:px-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1400px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "01 — Portfolio"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-8 border-b border-border pb-10 lg:grid-cols-[1fr_auto] lg:items-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display-xl text-[clamp(2rem,6vw,4.5rem)]",
								children: "Selected Work"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-md text-sm leading-relaxed text-muted-foreground",
								children: "A selection of design projects created across branding, print, social media and product design."
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 flex flex-wrap gap-2",
								role: "tablist",
								"aria-label": "Project category",
								children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									role: "tab",
									"aria-selected": filter === c,
									onClick: () => setFilter(c),
									className: `border px-4 py-2.5 text-[11px] tracking-[0.16em] uppercase transition-all duration-300 ${filter === c ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground"}`,
									children: c
								}, c))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-6",
							children: visible.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i % 3 * 90,
								as: "article",
								className: p.wide ? "lg:col-span-4" : "lg:col-span-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										setOpenId(p.id);
										setImgIndex(0);
									},
									className: "group block w-full text-left",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative overflow-hidden bg-surface",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: p.images[0]?.url,
												alt: p.images[0]?.alt ?? p.title,
												loading: i < 2 ? "eager" : "lazy",
												decoding: "async",
												className: "w-full object-contain transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "pointer-events-none absolute inset-0 flex items-end justify-end p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "bg-primary px-3 py-2 text-[10px] tracking-[0.18em] text-primary-foreground uppercase",
													children: "View"
												})
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-5 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 border-t border-border pt-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-base font-medium sm:text-lg",
													children: p.title
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "eyebrow mt-1.5",
													children: p.category
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground",
											children: p.description
										})
									]
								})
							}, p.id))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "services",
				className: "scroll-mt-20 bg-surface px-5 py-24 sm:px-8 lg:px-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1400px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "02 — Services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-8 border-b border-border pb-10 lg:grid-cols-[1fr_auto] lg:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-xl text-[clamp(2rem,6vw,4.5rem)]",
							children: "What I Do"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-md text-sm leading-relaxed text-muted-foreground",
							children: "Creative design solutions built to communicate clearly and look professional."
						})]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid md:grid-cols-2 lg:grid-cols-3",
						children: SERVICES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: i % 3 * 90,
							className: "group border-b border-border py-10 md:px-8 md:odd:border-r lg:not-last:border-r",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: s.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-xl font-medium",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground",
									children: s.body
								})
							]
						}, s.n))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "about",
				className: "scroll-mt-20 px-5 py-24 sm:px-8 lg:px-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1400px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "03 — About"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-xl mt-6 border-b border-border pb-10 text-[clamp(2rem,6vw,4.5rem)]",
						children: "About Me"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 grid gap-14 lg:grid-cols-[1.3fr_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg leading-relaxed sm:text-xl sm:leading-relaxed",
							children: "I'm S Shafaf, a freelance graphic designer based in India, passionate about turning ideas into clear, engaging and visually memorable designs. I specialize in branding, promotional materials, social media graphics and product-focused design. I enjoy combining thoughtful typography, composition and visual storytelling to create work that not only looks good, but communicates with purpose. I'm currently growing my freelance practice and looking forward to working with businesses, brands and individuals who want to bring their ideas to life."
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: 120,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Skills"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 flex flex-col",
								children: SKILLS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "border-t border-border py-3.5 text-sm tracking-wide last:border-b",
									children: s
								}, s))
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 sm:px-8 lg:px-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mx-auto max-w-[1400px] border-y border-border py-24 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-xl mx-auto max-w-[20ch] text-[clamp(2rem,7vw,5rem)]",
							children: "Have a project in mind?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-6 max-w-md text-base text-muted-foreground",
							children: "Let's turn your idea into a design that gets noticed."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: WHATSAPP_URL,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "group mt-10 inline-flex items-center gap-2 bg-primary px-9 py-4.5 text-[11px] font-medium tracking-[0.2em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5",
							children: ["Hire Me", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "contact",
				className: "scroll-mt-20 px-5 py-24 sm:px-8 lg:px-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1400px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "04 — Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-xl mt-6 border-b border-border pb-10 text-[clamp(2rem,6vw,4.5rem)]",
						children: "Let's Work Together"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 grid gap-12 lg:grid-cols-[1.1fr_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 100,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: WHATSAPP_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "group flex items-center justify-between gap-6 bg-primary px-7 py-8 text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "min-w-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-[11px] tracking-[0.22em] uppercase opacity-60",
												children: "Primary contact"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-2 block font-display text-2xl",
												children: "Message on WhatsApp"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-1 block text-sm opacity-70",
												children: "+91 94457 50889"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-7 w-7 shrink-0" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 120,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "flex flex-col",
									children: [[
										{
											label: "Email",
											value: EMAIL,
											href: `mailto:${EMAIL}`,
											Icon: Mail,
											external: false
										},
										{
											label: "LinkedIn",
											value: "linkedin.com/in/shafafl",
											href: LINKEDIN,
											Icon: Linkedin,
											external: true
										},
										{
											label: "WhatsApp",
											value: "+91 94457 50889",
											href: WHATSAPP_URL,
											Icon: MessageCircle,
											external: true
										}
									].map(({ label, value, href, Icon, external }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "border-t border-border last:border-b",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href,
											...external ? {
												target: "_blank",
												rel: "noopener noreferrer"
											} : {},
											className: "group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 py-5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 shrink-0 text-muted-foreground" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "min-w-0",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "eyebrow block",
														children: label
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "mt-1 block truncate text-sm",
														children: value
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" })
											]
										})
									}, label)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 border-t border-border py-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 shrink-0 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "eyebrow block",
												children: "Location"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-1 block text-sm",
												children: "Based in India"
											})]
										})]
									})]
								})
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-border px-5 py-14 sm:px-8 lg:px-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-[1400px] gap-10 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm tracking-[0.28em] uppercase",
								children: "S Shafaf"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Freelance Graphic Designer"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xs text-sm text-muted-foreground",
								children: "“Designing ideas into visual experiences.”"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							"aria-label": "Footer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Menu"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2 text-sm",
								children: [
									"work",
									"services",
									"about",
									"contact"
								].map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `#${id}`,
									className: "link-underline capitalize",
									children: id
								}) }, id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Elsewhere"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 space-y-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: WHATSAPP_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "link-underline",
									children: "WhatsApp"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${EMAIL}`,
									className: "link-underline",
									children: "Email"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: LINKEDIN,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "link-underline",
									children: "LinkedIn"
								}) })
							]
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-12 max-w-[1400px] border-t border-border pt-6 text-xs text-muted-foreground",
					children: "© 2026 S Shafaf. All rights reserved."
				})]
			}),
			openProject && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
				project: openProject,
				index: Math.min(imgIndex, openProject.images.length - 1),
				onIndexChange: setImgIndex,
				onClose: () => setOpenId(null),
				onPrevProject: () => goProject(-1),
				onNextProject: () => goProject(1)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chatbot, {})
		]
	});
}
//#endregion
export { Home as component };
