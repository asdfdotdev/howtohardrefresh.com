'use client';

import type { ReactNode } from 'react';
import { Footer } from '@/components/layout/Footer';
import { MainNav } from '@/components/navigation/MainNav';

export function Scrollable({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex-auto" id="hthr_main_content">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-4">
        <div className="lg:flex lg:w-full lg:justify-end">
          <div className="mx-auto max-w-lg pt-4 pb-4 lg:mx-0 lg:w-0 lg:max-w-[50%] lg:flex-auto lg:pt-10">
            <MainNav />
            <main>{children}</main>
            <div className="mt-8 flex-1 items-end justify-start border-border-line border-t pt-4 pb-4 lg:hidden">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
