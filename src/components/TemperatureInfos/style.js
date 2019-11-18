import styled from 'styled-components';

const SectionTemperatureInfos = styled.div`
  display: flex;
  margin-top: 10px;
  @media (max-width: 560px) {
    display: block;
  }
`;

const TemperatureImageInfos = styled.div`
  margin-right: ${({ marginRight }) => marginRight}px;
  @media (max-width: 560px) {
    display: inline;
  }
`;

TemperatureImageInfos.defaultProps = {
  marginRight: 10
};

const TemperatureTextInfos = styled.div`
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

TemperatureTextInfos.defaultProps = {
  sizeText: 13,
  colorText: '#7c7c7c',
  marginRight: 13
};

export { SectionTemperatureInfos, TemperatureImageInfos, TemperatureTextInfos };
