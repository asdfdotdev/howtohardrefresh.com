'use client';

import { createContext, type ReactNode, useContext, useState } from 'react';

interface BrowsersContextType {
  activeBrowserId: string | null;
  setActiveBrowserId: (id: string | null) => void;
}

export const BrowsersContext = createContext<BrowsersContextType | undefined>(undefined);

export function BrowsersProvider({ children }: { children: ReactNode }) {
  const [activeBrowserId, setActiveBrowserId] = useState<string | null>(null);

  return (
    <BrowsersContext.Provider value={{ activeBrowserId, setActiveBrowserId }}>{children}</BrowsersContext.Provider>
  );
}

export function useBrowsers() {
  const context = useContext(BrowsersContext);

  if (!context) {
    throw new Error('useBrowsers must be used within BrowsersProvider');
  }

  return context;
}
