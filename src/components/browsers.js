import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { useBrowserJson } from '../hooks/use-browser-json'
import { device, isMobile } from '../scripts/devices'
import { myBrowser, myOs } from '../scripts/profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChrome,
  faFirefoxBrowser,
  faSafari,
  faEdge,
  faOpera,
  faWindows,
  faApple,
  faLinux,
}  from '@fortawesome/free-brands-svg-icons'

const BrowserIcons = {
  "chrome": faChrome,
  "firefox": faFirefoxBrowser,
  "safari": faSafari,
  "edge": faEdge,
  "opera": faOpera
}

const OsIcons = {
  "windows": faWindows,
  "mac": faApple,
  "linux": faLinux,
}

const BrowserGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 16px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  max-width: 1100px;
  margin: auto;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    max-width: 100%;
  }
`;

const BrowserStyles = styled.div`
  min-height: 350px;

  .accent-icon {
    position: absolute;
    right: 25px;
    bottom: -75px;
    color: var(--color-accent);

    svg {
      width: 250px;
      height: 250px;
      opacity: 0.575;
    }
  }

  .label {
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    svg {
      height: 2rem;
    }
  }

  &:not(.is-active) {
    transition: all 0.4s ease;

    &:hover {
      text-shadow: 1px 1px var(--color-secondary), -1px -1px var(--color-accent);
    }
  }

  .instructions {
    display: none;
    width: calc(100vw - (var(--layout-padding-x) * 2));
    margin-top: calc(var(--layout-padding-y) * 0.5);
    left: 0;
    position: absolute;
    padding: var(--layout-padding-x);
    background-color: var(--color-background);
    overflow: hidden;

    &-toggle {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      max-width: 500px;
      margin: auto;
      z-index: 10;
      position: relative;

      div {
        cursor: pointer;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

        &.is-active {
          background-color: var(--color-secondary);
          color: var(--color-white);
          border-radius: 100%;
        }
      }

      svg {
        width: 30px;
        height: 30px;
      }
    }

    &-os {
      display: grid;
      grid-template-columns: 1fr 100px 1fr;
      font-size: 1.25rem;
      padding: var(--layout-padding-y) 0 0 0;
      grid-gap: 32px;
      z-index: 10;
      position: relative;

      > div {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        min-height: 50px;

        > div {
          display: block;

          span {
            display: block;
            font-size: 0.75rem;
            text-align: center;
          }
        }

        &:first-child {
          display: flex;
          justify-content: flex-end;
        }
        &:last-child {
          display: flex;
          justify-content: flex-start;
        }
      }
    }
  }

  &.is-active {
    .label {
      color: var(--color-secondary);

      svg path {
        fill: var(--color-secondary);
      }
    }

    .instructions {
      display: block;
    }
  }

  @media ${device.tablet} {
    min-height: 0;
    margin-bottom: 16px;

    .instructions {
      transition: all 0.4s ease;
      position: relative;
      margin-top: calc(var(--layout-padding-y) * 0.25);
      margin-left: calc(var(--layout-padding-x) * -1);
      width: calc(100% - (var(--layout-padding-x) * 0.5));

      &-os {
        padding-top: 16px;
        grid-template-columns: 1fr;
        gap: 8px;
        margin: 16px;

        > div {
          align-items: center;
          min-height: 30px;

          &:first-child,
          &:last-child {
            justify-content: center;
          }
        }
      }
    }

    .label {
      flex-direction: row;
      justify-content: flex-start;
      font-size: 1.75rem;
      gap: 12px;
    }

    .accent-icon {
      position: absolute;
      right: -20px;
      bottom: -75px;
      color: var(--color-accent);

      svg {
        width: 150px;
        height: 150px;
        opacity: 0.575;
      }
    }
  }
`;

const BrowsersContent = () => {
  const browserReference = useRef([]);
  const browserData = useBrowserJson()

  const [activeIndex, setActiveIndex] = useState({
    browser: (!isMobile()) ? myBrowser(browserData.map(edge => edge.node.name)) : -1,
    os: myOs()
  });

  function getFirstAvailableInstruction(instructions) {
    let availableInstructions = Object.keys(OsIcons).filter((os) => {
      return (instructions[os]) ? os : null;
    });

    return availableInstructions[0];
  }

  function setActiveBrowser(which) {
    let instructions = browserData[which].node.instructions[activeIndex.os];

    if (instructions) {
      setActiveIndex({browser: which, os: activeIndex.os})
    } else {
      setActiveIndex({
        browser: which,
        os: getFirstAvailableInstruction(browserData[which].node.instructions)
      })
    }
  }

  function setActiveOs(which) {
    setActiveIndex({browser: activeIndex.browser, os: which})
  }

  function maybeScrollToBrowser(which) {
    if (isMobile()) {
      setTimeout(() => {
        let position = browserReference.current[which].offsetTop

        window.scrollTo({
          top: (position - 32),
          left: 0,
          behavior: "smooth"
        });
      }, 100);
    }
  }

  return (
    <>
      {browserData.map((browser, index) => (
        <BrowserStyles
          key={index}
          className={classNames({
            'is-active': (activeIndex.browser === index),
          })}>

          <div
            id={browser.node.name.toLowerCase()}
            ref={(element) => { browserReference.current[index] = element }}
            className="label"
            onClick={() => {
              setActiveBrowser(index)
              maybeScrollToBrowser(index)
            }}
            onKeyDown={() => {setActiveBrowser(index)}}
            role="button"
            tabIndex="0"
          >
            <FontAwesomeIcon icon={ BrowserIcons[browser.node.name.toLowerCase()] } />
            {browser.node.name}
          </div>

          <div className="instructions">
            <div className="instructions-toggle">
              {Object.keys(OsIcons).map((os, osIndex) =>
                (activeIndex && browser.node.instructions[os] && (
                    <div
                      key={os}
                      className={classNames({
                        'is-active': (activeIndex.os === os),
                      })}
                      onClick={() => {setActiveOs(os)}}
                      onKeyDown={() => {setActiveOs(os)}}
                      role="button"
                      tabIndex="-1"
                    >
                      <FontAwesomeIcon icon={ OsIcons[os] } />
                    </div>
                  )
                ))}
            </div>

            { (activeIndex.os === 'windows' && browser.node.instructions.windows)
              && (
                <div className="instructions-os windows">
                  <div>
                    <div dangerouslySetInnerHTML={{__html: browser.node.instructions.windows.keyboard}}></div>
                  </div>
                  <div>or</div>
                  <div>
                    <div dangerouslySetInnerHTML={{__html: browser.node.instructions.windows.mouse}}></div>
                  </div>
                </div>
              )}

            { (activeIndex.os === 'mac' && browser.node.instructions.mac)
              && (
                <div className="instructions-os mac">
                  <div>
                    <div dangerouslySetInnerHTML={{__html: browser.node.instructions.mac.keyboard}}></div>
                  </div>
                  <div>or</div>
                  <div>
                    <div dangerouslySetInnerHTML={{__html: browser.node.instructions.mac.mouse}}></div>
                  </div>
                </div>
              )}

            { (activeIndex.os === 'linux' && browser.node.instructions.linux)
              && (
                <div className="instructions-os linux">
                  <div>
                    <div dangerouslySetInnerHTML={{__html: browser.node.instructions.linux.keyboard}}></div>
                  </div>
                  <div>or</div>
                  <div>
                    <div dangerouslySetInnerHTML={{__html: browser.node.instructions.linux.mouse}}></div>
                  </div>
                </div>
              )}

            { (activeIndex.browser >= 0)
              && (
                <div
                  className={classNames({
                    'accent-icon': true,
                  })}>
                  <FontAwesomeIcon icon={ BrowserIcons[browser.node.name.toLowerCase()] } />
                </div>
              )}
          </div>
        </BrowserStyles>
      ))}
    </>
  )
}

export default function Browsers() {
  return (
    <BrowserGridStyles>
      <BrowsersContent/>
    </BrowserGridStyles>
  );
}
