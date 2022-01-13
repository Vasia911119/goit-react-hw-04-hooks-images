import Loader from "react-loader-spinner";
import React from "react";
import { LoaderWraper } from './Loader.styled';

function Spinner () {
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

export default Spinner;