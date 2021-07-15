import React, { Component } from "react";
//import DOGS from "./shared/dogs.js";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { CatInfo } from "./CatInfoComponent";

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

  render() {
    const catsDirectory = this.props.cats.map((cat) => {
      return (
        <div key={cat.id} className="col-md-5 m-1">
          <Card onClick={() => this.props.onClick(cat.id)}>
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
      </div>
    );
  }
}


