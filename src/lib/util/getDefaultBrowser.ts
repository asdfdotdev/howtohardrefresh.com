export async function getDefaultBrowser() {
  try {
    const { UAParser } = await import('@ua-parser-js/pro-business');
    const { BrowserName } = await import('@ua-parser-js/pro-business/enums');

    const BrowsersMap = {
      [BrowserName.CHROME]: 'chrome',
      [BrowserName.DUCKDUCKGO]: 'duckduckgo',
      [BrowserName.EDGE]: 'edge',
      [BrowserName.FIREFOX]: 'firefox',
      [BrowserName.LADYBIRD]: 'ladybird',
      [BrowserName.OPERA]: 'opera',
      [BrowserName.SAFARI]: 'safari',
      [BrowserName.VIVALDI]: 'vivaldi',
      [BrowserName.WATERFOX]: 'waterfox',
    };

    const parser = new UAParser();
    const parserBrowser = parser.getBrowser().name ?? '';

    if (parserBrowser === BrowserName.CHROME) {
      if (navigator.brave?.isBrave()) {
        return 'brave';
      }
    }

    return BrowsersMap[parserBrowser as keyof typeof BrowsersMap];
  } catch (error) {
    console.warn(
      `
> Unable to determine default browser.
> If the following error says that @ua-parser-js/pro-business module is not found this is a non-breaking error and is included here as informational only.
> See project README for more information about optional dependencies.

`,
      error,
    );
    return '';
  }
}
