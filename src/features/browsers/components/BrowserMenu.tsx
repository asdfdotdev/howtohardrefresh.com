'use client';

import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { clsx } from 'clsx';
import { useEffect } from 'react';
import { iconLibraryBrowsers } from '@/components/ui/IconLibrary';
import type { BrowserItem } from '@/lib/data/browsers';
import { delay } from '@/lib/util/delay';
import { getDefaultBrowser } from '@/lib/util/getDefaultBrowser';
import { useBrowsers } from '../context/BrowsersContext';

interface MenuProps {
  browserData: BrowserItem[];
}

export function BrowserMenu({ browserData }: MenuProps) {
  const { activeBrowserId, setActiveBrowserId } = useBrowsers();
  const scrollProfileIntoView = async (browserId: string) => {
    const targetElement = document.getElementById('hthr_main_content');

    setActiveBrowserId(browserId);
    await delay(100);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    async function maybeGetDefaultBrowser() {
      const defaultBrowserData = await getDefaultBrowser().then((result) => {
        return browserData.filter((browser) => browser.id === result);
      });

      if (defaultBrowserData.length) {
        setActiveBrowserId(defaultBrowserData[0].id ?? '');
      }
    }

    maybeGetDefaultBrowser();
  }, [browserData, setActiveBrowserId]);

  return (
    <nav aria-label="Browser Menu">
      <ul className="grid grid-cols-2 gap-x-5 gap-y-3 py-4 sm:grid-cols-3 lg:grid-cols-2">
        {!!browserData.length &&
          browserData.map((browser) => {
            const browserIcon = iconLibraryBrowsers[browser.id as keyof typeof iconLibraryBrowsers] as IconProp;

            return (
              <li key={browser.id}>
                <button
                  type="button"
                  onClick={() => scrollProfileIntoView(browser.id)}
                  className={clsx(
                    {
                      'bg-accent-primary text-white shadow-lg': activeBrowserId === browser.id,
                    },
                    'block flex w-full cursor-pointer rounded border-1 border-transparent px-2 py-2 hover:bg-accent-primary hover:text-white hover:shadow-lg',
                  )}
                >
                  <FontAwesomeIcon icon={browserIcon as IconDefinition} size="xl" className="mr-2 h-[24px] w-[30px]" />
                  <span>{browser.name}</span>
                </button>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
