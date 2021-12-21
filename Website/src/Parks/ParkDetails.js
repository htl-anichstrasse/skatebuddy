import './ParkDetails.css'
import { useParams } from "react-router-dom";
import useFetch from "../hooks/UseFetch";
import raw from './Key.txt';
import GoogleMapReact from 'google-map-react';
import React, { useState } from 'react';
import Reviews from '../reviews/Reviews';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ParkDetails = () => {
  const { id } = useParams();
  const { data: park, isPending, error } = useFetch('http://localhost:8000/skateparks?skateparkId=' + id);
  const { data: picture, picIsPending, picError} = useFetch('http://localhost:8000/skatepark_pictures?skateparkId=' + id)
  const [Keys,setKeys] = useState(null);

  const defaultProps = {
    center: {
      lat: 47.2683,
      lng: 11.3933
    },
    zoom: 11
  };

  const options ={
    minZoom: 9,
    maxZoom: 20
  }

  fetch(raw)
  .then(r => r.text())
  .then(text => {
    setKeys(text);
  });
  
  return (
    <div className="park-details">
      { isPending && picIsPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { picError&& <di>{picError}</di>}
      { park && Keys && picture &&<>

        <h2 className='ParkName'>{ park[0].name }</h2>

        <div className="map" style={{ height: '55vh', width: '80%', marginRight: 'auto', marginLeft: 'auto'}}>
          <GoogleMapReact
          options ={options}
          bootstrapURLKeys={{ key:Keys}} //API-Key
          defaultCenter={defaultProps.center} 
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={park[0].latitude}
            lng={park[0].longitude}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>

      <img src={""} alt="pic"/>

      <div className="Reviews">
          <Reviews id = {id}></Reviews>
      </div>
      </>}
    </div>
  );
}
 
export default ParkDetails;