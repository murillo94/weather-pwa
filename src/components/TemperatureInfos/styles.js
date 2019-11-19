import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  margin-top: 10px;

  @media (max-width: 560px) {
    display: block;
  }
`;

const Image = styled.div`
  margin-right: ${({ marginRight }) => marginRight}px;

  @media (max-width: 560px) {
    display: inline;
  }
`;

Image.defaultProps = {
  marginRight: 10
};

const Text = styled.div`
  font-size: ${({ sizeText }) => sizeText}px;
  color: ${({ colorText }) => colorText};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ marginRight }) => marginRight}px;

  @media (max-width: 560px) {
    text-align: center;
    width: 50%;
    margin: 0 auto;
    display: inline-block;
    &:first-child {
      margin-bottom: 10px;
    }
    &:nth-child(2) {
      margin-bottom: 10px;
    }
  }
`;

Text.defaultProps = {
  sizeText: 13,
  colorText: '#7c7c7c',
  marginRight: 13
};

export { Wrapper, Image, Text };
