import React, { useState, useRef } from 'react';
import { setConfig, cold } from 'react-hot-loader';
import { Search, RefreshCw, Navigation } from 'react-feather';
import { isMobile } from 'react-device-detect';
import ReactTooltip from 'react-tooltip';

import ButtonOptions from '../ButtonOptions';

import { Wrapper, InputSearch } from './styles';

setConfig({
  onComponentRegister: type =>
    (String(type).indexOf('useState') > 0 ||
      String(type).indexOf('useRef') > 0) &&
    cold(type)
});

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

function ViewCityOptions({ onUpdateSearch, onRefresh, onGeoLocation }) {
  const search = useFormInput('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const handleEnter = e => {
    if (e.key === 'Enter' && search.value) {
      onUpdateSearch(search.value);
    }
  };

  const actionSearch = () => {
    inputRef.current.focus();
  };

  const actionRefresh = () => {
    onRefresh();
  };

  const actionGeoLocation = () => {
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
        action={actionSearch}
        text="Search"
        icon={<Search color="#ffffff" size={21} />}
      />
      <InputSearch
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
        action={actionRefresh}
        text="Refresh"
        icon={<RefreshCw color="#ffffff" size={21} />}
      />
      <ButtonOptions
        action={actionGeoLocation}
        text="My location"
        marginRight={0}
        loading={loading}
        icon={<Navigation color="#ffffff" size={21} />}
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
}

export default ViewCityOptions;
