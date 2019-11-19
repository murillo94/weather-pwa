import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
`;

const Description = styled.p`
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: bold;
  margin: 0 0 ${({ marginBottom }) => marginBottom}px;
  text-align: center;
  padding: 0 40px;

  &:first-letter {
    text-transform: capitalize;
  }
`;

Description.defaultProps = {
  fontSize: 23,
  marginBottom: 25
};

const Button = styled.button`
  color: #ffffff;
  font-size: 15px;
  background-color: #cacacd;
  border-radius: 99px;
  border: none;
  box-shadow: none;
  padding: ${({ padding }) => padding};
  cursor: pointer;
  transition: background-color 0.2s ease-in;
  will-change: auto;

  &:hover {
    background-color: #b2b2b2;
  }
`;

Button.defaultProps = {
  padding: '10px 30px'
};

export { Wrapper, Button, Description };
