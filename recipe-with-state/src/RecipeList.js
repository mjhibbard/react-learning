import React, { Component } from "react";
import PropTypes from "prop-types";
import Recipe from "./Recipe";
import "./RecipeList.css";

class RecipeList extends Component {

  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object)
  };
  render() {
    const recipes = this.props.recipes.map((r, index) => (
      <Recipe key={index} {...r} />
    ));

    return <div className="recipe-list">{recipes}</div>;
  }
}

export default RecipeList;
