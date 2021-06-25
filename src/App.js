import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/HomePage";
import About from "./components/About/About";
import Terms from "./components/TermsOfUse/Terms";
import Footer from "./components/Footer/Footer";
import DataFromDB from "./components/DataFromDB/DataFromDB"; //will not show in app
import Login from "./components/Login/Login"; //admin login page

import "./App.css";
import "./components/Navbar/Navbar.css";
import "./components/Home/Home.css";
import "./components/Footer/Footer.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/terms" component={Terms} />
          <Route path="/login" component={Login} />
          <Route path="/cpanel" component={DataFromDB} />
          <Route path="/:xyz" component={HomePage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
