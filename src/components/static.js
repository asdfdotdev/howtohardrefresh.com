import React from 'react';
import styled from 'styled-components';
import Nav from './nav';
import Footer from './footer';
import GlobalStyles from '../styles/global';
import Typography from '../styles/typography';
import { device } from '../scripts/devices'
import { Seo } from "../components/seo"

const PageStyles = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentStyles = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: var(--layout-padding-y) var(--layout-padding-x);

  h2 {
    margin-top: 2rem;
  }

  ul {
    columns: 2;
  }

  @media ${device.tablet} {
    padding: var(--layout-padding-y) calc(var(--layout-padding-x) * 0.5);
  }
`;

export default function Static({ children }) {
  return (
    <>
      <GlobalStyles/>
      <Typography/>
      <PageStyles>
        <Nav/>
        <ContentStyles>
          { children }
        </ContentStyles>
        <Footer/>
      </PageStyles>
    </>
  );
}

export const Head = () => (
  <Seo />
)
