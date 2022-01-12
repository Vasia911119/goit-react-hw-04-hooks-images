import Loader from "react-loader-spinner";
import React, { Component } from "react";
import { LoaderWraper } from './Loader.styled';

export default class Spinner extends Component {
  render() {
    return (
      <LoaderWraper>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={150}
          width={150}
          timeout={1000}
        />
      </LoaderWraper>
    );
  };
};