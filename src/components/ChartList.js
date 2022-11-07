import React from "react";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";

const ChartList = (props) => {
  return (
    <div className="chartlist">
      <Link to={"/"}>
        <button className="chartlist-btn">&larr; Go Back</button>
      </Link>
      <div className="chartlist-content">
        <div className="chartlist-title">
          <h1>Chart Of Social Media Popularity</h1>
        </div>
        <Chart
          options={props.options}
          series={props.series}
          type="bar"
          width={800}
          height={520}
        />
      </div>
    </div>
  );
};

export default ChartList;
