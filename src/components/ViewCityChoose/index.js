import React from 'react';

import TemperatureInfos from '../TemperatureInfos';

import { Wrapper, Description, City, Temperature } from './styles';

const ViewCityChoose = ({
  description,
  name,
  temp,
  tempMin,
  tempMax,
  humidity,
  wind
}) => (
  <Wrapper>
    <Description>{description}</Description>
    <City>{name}</City>
    <Temperature>{temp} °C</Temperature>
    <TemperatureInfos
      sizeText={15}
      colorText="#ffffff"
      sizeIcon={18}
      colorIcon="#b7b7b7"
      tempMin={tempMin}
      tempMax={tempMax}
      humidity={humidity}
      wind={wind}
    />
  </Wrapper>
);

export default ViewCityChoose;
