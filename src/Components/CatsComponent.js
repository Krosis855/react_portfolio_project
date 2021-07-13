import React, { Component } from "react";
//import DOGS from "./shared/dogs.js";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


export class CatsDirectory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCat: null,
    };
  }

onCatSelect(cat) {
  this.setState({selectedCat: cat})
}

renderSelectedCat(cat) {
  if (cat) {
    return (
      <Card>
        <CardImg top src={cat.image} alt={cat.name} />
        <CardBody>
          <CardTitle>{cat.name}</CardTitle>
          <CardText>{cat.description}</CardText>
        </CardBody>
      </Card>
    )
  }
  return <div />
}

  render() {
    const catsDirectory = this.props.cats.map((cat) => {
      return (
        <div key={cat.id} className="col-md-5 m-1">
          <Card onClick={() => this.onCatSelect(cat)}>
            <CardImg width="100%" src={cat.image} alt={cat.name}></CardImg>
            <CardImgOverlay>
              <CardTitle>{cat.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          {catsDirectory}
        </div>
        <div className="row">
          <div className="col-md-5 m-1">
            {this.renderSelectedCat(this.state.selectedCat)}
          </div>
        </div>
      </div>
    );
  }
}


