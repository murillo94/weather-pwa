import React, { useState, useEffect } from 'react';
import { setConfig, cold } from 'react-hot-loader';

import request from '../../services/Api';

import ViewCityOptions from '../ViewCityOptions';
import ViewCityChoose from '../ViewCityChoose';
import Loading from '../Loading';
import Error from '../Error';

import { Wrapper } from './styles';

setConfig({
  onComponentRegister: type =>
    (String(type).indexOf('useState') > 0 ||
      String(type).indexOf('useEffect') > 0) &&
    cold(type)
});

function ViewCity() {
  const [search, setSearch] = useState('Joinville');
  const [searchBkp, setSearchBkp] = useState('Joinville');
  const [refresh, setRefresh] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const url =
        typeof search === 'string'
          ? { q: `${search}` }
          : { lat: `${search.latitude}`, lon: `${search.longitude}` };

      try {
        const response = await request('weather', {
          ...{ ...url }
        });

        if (response.status === 200) {
          const data = await response.json();

          setData({
            description: data.weather[0].description,
            condition: data.weather[0].condition,
            icon: data.weather[0].icon,
            name: `${data.name} - ${data.sys.country}`,
            country: data.sys.country,
            temp: parseInt(data.main.temp),
            temp_min: parseInt(data.main.temp_min),
            temp_max: parseInt(data.main.temp_max),
            humidity: parseInt(data.main.humidity),
            wind: data.wind.speed.toFixed(1),
            background: getColorTemperature(data.weather[0].icon)
          });
          setSearchBkp(search);
        } else {
          setError(response.statusText);
        }
      } catch (e) {
        setError('Something went wrong, please try again later.');
      }
      setLoading(false);
    })();
  }, [search, refresh]);

  const onUpdateSearch = search => {
    setSearch(search);
  };

  const onRefresh = () => {
    setSearch(searchBkp);
    setRefresh(!refresh);
  };

  const onGeoLocation = ({ latitude = '', longitude = '', error = null }) => {
    if (error) {
      setError(error);
    } else {
      setSearch({ latitude, longitude });
    }
  };

  const actionBack = () => {
    setError(null);
  };

  const getColorTemperature = icon => {
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

  if (error) {
    return (
      <Wrapper>
        <Error message={error} textBtn="Back" type="view" back={actionBack} />
      </Wrapper>
    );
  }

  if (loading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }

  return (
    <Wrapper
      backgroundColor={data.background.color}
      backgroundImage={data.background.image}
    >
      <ViewCityOptions
        onUpdateSearch={onUpdateSearch}
        onRefresh={onRefresh}
        onGeoLocation={onGeoLocation}
      />
      <ViewCityChoose
        description={data.description}
        temp={data.temp}
        name={data.name}
        tempMin={data.temp_min}
        tempMax={data.temp_max}
        humidity={data.humidity}
        wind={data.wind}
      />
    </Wrapper>
  );
}

export default ViewCity;
