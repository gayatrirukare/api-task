import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react'
import styles from './mystyle.module.css'; 

 class MapComponent extends Component {
    render() {
      return (
        
          <Map google={this.props.google} zoom={14}>
    
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
    
            <InfoWindow onClose={this.onInfoWindowClose}>
                
            </InfoWindow>
          </Map>
        
      );
    }
  }
   
  export default GoogleApiWrapper({
    apiKey: ("AIzaSyBoNQNfY9zS-FiMn2CNMMVTvVe0bVfnmN4")
  })(MapComponent)