'use client';

import { clsx } from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/lib/config/site';

export function MainNav() {
  const pathname = usePathname();

  return (
    <header className="bg-surface">
      <nav aria-label="Global" className="mx-auto flex w-full items-center justify-end">
        <div className="flex items-end gap-x-8">
          <div className="flex gap-x-4 lg:gap-x-12">
            {siteConfig.nav.main.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    'pb-1.5 font-body font-semibold text-lg/6 hover:text-accent-primary',
                    isActive ? 'border-accent-primary border-b-3' : '',
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
