import React, { useEffect, useMemo, useRef } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  titleId: string;
  closeLabel?: string;
  children: React.ReactNode;
};

const Modal = ({ open, onClose, titleId, closeLabel = "Close", children }: ModalProps) => {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const lastActiveRef = useRef<HTMLElement | null>(null);
  const dialogId = useMemo(() => `${titleId}-dialog`, [titleId]);

  useEffect(() => {
    if (!open) return;
    lastActiveRef.current = document.activeElement as HTMLElement | null;
    window.setTimeout(() => closeRef.current?.focus(), 0);

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;
      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      lastActiveRef.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;
  const childArray = React.Children.toArray(children);
  const [titleNode, ...bodyNodes] = childArray;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
      <button
        aria-label={closeLabel}
        className="fixed inset-0 bg-black/40 transition-opacity motion-reduce:transition-none"
        onClick={onClose}
      />
      <div
        id={dialogId}
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-[92vw] max-w-2xl rounded-2xl border border-muted bg-white p-6 sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">{titleNode}</div>
          <button
            ref={closeRef}
            type="button"
            aria-label={closeLabel}
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-muted bg-white text-text transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg motion-reduce:transition-none"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
              <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="mt-4 max-h-[75vh] overflow-auto">{bodyNodes}</div>
      </div>
    </div>
  );
};

export default Modal;
