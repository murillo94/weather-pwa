import React from 'react';
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
);

export default ButtonOptions;
