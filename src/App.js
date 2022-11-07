import React, { Component } from "react";

import "./App.css";

import ChartList from "./components/ChartList";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/Welcome";
import Description from "./components/Description/Description";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "apexchart-example",
        },
        xaxis: {
          categories: [
            "Instagram",
            "Twitter",
            "Facebook",
            "Reddit",
            "Telegram",
            "Pinterest",
            "Youtube",
            "WhatsApp",
            "WeChat",
          ],
        },
      },

      series: [
        {
          name: "series-1",
          data: [210, 250, 270, 100, 150, 140, 300, 250, 60],
        },
      ],
    };
  }
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="whole-content">
                <div className="navbar-app">
                  <Navbar />
                </div>
                <div className="welcome-app">
                  <Welcome />
                </div>
                <div className="description-app">
                  <Description />
                </div>
                <div className="footer-app">
                  <Footer />
                </div>
              </div>
            }
          />
          <Route
            path="/ChartList"
            element={
              <div className="chart-list-app">
                <div className="navbar-app">
                  <Navbar />
                </div>
                <ChartList
                  options={this.state.options}
                  series={this.state.series}
                />
                <div className="footer-app">
                  <Footer />
                </div>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;

// white e7f2f8
// blue 74bdcb
// orange ffa384
// light yellow efe7bc
