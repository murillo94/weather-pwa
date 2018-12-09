import React from 'react';

import Wrapper from './Wrapper';
import Ul from './Ul';
import Li from './Li';
import ListCitiesItem from '../ListCitiesItem/index';

const ListCities = ({ cities, token }) => (
  <Wrapper>
    <Ul>
      {cities.map((item, i) => (
        <Li key={i}>
          <ListCitiesItem token={token} name={item.name} />
        </Li>
      ))}
    </Ul>
  </Wrapper>
);

export default ListCities;
