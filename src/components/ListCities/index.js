import React from 'react';

import Wrapper from './Wrapper';
import ListCitiesItem from '../ListCitiesItem/index';

const ListCities = ({ cities, token }) => (
  <Wrapper>
    {cities.map((item, i) => (
      <ListCitiesItem key={i} token={token} name={item.name} />
    ))}
  </Wrapper>
);

export default ListCities;
