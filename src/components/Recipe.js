import React, { Component } from "react";
import { Link } from "react-router-dom";
class Recipe extends Component {
  render() {
    const { recipe } = this.props;
    return (
      // <div style={{
      //   marginBottom: 10
      // }}>
      //   <h5 className="heading">{recipe.name}</h5>
      //   <img
      //     src={recipe.image}
      //     alt={recipe.name}
      //     style={{
      //       height: 80,
      //       width: 100,
      //     }}
      //   ></img>
      //   <p className="heading">{recipe.description}</p>
      //   <a className="btn btn-sm btn-info">View Details</a>
      // </div>

      <div className="card mb-3">
        <img
          class="card-img-top"
          style={{
            height: 158,
            width: 254,
          }}
          src={recipe.image}
          alt={recipe.name}
        ></img>
        <div className="card-body text-left">
          <h5 className="card-title heading">{recipe.name}</h5>

          <p className="card-text heading">{recipe.description}</p>
          <Link to={`/recipes/${recipe.name}`} className="card-link btn btn-sm btn-info heading">
              View Details
          </Link>
            
          <a
            href={recipe.image}
            rel="noopener noreferrer"
            target="_blank"
            className="card-link btn btn-sm btn-info heading"
          >
            View Recipe
          </a>
        </div>
      </div>
    );
  }
}

export default Recipe;
