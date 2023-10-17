import "./App.css";

//type rcc
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default class App extends Component {
  pageSize = 15;
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/general"
              element={
                <News
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="General"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={this.pageSize}
                  country="in"
                  category="Business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={this.pageSize}
                  country="in"
                  category="Entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={this.pageSize}
                  country="in"
                  category="Health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={this.pageSize}
                  country="in"
                  category="Science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={this.pageSize}
                  country="in"
                  category="Sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={this.pageSize}
                  country="in"
                  category="Technology"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
