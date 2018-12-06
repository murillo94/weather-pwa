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
      prevState => ({
        latitude: lat,
        longitude: lng,
        err: err,
        isLoading: true
      }),
      () => {
        if (!err) {
          this.getData();
        }
      }
    );
  };

  async getData() {
    const url =
      this.state.latitude === ''
        ? `?q=${this.state.search}`
        : `?lat=${this.state.latitude}&lon=${this.state.longitude}`;
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather${url}&appid=${key}&units=metric&lang=en`
      );
      const data = await res.json();
      if (data.cod === 200) {
        await this.getColorTemperature(
          data.weather[0].icon,
          (backgroundColor, backgroundImage) => {
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
              color_bg: backgroundColor,
              color_bi: backgroundImage,
              isLoading: false,
              err: null,
              latitude: '',
              longitude: ''
            });
          }
        );
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

  getColorTemperature = (icon, fn) => {
    if (icon === '11d' || icon === '11n') {
      fn('#738294', '#889eb3');
    }

    if (icon === '09d' || icon === '09n') {
      fn('#879aaf', '#99b5d0');
    }

    if (icon === '10d' || icon === '10n') {
      fn('#698eb3', '#9dbbdc');
    }

    if (icon === '13d' || icon === '13n') {
      fn('#b0cbed', '#def1ff');
    }

    if (icon === '01d' || icon === '01n') {
      fn('#ffde65', '#f9e362');
    }

    if (
      icon === '50d' ||
      icon === '50n' ||
      icon === '02d' ||
      icon === '02n' ||
      icon === '03d' ||
      icon === '03n' ||
      icon === '04d' ||
      icon === '04n'
    ) {
      fn('#b9d6f5', '#a7d5fb');
    }
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
    if (this.state.err) {
      return (
        <Wrapper>
          <Error
            message={this.state.err}
            textBtn="Back"
            type="view"
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
      <Wrapper
        backgroundColor={this.state.color_bg}
        backgroundImage={this.state.color_bi}
      >
        <ViewCityOptions
          onUpdateSearch={this.onUpdateSearch}
          onRefresh={this.onRefresh}
          onGeoLocation={this.onGeoLocation}
        />
        <ViewCityChoose
          description={this.state.description}
          temp={this.state.temp}
          name={this.state.name}
          tempMin={this.state.temp_min}
          tempMax={this.state.temp_max}
          humidity={this.state.humidity}
          wind={this.state.wind}
        />
      </Wrapper>
    );
  }
}
