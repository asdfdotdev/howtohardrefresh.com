export async function getDefaultPlatform() {
  try {
    const { UAParser } = await import('@ua-parser-js/pro-business');
    const { OSName } = await import('@ua-parser-js/pro-business/enums');

    const OSMap = {
      [OSName.WINDOWS]: 'windows',
      [OSName.MACOS]: 'mac',
      [OSName.ARCH]: 'linux',
      [OSName.CENTOS]: 'linux',
      [OSName.DEBIAN]: 'linux',
      [OSName.DEEPIN]: 'linux',
      [OSName.ELEMENTARY_OS]: 'linux',
      [OSName.FEDORA]: 'linux',
      [OSName.GENTOO]: 'linux',
      [OSName.JOLI]: 'linux',
      [OSName.KNOPPIX]: 'linux',
      [OSName.KUBUNTU]: 'linux',
      [OSName.LINPUS]: 'linux',
      [OSName.LINSPIRE]: 'linux',
      [OSName.LINUX]: 'linux',
      [OSName.MAGEIA]: 'linux',
      [OSName.MANDRIVA]: 'linux',
      [OSName.MANJARO]: 'linux',
      [OSName.MINT]: 'linux',
      [OSName.PCLINUXOS]: 'linux',
      [OSName.REDHAT]: 'linux',
      [OSName.SABAYON]: 'linux',
      [OSName.SLACKWARE]: 'linux',
      [OSName.SUSE]: 'linux',
      [OSName.UBUNTU]: 'linux',
      [OSName.VECTORLINUX]: 'linux',
      [OSName.XUBUNTU]: 'linux',
      [OSName.ZENWALK]: 'linux',
    };

    const parser = new UAParser();
    const parserPlatform = parser.getOS().name ?? OSName.WINDOWS;

    return OSMap[parserPlatform as keyof typeof OSMap];
  } catch (error) {
    console.warn(
      `
> howtohardrefresh.com unable to determine default platform.
> If the following error says that @ua-parser-js/pro-business module is not found this is a non-breaking error and is included here as informational only.
> See project README for more information about optional dependencies.

`,
      error,
    );
    return 'windows';
  }
}
