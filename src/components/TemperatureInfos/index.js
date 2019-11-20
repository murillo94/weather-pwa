import React from 'react';
import { TrendingDown, TrendingUp, Thermometer, Wind } from 'react-feather';
import { isMobile } from 'react-device-detect';
import ReactTooltip from 'react-tooltip';

import { Wrapper, Text, Image } from './styles';

const TemperatureInfos = ({
  sizeText,
  colorText,
  sizeIcon,
  colorIcon,
  tempMin,
  tempMax,
  humidity,
  wind
}) => (
  <Wrapper>
    <Text
      sizeText={sizeText}
      colorText={colorText}
      data-tip="Minimum temperature"
    >
      <Image>
        <TrendingDown color={colorIcon} size={sizeIcon} />
      </Image>
      {tempMin} °C
    </Text>
    <Text
      sizeText={sizeText}
      colorText={colorText}
      data-tip="Maximum temperature"
    >
      <Image>
        <TrendingUp color={colorIcon} size={sizeIcon} />
      </Image>
      {tempMax} °C
    </Text>
    <Text sizeText={sizeText} colorText={colorText} data-tip="Humidity">
      <Image marginRight={5}>
        <Thermometer color={colorIcon} size={sizeIcon} />
      </Image>
      {humidity}%
    </Text>
    <Text
      sizeText={sizeText}
      colorText={colorText}
      data-tip="Wind"
      marginRight={0}
    >
      <Image marginRight={8}>
        <Wind color={colorIcon} size={sizeIcon} />
      </Image>
      {wind}km/h
    </Text>
    {!isMobile && (
      <ReactTooltip
        className="tooltipCustom"
        effect="solid"
        globalEventOff="click"
      />
    )}
  </Wrapper>
);

export default TemperatureInfos;
