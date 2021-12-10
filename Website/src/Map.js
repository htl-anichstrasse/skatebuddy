import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 47.2683,
      lng: 11.3933
    },
    zoom: 11
  };

  render() {
    return (
      <div classname="map" style={{ height: '55vh', width: '80%', marginRight: 'auto', marginLeft: 'auto'}}>
          <GoogleMapReact
          bootstrapURLKeys={{ key:""}} //API-Key
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
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
}

export default SimpleMap;