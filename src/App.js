import React, { Component }from 'react';
import Header from './Components/HeaderComponent';
import Footer from './Components/FooterComponent';
import Navbar from './Components/NavbarComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
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
          <Footer />
        
      </>
     );
  }
}

export default App;


