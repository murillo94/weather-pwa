import React from 'react';
import Container from '../../components/Container/index';
import ViewCity from '../../components/ViewCity/index';
import ListCities from '../../components/ListCities/index';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
	body{
		margin: 0;
		font-family: 'Roboto', sans-serif;
		color: #474747;
	}
  input[type=search]::-ms-clear {  display: none; width : 0; height: 0; }
  input[type=search]::-ms-reveal {  display: none; width : 0; height: 0; }
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration { display: none; }
`;

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default function App() {

  	return (
  		<AppWrapper>
  			<Container>
  				<ViewCity/>
     			<ListCities/>
     		</Container>
    	</AppWrapper>
  	)

}