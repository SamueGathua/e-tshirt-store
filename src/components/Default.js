import React, { Component } from 'react';

class Default extends Component {
  render() {
    return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center
          text-capitalize pt-5">
          <h1 className ="display-3">404</h1>
          <h1>Error</h1>
          <b>page not found</b>
          <p>
            the requested url{" "}
            <span className="text-danger">
            {this.props.location.pathname}</span>
          {" "}was not found
        </p>
        </div>
      </div>
    </div>
    );
  }
}

export default Default;
