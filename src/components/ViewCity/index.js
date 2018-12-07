import React, { Component } from 'react';

import Wrapper from './Wrapper';

import ViewCityOptions from '../ViewCityOptions/index';
import ViewCityChoose from '../ViewCityChoose/index';
import Loading from '../Loading/index';
import Error from '../Error/index';

const key = 'b5e7ada3bd028f6482908a861c2306d1';

export default class ViewCity extends Component {
  state = {
    search: 'Joinville',
    latitude: '',
    longitude: '',
    err: null,
    isLoading: true
  };

  onUpdateSearch = search => {
    this.setState(
      prevState => ({
        search: search,
        search_bkp: prevState.search,
        isLoading: true
      }),
      () => {
        this.getData();
      }
    );
  };

  onRefresh = () => {
    this.setState({ isLoading: true }, () => {
      this.getData();
    });
  };

  onGeoLocation = (lat, lng, err) => {
    this.setState(
      {
        latitude: lat,
        longitude: lng,
        err: err,
        isLoading: true
      },
      () => {
        if (!err) {
          this.getData();
        }
      }
    );
  };

  async getData() {
    const { search, latitude, longitude } = this.state;

    const url =
      latitude === '' ? `?q=${search}` : `?lat=${latitude}&lon=${longitude}`;
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather${url}&appid=${key}&units=metric&lang=en`
      );
      const data = await res.json();
      if (data.cod === 200) {
        this.setState({
          description: data.weather[0].description,
          condition: data.weather[0].condition,
          icon: data.weather[0].icon,
          name: data.name,
          search: data.name,
          country: data.sys.country,
          temp: parseInt(data.main.temp),
          temp_min: data.main.temp_min,
          temp_max: data.main.temp_max,
          humidity: data.main.humidity,
          wind: parseFloat(data.wind.speed.toFixed(1)),
          background: this.getColorTemperature(data.weather[0].icon),
          isLoading: false,
          err: null,
          latitude: '',
          longitude: ''
        });
      } else {
        this.setState(prevState => ({
          err: data.message,
          isLoading: false,
          search: prevState.search_bkp
        }));
      }
    } catch (err) {
      this.setState(prevState => ({
        err: 'Something went wrong, please try again later.',
        isLoading: false,
        search: prevState.search_bkp
      }));
    }
  }

  getColorTemperature = icon => {
    icon = icon.replace(/\D/g, '');

    const options = {
      '11': { color: '#738294', image: '#889eb3' },
      '09': { color: '#879aaf', image: '#99b5d0' },
      '10': { color: '#698eb3', image: '#9dbbdc' },
      '13': { color: '#b0cbed', image: '#def1ff' },
      '01': { color: '#ffde65', image: '#f9e362' }
    };

    return options[icon] || { color: '#b9d6f5', image: '#a7d5fb' };
  };

  componentDidMount() {
    this.getData();
  }

  actionBack = () => {
    this.setState({
      err: null,
      isLoading: false
    });
  };

  render() {
    const {
      err,
      isLoading,
      background,
      description,
      temp,
      name,
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
            textBtn="Back"
            type="view"
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
      <Wrapper
        backgroundColor={background.color}
        backgroundImage={background.image}
      >
        <ViewCityOptions
          onUpdateSearch={this.onUpdateSearch}
          onRefresh={this.onRefresh}
          onGeoLocation={this.onGeoLocation}
        />
        <ViewCityChoose
          description={description}
          temp={temp}
          name={name}
          tempMin={temp_min}
          tempMax={temp_max}
          humidity={humidity}
          wind={wind}
        />
      </Wrapper>
    );
  }
}
