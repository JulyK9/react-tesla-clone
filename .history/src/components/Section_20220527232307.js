import React from 'react';
import styled, { keyframes } from "styled-components";

function Section() {
  return (
    <Wrap>
      <ItemText>
        <h2>Model S</h2>
        <p>Order Online for Touchless Delivery</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>
            Custom Order
          </LeftButton>
          <RightButton>
            Existing Inventory
          </RightButton>
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  ) 
}

export default Section

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('/images/model-s.jpg');
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

`

const ItemText = styled.h2`
  padding-top: 15vh;
  text-align: center;
`

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
`
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  width: 260px;
  height: 40px;
  border-radius: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  text-transform: uppercase;
  font-size: 15px;
  cursor: pointer;
  margin: 8px;
`

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
`

const animatebounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }  
  40% {
    transform: translateY(5px);
  }
  60% {
    transform: translateY(3px);
  }
`

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  overflow-x: hidden;
  animation: ${animatebounce} infinite 1.5s;
`

const Buttons = styled.div`

`