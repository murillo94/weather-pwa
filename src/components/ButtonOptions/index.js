import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Button from './Button';
import Loading from './Loading';

import { isMobile } from 'react-device-detect';

const ButtonOptions = ({ action, text, marginRight, loading, icon }) => {
  if (loading && text === 'My location') {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Button
        onClick={action}
        aria-label={text}
        data-tip={text}
        marginRight={marginRight}
        isMobile={isMobile}
      >
        {icon}
      </Button>
    </Wrapper>
  );
};

ButtonOptions.propTypes = {
  action: PropTypes.func,
  text: PropTypes.string,
  marginRight: PropTypes.number,
  loading: PropTypes.bool,
  icon: PropTypes.element
};

export default ButtonOptions;
