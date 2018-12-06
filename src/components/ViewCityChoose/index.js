import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import DescriptionText from './DescriptionText';
import TemperatureText from './TemperatureText';
import CityText from './CityText';
import TemperatureInfos from '../TemperatureInfos/index';

const ViewCityChoose = props => (
  <Wrapper>
    <DescriptionText>{props.description}</DescriptionText>
    <CityText>{props.name}</CityText>
    <TemperatureText>{props.temp} °C</TemperatureText>
    <TemperatureInfos
      tempMin={props.tempMin}
      tempMax={props.tempMax}
      humidity={props.humidity}
      wind={props.wind}
      sizeIcon={18}
      sizeText={15}
      colorIcon="#c9c9c9"
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
