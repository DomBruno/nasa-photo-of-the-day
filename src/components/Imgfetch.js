import React from "react";

const Imgfetch = function(props) {
  return (
    <div className="imgCard">
      <h2>{props.title}</h2>
      <h3>{props.date}{props.copyright}</h3>
      <img src={props.url} alt="NASA Pic Of The Day" />
      <p>{props.explanation}</p>
    </div>
  );
};
export default Imgfetch;