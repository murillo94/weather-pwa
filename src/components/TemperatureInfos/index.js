import React from 'react';
import PropTypes from 'prop-types';
import { TrendingDown, TrendingUp, Thermometer, Wind } from 'react-feather';
import { isMobile } from 'react-device-detect';
import ReactTooltip from 'react-tooltip';

import {
  SectionTemperatureInfos,
  TemperatureTextInfos,
  TemperatureImageInfos
} from './styles';

const TemperatureInfos = ({
  sizeText,
  colorText,
  colorIcon,
  sizeIcon,
  tempMin,
  tempMax,
  humidity,
  wind
}) => (
  <SectionTemperatureInfos>
    <TemperatureTextInfos
      sizeText={sizeText}
      colorText={colorText}
      data-tip="Minimum temperature"
    >
      <TemperatureImageInfos>
        <TrendingDown color={colorIcon} size={sizeIcon} />
      </TemperatureImageInfos>
      {tempMin} °C
    </TemperatureTextInfos>
    <TemperatureTextInfos
      sizeText={sizeText}
      colorText={colorText}
      data-tip="Maximum temperature"
    >
      <TemperatureImageInfos>
        <TrendingUp color={colorIcon} size={sizeIcon} />
      </TemperatureImageInfos>
      {tempMax} °C
    </TemperatureTextInfos>
    <TemperatureTextInfos
      sizeText={sizeText}
      colorText={colorText}
      data-tip="Humidity"
    >
      <TemperatureImageInfos marginRight={5}>
        <Thermometer color={colorIcon} size={sizeIcon} />
      </TemperatureImageInfos>
      {humidity}%
    </TemperatureTextInfos>
    <TemperatureTextInfos
      sizeText={sizeText}
      colorText={colorText}
      data-tip="Wind"
      marginRight={0}
    >
      <TemperatureImageInfos marginRight={8}>
        <Wind color={colorIcon} size={sizeIcon} />
      </TemperatureImageInfos>
      {wind}km/h
    </TemperatureTextInfos>
    {!isMobile && (
      <ReactTooltip
        className="tooltipCustom"
        effect="solid"
        globalEventOff="click"
      />
    )}
  </SectionTemperatureInfos>
);

TemperatureInfos.propTypes = {
  tempMin: PropTypes.number,
  tempMax: PropTypes.number,
  humidity: PropTypes.number,
  wind: PropTypes.number,
  sizeIcon: PropTypes.number,
  sizeText: PropTypes.number,
  colorIcon: PropTypes.string,
  colorText: PropTypes.string
};

export default TemperatureInfos;
