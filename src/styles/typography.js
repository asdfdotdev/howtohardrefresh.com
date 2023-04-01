import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/NotoSansLao-Regular.woff2';

const Typography = createGlobalStyle`
  @font-face {
    font-family: "Noto Sans Lao";
    src: url(${font});
  }

  html {
    font-family: "Noto Sans Lao", serif;
    color: var(--color-black);
  }
`;

export default Typography;
