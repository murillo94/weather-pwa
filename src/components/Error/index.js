import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import DescriptionText from './DescriptionText';
import Button from './Button';

const Error = ({ message, textBtn, type, back }) => {
  let typeError =
    type === 'view'
      ? {
          fontSize: '23px',
          margin: '0 0 25px',
          paddingBtn: '10px 30px'
        }
      : {
          fontSize: '20px',
          margin: '0 0 10px',
          paddingBtn: '5px 30px'
        };
  return (
    <Wrapper>
      <DescriptionText type={typeError}>{message}</DescriptionText>
      <Button type={typeError} onClick={back}>
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
