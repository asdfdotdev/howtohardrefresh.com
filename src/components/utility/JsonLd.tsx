'use client';

import Script from 'next/script';

export interface JsonLdProps {
  data: object;
}

export function JsonLd({ data }: JsonLdProps) {
  if (!data || typeof data !== 'object') {
    return null;
  }

  return (
    <Script id="hthr-schema" type="application/ld+json">
      {JSON.stringify(data)}
    </Script>
  );
}
