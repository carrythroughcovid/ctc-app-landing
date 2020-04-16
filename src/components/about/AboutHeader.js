import React from 'react'
import styled from 'styled-components'

import HeroHeader from '../shared/HeroHeader'
import { ButtonInternalLink as Button } from '../shared/Button'

const Alt = styled.div`
  color: ${({ theme }) => theme.colour.brand};
`

const AltSub = styled.div`
  color: ${({ theme }) => theme.colour.accent2};
`

const Title = () => (
  <>
    A platform<Alt>supporting small business</Alt>through hardship
  </>
)

const Actions = () => (
  <>
    <Button to="/signup" secondary large fixedWidth>
      Sign up now
    </Button>
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
