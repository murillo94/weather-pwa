import React, { Component } from 'react';

import Wrapper from './Wrapper';
import Ul from './Ul';
import Li from './Li';
import ListCitiesItem from '../ListCitiesItem/index';

export default class ListCities extends Component {
	
	state = {
		cities: [
			{name: "São Paulo"}, 
			{name: "London"}, 
			{name: "New York"}, 
			{name: "Paris"}, 
			{name: "Hong Kong"}, 
			{name: "Madrid"}, 
			{name: "Buenos Aires"},
		]
	}
	
	render() {
		return (
			<Wrapper>
      			<Ul>
        			{this.state.cities.map((item, i) => (
				  		<Li key={i}>
							<ListCitiesItem nameCity={item.name} />
				  		</Li>
					))}
      			</Ul>
   	 		</Wrapper>
		)
	}

}