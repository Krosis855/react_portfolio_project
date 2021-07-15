import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderCatDirectoryItem({cat}) {
  return (
    <Card>
      <CardImg width="100%" src={cat.image} alt={cat.name}/>
      <CardImgOverlay>
        <CardTitle>
          {cat.name}
        </CardTitle>
      </CardImgOverlay>
    </Card>
  )
}

function CatsDirectory(props) {
  const catsDirectory = props.cats.map(cat => {
    return (
      <div key={cat.id} className="col-md-5 m-1">
        <RenderCatDirectoryItem cat={cat} onClick={props.onClick} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        {catsDirectory}
      </div>
    </div>
  )
}

export default CatsDirectory;



