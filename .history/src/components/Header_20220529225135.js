import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Container>
      <a href="/">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="/">Model S</a>
        <a href="/">Model 3</a>
        <a href="/">Model X</a>
        <a href="/">Model Y</a>
      </Menu>
      <RightMenu>
        <a href="/">Shop</a>
        <a href="/">Tesla Account</a>
      </RightMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  /* padding: 0 20px */
  top: 0;
  left: 0;
  right: 0;
`

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  p {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px; 
    /* flex-wrap: nowrap; */
  }
`

const RightMenu = styled.div`
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px; 
    /* flex-wrap: nowrap; */
  }
`