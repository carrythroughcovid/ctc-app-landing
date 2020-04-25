import React from 'react'
import styled from 'styled-components'

import HeroHeader from '../shared/HeroHeader'
import { ButtonInternalLink as Button } from '../shared/Button'
import AppstoreLogo from '../../assets/download_appstore.svg'

const Alt = styled.div`
  color: ${({ theme }) => theme.colour.brand};
`

const AltSub = styled.div`
  color: ${({ theme }) => theme.colour.accent2};
`

const AppstoreContainer = styled.a`
  display: block;
  height: 1rem;
`

const Logo = styled(AppstoreLogo)`
  width: 196px;
  height: 65px;
`

const Title = () => (
  <>
    Carry, an app<Alt>supporting small business</Alt>through hardship
  </>
)

const Actions = () => (
  <>
    <Button to="/signup" secondary large fixedWidth>
      Sign up now
    </Button>
    <AppstoreContainer
      href="https://apps.apple.com/us/app/carry/id1507935945"
      target="_blank"
    >
      <Logo />
    </AppstoreContainer>
  </>
)

const AboutHeader = () => (
  <HeroHeader
    sub={() => <AltSub>Who we are</AltSub>}
    title={() => <Title />}
    actions={() => <Actions />}
    large
  />
)

export default AboutHeader
