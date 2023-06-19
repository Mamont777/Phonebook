import styled, { keyframes } from 'styled-components';

const heartbeatAnimation = keyframes`
  0% {
    transform: scale(0.75);
  }
  20% {
    transform: scale(1);
  }
  40% {
    transform: scale(0.75);
  }
  60% {
    transform: scale(1);
  }
  80% {
    transform: scale(0.75);
  }
  100% {
    transform: scale(0.75);
  }
`;

export const Footer = styled.footer`
  margin: 40px 0 0 90px;
`;

export const Text = styled.small`
  display: flex;
  justify-content: center;
  align-items: center;
  color: $small-color;
`;

export const HeartIcon = styled.span`
  margin: 0 5px;
  animation: ${heartbeatAnimation} 2500ms infinite linear;
  cursor: default;
  color: red;
`;

export const Link = styled.a`
  text-decoration: none;
  color: currentColor;
  transition: color $transition-duration $timing-function;

  &:hover,
  &:focus {
    color: orangered;
    transition: color $transition-duration $timing-function;
  }
`;

export const Name = styled.span`
  margin-left: 5px;
`;
