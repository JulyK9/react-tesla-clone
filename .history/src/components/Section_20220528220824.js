import React from "react";
import styled, { keyframes } from "styled-components";

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
  return (
    <Wrap bgImage={backgroundImg}> 
      <TextGroup>
        <ItemText>{title}</ItemText>
        <Paragraph>{description}</Paragraph>
      </TextGroup>

      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          <RightButton>{rightBtnText}</RightButton>
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-position-y: 40%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${props => `url("/images/${props.bgImage}")`};
`;

const ItemText = styled.h1`
  padding-top: 15vh;
  text-align: center;
  margin-bottom: 5px;
`;

const Paragraph = styled.p`
  font-size: 18px;
`;

const TextGroup = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
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
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

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
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  overflow-x: hidden;
  animation: ${animatebounce} infinite 1.5s;
`;

const Buttons = styled.div``;
