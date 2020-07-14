import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import "./App.css";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
      <Header></Header>
        <BrowserRouter>        
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/index" component={Home} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contact} />
          </Switch> 
        </BrowserRouter>   
      <Footer></Footer>
    </div>   
  );
}


export default App;
