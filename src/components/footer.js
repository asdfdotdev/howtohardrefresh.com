import React from 'react';
import styled from 'styled-components';
import { device } from '../scripts/devices'

const FooterStyles = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: var(--color-white);
  background-color: var(--color-primary);
  height: var(--height-footer);
  padding: 0 var(--layout-padding-x) 0 calc(var(--layout-padding-x) - 5px);
  border-left: solid 5px var(--color-accent);
  border-bottom: solid 5px var(--color-accent);

  @media ${device.tablet} {
    padding: 0 calc(var(--layout-padding-x) * 0.5) 0 calc((var(--layout-padding-x) * 0.5) - 5px);
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

const FriendStyles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  a {
    margin-top: 3px;

    svg {
      width: 50px;
      height: auto;
      margin-left: 8px;

      path {
        fill: var(--color-white);
      }

      polygon {
        transition: all 0.4s ease;
      }
    }

    &:hover {
      svg {
        polygon {
          fill: var(--color-secondary)
        }
      }
    }
  }
`;

const CopyrightStyles = styled.div`
  span {
    transform: scaleX(-1);
    display: inline-block;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <FriendStyles>
        From your friends at
        <a href="https://asdf.dev" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="594" height="205" viewBox="0 0 594 205">
            <g fill="none" transform="translate(.5 .25)">
              <path fill="#000"
                    d="M0,93.25 C0,68.5 20.75,50.5 50,50.5 C66.5,50.5 79,56.75 84.25,62.25 L84.25,46.25 C84.25,28 72,17.5 52.75,17.5 C36.75,17.5 23.75,23.25 14.5,28.75 L6.5,14.25 C15.25,8.75 32.5,0 54.5,0 C90,0 104,19.75 104,47.5 L104,133.25 L87,133.25 L84.75,122.25 C78,130 67,136.5 49.5,136.5 C21,136.5 0,118.5 0,93.25 Z M20,93 C20,108 32.75,120 52.75,120 C71.75,120 85,108.75 85,93 C85,76.75 72,66.25 52.5,66.25 C32.75,66.25 20,77.75 20,93 Z"
                    transform="translate(0 47.5)"></path>
              <path fill="#000"
                    d="M126.25,156.25 L140,147.25 C145.5,157.5 154.75,167.25 172.5,167.25 C185.5,167.25 196.5,159.75 196.5,146.5 C196.5,116.5 131.25,126.75 131.25,82.75 C131.25,60.75 149.5,47.5 173,47.5 C197.25,47.5 209.75,62.75 213.25,72.5 L198.75,80.75 C195.25,73.75 188.5,64 171.75,64 C159.75,64 150.25,70.75 150.25,82 C150.25,111.25 215.75,100.25 215.75,145.5 C215.75,168.5 196.75,184 171.5,184 C144.25,184 132,168.5 126.25,156.25 Z"></path>
              <path fill="#000"
                    d="M127.75,0 L127.75,180.75 L108.5,180.75 L108.5,160.25 C105.25,165 91.75,184 63.5,184 C26.25,184 0,155.75 0,116 C0,76 25,47.5 62,47.5 C89,47.5 104,65 107.75,71.75 L107.75,0 L127.75,0 Z M108.5,116.25 C108.5,84 88.5,65.5 64.25,65.5 C38.75,65.5 20.25,86.5 20.25,116.25 C20.25,146.5 39.5,166.25 64.5,166.25 C97.8016516,166.25 108.5,149.551652 108.5,116.25 Z"
                    transform="translate(231.5)"></path>
              <path fill="#000"
                    d="M397.25,180.75 L397.25,67.5 L382.75,67.5 L382.75,50.75 L397.25,50.75 L397.25,44 C397.25,11.25 417,0.75 438,0.75 C442.25,0.75 446.25,1.25 446.25,1.25 L446.25,18.5 C446.25,18.5 443,18 440,18 C425.25,18 417.25,26 417.25,44 L417.25,50.75 L445,50.75 L445,67.5 L417.25,67.5 L417.25,180.75 L397.25,180.75 Z"></path>
              <polygon fill="#ffffff" points="458 188 593 188 593 204.5 458 204.5" className="cursor"></polygon>
            </g>
          </svg>
        </a>
      </FriendStyles>
      <CopyrightStyles>
        Copyleft <span>&copy;</span> { new Date().getFullYear() }
      </CopyrightStyles>
    </FooterStyles>
  );
}
