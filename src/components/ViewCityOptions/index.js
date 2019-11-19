import React, { useState, useRef } from 'react';

import { Search, RefreshCw, Navigation } from 'react-feather';
import { isMobile } from 'react-device-detect';
import ReactTooltip from 'react-tooltip';

import ButtonOptions from '../ButtonOptions';

import { Wrapper, Input } from './styles';

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange
  };
};

const ViewCityOptions = ({ onUpdateSearch, onRefresh, onGeoLocation }) => {
  const search = useFormInput('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const handleEnter = e => {
    if (e.key === 'Enter' && search.value) {
      onUpdateSearch(search.value);
    }
  };

  const onClickSearch = () => {
    inputRef.current.focus();
  };

  const onClickRefresh = () => {
    onRefresh();
  };

  const onClickGeoLocation = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      position => {
        onGeoLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
        setLoading(false);
      },
      err => {
        const error =
          err.code === 1
            ? 'Please, enable your location.'
            : 'Could not find your location, please try again later.';
        onGeoLocation({ error });
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 1000 }
    );
  };

  return (
    <Wrapper>
      <ButtonOptions
        icon={<Search color="#ffffff" size={21} />}
        text="Search"
        onClick={onClickSearch}
      />
      <Input
        ref={inputRef}
        id="input"
        type="search"
        placeholder="Search a City"
        aria-label="Search input"
        onKeyPress={handleEnter}
        autoComplete="off"
        {...search}
      />
      <ButtonOptions
        icon={<RefreshCw color="#ffffff" size={21} />}
        text="Refresh"
        onClick={onClickRefresh}
      />
      <ButtonOptions
        icon={<Navigation color="#ffffff" size={21} />}
        text="My location"
        isLoading={loading}
        marginRight={0}
        onClick={onClickGeoLocation}
      />
      {!isMobile && (
        <ReactTooltip
          className="tooltipCustom"
          effect="solid"
          globalEventOff="click"
        />
      )}
    </Wrapper>
  );
};

export default ViewCityOptions;
