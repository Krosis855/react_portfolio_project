import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

export class CatInfo extends Component {
  renderCat(cat) {
    return (
      <div className="col-md-5 m-1">
        <Card>
          <CardImg top src={cat.image} alt={cat.name} />
          <CardBody>
            <CardTitle>{cat.name}</CardTitle>
            <CardText>{cat.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
  renderCatInfo(catInfo) {
    if (catInfo) {
      return (
        <div className="col-md-5 m-1">
          <h4>Animal Information</h4>
          {catInfo.map((info) => {
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
    if (this.props.cat) {
      return (
        <div className="container">
          <div className="row">
            {this.renderCat(this.props.cat)}
            {this.renderCatInfo(this.props.cat.catInfo)}
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}
