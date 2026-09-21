import type { Metadata } from 'next';
import { Fixed } from '@/components/layout/Fixed';
import { Scrollable } from '@/components/layout/Scrollable';
import { FrequentlyAskedQuestions } from '@/components/sections/FrequentlyAskedQuestions';
import { Heading } from '@/components/ui/Heading';
import { BrowsersProvider } from '@/features/browsers/context/BrowsersContext';
import { createPageMetadata } from '@/lib/data/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Frequently Asked Questions',
  description: 'Want to know more about performing a hard refresh? You have questions, we have answers.',
});

const faqData = [
  {
    id: crypto.randomUUID(),
    question: 'How do I perform a hard refresh?',
    answer: [
      'You have come to the right place. Click "Home" in the menu then select your browser from the list and we will show you how.',
    ],
  },
  {
    id: crypto.randomUUID(),
    question: 'What is a hard refresh?',
    answer: [
      'A hard refresh forces your browser to fetch a fresh copy of the page you are viewing so you can see the latest updates.',
    ],
  },
  {
    id: crypto.randomUUID(),
    question: 'How is a hard refresh different from a regular refresh?',
    answer: [
      'A regular refresh can use your local device cache which may not reflect the latest version of the page. A hard refresh forces your browser to fetch a new copy of the page so you can see the latest updates.',
    ],
  },
  {
    id: crypto.randomUUID(),
    question: 'Does a hard refresh clear my browser cache, history, or cookies?',
    answer: [
      'No, a hard refresh does not clear your browser history or cookies. It only temporarily bypasses and updates the cache for the individual page you are performing the hard refresh for.',
    ],
  },
  {
    id: crypto.randomUUID(),
    question: 'Is a hard refresh the same as "clear cache"?',
    answer: [
      'No, a hard refresh is more selective than clearing your entire browser cache. A hard refresh will bypass and update your cache for only the individual page you are performing the hard refresh for. Clearing cache complete removes cache for all visited pages.',
    ],
  },
  {
    id: crypto.randomUUID(),
    question: 'Why are the icons wrong for some browsers in your menu?',
    answer: [
      'We are using Font Awesome for our icons and we love it. It is awesome (no pun intended) that so many high quality icons are available for free and can be used in silly little projects like this one. However, not all browser logos are available from Font Awesome, so we had to improvise for those browsers.',
      'We have submitted a "Brand Request" for the missing browsers via the Font Awesome GitHub project. If you are inclined you can vote for them and maybe they will be added.',
    ],
    links: [
      {
        id: crypto.randomUUID(),
        href: 'https://github.com/FortAwesome/Font-Awesome/discussions/categories/brand-requests?discussions_q=DuckDuckGo+OR+Ladybird+OR+Vivaldi+OR+Waterfox+category%3A%22Brand+Requests%22',
        text: 'Click here to visit Font Awesome at GitHub.',
      },
    ],
  },
];

export default async function Home() {
  return (
    <BrowsersProvider>
      <Fixed>
        <Heading />
      </Fixed>
      <Scrollable>
        <div className="page-about">
          <h1 className="pt-1.5 font-heading text-2xl md:text-3xl lg:text-4xl">Frequently Asked Questions</h1>
          <FrequentlyAskedQuestions items={faqData} />
        </div>
      </Scrollable>
    </BrowsersProvider>
  );
}
