'use client';

import type { ReactNode } from 'react';
import { Footer } from '@/components/layout/Footer';

export function Fixed({ children }: { children: ReactNode }) {
  return (
    <div className="relative z-10 flex-none overflow-hidden px-0 lg:pointer-events-none lg:fixed lg:inset-0 lg:flex">
      <div className="relative flex w-full bg-zinc-50 lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-lg lg:overflow-y-auto lg:overflow-x-hidden lg:pl-[max(4rem,calc(50%-38rem))] lg:shadow-[inset_-5px_0_0_0_var(--color-border-line)]">
        <div className="mx-auto w-full px-4 lg:mx-0 lg:flex lg:max-w-none lg:flex-col lg:pr-8 lg:pl-0">
          {children}
          <div className="hidden lg:flex lg:flex-1 lg:items-end lg:justify-start lg:pb-4 lg:pb-6">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
