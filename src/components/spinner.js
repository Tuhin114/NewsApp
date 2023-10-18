import React from "react";
import Loading from "./Loading.gif";

const spinner = () => {
  return (
    <div className="text-center">
      <img className="my-3" src={Loading} alt="loading" />
    </div>
  );
};

export default spinner;
