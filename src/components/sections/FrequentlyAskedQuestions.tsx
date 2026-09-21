'use client';

import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

interface FaqLink {
  id: string;
  icon?: IconDefinition;
  href: string;
  text: string;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string[];
  links?: FaqLink[];
}

export interface FaqProps {
  items: FaqItem[];
}

export function FrequentlyAskedQuestions({ items }: FaqProps) {
  return (
    <div className="mx-auto w-full px-0 py-6">
      <dl className="divide-y divide-border-line">
        {items.map((faq) => (
          <Disclosure key={faq.id} as="div" className="mb-4 bg-surface px-6 py-6">
            <dt>
              <DisclosureButton className="group flex w-full cursor-pointer items-start justify-between text-left">
                <span className="font-semibold text-base/7">{faq.question}</span>
                <span className="ml-6 flex h-7 items-center">
                  <PlusIcon aria-hidden="true" className="size-6 group-data-open:hidden" />
                  <MinusIcon aria-hidden="true" className="size-6 group-not-data-open:hidden" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" className="mt-2 pr-12">
              {faq.answer.map((text) => (
                <p key={text} className="mt-3 font-body text-base/7 text-text-muted first-of-type:mt-0">
                  {text}
                </p>
              ))}

              {!!faq?.links?.length && (
                <ul>
                  {faq?.links.map((link) => {
                    return (
                      <li key={link.id} className="mt-2">
                        <a
                          href={link.href}
                          className="flex items-center font-body text-accent-primary transition-color duration-300 hover:text-text-main"
                          {...(!link.href.startsWith('/') && {
                            target: '_blank',
                            rel: 'noopener noreferrer',
                          })}
                        >
                          {link.icon && <FontAwesomeIcon icon={link.icon} className="mr-1 inline-block h-5 w-5" />}
                          {link.text}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}
            </DisclosurePanel>
          </Disclosure>
        ))}
      </dl>
    </div>
  );
}
