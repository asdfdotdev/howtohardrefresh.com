import { Fixed } from '@/components/layout/Fixed';
import { Scrollable } from '@/components/layout/Scrollable';
import { Heading } from '@/components/ui/Heading';
import { BrowserMenu } from '@/features/browsers/components/BrowserMenu';
import { BrowserProfile } from '@/features/browsers/components/BrowserProfile';
import { BrowsersProvider } from '@/features/browsers/context/BrowsersContext';
import { getBrowsersData } from '@/lib/data/browsers';
import { getPlatformsData } from '@/lib/data/platforms';

export default async function Home() {
  const browserData = await getBrowsersData();
  const platformData = await getPlatformsData();

  browserData.sort((a, b) => a.name.localeCompare(b.name));
  platformData.sort((a, b) => a.weight - b.weight);

  return (
    <BrowsersProvider>
      <Fixed>
        <Heading />
        <BrowserMenu browserData={browserData} />
      </Fixed>
      <Scrollable>
        <BrowserProfile browserData={browserData} platformData={platformData} />
      </Scrollable>
    </BrowsersProvider>
  );
}
