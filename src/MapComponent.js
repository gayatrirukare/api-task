import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper , GoogleMap} from 'google-maps-react';
import { Component } from 'react';

class MapComponent extends Component {

  constructor(props) {
    super(props)
  
      this.state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        "lat": '',
        "lng": '',
        "uri" : '',
        "Address" : ''
      };
      
  }

  
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
              initialCenter  ={{lat :37.090240, lng:-95.712891}}
              zoom={12}
              onClick={this.onMapClicked}>
                <Marker onClick={this.onMarkerClick} 
                  title={'Please Click on marker to get Address'} 
                  key = {this.props.locationMarker.uri}
                  name = {this.props.locationMarker.Address}
                  position={{lat :this.props.locationMarker.lat, lng:this.props.locationMarker.lng }} />
           
              <InfoWindow
                    onOpen={this.windowHasOpened}
                    onClose={this.windowHasClosed}        
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                      <div>
                        <h6>{this.state.selectedPlace.name}</h6>
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



