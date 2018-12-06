import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Button from './Button';
import Loading from './Loading';

const ButtonOptions = ({ action, text, margin, loading, icon }) => {
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
        margin={margin}
      >
        {icon}
      </Button>
    </Wrapper>
  );
};

ButtonOptions.propTypes = {
  action: PropTypes.func,
  text: PropTypes.string,
  margin: PropTypes.string,
  loading: PropTypes.bool,
  icon: PropTypes.element
};

export default ButtonOptions;
