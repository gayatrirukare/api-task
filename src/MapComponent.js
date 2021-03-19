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



{/*import React, { Component } from 'react'

import axios from 'axios'

class MapComponent extends Component {


  state = {
    venues: []
  }

  componentDidMount() {
    this.getVenues()
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBoNQNfY9zS-FiMn2CNMMVTvVe0bVfnmN4&callback=initMap")
    window.initMap = this.initMap
  }

  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: "PMHC2WA1VCBHVYOPPSJ0QSBYTLRF4PNJ04OWVWV0PZJ0QFIR",
      client_secret: "CULSZZ44YAEBOWBFGPB4BF5ISRXXSNYR0EE3JV3CNE2ZWHV0",
      query: "Farmers Market Directory",
      near: "Seattle",
      v: "20182507"
    }

    axios.get(endPoint + new URLSearchParams(parameters))
      .then(response => {
        this.setState({
          venues: response.data.response.groups[0].items
        }, this.renderMap())
      })
      .catch(error => {
        console.log("ERROR!! " + error)
      })

  }

  initMap = () => {

    // Create A Map
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 47.606209, lng:-122.332069},
      zoom: 8
    })

    // Create An InfoWindow
    var infowindow = new window.google.maps.InfoWindow()

    // Display Dynamic Markers
    this.state.venues.map(myVenue => {

      var contentString = `${myVenue.venue.name}`

      // Create A Marker
      var marker = new window.google.maps.Marker({
        position: {lat: myVenue.venue.location.lat , lng: myVenue.venue.location.lng},
        map: map,
        title: myVenue.venue.name
      })

      // Click on A Marker!
      marker.addListener('click', function() {

        // Change the content
        infowindow.setContent(contentString)

        // Open An InfoWindow
        infowindow.open(map, marker)
      })

    })

    

  }

  render() {
    return (
      <main>
        <div id="map"></div>
      </main>
    )
  }
}

function loadScript(url) {
  var index  = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default MapComponent;
*/}