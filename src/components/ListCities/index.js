import React from 'react';

import Wrapper from './Wrapper';
import ListCitiesItem from '../ListCitiesItem/index';

const ListCities = ({ cities }) => (
  <Wrapper>
    {cities.map((item, i) => (
      <ListCitiesItem key={i} name={item.name} />
    ))}
  </Wrapper>
);

export default ListCities;
