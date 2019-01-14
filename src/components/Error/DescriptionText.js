import styled from 'styled-components';

const DescriptionText = styled.p`
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: bold;
  margin: 0 0 ${({ marginBottom }) => marginBottom}px;
  text-align: center;
  padding: 0 40px;
  &:first-letter {
    text-transform: capitalize;
  }
`;

DescriptionText.defaultProps = {
  fontSize: 23,
  marginBottom: 25
};

export default DescriptionText;
