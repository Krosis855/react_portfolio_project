import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import Header from "./HeaderComponent";
import Body from "./BodyComponent"

function RenderCard({ item }) {
  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}

function Home(props) {
  return (
    <div>
        <div>
            <h4 className="hero-text">Find Your New Best Friend Today!</h4>
        </div>
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md m-1">
            <RenderCard item={props.cat} />
          </div>
          <div className="col-md m-1">
            <RenderCard item={props.dog} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
