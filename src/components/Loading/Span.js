import styled from 'styled-components';

const Span = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #999999;
  margin: 35px 5px;
  opacity: 0;
  &:nth-child(1) {
    animation: opacityChange 1s ease-in-out infinite;
  }
  &:nth-child(2) {
    animation: opacityChange 0.9s ease-in-out infinite;
  }
  @keyframes opacityChange {
    0%,
    100% {
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
  }
`;

export default Span;
