"use client";
import { useEffect } from "react";

export function useNativeDialog(ref, open) {
  useEffect(() => {
    const dialog = ref.current;
    if (!open) { if (dialog.open) dialog.close(); return; }
    const trigger = document.activeElement;
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
    return () => {
      if (dialog.open) dialog.close();
      if (trigger instanceof HTMLElement && trigger.isConnected) trigger.focus({ preventScroll: true });
    };
  }, [ref, open]);
}

export function closeOnBackdrop(event, close) {
  if (event.target !== event.currentTarget) return;
  const b = event.currentTarget.getBoundingClientRect();
  if (event.clientX < b.left || event.clientX > b.right || event.clientY < b.top || event.clientY > b.bottom) close();
}
