import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const TitlePart = styled.span`
  color: ${({ $light }) => ($light ? '#6ab0ff' : '#002b5b')};
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #666;
  text-align: center;
  margin: 0 20px 40px;
  max-width: 600px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  gap: 5px;
  position: relative;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }

  &:hover .tooltip {
    opacity: 1;
    visibility: visible;
  }
`;

const LeftButton = styled(Button)`
  background: linear-gradient(135deg, #6ab0ff, #007bff);
  color: white;
`;

const RightButton = styled(Button)`
  background-color: #fff;
  color: #333;
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: 110%;
  left: 50%;
  transform: translateX(-50%);
  color: #333;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 10;
`;

const Chatapp = ({ navigate }) => {
  return (
    <Container>
      <Title>
        <TitlePart>SyncChat: Your All-in-One</TitlePart>{' '}
        <TitlePart $light>Chat Solution</TitlePart>
      </Title>
      <Subtitle>
        Chat with friends, family, and colleagues just like WhatsApp! Or, try our built-in AI chatbot for intelligent conversations whenever you need.
      </Subtitle>
      <ButtonContainer>
        <LeftButton onClick={() => navigate('/login')}>
          Start Chatting Now
          <Tooltip className="tooltip">Scroll down to continue</Tooltip>
        </LeftButton>
        <RightButton>
          AI Chatbot Integrated
          <Tooltip className="tooltip">Scroll down to continue</Tooltip>
        </RightButton>
      </ButtonContainer>
    </Container>
  );
};

export default Chatapp;
