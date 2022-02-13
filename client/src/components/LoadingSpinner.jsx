import React from "react";
import loadingSpinner from "../assets/icons/Eclipse-0.3s-204px.svg";

class LoadingSpinner extends React.Component {
  render() {
    return (
      <div className="spinner">
        <img src={loadingSpinner} alt="" />
      </div>
    );
  }
}

export default LoadingSpinner;
