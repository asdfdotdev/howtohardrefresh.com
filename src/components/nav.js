import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './logo'
import { device } from '../scripts/devices'

const NavStyles = styled.nav`
  background-color: var(--color-primary);
  padding: 0 var(--layout-padding-x) 0 calc(var(--layout-padding-x) - 5px);
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: var(--height-nav);
  border-top: solid 5px var(--color-accent);
  border-right: solid 5px var(--color-accent);

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
    padding: 0;

    li {
      margin: 0;
      padding: 0;
      margin-right: 20px;

      a:hover {
        color: var(--color-secondary);
      }

      &:last-child {
        margin-right: 0;

        a:hover {
          color: var(--color-accent);
        }
      }
    }
  }

  a {
    text-decoration: none;
    color: var(--color-white);
  }

  @media ${device.tablet} {
    flex-direction: column;
    padding: 16px 0;
  }
`

export default function Nav() {
  return (
    <NavStyles>
      <Link to="/" className="logo">
        <Logo/>
      </Link>

      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a href="https://github.com/asdfdotdev/How-To-Hard-Refresh" target="_blank" rel="noopener noreferrer">
            Code
          </a>
        </li>
      </ul>
    </NavStyles>
  );
}
