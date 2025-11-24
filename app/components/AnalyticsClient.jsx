'use client';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import * as gtag from '../../lib/gtag';

const GA_ID = gtag.GA_MEASUREMENT_ID;
const gaEnabled = !!GA_ID && !GA_ID.includes('G-XXXXXXX');

export default function AnalyticsClient() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!gaEnabled) return;

    // build full url including query string
    const url = pathname + (searchParams ? `?${searchParams.toString()}` : '');

    // if gtag isn't loaded yet, skip — pageview will be handled by the inline gtag config too
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

    gtag.pageview(url);
  }, [pathname, searchParams]);

  return null;
}
