import React, { Component } from 'react';

import Wrapper from './Wrapper';
import InputSearch from './InputSearch';
import ButtonOptions from '../ButtonOptions/index';

import { Search, RefreshCw, Navigation } from 'react-feather';
import { isMobile } from 'react-device-detect';
import ReactTooltip from 'react-tooltip';
import onClickOutside from 'react-onclickoutside';

class ViewCityOptions extends Component {
  state = {
    width: 0,
    padding: 0,
    search: '',
    loading: false
  };

  handleEnter = (e, search) => {
    if (e.key === 'Enter' && search !== '') {
      this.props.onUpdateSearch(search);
      this.setState({ width: 0, padding: 0, search: '' });
      document.getElementById('input').blur();
    }
  };

  updateSearch = e => {
    if (e.target.value.length === 0) {
      document.getElementById('input').blur();
      this.setState({ search: e.target.value, width: 0, padding: 0 });
    } else {
      this.setState({ search: e.target.value });
    }
  };

  actionSearch = (width, search) => {
    if (width === 0) {
      document.getElementById('input').focus();
      this.setState({ width: 100, padding: 7 });
    } else {
      if (search === '') {
        this.setState({ width: 0, padding: 0 });
        document.getElementById('input').blur();
      } else {
        this.props.onUpdateSearch(search);
        this.setState({ width: 0, padding: 0, search: '' });
        document.getElementById('input').blur();
      }
    }
  };

  actionRefresh = () => {
    this.setState({ width: 0, padding: 0, search: '' });
    document.getElementById('input').blur();
    this.props.onRefresh();
  };

  actionGeoLocation = () => {
    this.setState({ width: 0, padding: 0, search: '', loading: true });
    document.getElementById('input').blur();
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ loading: false }, () => {
          this.props.onGeoLocation(
            position.coords.latitude,
            position.coords.longitude,
            null
          );
        });
      },
      err => {
        this.setState({ loading: false }, () => {
          const error_message =
            err.code === 1
              ? 'Please, enable your location.'
              : 'Could not find your location, please try again later.';
          this.props.onGeoLocation('', '', error_message);
        });
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 1000 }
    );
  };

  render() {
    const { search, width, padding, loading } = this.state;

    return (
      <Wrapper>
        <ButtonOptions
          action={() => this.actionSearch(width, search)}
          text="Search"
          margin="5px"
          icon={<Search color="#ffffff" size={21} />}
        />
        <InputSearch
          id="input"
          type="search"
          value={search}
          placeholder="Search a City"
          aria-label="Search input"
          width={width}
          padding={padding}
          onKeyPress={e => this.handleEnter(e, search)}
          onChange={this.updateSearch}
        />
        <ButtonOptions
          action={this.actionRefresh}
          text="Refresh"
          margin="5px"
          icon={<RefreshCw color="#ffffff" size={21} />}
        />
        <ButtonOptions
          action={this.actionGeoLocation}
          text="My location"
          margin="0px"
          loading={loading}
          icon={<Navigation color="#ffffff" size={21} />}
        />
        {!isMobile && <ReactTooltip effect="solid" globalEventOff="click" />}
      </Wrapper>
    );
  }
}

export default onClickOutside(ViewCityOptions);
