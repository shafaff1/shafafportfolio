import { useCallback, useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/lib/projects";

type Props = {
  project: Project;
  index: number;
  onIndexChange: (i: number) => void;
  onClose: () => void;
  onPrevProject: () => void;
  onNextProject: () => void;
};

export function Lightbox({
  project,
  index,
  onIndexChange,
  onClose,
  onPrevProject,
  onNextProject,
}: Props) {
  const [closing, setClosing] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const requestClose = useCallback(() => {
    setClosing(true);
    window.setTimeout(onClose, 220);
  }, [onClose]);

  const next = useCallback(() => {
    if (index < project.images.length - 1) onIndexChange(index + 1);
    else onNextProject();
  }, [index, project.images.length, onIndexChange, onNextProject]);

  const prev = useCallback(() => {
    if (index > 0) onIndexChange(index - 1);
    else onPrevProject();
  }, [index, onIndexChange, onPrevProject]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
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
  }, [next, prev, requestClose]);

  const image = project.images[index] ?? project.images[0];
  if (!image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} — image viewer`}
      className={`fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-sm transition-opacity duration-200 ${
        closing ? "opacity-0" : "opacity-100"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) requestClose();
      }}
      onTouchStart={(e) => {
        const t = e.touches[0];
        if (t) touchStart.current = { x: t.clientX, y: t.clientY };
      }}
      onTouchEnd={(e) => {
        const s = touchStart.current;
        const t = e.changedTouches[0];
        if (!s || !t) return;
        const dx = t.clientX - s.x;
        const dy = t.clientY - s.y;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
          if (dx < 0) next();
          else prev();
        }
        touchStart.current = null;
      }}
    >
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 px-4 pt-4 sm:px-8 sm:pt-6">
        <div className="min-w-0 text-white">
          <p className="eyebrow !text-white/55">{project.category}</p>
          <h2 className="mt-1 truncate text-base font-medium sm:text-lg">{project.title}</h2>
        </div>
        <button
          type="button"
          onClick={requestClose}
          aria-label="Close image viewer"
          className="shrink-0 rounded-full border border-white/20 p-2.5 text-white transition-colors hover:bg-white hover:text-black"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-3 py-4 sm:px-16">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-2 z-10 hidden rounded-full border border-white/20 p-3 text-white transition-colors hover:bg-white hover:text-black sm:block"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <img
          key={image.url}
          src={image.url}
          alt={image.alt}
          className={`max-h-full max-w-full object-contain ${closing ? "" : "animate-rise"}`}
        />
        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="absolute right-2 z-10 hidden rounded-full border border-white/20 p-3 text-white transition-colors hover:bg-white hover:text-black sm:block"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="px-4 pb-6 sm:px-8">
        <div className="mx-auto max-w-3xl border-t border-white/15 pt-4 text-white">
          <p className="text-sm leading-relaxed text-white/70">{project.description}</p>
          {project.images.length > 1 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.images.map((img, i) => (
                <button
                  key={img.url}
                  type="button"
                  onClick={() => onIndexChange(i)}
                  className={`border px-3 py-1.5 text-[11px] tracking-[0.14em] uppercase transition-colors ${
                    i === index
                      ? "border-white bg-white text-black"
                      : "border-white/25 text-white/70 hover:border-white/60"
                  }`}
                >
                  {img.label}
                </button>
              ))}
            </div>
          )}
          <div className="mt-4 flex items-center justify-between gap-4 text-[11px] tracking-[0.16em] text-white/45 uppercase">
            <span>
              {index + 1} / {project.images.length}
            </span>
            <span className="hidden sm:inline">Arrow keys to browse · Esc to close</span>
            <span className="sm:hidden">Swipe to browse</span>
          </div>
        </div>
      </div>
    </div>
  );
}
