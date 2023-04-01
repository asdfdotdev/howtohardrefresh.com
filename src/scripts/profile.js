import platform from 'platform'

/**
 * Try to identify the active operating system in a failure friendly way.
 *
 * @returns {string}
 */
const myOs = () => {
  let activeOs = '';

  try {
    let profileOs = platform.os.family;

    if (profileOs.indexOf('windows') > -1) {
      activeOs = 'windows';
    } else if (profileOs.indexOf('linux') > -1 || profileOs.indexOf('ubuntu') > -1) {
      activeOs = 'linux';
    } else {
      activeOs = 'mac';
    }
  } catch (e) {
    // Abide.
  }

  return activeOs;
}

/**
 * Try to identify the active browser in a failure friendly way.
 *
 * @param availableBrowsers
 *   Array of browsers.
 * @returns {number}
 */
const myBrowser = (availableBrowsers) => {
  let activeBrowser = -1;

  try {
    let profileBrowser = platform.name.toLowerCase();

    availableBrowsers.map((availableBrowser, index) => {
      if (profileBrowser === availableBrowser.toLowerCase()) {
        activeBrowser = index;
      }
      return null;
    })
  } catch (e) {
    // abide.
  }

  return activeBrowser;
}

export { myOs, myBrowser }
