import React from 'react';
import { hot } from 'react-hot-loader/root';

import ViewCity from '../../components/ViewCity';
import ListCities from '../../components/ListCities';

import { GlobalStyle, Container, Wrapper } from './styles';

const App = () => (
  <>
    <GlobalStyle />
    <Container>
      <Wrapper>
        <ViewCity />
        <ListCities />
      </Wrapper>
    </Container>
  </>
);

export default hot(App);
