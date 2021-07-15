import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
} from "reactstrap";

function RenderDogDirectoryItem({dog, onClick}) {
  return (
    <Card onClick={() => onClick(dog.id)}>
      <CardImg width="100%" src={dog.image} alt={dog.name} />
      <CardImgOverlay>
        <CardTitle>{dog.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  )
}

function DogsDirectory(props) {
  const dogsDirectory = props.dogs.map(dog => {
    return (
      <div key={dog.id} className="col-md-5 m-1">
        <RenderDogDirectoryItem dog={dog} onClick={props.onClick} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        {dogsDirectory}
      </div>
    </div>
  )
}

export default DogsDirectory;
