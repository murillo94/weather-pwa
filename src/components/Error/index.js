import React from 'react';

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

export default Error;
