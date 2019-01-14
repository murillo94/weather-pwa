import styled from 'styled-components';

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

export default Button;
