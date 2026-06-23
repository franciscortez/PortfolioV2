"use client";

import { useEffect, useState } from "react";
import { siteIcons } from "@/data/icons";

type ToastType = "success" | "error" | "info";

type ToastMessage = {
  id: number;
  message: string;
  type: ToastType;
};

let toastCounter = 0;
const listeners = new Set<(toasts: ToastMessage[]) => void>();
let toasts: ToastMessage[] = [];

function notifyListeners() {
  listeners.forEach((listener) => listener([...toasts]));
}

export function showToast(message: string, type: ToastType = "info") {
  const id = toastCounter++;
  toasts.push({ id, message, type });
  notifyListeners();

  setTimeout(() => {
    toasts = toasts.filter((t) => t.id !== id);
    notifyListeners();
  }, 4200);
}

export function ToastContainer() {
  const [toastList, setToastList] = useState<ToastMessage[]>([]);

  useEffect(() => {
    listeners.add(setToastList);
    return () => {
      listeners.delete(setToastList);
    };
  }, []);

  if (toastList.length === 0) {
    return null;
  }

  return (
    <div
      className="fixed right-4 top-4 z-50 flex w-[calc(100vw-2rem)] max-w-md flex-col gap-2 sm:right-6 sm:top-6 sm:w-auto"
      aria-live="polite"
      aria-atomic="true"
    >
      {toastList.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
}

function Toast({ id, message, type }: ToastMessage) {
  const CloseIcon = siteIcons.close;
  const [isExiting, setIsExiting] = useState(false);

  function handleDismiss() {
    setIsExiting(true);
    setTimeout(() => {
      toasts = toasts.filter((t) => t.id !== id);
      notifyListeners();
    }, 200);
  }

  const bgColor =
    type === "success"
      ? "bg-accent-dark border-accent"
      : type === "error"
        ? "bg-background border-border"
        : "bg-panel border-border";

  const textColor =
    type === "success"
      ? "text-accent"
      : type === "error"
        ? "text-muted"
        : "text-foreground";

  return (
    <div
      role="alert"
      className={`flex w-full items-start gap-3 border p-4 shadow-lg transition-all duration-200 sm:min-w-80 ${bgColor} ${textColor} ${
        isExiting ? "translate-x-[120%] opacity-0" : "translate-x-0 opacity-100"
      }`}
    >
      <p className="flex-1 text-sm leading-6">{message}</p>
      <button
        type="button"
        onClick={handleDismiss}
        aria-label="Dismiss notification"
        className="shrink-0 text-muted transition-colors hover:text-foreground"
      >
        <CloseIcon className="size-4" />
      </button>
    </div>
  );
}
