import { CATS } from "../shared/cats";
import { DOGS } from "../shared/dogs.js";
import { DOGINFORMATION } from "../shared/doginfo";
import React, { Component } from "react";
import Body from "./BodyComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Navbar from "./NavbarComponent";
import DogsDirectory from "./DogsComponent";
import CatsDirectory from "./CatsComponent";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import DogInfo from "./DogInfoComponent";
import CatInfo from "./CatInfoComponent";
import Home from './HomeComponent';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: CATS,
      dogs: DOGS,
      dogInfo: DOGINFORMATION,
      selectedCat: null,
      selectedDog: null,
    };
  }

  onDogSelect(dogId) {
    this.setState({ selectedDog: dogId });
  }

  onCatSelect(catId) {
    this.setState({ selectedCat: catId });
  }

  render() {
    const HomePage = () => {
      return (
        <Home />
      )
    }
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/home" component={HomePage}/>
            <Route exact path='/dogs' render={() => <DogsDirectory dogs={this.state.dogs} />} />
            <Route exact path='/cats' render={() => <CatsDirectory cats={this.state.cats} />} />
            <Redirect to='/home'/>
          </Switch>
        </Router>
        <Header />
        <Body />

        <DogInfo
          dog={
            this.state.dogs.filter(
              (dog) => dog.id === this.state.selectedDog
            )[0]
          }
        />

        <CatInfo
          cat={
            this.state.cats.filter(
              (cat) => cat.id === this.state.selectedCat
            )[0]
          }
        />
        <Footer />
      </>
    );
  }
}

export default Main;
