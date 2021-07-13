import React, { Component } from "react";
//import DOGS from "./shared/dogs.js";

export class CatsDirectory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [
        {
            id: 0,
            name: "Anjelica Huston",
            image: "/assets/images/cat1.jpeg",
            breed: "tabby cat",
            gender: "female",
            featured: false,
            description: "Of wanting to pay my own way. I never asked my parents for money. I preferred to steal from my parents than ask them for money."
        },
        {
            id: 1,
            name: "Shakira",
            image: "/assets/images/cat2.jpeg",
            breed: "tabby cat",
            gender: "female",
            featured: true,
            description: "Oh baby when you talk like that, you make a woman go mad."
        },
        {
            id: 2,
            name: "Brad Pitt",
            image: "/assets/images/cat3.jpeg",
            breed: "tabby cat",
            gender: "male",
            featured: false,
            description: "If I’m gonna spend however long it takes to make a movie, give up 14 hours a day for however many weeks or months, then it’s very important for me to know that I’m working with people who I respect and enjoy and that we’re going for something together."
        },
        {
            id: 3,
            name: "Charles Nelson Riley",
            image: "/assets/images/cat4.jpeg",
            breed: "tabby cat",
            gender: "female",
            featured: false,
            description: "The thing that's funny is that everyone thinks I'm dead."
        },
        {
            id: 4,
            name: "Juliette Lewis",
            image: "/assets/images/cat5.jpeg",
            breed: "tabby cat",
            gender: "female",
            featured: false,
            description: "Can you save us, Britney Spears? Can we be saved???"
        },
        {
            id: 5,
            name: "Queen Latifah",
            image: "/assets/images/cat6.jpeg",
            breed: "tabby cat",
            gender: "female",
            featured: false,
            description: "I have a drum set in my dressing room. I play drums to relax and have some fun."
        }
    ],
    };
  }

  render() {
    const catsDirectory = this.state.cats.map((cat) => {
      return (
        <div className="col">
          <img src={cat.image} alt={cat.name} />
          <h2>{cat.name}</h2>
          <p>{cat.description}</p>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{catsDirectory}</div>
      </div>
    );
  }
}


