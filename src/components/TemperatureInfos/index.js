import React from 'react';
import PropTypes from 'prop-types';

import SectionTemperatureInfos from './SectionTemperatureInfos';
import TemperatureImageInfos from './TemperatureImageInfos';
import TemperatureTextInfos from './TemperatureTextInfos';

import ReactTooltip from 'react-tooltip';
import { Search, RefreshCw, Sun, TrendingDown, TrendingUp, Thermometer, Wind } from 'react-feather';

const TemperatureInfos = (props) => (
	<SectionTemperatureInfos>
		<TemperatureTextInfos sizeText={props.sizeText} colorText={props.colorText} data-tip="Minimum temperature">
			<TemperatureImageInfos>
				<TrendingDown color={props.colorIcon} size={props.sizeIcon}/>
			</TemperatureImageInfos>
			{props.tempMin} °C
		</TemperatureTextInfos>
		<TemperatureTextInfos sizeText={props.sizeText} colorText={props.colorText} data-tip="Maximum temperature">
			<TemperatureImageInfos>
				<TrendingUp color={props.colorIcon} size={props.sizeIcon}/>
			</TemperatureImageInfos>
			{props.tempMax} °C
		</TemperatureTextInfos>
		<TemperatureTextInfos sizeText={props.sizeText} colorText={props.colorText} data-tip="Humidity">
			<TemperatureImageInfos margin={5}>
				<Thermometer color={props.colorIcon} size={props.sizeIcon}/>
			</TemperatureImageInfos>
			{props.humidity}%
		</TemperatureTextInfos>
		<TemperatureTextInfos sizeText={props.sizeText} colorText={props.colorText} data-tip="Wind" margin={0}>
			<TemperatureImageInfos margin={8}>
				<Wind color={props.colorIcon} size={props.sizeIcon}/>
			</TemperatureImageInfos>
			{props.wind}km/h
		</TemperatureTextInfos>
		<ReactTooltip effect="solid" globalEventOff='click'/>
	</SectionTemperatureInfos>
)

TemperatureInfos.propTypes = {
  tempMin: PropTypes.number,
  tempMax: PropTypes.number,
  humidity: PropTypes.number,
  wind: PropTypes.number,
  sizeIcon: PropTypes.number,
  sizeText: PropTypes.number,
  colorIcon: PropTypes.string,
  colorText: PropTypes.string,
};

export default TemperatureInfos;