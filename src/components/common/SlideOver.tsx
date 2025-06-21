import React from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function SlideOver({ open, onClose, children }: Props) {
  return (
    <div
      className={`fixed inset-0 z-50 flex ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      {/* Slide-over card */}
      <div
        className={`ml-auto w-full max-w-md bg-white h-full shadow-xl transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col h-full">
          <button className="self-end mb-4" onClick={onClose} aria-label="Close">
            ✕
          </button>
          {children}
        </div>
      </div>
    </div>
  );
} 