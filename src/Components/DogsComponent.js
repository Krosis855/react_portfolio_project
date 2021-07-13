import React, { Component } from "react";
//import DOGS from "./shared/dogs.js";

export class DogsDirectory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [
        {
          id: 0,
          name: "Benjamin Button",
          image: "assets/images/Dog1.jpeg",
          breed: "toucan sam",
          gender: "male",
          featured: false,
          description: "He will only get younger, folks.",
        },
        {
          id: 1,
          name: "Pumpernickel",
          image: "assets/images/Dog2.jpeg",
          breed: "great grey wolf",
          gender: "male",
          featured: true,
          description:
            "Likes to go on short swims in the river. Very social and needs daily trips to the dog park. Needs tough toys since he is a strong chewer. Great with kids and other pets. ",
        },
        {
          id: 2,
          name: "Jamie Lee Curtis",
          image: "assets/images/Dog3.jpeg",
          breed: "basset hound",
          gender: "female",
          featured: false,
          description:
            "Tommy, unlock the door! Come here, now you listen to me. I want you to go down the stairs, and out the front door. I want you to go down the street to the Mackenzie's house. I want you to tell them to call the police and tell them to send them over here. Now, do you understand me? Go do as I say!",
        },
        {
          id: 3,
          name: "Julia Louis Dreyfus",
          image: "assets/images/Dog4.jpeg",
          breed: "snickerdoodle",
          gender: "male",
          featured: false,
          description:
            "I don’t need you to tell me what I don’t want, you stupid hipster doofus.",
        },
        {
          id: 4,
          name: "RuPaul Charles",
          image: "assets/images/Dog5.jpeg",
          breed: "chihuahua mix",
          gender: "male",
          featured: true,
          description:
            "If you don't love yourself, how in the hell you gonna love somebody else?",
        },
        {
          id: 5,
          name: "Madonna",
          image: "assets/images/Dog6.jpeg",
          breed: "Golden Retriever",
          gender: "female",
          featured: false,
          description:
            "Your heart is not open, so I must go The spell has been broken, I loved you so Freedom comes when you learn to let go Creation comes when you learn to say no",
        },
      ],
    };
  }

  render() {
    const dogsDirectory = this.state.dogs.map((dog) => {
      return (
        <div className="col">
          <img src={dog.image} alt={dog.name} />
          <h2>{dog.name}</h2>
          <p>{dog.description}</p>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{dogsDirectory}</div>
      </div>
    );
  }
}


