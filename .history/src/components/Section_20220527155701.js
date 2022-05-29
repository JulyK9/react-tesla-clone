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
  background-image: url('/images/model-s.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const ItemText = styled.h1`
  padding-top: 15vh;
  text-align: center;
`

const ButtonGroup = styled.div`
  
`
const LeftButton = styled.div`

`

const RightButton = styled(LeftButton)`

`