import React from "react";
import { geolocated } from "react-geolocated";

class Demo extends React.Component {
  sentLat = data => {
    this.props.GetGeoLat(data);
  };
  sentLong = data => {
    this.props.GetGeoLong(data);
  };
  
  render() {
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      <table style={{ display: "None" }}>
        <tbody>
          <tr>
            <td>latitude</td>

            {/* <td>{this.sentLat(this.props.coords.latitude)}</td> */}
          </tr>
          <tr>
            <td>longitude</td>
            {/* <td>{this.sentLong(this.props.coords.longitude)}</td> */}
          </tr>
          <tr>
            <td>altitude</td>
            <td>{this.props.coords.altitude}</td>
          </tr>
          <tr>
            <td>heading</td>
            <td>{this.props.coords.heading}</td>
          </tr>
          <tr>
            <td>speed</td>
            <td>{this.props.coords.speed}</td>
          </tr>
        </tbody>
      </table>
    ) : (
      <div>Getting the location data&hellip; </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    watchPosition: false,
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(Demo);
