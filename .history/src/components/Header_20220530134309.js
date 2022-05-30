import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Opacity } from '@material-ui/icons';

function Header() {

  const [burgerState, setburgerState] = useState(false);

  return (
    <Container>
      <Logo>
        <a href="/">
          <img src="/images/logo.svg" alt="" />
        </a>
      </Logo>
      <Menu>
        <a href="/">Model S</a>
        <a href="/">Model 3</a>
        <a href="/">Model X</a>
        <a href="/">Model Y</a>
      </Menu>
      <RightMenu>
        <a href="/">Shop</a>
        <a href="/">Tesla Account</a>
        <CustomMenu onClick={() => setburgerState(!false)} />
      </RightMenu>
      <BurgerNav show={burgerState}>
        <CloseWrapper>
          <CustomClose fontSize="small" onClick={() => setburgerState(false)} />
        </CloseWrapper>
        <li><a href="/">Existing inventory</a></li>
        <li><a href="/">Used inventory</a></li>
        <li><a href="/">Trade-in</a></li>
        <li><a href="/">Cybertruck</a></li>
        <li><a href="/">Roadster</a></li>
        <li><a href="/">Existing inventory</a></li>
        <li><a href="/">Existing inventory</a></li>
        <li><a href="/">Existing inventory</a></li>
        <li><a href="/">Existing inventory</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
z-index: 1;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 0 20px */
  top: 0;
  left: 0;
  right: 0;
`

const Logo = styled.div`
  margin-left: 20px;
`

const Menu = styled.div`
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-left: 10vw;
  flex-wrap: nowrap;

  a {
    margin: 20px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 5px 12px; 
    /* flex-wrap: nowrap; */
    &:hover {
      background-color: #afc5dc;
      opacity: 0.8;
      padding: 5px 12px;
      border-radius: 10px;
      transition: all ease-in-out 0.5s;
    }

  @media(max-width: 768px) {
    display: none;
  }

  }
`

const RightMenu = styled.div`
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  margin-right: 10px;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px; 
    /* flex-wrap: nowrap; */
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 280px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  opacity: ${props => props.show ? 'opacity: 0.2' : 'opacity: 1' };
  transition: transform ease-in-out 0.2s;
  li {
    font-size: 0.7rem;
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    a {
      font-weight: 600;
    }
  }
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`