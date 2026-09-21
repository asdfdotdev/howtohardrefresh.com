import Link from 'next/link';
import { Fixed } from '@/components/layout/Fixed';
import { Scrollable } from '@/components/layout/Scrollable';
import { Heading } from '@/components/ui/Heading';
import { BrowsersProvider } from '@/features/browsers/context/BrowsersContext';

export default async function Home() {
  return (
    <BrowsersProvider>
      <Fixed>
        <Heading />
      </Fixed>
      <Scrollable>
        <div className="page-about">
          <h1 className="pt-1.5 font-heading text-2xl md:text-3xl lg:text-4xl">Not Found</h1>
          <p className="mt-4">This page may or may not be cached, but it is definitely not found.</p>
          <p className="mt-2">
            Don't refresh it, just <Link href="/">click here to try again.</Link>
          </p>
        </div>
      </Scrollable>
    </BrowsersProvider>
  );
}
