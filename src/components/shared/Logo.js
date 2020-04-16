import React from 'react'
import styled from 'styled-components'

import LogoSmall from '../../assets/logoSmall.svg'

const StyledLogo = styled.div`
  font-size: 28px;
  line-height: 1;
  color: black;
`

const Logo = () => {
  return <StyledLogo><LogoSmall /></StyledLogo>
}

export default Logo
