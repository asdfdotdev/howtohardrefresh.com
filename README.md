# howtohardrefresh.com

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Biome](https://img.shields.io/badge/Biome-%2360A5FA.svg?style=for-the-badge&logo=biome&logoColor=white)](https://biomejs.dev)

More than F5.

[See it in action.](https://howtohardrefresh.com)

## About

howtohardrefresh.com is a static site built with Next.js. This project includes a .lando.yml file for local development convenience, but Lando is optional, you can use Node directly on your device if you prefer.

## Use

### Prerequisites

Recommended, this is what Lando will use.

- Node.js v24+
- npm v11+
- Lando 3.26+ (optional)

### Commands

Lando tooling is available for node, npm, and npx. If you opt to use Lando adjust the commands below by prepending "lando", i.e. `$ npm run build` becomes `$ lando npm run build`

```
$ npm run setup             # Clean install of all dependencies
$ npm run setup:uaparser    # Clean install of all dependencies, installs optional @ua-parser-js/pro-business with --no-save
$ npm run dev               # Development build
$ npm run build             # Production build static export, outputs to /out
$ npm run lint              # Check project code with Biome
$ npm run lint:fix          # Apply safe fixes from Biome checks
$ npm run lint:fix:unsafe   # Apply all fixes from Biome checks
```

> Lando Note: After building the container and installing dependencies for the first time it is generally easiest to just restart lando.

### Local Development URLs

Lando will serve the project at the following URLs.

Dev Instance

- http://dev.howtohardrefresh-next.lndo.site/
- http://localhost:3000

"Prod" Instance (Output to /out directory)

- http://static.howtohardrefresh-next.lndo.site/
- http://localhost:4000

## UAParser.js Dependency

howtohardrefresh.com includes optional functionality that attempts to identify the user's browser and operating system using UAParser.js to preset these values on the initial page load. This functionality is optional.

howtohardrefresh.com has licensed the pro version of UAParser, which is not included with this project, and the optional functionality is disabled when the module is unavailable. 

When using this project you have three options:

- **If you have a pro license:** You can use it.
- **If you don't have a pro license:** You can purchase one at [uaparser.dev](https://uaparser.dev).
- **If you don't want the feature / don't have a license:** You can skip downloading it and run the project without it.

```bash
# Setup the Project WITHOUT UAParser
$ npm run setup

# Setup the Project with UAParser
$ npm run setup:uaparser
```
