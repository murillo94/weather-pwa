import React from 'react';
import PropTypes from 'prop-types';

import TemperatureInfos from '../TemperatureInfos';

import { Wrapper, DescriptionText, TemperatureText, CityText } from './style';

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
    <DescriptionText>{description}</DescriptionText>
    <CityText>{name}</CityText>
    <TemperatureText>{temp} °C</TemperatureText>
    <TemperatureInfos
      tempMin={tempMin}
      tempMax={tempMax}
      humidity={humidity}
      wind={wind}
      sizeIcon={18}
      sizeText={15}
      colorIcon="#b7b7b7"
      colorText="#fff"
    />
  </Wrapper>
);

ViewCityChoose.propTypes = {
  description: PropTypes.string,
  temp: PropTypes.number,
  name: PropTypes.string,
  tempMin: PropTypes.number,
  tempMax: PropTypes.number,
  humidity: PropTypes.number,
  wind: PropTypes.number
};

export default ViewCityChoose;
