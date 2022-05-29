import React from 'react'
import styled from 'styled-components'

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
      </Buttons>
      <DownArrow src="/images/down-arrow.svg" />
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
`

const RightButton = styled(LeftButton)`

`

const DownArrow = styled.img`
  margin-top: 20px;
  height: 30px;
`

const Buttons = styled.div`

`