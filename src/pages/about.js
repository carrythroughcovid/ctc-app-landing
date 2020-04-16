import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Page from '../components/shared/Page'
import AboutHeader from '../components/about/AboutHeader'
import { ButtonInternalLink as Button } from '../components/shared/Button'
import { ButtonLink } from '../components/shared/Button'
import MissionImage from '../images/about-mission.png'
import WhoWeAreImage from '../images/about-who-we-are.png'
import ScreenshotBusiness from '../images/screenshot_business.png'
import ScreenshotCommunity from '../images/screenshot_community.png'
import MobileDown from '../images/mobile-down.png'
import MobileUp from '../images/mobile-up.png'
import media from '../utils/media'
import theme from '../styles/theme'
import SEO from '../components/shared/SEO'

const GenericSection = styled.div`
  background-color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  ${media.sm`
    flex: 1;
  `}
`

const ColumnRowDiv = styled.div`
  display: flex;
  flex-direction: column;

  ${media.sm`
    flex-direction: row;
  `}
`

const ColumnSection = styled.div`
  width: ${props => props.width};
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SectionTitle = styled.div`
  margin-bottom: 1em;
`

const LargeTitle = styled.h1`
  color: white;
`

const CenteredText = styled.div`
  text-align: center;
`

const SmallImage = styled.img`
  width: 60px;
  margin-bottom: 1rem;
`

const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.color};
  justify-content: space-around;
  flex-direction: column;
  height: 400px;
  ${media.md`
    flex-direction: row;
  `}
`

const NormalImage = styled.img`
  width: 100%;
  padding-top: 2rem;
`

const About = () => {
  return (
    <>
      <SEO
        title="About"
        description="Information about the Carry Through COVID project"
      />
      <Page noMargin customHeader={() => <AboutHeader />}>
        <ColumnRowDiv>
          <GenericSection color={theme.colour.violet}>
            <ColumnSection width="300px">
              <SmallImage src={MissionImage}></SmallImage>
              <SectionTitle>CARRY FOR BUSINESSES</SectionTitle>
              <CenteredText>
                Businesses who have been affected by shutdowns can post updates
                to trading, so the community can stay informed.
              </CenteredText>
              <NormalImage src={ScreenshotBusiness} />
            </ColumnSection>
          </GenericSection>
          <GenericSection color="#eef0f8">
            <ColumnSection width="300px">
              <SmallImage src={WhoWeAreImage}></SmallImage>
              <SectionTitle>CARRY FOR COMMUNITY</SectionTitle>
              <CenteredText>
                Community supporters can browse through the different business,
                and learn how they can support small businesses.
              </CenteredText>
              <NormalImage src={ScreenshotCommunity} />
            </ColumnSection>
          </GenericSection>
        </ColumnRowDiv>
        <SectionContainer color={theme.colour.red}>
          <LargeTitle>Got questions?</LargeTitle>
          <ButtonLink href="mailto:contact@carrythroughcovid.com">
            Contact our support team
          </ButtonLink>
        </SectionContainer>
      </Page>
    </>
  )
}

export const query = graphql`
  query {
    allBusinesses {
      edges {
        node {
          id
        }
      }
    }
  }
`

export default About
