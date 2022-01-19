import GoogleMapReact from 'google-map-react';
import React, { useState } from 'react';
import raw from '../Key.txt';


const Park = ({ text }) => <div>{text}</div>;
const User = ({ text }) => <div>{text}</div>;


const Map = (park) => {

  const [UserLangitude, setUserLangitude] = useState(null);
  const [UserLongitude, setUserLongitude] = useState(null);
  const [Keys, setKeys] = useState(null);

  const defaultProps = {
    center: {
      lat: 47.2683,
      lng: 11.3933,
    },
    zoom: 11,
  };

  const options = {
    minZoom: 9,
    maxZoom: 20,
  };

  fetch(raw)
    .then(r => r.text())
    .then(text => {
      setKeys(text);
    });

  navigator.geolocation.getCurrentPosition(function (position) {
    setUserLangitude(position.coords.latitude);
    setUserLongitude(position.coords.longitude);
  });

  return (
    <div
      className="map"
      style={{
        height: '55vh',
        width: '80%',
        marginRight: 'auto',
        marginLeft: 'auto'
      }}>
      {Keys && <GoogleMapReact
        options={options}
        bootstrapURLKeys={{ key: Keys }} //API-Key
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}>
        <Park
          lat={park.park.lat}
          lng={park.park.lon}
          text="My Marker"
        />
        {UserLangitude && <User
          lat={UserLangitude}
          lng={UserLongitude}
          text="User"
        />}
      </GoogleMapReact>}
    </div>
  )
}

export default Map;