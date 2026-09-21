export const siteConfig = {
  nav: {
    main: [
      { name: 'Home', href: '/' },
      { name: 'FAQ', href: '/faq' },
      { name: 'About', href: '/about' },
    ],
  },
  url: 'https://howtohardrefresh.com',
  name: 'howtohardrefresh.com',
  description:
    'If you need to bypass your web browser cache use these refresh shortcuts to hard refresh your browser and see the latest updates.',
  jsonld: {
    default: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'How to Hard Refresh',
      url: 'https://howtohardrefresh.com',
      sameAs: ['https://github.com/asdfdotdev/howtohardrefresh.com'],
    },
  },
};
