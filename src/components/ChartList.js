import React from "react";
import Chart from "react-apexcharts";

const ChartList = (props) => {
  return (
    <div>
      <Chart
        options={props.options}
        series={props.series}
        type="line"
        width={1000}
        height={620}
      />
    </div>
  );
};

export default ChartList;
