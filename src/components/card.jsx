import React, { Component } from "react";

class Card extends Component {
  state = {};
  render() {
    const { label, calories, image, ingredientLines } = this.props.card;
    return (
      <div>
        <h1>{label}</h1>
        <p> Calories: {calories}</p>
        <img className="rounded" src={image} alt="image" />
        <ol>
          {ingredientLines.map((ingredient) => (
            <li>{ingredient}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Card;
