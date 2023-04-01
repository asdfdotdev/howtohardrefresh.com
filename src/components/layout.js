import React from 'react';
import styled from 'styled-components';
import Nav from './nav';
import Footer from './footer';
import GlobalStyles from '../styles/global';
import Typography from '../styles/typography';
import { device } from '../scripts/devices'

const PageStyles = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentStyles = styled.div`
  padding: var(--layout-padding-y) var(--layout-padding-x);

  @media ${device.tablet} {
    padding: var(--layout-padding-y) calc(var(--layout-padding-x) * 0.5);
  }
`;

export default function Layout({ children }) {
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
