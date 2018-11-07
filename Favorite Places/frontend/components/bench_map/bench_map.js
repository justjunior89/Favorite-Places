import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';
class BenchMap extends React.Component {
  componentDidMount(){
    const map = this.refs.map;

    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.MarkerManager = new MarkerManager(this.map);
    this.map = new google.maps.Map(map, mapOptions) || "";
  }

  render() {
    return (

      <div className='map' ref="map">Map</div>

    );
  }

}
export default  withRouter(BenchMap);
