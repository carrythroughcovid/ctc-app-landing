import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Page from "../components/Page"
import Container from "../components/Container"

// import media from "../utils/media"

import mockListing from "../../mockContent/listing1"

const BusinessImage = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: cover;
  object-position: center;
`

const BusinessLogo = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  object-fit: cover;
  object-position: center;
`

const BusinessDetails = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 2.25rem;
  display: flex;
  align-items: center;
`

const DetailsWrapper = styled.div`
  padding-left: 1rem;
`
const BusinessName = styled.h1`
  font-size: 1rem;
  font-weight: normal;
  margin: 0;
  padding-bottom: 0.25rem;
`

const BusinessLocation = styled.div`
  font-size: 0.875rem;
`

const ButtonLink = styled(Link)`
  width: 100%;
  display: block;
  text-align: center;
  background-color: ${props => props.theme.colour.primary};
  color: white;
  padding: 1rem;
  border-radius: 0.25rem;

  &:hover {
    text-decoration: none;
    box-shadow: rgba(0, 0, 0, 0.125) 0px 0px 0px 20rem inset;
  }

  &:active {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 0px 20rem inset;
  }
`

const DetailBlock = styled.div`
  padding-bottom: 1.5rem;
`

const BlockContent = styled.div`
  margin-top: 0.875rem;
  padding: 0.75rem 0.625rem;
  background-color: #ececec;
`

const DetailTitle = styled.div`
  padding-top: 1rem;
  padding-bottom: 0.875rem;
  font-weight: bold;
`
const OfferingItem = styled.div`
  text-transform: capitalize;
`

const IndexPage = () => {
  // TODO hook up real data store
  const {
    image,
    businessLogo,
    businessType,
    businessName,
    suburb,
    details,
    about,
    offerings,
  } = mockListing

  return (
    <Page>
      <Container fullWidth>
        <BusinessImage src={image} />
      </Container>

      <Container>
        <BusinessDetails>
          <BusinessLogo src={businessLogo} />
          <DetailsWrapper>
            <BusinessName>{businessName}</BusinessName>
            <BusinessLocation>
              {businessType}
              <span> / {suburb}</span>
            </BusinessLocation>
          </DetailsWrapper>
        </BusinessDetails>

        <ButtonLink to="/">Visit Website</ButtonLink>

        <DetailTitle>Products/Service</DetailTitle>
        <DetailBlock>
          Current offering
          <BlockContent>
            {offerings.map(offering => (
              // TODO: add icons and map them to offering names
              <OfferingItem>[x] {offering}</OfferingItem>
            ))}
          </BlockContent>
        </DetailBlock>
        <DetailBlock>
          Details
          {/* TODO: Make sure new lines/tabs display corectly */}
          <BlockContent>{details}</BlockContent>
        </DetailBlock>

        <DetailTitle>About</DetailTitle>
        <DetailBlock>
          <BlockContent>{about}</BlockContent>
        </DetailBlock>
      </Container>
    </Page>
  )
}

export default IndexPage
