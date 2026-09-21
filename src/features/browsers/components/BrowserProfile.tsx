'use client';

import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { clsx } from 'clsx';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { iconLibraryPlatforms } from '@/components/ui/IconLibrary';
import { SanitizedMarkup } from '@/components/utility/SanitizedMarkup';
import type { BrowserItem, BrowserItemInstructions } from '@/lib/data/browsers';
import type { PlatformItem } from '@/lib/data/platforms';
import { getDefaultPlatform } from '@/lib/util/getDefaultPlatform';
import { useBrowsers } from '../context/BrowsersContext';

interface MenuProps {
  browserData: BrowserItem[];
  platformData: PlatformItem[];
}

export function BrowserProfile({ browserData, platformData }: MenuProps) {
  const [activePlatformId, setActivePlatformId] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const { activeBrowserId } = useBrowsers();
  const activeBrowser = browserData.find((browser) => browser.id === activeBrowserId);

  useEffect(() => {
    async function maybeGetDefaultPlatform() {
      const defaultPlatform = await getDefaultPlatform();
      const defaultPlatformData = platformData.filter((platform) => platform.id === defaultPlatform);

      setActivePlatformId(defaultPlatformData[0]?.id ?? 'windows');
      setIsLoaded(true);
    }

    maybeGetDefaultPlatform();
  }, [platformData]);

  return (
    <div
      className={clsx({
        'opacity-100': isLoaded,
        'opacity-0': !isLoaded,
      })}
    >
      {activeBrowser ? (
        <>
          <h1 className="pt-4 font-heading text-4xl lg:pt-1.5">{activeBrowser.name}</h1>

          <div className="my-4 w-full rounded border-1 border-border-line">
            <div className="relative right-0">
              <div className="relative flex list-none flex-wrap rounded-md bg-canvas px-1.5 py-1.5" role="tablist">
                {!!platformData.length &&
                  platformData.map((platform) => {
                    const platformIcon = iconLibraryPlatforms[
                      platform.id as keyof typeof iconLibraryPlatforms
                    ] as IconProp;

                    return (
                      <div key={platform.id} className="z-30 flex-auto text-center">
                        <button
                          type="button"
                          onClick={() => {
                            setActivePlatformId(platform.id);
                          }}
                          className={clsx(
                            {
                              '!border-border-line !bg-white': platform.id === activePlatformId,
                            },
                            'z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-md border-0 border-1 border-transparent px-0 py-2 text-sm',
                          )}
                          role="tab"
                          aria-selected={activePlatformId === platform.id}
                        >
                          <FontAwesomeIcon
                            icon={platformIcon as IconDefinition}
                            size="xl"
                            className="mr-2 h-[24px] w-[30px]"
                          />
                          {platform.name}
                        </button>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>

          <div className="py-4">
            {!!platformData.length &&
              platformData.map((platform) => {
                const instructions = activeBrowser?.instructions;
                const platformKey = platform.id as keyof BrowserItemInstructions;

                return (
                  <div
                    key={platform.id}
                    className={clsx(
                      {
                        hidden: activePlatformId !== platform.id,
                      },
                      'browser-profile-instructions, z-30 flex items-center justify-center',
                    )}
                  >
                    {instructions[platformKey] ? (
                      <div className="flex flex-col items-center justify-center text-center">
                        {instructions[platformKey].keyboard && (
                          <div className="keyboard-only-instructions">
                            {instructions[platformKey].keyboard_description && (
                              <div className="sr-only">
                                {`To hard refresh ${activeBrowser.name} on ${platform.name} using only your keyboard perform these steps. ${instructions[platformKey].keyboard_description}`}
                              </div>
                            )}
                            <SanitizedMarkup htmlContent={instructions[platformKey].keyboard} />
                          </div>
                        )}

                        {instructions[platformKey].mouse && (
                          <>
                            <div
                              className={clsx(
                                'relative',
                                'my-5 flex items-center text-base',
                                'before:mr-6 before:h-[1px] before:w-20 before:bg-text-muted lg:before:w-40',
                                'after:ml-6 after:h-[1px] after:w-20 after:bg-text-muted lg:after:w-40',
                              )}
                            >
                              or
                            </div>
                            <div className="keyboard-mouse-instructions">
                              {instructions[platformKey].mouse_description && (
                                <div className="sr-only">
                                  {`To hard refresh ${activeBrowser.name} on ${platform.name} using your keyboard and mouse perform these steps. ${instructions[platformKey].keyboard_description}`}
                                </div>
                              )}
                              <SanitizedMarkup htmlContent={instructions[platformKey].mouse} />
                            </div>
                          </>
                        )}
                      </div>
                    ) : (
                      <p className="text-base">
                        {activeBrowser.name} is not available for {platform.name}.
                      </p>
                    )}
                  </div>
                );
              })}
          </div>

          <h2 className="mt-8 font-heading text-2xl">Additional Details</h2>
          <dl className="divide-y divide-border-line border-border-line">
            <div className="items-center py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
              <dt className="font-medium text-slate-500 text-sm sm:col-span-1">Author</dt>
              <dd className="mt-1 text-slate-900 text-sm sm:col-span-2 sm:mt-0">{activeBrowser.author}</dd>
            </div>
            <div className="items-center py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
              <dt className="font-medium text-slate-500 text-sm sm:col-span-1">Rendering Engine</dt>
              <dd className="mt-1 text-slate-900 text-sm sm:col-span-2 sm:mt-0">{activeBrowser.engines.rendering}</dd>
            </div>
            <div className="items-center py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
              <dt className="font-medium text-slate-500 text-sm sm:col-span-1">JavaScript Engine</dt>
              <dd className="mt-1 text-slate-900 text-sm sm:col-span-2 sm:mt-0">{activeBrowser.engines.javascript}</dd>
            </div>
            <div className="items-center py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
              <dt className="font-medium text-slate-500 text-sm sm:col-span-1">Link</dt>
              <dd className="mt-1 text-slate-900 text-sm sm:col-span-2 sm:mt-0">
                <Link
                  href={activeBrowser.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-accent-primary hover:no-underline"
                >
                  {activeBrowser.link.text}
                </Link>
              </dd>
            </div>
          </dl>
        </>
      ) : (
        <>
          <h1 className="pt-1.5 font-heading text-4xl">Welcome</h1>
          <p className="pt-4">Please select a browser from the list to begin.</p>
        </>
      )}
    </div>
  );
}
