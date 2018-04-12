import React, { Component } from 'react';
import onClickOutside from "react-onclickoutside";

import Wrapper from './Wrapper';
import Button from './Button';
import InputSearch from './InputSearch';

import ReactTooltip from 'react-tooltip';
import { Search, RefreshCw, Navigation } from 'react-feather';

class ViewCityOptions extends Component {

	state = {
		width: 0,
		padding: 0,
		search: '',
	}

  	handleEnter = (e) => {
  		if(e.key === 'Enter' && this.state.search !== '') {
    		this.props.onUpdateSearch(this.state.search);
    		this.setState({ width: 0, padding: 0, search: '' });
			document.getElementById("input").blur();
  		}
	}

	updateSearch = (e) => {
		if(e.target.value.length === 0) {
			document.getElementById("input").blur();
			this.setState({ search: e.target.value, width: 0, padding: 0});
		} else {
			this.setState({search: e.target.value})
		}
	}

	handleClickOutside = (e) => {
    	this.setState({ width: 0, padding: 0 });
    	document.getElementById("input").blur();
  	}

  	actionSearch = () => {
		if(this.state.width === 0) {
			document.getElementById("input").focus();
	    	this.setState({ width: 100, padding: 7 });
	    } else {
	    	if(this.state.search === '') {
	    		// todo - tirar qnd ficar 0 o length, deixar aberto e fechar apenas qnd toca fora.
				this.setState({ width: 0, padding: 0 });
				document.getElementById("input").blur();
	    	} else {
				this.props.onUpdateSearch(this.state.search);
				this.setState({ width: 0, padding: 0, search: '' });
				document.getElementById("input").blur();
	    	}
	    }
  	}

  	actionRefresh = () => {
		this.setState({ width: 0, padding: 0, search: '' });
		document.getElementById("input").blur();
		this.props.onRefresh();
  	}

  	actionGeoLocation = () => {
  		this.setState({ width: 0, padding: 0, search: '' });
		document.getElementById("input").blur();
  		navigator.geolocation.getCurrentPosition((position) => {
  			this.props.onGeoLocation(position.coords.latitude, position.coords.longitude, null);
		}, (err) => {
			const error_message = (err.code === 1 ? 'Please, enable your location.' : 'Could not find your location, please try again later.')
			this.props.onGeoLocation('', '', error_message);
		}, { enableHighAccuracy: true, timeout: 15000, maximumAge: 1000});
  	}

	render() {
		return (
			<Wrapper>
		      	<Button onClick={this.actionSearch} aria-label="Search" data-tip="Search">
					<Search color="#ffffff" size={21}/>
		      	</Button>
		      	<InputSearch id="input" type="search" value={this.state.search} placeholder="Search a City" 
		      	aria-label="Search input" width={this.state.width} padding={this.state.padding} 
		      	onKeyPress={this.handleEnter} onChange={this.updateSearch}/>
				<Button onClick={this.actionRefresh} aria-label="Refresh" data-tip="Refresh">
					<RefreshCw color="#ffffff" size={21}/>
				</Button>
				<Button onClick={this.actionGeoLocation} aria-label="My location" data-tip="My location">
					<Navigation color="#ffffff" size={21}/>
				</Button>
				<ReactTooltip effect="solid" globalEventOff='click'/>
			</Wrapper>
		)
	}

}

export default onClickOutside(ViewCityOptions);