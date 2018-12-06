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
        this.setState(prevState => ({
          err: data.message,
          isLoading: false
        }));
      }
    } catch (err) {
      this.setState(prevState => ({
        err: 'Something went wrong, please try again later.',
        isLoading: false
      }));
    }
  }

  getImageTemperature = () => {
    if (this.state.icon === '11d' || this.state.icon === '11n') {
      return <CloudLightning color="#c1c1c1" size={30} />;
    }

    if (this.state.icon === '09d' || this.state.icon === '09n') {
      return <CloudDrizzle color="#c1c1c1" size={30} />;
    }

    if (this.state.icon === '10d' || this.state.icon === '10n') {
      return <CloudRain color="#c1c1c1" size={30} />;
    }

    if (this.state.icon === '13d' || this.state.icon === '13n') {
      return <CloudSnow color="#c1c1c1" size={30} />;
    }

    if (this.state.icon === '01d' || this.state.icon === '01n') {
      return <Sun color="#c1c1c1" size={30} />;
    }

    if (
      this.state.icon === '50d' ||
      this.state.icon === '50n' ||
      this.state.icon === '02d' ||
      this.state.icon === '02n' ||
      this.state.icon === '03d' ||
      this.state.icon === '03n' ||
      this.state.icon === '04d' ||
      this.state.icon === '04n'
    ) {
      return <Cloud color="#c1c1c1" size={30} />;
    }
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    if (this.state.err) {
      return (
        <Wrapper>
          <Error
            message={this.state.err}
            textBtn="Reload"
            type="list"
            back={this.actionBack}
          />
        </Wrapper>
      );
    }
    if (this.state.isLoading) {
      return (
        <Wrapper>
          <Loading />
        </Wrapper>
      );
    }
    return (
      <Wrapper>
        <ContainerLocation>
          <CityText>{this.state.name}</CityText>
          <CountryText>{this.state.country}</CountryText>
        </ContainerLocation>
        <ContainerTemperature>
          <SectionTemperature>
            <TemperatureText color="">{this.state.temp} °C</TemperatureText>
            <TemperatureImage>{this.getImageTemperature()}</TemperatureImage>
          </SectionTemperature>
          <SectionTemperatureMobile>
            <TemperatureInfos
              tempMin={this.state.temp_min}
              tempMax={this.state.temp_max}
              humidity={this.state.humidity}
              wind={this.state.wind}
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
