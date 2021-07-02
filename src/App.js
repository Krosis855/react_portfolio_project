import React, { Component } from 'react';
import Header from './Components/HeaderComponent';
import Footer from './Components/FooterComponent';
import Navbar from './Components/NavbarComponent';
import Body from './Components/BodyComponent';
import { DOGS } from './shared/dogs.js';
import { CATS } from './shared/cats';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      dogs: DOGS,
      cats: CATS
     }
  }
  render() { 
    return ( 
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact />
          </Switch>
        </Router>
          <Header />
          <Body />
          <Footer />
      </>
     );
  }
}

export default App;


