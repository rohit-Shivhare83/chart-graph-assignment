import React from "react";
import "./Description.css";

const Description = () => {
  return (
    <div className="description">
      <h2 className="desc-title">Description For these Demo Project : </h2>
      <br />
      <p className="desc-content">
        - This Project Is build with <b>HTML</b> , pure <b>CSS</b> and{" "}
        <b>React Js</b>
      </p>
      <p className="desc-content">
        - Use od React Concepts like <b>Hooks</b> (useState , useEffect ) ,
        <b> React-Router-Dom</b> , <b>ApexChart</b>.
      </p>
    </div>
  );
};

export default Description;
