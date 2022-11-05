import "./App.css";
// import Chart from "react-apexcharts";

import React, { Component } from "react";
// import ChartList from "./components/ChartList";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/Welcome";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "apexchart-example",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        },
      },

      series: [
        {
          name: "series-1",
          data: [10, 40, 35, 50, 49, 60, 70, 91, 300],
        },
      ],
    };
  }
  render() {
    return (
      <div className="whole-content">
        <div className="navbar-app">
          <Navbar />
        </div>
        <div className="welcome-app">
          <Welcome />
        </div>
        {/* <ChartList options={this.state.options} series={this.state.series} /> */}
      </div>
    );
  }
}
export default App;

// white e7f2f8
// blue 74bdcb
// orange ffa384
// light yellow efe7bc
