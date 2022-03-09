import GoogleMapReact from 'google-map-react';
import React, { useState } from 'react';
import raw from '../Key.txt';
import useFetch from '../../hooks/UseFetch';
import Marker from './Marker.js';


// const Park = ({ text }) => <div>{text}</div>;
//const User = ({ text }) => <div>{text}</div>;


const AllMap = () => {

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
  

    const {
        data: parks,
        isPending,
        error,
      } = useFetch('https://skate-buddy.josholaus.com/api/skateparks');

  return (
    <>
      {isPending && <div className='loading'>
        <h1>  Loading... </h1>
        </div>}
      {error && <div>{error}</div>}
    <div
      className="allmap"
      style={{
        height: '80vh',
        width: '90%',
        marginRight: 'auto',
        marginLeft: 'auto'
      }}>
      {Keys && parks && <GoogleMapReact
        options={options}
        bootstrapURLKeys={{ key: Keys }} //API-Key
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}>
        {parks.map(park => (
            <Marker
            lat={park.latitude}
            lng={park.longitude}
            name={park.name}
            color="red"
            link={park.skateparkId}
            />  
        ))}
        {UserLangitude && <Marker
              lat={UserLangitude}
              lng={UserLongitude}
              name="Ihre Position"
              color = "blue"
            />}
      </GoogleMapReact>}
    </div>
    </>
  )
}

export default AllMap;