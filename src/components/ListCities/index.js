import React from 'react';

import Wrapper from './Wrapper';
import ListCitiesItem from '../ListCitiesItem/index';

import cities from '../../utils/cities.json';

const ListCities = () => (
  <Wrapper>
    {cities.map((item, i) => (
      <ListCitiesItem key={i} name={item.name} />
    ))}
  </Wrapper>
);

export default ListCities;
