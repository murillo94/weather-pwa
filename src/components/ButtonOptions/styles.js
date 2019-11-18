import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
`;

const Loading = styled.div`
  border: 3px solid transparent;
  border-radius: 50%;
  border-top: 3px solid #fff;
  width: 15px;
  height: 15px;
  margin: 2px 8px 0 10px;
  animation: spin 0.5s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  box-shadow: none;
  outline: 0;
  margin-right: ${({ marginRight }) => marginRight}px;
  padding: 3px 9px;
  transition: 0.2s ease-in all;
  border-radius: 99px;
  cursor: pointer;
  ${({ isMobile }) =>
    !isMobile &&
    `
  &:hover {
    box-shadow: rgba(5, 15, 44, 0.1) 0 7px 20px -4px;
  }`}
`;

Button.defaultProps = {
  marginRight: 5
};

export { Wrapper, Button, Loading };
