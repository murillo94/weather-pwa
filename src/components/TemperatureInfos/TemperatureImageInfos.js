import styled from 'styled-components';

const TemperatureImageInfos = styled.div`
  margin-right: ${props => props.margin}px;
  @media (max-width: 560px) {
    display: inline;
  }
`;

TemperatureImageInfos.defaultProps = {
  margin: 10
};

export default TemperatureImageInfos;
