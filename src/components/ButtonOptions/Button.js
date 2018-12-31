import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  border: none;
  box-shadow: none;
  outline: 0;
  margin-right: ${({ margin }) => margin};
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
  margin: '5px'
};

export default Button;
