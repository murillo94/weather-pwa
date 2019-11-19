import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Description, Button } from './styles';

const Error = ({ type, description, textButton, onClick }) => {
  const typeError =
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
        {description}
      </Description>
      <Button padding={typeError.padding} onClick={onClick}>
        {textButton}
      </Button>
    </Wrapper>
  );
};

Error.propTypes = {
  type: PropTypes.string,
  description: PropTypes.string,
  textButton: PropTypes.string,
  onClick: PropTypes.func
};

export default Error;
