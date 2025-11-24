export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXX';

// log a pageview with gtag
export function pageview(url) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', 'page_view', {
    page_path: url,
  });
}

// log specific events
export function event({ action, category, label, value }) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
}
