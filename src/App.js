import "./App.css";
import React, { Component } from "react";
import Profile from "./components/Profile";

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      Shows: true,
    };
  }
  Showing = () => {
    this.setState({ Shows: !this.state.Shows });
  };

  render() {
    return (
      <div>
        <div className="ManageDiv">
          <h2 className="textDec">Manage Profile</h2>
          <button className="btn" onClick={(el) => this.Showing()}>
            {this.state.Shows ? "Hide" : "Show"}
          </button>
        </div>

        {this.state.Shows ? (
          <div className="mainDiv">
            <Profile showState={this.state.Shows} />
          </div>
        ) : null}
      </div>
    );
  }
}
