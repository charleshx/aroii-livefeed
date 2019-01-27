import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import FoodCard from "./component/FoodCard";
import AppBar from "./component/AppBar";
import GeoLocation from "./component/GeoLocation";
import Grid from "@material-ui/core/Grid";
import SelectedMenu from "./component/SelectedMenu";
import MiddleWare from "./component/MiddleWare";
import { geolocated } from "react-geolocated";

class App extends Component {
  state = {
    hide: "",
    long: "",
    lat: "",
    tag: "",
    data: [],
    startTime: "",
    endTime: ""
  };

  handleHide = data => {
    this.setState({ startTime: data[1] });
    this.setState({ hide: "None" });
  };

  handleBack = data => {
    this.setState({ endTime: data[1] });
    let intervalTime = this.state.endTime - this.state.startTime;

    console.log(intervalTime);
    this.setState({ hide: "" });
  };
  usrGeoLat = data => {
    this.setState({ lat: data });
  };
  usrGeoLong = data => {
    this.setState({ long: data });
  };
  componentDidMount() {
    this.uploadData();
  }
  uploadData() {
    let mockData = { name: "pong", long: "tset" };
    var request = new Request("http://localhost:3001/api/usrData", {
      method: "post",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(mockData)
    });
    fetch(request).then(function(response) {
      console.log(response);
      if (response.status === 200) {
        console.log("Return 200");
      } else {
        console.log("return not 200");
      }
    });
  }
  render() {
    let geoData = {
      latitude: "",
      longitude: "",
      altitude: "",
      accuracy: "",
      altitudeAccuracy: "",
      heading: "",
      speed: ""
    };
    return (
      <React.Fragment>
        <GeoLocation GetGeoLat={this.usrGeoLat} GetGeoLong={this.usrGeoLong} />;
        <GeoLocation coords={geoData} />;{console.log(geoData)}
        <AppBar />
        <br />
        {/* <MiddleWare /> */}
        <Grid container justify="center">
          <div style={{ display: this.state.hide === "None" ? "" : "None" }}>
            <SelectedMenu OnHandleBack={this.handleBack} />
          </div>
        </Grid>
        <div style={{ display: this.state.hide }}>
          <Grid container justify="center">
            <FoodCard OnHandleHide={this.handleHide} />
          </Grid>
          <Grid container justify="center">
            <FoodCard OnHandleHide={this.handleHide} />
          </Grid>
          <Grid container justify="center">
            <FoodCard OnHandleHide={this.handleHide} />
          </Grid>
          <Grid container justify="center">
            <FoodCard />
          </Grid>{" "}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
