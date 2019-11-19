import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5.5em;
  padding: 0 1em;
  border-top: 1px solid #eee;

  &:first-child {
    border-top: none;
  }

  @media (max-width: 560px) {
    height: 6.5em;
  }
`;

const ContainerLocation = styled.div`
  display: block;
`;

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

const CountryText = styled.div`
  color: #333;
  font-size: 14px;
  font-weight: 400;
  margin-top: 3px;
`;

const ContainerTemperature = styled.div`
  display: block;
`;

const SectionTemperature = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: -10px;
`;

const SectionTemperatureMobile = styled.div`
  @media (max-width: 560px) {
    display: none;
  }
`;

const TemperatureText = styled.div`
  font-size: 25px;
  font-weight: 600;
  display: inline-block;
  margin-right: 20px;
`;

const TemperatureImage = styled.div`
  margin-right: 10px;
  display: inline-block;
`;

export {
  Wrapper,
  ContainerLocation,
  CityText,
  CountryText,
  ContainerTemperature,
  SectionTemperature,
  SectionTemperatureMobile,
  TemperatureText,
  TemperatureImage
};
