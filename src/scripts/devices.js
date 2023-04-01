const viewport = {
  mobile: '375',
  tablet: '768',
  laptop: '1440',
  desktop: '2560'
}

const device = {
  mobile: `(max-width: ${viewport.mobile}px)`,
  tablet: `(max-width: ${viewport.tablet}px)`,
  laptop: `(max-width: ${viewport.laptop}px)`,
  desktop: `(max-width: ${viewport.desktop}px)`,
};

const isMobile = function () {
  let isMobile = false;

  try {
    if (typeof window !== undefined) {
      if (window.innerWidth <= viewport.tablet) {
        isMobile = true;
      }
    }
  } catch (e) {
    // Abide.
  }

  return isMobile;
}

export { viewport, device, isMobile }
