import styled from 'styled-components';

const TemperatureImageInfos = styled.div`
  margin-right: ${({ marginRight }) => marginRight}px;
  @media (max-width: 560px) {
    display: inline;
  }
`;

TemperatureImageInfos.defaultProps = {
  marginRight: 10
};

export default TemperatureImageInfos;
