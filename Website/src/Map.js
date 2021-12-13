import GoogleMapReact from 'google-map-react';
import { useState } from 'react/cjs/react.development';
import raw from './Key.txt';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


const defaultProps = {
  center: {
    lat: 47.2683,
    lng: 11.3933
  },
  zoom: 11
};

const SimpleMap = () =>{

  const [Keys,setKeys] = useState(null);

  fetch(raw)
  .then(r => r.text())
  .then(text => {
    setKeys(text);
  });

    return (
     Keys && <div className="map" style={{ height: '55vh', width: '80%', marginRight: 'auto', marginLeft: 'auto'}}>
          <GoogleMapReact
          bootstrapURLKeys={{ key:Keys}} //API-Key
          defaultCenter={defaultProps.center} 
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={47.2683}
            lng={11.3933}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
}

export default SimpleMap;