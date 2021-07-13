import React, { Component } from "react";
//import DOGS from "./shared/dogs.js";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

export class DogsDirectory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDog: null,
    };
  }

  onDogSelect(dog) {
    this.setState({selectedDog: dog});
  }

  renderSelectedDog(dog) {
    if (dog) {
      return (
        <Card>
          <CardImg top src={dog.image} alt={dog.name} />
          <CardBody>
            <CardTitle>{dog.name}</CardTitle>
            <CardText>{dog.description}</CardText>
          </CardBody>
        </Card>
      )
    }
    return <div />;
  }

  render() {
    const dogsDirectory = this.props.dogs.map((dog) => {
      return (
        <div key={dog.id} className="col-md-5 m-1">
          <Card onClick={() => this.onDogSelect(dog)}>
            <CardImg width="100%" src={dog.image} alt={dog.name} />
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
        <div className="row">
          <div className="col-md-5 m-1">
            {this.renderSelectedDog(this.state.selectedDog)}
          </div>
        </div>
      </div>
    );
  }
}


