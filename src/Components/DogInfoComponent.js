import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

export class DogInfo extends Component {
  renderDog(dog) {
    return (
      <div className="col-md-5 m-1">
        <Card>
          <CardImg top src={dog.image} alt={dog.name} />
          <CardBody>
            <CardTitle>{dog.name}</CardTitle>
            <CardText>{dog.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
  renderDogInfo(dogInfo) {
    if (dogInfo) {
      return (
        <div className="col-md-5 m-1">
          <h4>Animal Information</h4>
          {dogInfo.map((info) => {
            return (
              <div key={info.id}>
                <p>Sex: {info.sex}</p>
                <p>Breed: {info.breed}</p>
                <p>Age: {info.age}</p>
                <p>Previous Owner Comments: {info.ownerComments}</p>
              </div>
            );
          })}
        </div>
      );
    }
  }

  render() {
    if (this.props.dog) {
      return (
        <div className="container">
          <div>
            {this.renderDog(this.props.dog)}
            {this.renderDogInfo(this.props.dog.dogInfo)}
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}
