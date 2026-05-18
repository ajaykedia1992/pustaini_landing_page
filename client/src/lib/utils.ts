import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Prepend Vite's base URL to static asset paths.
 * In dev: base is "/" so paths stay the same.
 * On GitHub Pages: base is "/pustaini_landing_page/" so images resolve correctly.
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL || "/";
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
