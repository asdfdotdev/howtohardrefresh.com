import React from 'react';
import Layout from '../components/layout'
import Browsers from '../components/browsers'
import { Seo } from "../components/seo"

export default function HomePage() {
  return (
    <Layout>
      <Browsers/>
    </Layout>
  );
}

export const Head = () => (
  <Seo />
)
