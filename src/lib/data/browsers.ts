import { promises as fs } from 'node:fs';
import path from 'node:path';

export interface BrowserItemInstructions {
  windows: {
    keyboard: string;
    keyboard_description?: string;
    mouse: string;
    mouse_description?: string;
  };
  mac: {
    keyboard: string;
    keyboard_description?: string;
    mouse: string;
    mouse_description?: string;
  };
  linux: {
    keyboard: string;
    keyboard_description?: string;
    mouse: string;
    mouse_description?: string;
  };
}

export interface BrowserItem {
  id: string;
  name: string;
  active: boolean;
  featured: boolean;
  author: string;
  engines: {
    rendering: string;
    javascript: string;
  };
  link: {
    href: string;
    text: string;
  };
  instructions: BrowserItemInstructions;
}

export async function getBrowsersData(): Promise<BrowserItem[]> {
  const dirPath = path.join(process.cwd(), 'data', 'browsers');

  try {
    const files = await fs.readdir(dirPath);
    const jsonFiles = files.filter((file) => file.endsWith('.json'));

    const allBrowsers: BrowserItem[] = await Promise.all(
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

    return allBrowsers;
  } catch (error) {
    console.error('Failed to read browser data:', error);
    return [];
  }
}
