import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Description, Button } from './styles';

const Error = ({ message, textBtn, type, back }) => {
  let typeError =
    type === 'view'
      ? {
          fontSize: 23,
          marginBottom: 25,
          padding: '10px 30px'
        }
      : {
          fontSize: 20,
          marginBottom: 10,
          padding: '5px 30px'
        };
  return (
    <Wrapper>
      <Description
        marginBottom={typeError.marginBottom}
        fontSize={typeError.fontSize}
      >
        {message}
      </Description>
      <Button padding={typeError.padding} onClick={back}>
        {textBtn}
      </Button>
    </Wrapper>
  );
};

Error.propTypes = {
  message: PropTypes.string,
  textBtn: PropTypes.string,
  type: PropTypes.string,
  back: PropTypes.func
};

export default Error;
