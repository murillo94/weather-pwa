import React from 'react';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';

import { Wrapper, Loading, Button } from './styles';

const ButtonOptions = ({ icon, text, marginRight, isLoading, onClick }) => (
  <Wrapper>
    {isLoading ? (
      <Loading />
    ) : (
      <Button
        isMobile={isMobile}
        aria-label={text}
        data-tip={text}
        marginRight={marginRight}
        onClick={onClick}
      >
        {icon}
      </Button>
    )}
  </Wrapper>
)

ButtonOptions.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string,
  marginRight: PropTypes.number,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func
};

export default ButtonOptions;
