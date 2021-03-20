import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Component } from 'react';

class MapComponent extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render(){
      return (
        <div className="App">
          <Map google={this.props.google}
              style={{width: '100%', height: '100%', position: 'relative'}}
              className={'map'}
              zoom={12}>
            <Marker onClick={this.onMarkerClick}
              title={'The marker`s title will appear as a tooltip.'}
              name={'94131'}
              position={{lat:37.740105 , lng:-122.438232}} />
            <Marker onClick={this.onMarkerClick}
              name={'94112'}
              position={{lat: 37.722549, lng:-122.441063}} />
            
            <Marker onClick={this.onMarkerClick}
              name={'94110'}
              position={{lat: 37.609415, lng: -122.495081}}
              />
              <InfoWindow
                    onOpen={this.windowHasOpened}
                    onClose={this.windowHasClosed}        
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                      <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                      </div>
              </InfoWindow>

          </Map>
      
            
        </div>
      );
      }
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBoNQNfY9zS-FiMn2CNMMVTvVe0bVfnmN4")
})(MapComponent)



