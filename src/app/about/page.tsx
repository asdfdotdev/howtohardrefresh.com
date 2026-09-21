import type { Metadata } from 'next';
import Link from 'next/link';
import { Fixed } from '@/components/layout/Fixed';
import { Scrollable } from '@/components/layout/Scrollable';
import { Heading } from '@/components/ui/Heading';
import { BrowsersProvider } from '@/features/browsers/context/BrowsersContext';
import { getBrowsersData } from '@/lib/data/browsers';
import { createPageMetadata } from '@/lib/data/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'About',
  description: 'Learn more about this friendly little project.',
});

export default async function Home() {
  const browserData = await getBrowsersData();

  const browserDataAuthors = browserData
    .map((browser) => {
      return browser.author;
    })
    .sort();

  browserDataAuthors[browserDataAuthors.length - 1] = `or ${browserDataAuthors[browserDataAuthors.length - 1]}`;

  const browserAuthors = browserDataAuthors.join(', ');

  return (
    <BrowsersProvider>
      <Fixed>
        <Heading />
      </Fixed>
      <Scrollable>
        <div className="page-about">
          <h1 className="pt-1.5 font-heading text-4xl">About</h1>
          <h2>The Story</h2>
          <p>
            How to Hard Refresh started as a tongue-in-cheek joke exchanged in slack, but has grown into a modestly
            helpful resource regularly linked to in support tickets.
          </p>
          <p>Whether you sought us out, or were sent by a friend, we hope the site is helpful. 😊</p>

          <h2>The Thank Yous</h2>
          <p>This site is better thanks to friends the world over. Thank you to the following:</p>
          <ul className="ml-4 list-disc space-y-2 pt-4">
            <li>
              <Link href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer">
                Font Awesome
              </Link>
            </li>
            <li>
              <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                NextJS
              </Link>
            </li>
            <li>
              <Link href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                Tailwind CSS
              </Link>
            </li>
            <li>
              <Link href="https://uaparser.dev/" target="_blank" rel="noopener noreferrer">
                UAParser.js
              </Link>
            </li>
          </ul>

          <h2>The Code</h2>
          <p>
            <Link href="https://github.com/asdfdotdev/howtohardrefresh.com" target="_blank" rel="noopener noreferrer">
              Is available at GitHub
            </Link>
            .
          </p>

          <h2>The Authors</h2>
          <p>
            How to Hard Refresh is brought to you by your friends at{' '}
            <Link href="https://asdf.dev" target="_blank" rel="noopener noreferrer">
              asdf.dev
            </Link>
            , purveyors of fine open source projects.
          </p>

          <h2>The Disclaimer</h2>
          <p>How to Hard Refresh is not affiliated in any way with {browserAuthors}.</p>
          <p>
            All products, logos, brands, and other trademarks featured or referred to herein are the property of their
            respective owners.
          </p>
        </div>
      </Scrollable>
    </BrowsersProvider>
  );
}
