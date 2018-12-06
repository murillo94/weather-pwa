import styled from 'styled-components';

const TemperatureTextInfos = styled.div`
  font-size: ${props => props.sizeText}px;
  color: ${props => props.colorText};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${props => props.margin}px;
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
  margin: 13
};

export default TemperatureTextInfos;
