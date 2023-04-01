import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-white: #ffffff;
    --color-black: #010100;
    --color-grey: #f3f7f6;
    --color-blue: #74f0ed;
    --color-red: #ea445a;
    --color-primary: var(--color-black);
    --color-secondary: var(--color-red);
    --color-accent: var(--color-blue);
    --color-background: var(--color-grey);
    --layout-padding-y: 60px;
    --layout-padding-x: 40px;
    --height-nav: 50px;
    --height-footer: 100px;
  }

  html, body {
    padding: 0;
    margin: 0;
    line-height: 1.5rem;
  }

  a {
    transition: all 0.4s ease;
    color: var(--navy);

    &:hover {
      color: var(--color-secondary);
      text-decoration: none;
    }
  }

  ul {
    li {
      margin-bottom: 8px;
    }
  }

  p {
    line-height: 1.35rem;
  }

  kbd {
    background-color: #eee;
    border-radius: 3px;
    border: 1px solid #b4b4b4;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 2px 0 0 rgba(255, 255, 255, 0.7) inset;
    color: #333;
    display: inline-block;
    font-size: 0.85rem;
    font-weight: 700;
    line-height: 1;
    padding: 2px 4px;
    white-space: nowrap;
    margin: 0 8px;
  }
`;

export default GlobalStyles;
