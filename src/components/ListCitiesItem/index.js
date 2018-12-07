import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import ContainerLocation from './ContainerLocation';
import CityText from './CityText';
import CountryText from './CountryText';
import ContainerTemperature from './ContainerTemperature';
import SectionTemperature from './SectionTemperature';
import SectionTemperatureMobile from './SectionTemperatureMobile';
import TemperatureText from './TemperatureText';
import TemperatureImage from './TemperatureImage';
import TemperatureInfos from '../TemperatureInfos/index';
import Loading from '../Loading/index';
import Error from '../Error/index';

import {
  CloudLightning,
  CloudDrizzle,
  CloudRain,
  CloudSnow,
  Sun,
  Cloud
} from 'react-feather';

const key = 'b5e7ada3bd028f6482908a861c2306d1';

export default class ListCitiesItem extends Component {
  state = {
    err: null,
    isLoading: true
  };

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  async getData() {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          this.props.nameCity
        }&appid=${key}&units=metric&lang=en`
      );
      const data = await res.json();
      if (data.cod === 200) {
        await this.setStateAsync({
          description: data.weather[0].description,
          condition: data.weather[0].condition,
          icon: data.weather[0].icon,
          name: data.name,
          country: data.sys.country,
          temp: parseInt(data.main.temp),
          temp_min: data.main.temp_min,
          temp_max: data.main.temp_max,
          humidity: data.main.humidity,
          wind: parseFloat(data.wind.speed.toFixed(1)),
          err: null,
          isLoading: false
        });
      } else {
        this.setState({
          err: data.message,
          isLoading: false
        });
      }
    } catch (err) {
      this.setState({
        err: 'Something went wrong, please try again later.',
        isLoading: false
      });
    }
  }

  getImageTemperature = icon => {
    icon = icon.replace(/\D/g, '');

    const options = {
      '11': <CloudLightning color="#c1c1c1" size={30} />,
      '09': <CloudDrizzle color="#c1c1c1" size={30} />,
      '10': <CloudRain color="#c1c1c1" size={30} />,
      '13': <CloudSnow color="#c1c1c1" size={30} />,
      '01': <Sun color="#c1c1c1" size={30} />
    };

    return options[icon] || <Cloud color="#c1c1c1" size={30} />;
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const {
      err,
      isLoading,
      name,
      country,
      temp,
      icon,
      temp_min,
      temp_max,
      humidity,
      wind
    } = this.state;

    if (err) {
      return (
        <Wrapper>
          <Error
            message={err}
            textBtn="Reload"
            type="list"
            back={this.actionBack}
          />
        </Wrapper>
      );
    }

    if (isLoading) {
      return (
        <Wrapper>
          <Loading />
        </Wrapper>
      );
    }

    return (
      <Wrapper>
        <ContainerLocation>
          <CityText>{name}</CityText>
          <CountryText>{country}</CountryText>
        </ContainerLocation>
        <ContainerTemperature>
          <SectionTemperature>
            <TemperatureText color="">{temp} °C</TemperatureText>
            <TemperatureImage>
              {this.getImageTemperature(icon)}
            </TemperatureImage>
          </SectionTemperature>
          <SectionTemperatureMobile>
            <TemperatureInfos
              tempMin={temp_min}
              tempMax={temp_max}
              humidity={humidity}
              wind={wind}
              sizeIcon={15}
              sizeText={13}
              colorIcon="#c1c1c1"
              colorText="#7c7c7c"
            />
          </SectionTemperatureMobile>
        </ContainerTemperature>
      </Wrapper>
    );
  }
}

ListCitiesItem.propTypes = {
  nameCity: PropTypes.string
};
