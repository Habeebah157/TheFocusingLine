import Script from 'next/script';
import AnalyticsClient from './components/AnalyticsClient';

export default function RootLayout({ children }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  const gaEnabled = !!GA_ID && !GA_ID.includes('G-XXXXXXX');

  return (
    <html lang="en">
      <head>
        {gaEnabled && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_ID}', { page_path: window.location.pathname });`}
            </Script>
          </>
        )}
      </head>
      <body style={{ fontFamily: 'system-ui', margin: 0 }}>
        {gaEnabled && <AnalyticsClient />}
        {children}
      </body>
    </html>
  );
}
