import styled from 'styled-components';

const CityText = styled.div`
  font-size: 20px;
  font-weight: 600;
  max-width: 20vw;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  @media (max-width: 560px) {
    max-width: 35vw;
  }
`;

export default CityText;
