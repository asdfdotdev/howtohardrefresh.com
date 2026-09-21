import type { Metadata } from 'next';

interface PageMetadata {
  title: string;
  description: string;
}

export function createPageMetadata({ title, description }: PageMetadata): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    twitter: {
      title,
      description,
    },
  };
}
