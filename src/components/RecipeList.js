import React, { Component } from "react";
import Recipe from "./Recipe";
class RecipeList extends Component {
  render() {
    const { recipes } = this.props;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5 text-center">
              <h5 className="heading">Recipe List</h5>
            </div>
          </div>
          <div className="row text-center mt-5">
            {recipes.map((item) => {
                return  <div className="col-lg-3 text-center">
                    <Recipe  id={item.id} recipe={item} image_url={item.image} key={item.id}/>
                </div>
              
             
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeList;
