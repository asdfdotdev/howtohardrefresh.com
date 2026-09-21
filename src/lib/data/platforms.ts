import { promises as fs } from 'node:fs';
import path from 'node:path';

export interface PlatformItem {
  id: string;
  name: string;
  category: string;
  weight: number;
}

export async function getPlatformsData(): Promise<PlatformItem[]> {
  const dirPath = path.join(process.cwd(), 'data', 'platforms');

  try {
    const files = await fs.readdir(dirPath);
    const jsonFiles = files.filter((file) => file.endsWith('.json'));

    const allPlatforms: PlatformItem[] = await Promise.all(
      jsonFiles.map(async (file) => {
        const filePath = path.join(dirPath, file);
        const fileContents = await fs.readFile(filePath, 'utf8');

        try {
          return JSON.parse(fileContents);
        } catch {
          return {};
        }
      }),
    );

    return allPlatforms;
  } catch (error) {
    console.error('Failed to read browser data:', error);
    return [];
  }
}
