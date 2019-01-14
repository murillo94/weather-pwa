import styled from 'styled-components';

const ContainerTemperature = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding: 15px 20px 45px;
  overflow-x: hidden;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export default ContainerTemperature;
