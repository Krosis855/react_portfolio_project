import { CATS } from "../shared/cats";
import { DOGS } from "../shared/dogs.js";
import { DOGINFORMATION } from "../shared/doginfo";
import React, { Component } from "react";
import Body from "./BodyComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Navbar from "./NavbarComponent";
import { DogsDirectory } from "./DogsComponent";
import { CatsDirectory } from "./CatsComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cats: CATS,
            dogs: DOGS,
            dogInfo: DOGINFORMATION,
            selectedCat: null,
            selectedDog: null
        };
    }

    onDogSelect(dog) {
        this.setState({selectedDog: dog});
      }

    onCatSelect(cat) {
        this.setState({selectedCat: cat})
      }

      render() {
        return (
            <>
              <Router>
                <Navbar />
                <Switch>
                  <Route path="/" exact />
                </Switch>
              </Router>
              <Header />
              <Body />
              <DogsDirectory dogs={this.state.dogs} onClick={dog => this.onDogSelect(dog)} />
              <CatsDirectory cats={this.state.cats} onClick={cat => this.onCatSelect(cat)}/>
              <Footer />
            </>
          );
      }
}

export default Main;