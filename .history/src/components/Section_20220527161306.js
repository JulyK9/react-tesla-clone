import React from 'react'
import styled from 'styled-components'

function Section() {
  return (
    <Wrap>
      <ItemText>
        <h1>Model S</h1>
        <p>Order Online for Touchless Delivery</p>
      </ItemText>
      <ButtonGroup>
        <LeftButton>
          Custom Order
        </LeftButton>
        <RightButton>
          Existing Inventory
        </RightButton>
      </ButtonGroup>
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
`

const ItemText = styled.h1`
  padding-top: 15vh;
  text-align: center;
`

const ButtonGroup = styled.div`
  
`
const LeftButton = styled.div`
  background-color: rgba(59, 62, 66, 0.8);
  width: 260px;
  height: 40px;
  border-radius: 5px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

`

const RightButton = styled(LeftButton)`

`