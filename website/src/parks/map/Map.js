import GoogleMapReact from 'google-map-react';
import React, { useState } from 'react';
import raw from '../Key.txt';
import Marker from './Marker.js';


// const Park = ({ text }) => <div>{text}</div>;
//const User = ({ text }) => <div>{text}</div>;


const Map = (park) => {

  const [UserLangitude, setUserLangitude] = useState(null);
  const [UserLongitude, setUserLongitude] = useState(null);
  const [Keys, setKeys] = useState(null);

  const options = (maps) => {
    return {
      minZoom: 9,
      maxZoom: 20,
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
    };
  };

  const defaultProps = {
    center: {
      lat: 47.2683,
      lng: 11.3933,
    },
    zoom: 11,
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
        <Marker
          lat={park.park.latitude}
          lng={park.park.longitude}
          name={park.park.name}
          color="red"
        />
        {UserLangitude && <Marker
          lat={UserLangitude}
          lng={UserLongitude}
          name="Ihre Position"
          color = "blue"
        />
        }
      </GoogleMapReact>}
    </div>
  )
}

export default Map;