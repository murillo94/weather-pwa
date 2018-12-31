import styled from 'styled-components';

const TemperatureImageInfos = styled.div`
  margin-right: ${({ margin }) => margin};
  @media (max-width: 560px) {
    display: inline;
  }
`;

TemperatureImageInfos.defaultProps = {
  margin: '10px'
};

export default TemperatureImageInfos;
