import React, { useState, useEffect } from 'react';
import {
  CloudLightning,
  CloudDrizzle,
  CloudRain,
  CloudSnow,
  Sun,
  Cloud
} from 'react-feather';

import request from '../../services/Api';

import TemperatureInfos from '../TemperatureInfos';
import Loading from '../Loading';
import Error from '../Error';

import {
  Wrapper,
  ContainerLocation,
  CityText,
  CountryText,
  ContainerTemperature,
  SectionTemperature,
  SectionTemperatureMobile,
  TemperatureText,
  TemperatureImage
} from './styles';

const getImageTemperature = icon => {
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

const ListCitiesItem = ({ name }) => {
  const [refresh, setRefresh] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await request('weather', {
          q: name
        });

        if (response.status === 200) {
          const data = await response.json();

          setData({
            description: data.weather[0].description,
            condition: data.weather[0].condition,
            icon: getImageTemperature(data.weather[0].icon),
            name: data.name,
            country: data.sys.country,
            temp: parseInt(data.main.temp),
            temp_min: parseInt(data.main.temp_min),
            temp_max: parseInt(data.main.temp_max),
            humidity: parseInt(data.main.humidity),
            wind: data.wind.speed.toFixed(1)
          });
        } else {
          setError(response.statusText);
        }
      } catch (e) {
        setError('Something went wrong, please try again later.');
      }
      setLoading(false);
    })();
  }, [refresh]);

  const actionRefresh = () => {
    setLoading(true);
    setRefresh(!refresh);
  };

  if (error) {
    return (
      <Wrapper>
        <Error
          type="list"
          description={error}
          textButton="Reload"
          back={actionRefresh}
        />
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
    <Wrapper>
      <ContainerLocation>
        <CityText>{data.name}</CityText>
        <CountryText>{data.country}</CountryText>
      </ContainerLocation>
      <ContainerTemperature>
        <SectionTemperature>
          <TemperatureText>{data.temp} °C</TemperatureText>
          <TemperatureImage>{data.icon}</TemperatureImage>
        </SectionTemperature>
        <SectionTemperatureMobile>
          <TemperatureInfos
            sizeText={13}
            colorText="#7c7c7c"
            sizeIcon={15}
            colorIcon="#c1c1c1"
            tempMin={data.temp_min}
            tempMax={data.temp_max}
            humidity={data.humidity}
            wind={data.wind}
          />
        </SectionTemperatureMobile>
      </ContainerTemperature>
    </Wrapper>
  );
};

export default ListCitiesItem;
