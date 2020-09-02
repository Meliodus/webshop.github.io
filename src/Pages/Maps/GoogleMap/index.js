import React from "react";
import { Row, Col, Card, Form, InputGroup, Button } from "react-bootstrap";
import {
  Map,
  Marker,
  GoogleApiWrapper,
  InfoWindow,
  Polyline,
  Polygon,
} from "google-maps-react";

import Aux from "../../../hoc/_Aux";

const polygon = [
  { lat: 21.2105052, lng: 72.8653491 },
  { lat: 21.2206445, lng: 72.8704506 },
  { lat: 21.2183091, lng: 72.8631228 },
];

class GoogleMap extends React.Component {
  state = {
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false,
    position: null,
  };

  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true,
    });

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false,
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false,
      });
  };

  componentDidMount() {
    this.renderAutoComplete();
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps.map) this.renderAutoComplete();
  }

  onSubmit(e) {
    e.preventDefault();
  }

  renderAutoComplete() {
    const { google, map } = this.props;

    if (!google || !map) return;

    const autocomplete = new google.maps.places.Autocomplete(this.autocomplete);
    autocomplete.bindTo("bounds", map);

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();

      if (!place.geometry) return;

      if (place.geometry.viewport) map.fitBounds(place.geometry.viewport);
      else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }

      this.setState({ position: place.geometry.location });
    });
  }

  render() {
    const { position } = this.state;
    // xl={6}
    return (
      <Aux>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Domain Locations</Card.Title>
              </Card.Header>
              <Card.Body>
                <div style={{ height: "300px", width: "100%" }}>
                  <Map
                    centerAroundCurrentLocation
                    className="map"
                    google={this.props.google}
                    onClick={this.onMapClicked}
                    zoom={12}
                  >
                    <Marker
                      name="Codedthemes"
                      position={{ lat: 21.2335163, lng: 72.8643298 }}
                      onClick={this.onMarkerClick}
                    />

                    <Marker
                      name="Roman Point"
                      position={{ lat: 21.2148165, lng: 72.8627243 }}
                      onClick={this.onMarkerClick}
                    />

                    <Marker
                      name="Current Location"
                      onClick={this.onMarkerClick}
                    />

                    <InfoWindow
                      marker={this.state.activeMarker}
                      onClose={this.onInfoWindowClose}
                      visible={this.state.showingInfoWindow}
                    >
                      <div>
                        <h3>{this.state.selectedPlace.name}</h3>
                      </div>
                    </InfoWindow>
                  </Map>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk",
})(GoogleMap);
