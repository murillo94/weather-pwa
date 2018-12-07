import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Ul from './Ul';
import Li from './Li';
import TemperatureDayText from './TemperatureDayText';
import TemperatureDayImage from './TemperatureDayImage';
import TemperatureDayNumber from './TemperatureDayNumber';

import { Sun } from 'react-feather';

const ViewCityChooseList = ({ list }) => (
  <Wrapper>
    <Ul>
      {list.map((item, i) => (
        <Li key={i}>
          <TemperatureDayText fontWeight="500">
            {item.main.dt_txt}
          </TemperatureDayText>
          <TemperatureDayImage>
            <Sun color="#ffffff" size={30} />
          </TemperatureDayImage>
          <TemperatureDayNumber color="#333">30</TemperatureDayNumber>
          <TemperatureDayNumber color="#7c7c7c">30</TemperatureDayNumber>
        </Li>
      ))}
    </Ul>
  </Wrapper>
);

ViewCityChooseList.propTypes = {
  list: PropTypes.array
};

export default ViewCityChooseList;
