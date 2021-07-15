import React, { Component } from "react";
//import DOGS from "./shared/dogs.js";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
} from "reactstrap";
import { DogInfo } from "./DogInfoComponent";
export class DogsDirectory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDog: null,
    };
  }
  onDogSelect(dog) {
    this.setState({ selectedDog: dog });
  }

  render() {
    const dogsDirectory = this.props.dogs.map((dog) => {
      return (
        <div key={dog.id} className="col-md-5 m-1">
          <Card onClick={() => this.props.onClick(dog.id)}>
            <CardImg width="100%" src={dog.image} alt={dog.name}></CardImg>
            <CardImgOverlay>
              <CardTitle>{dog.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          {dogsDirectory}
        </div>
      </div>
    );
  }
}
