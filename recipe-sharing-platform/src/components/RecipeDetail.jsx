import React from "react";
import "./RecipeDetail.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Import the recipes data
import recipesData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe by id from data.json
    const selectedRecipe = recipesData.find(
      (item) => item.id.toString() === id
    );
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-6">Recipe not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Recipe Image */}
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-64 object-cover rounded-2xl shadow-md mb-6"
      />

      {/* Recipe Title */}
      <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>

      {/* Ingredients */}
      <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
      <ul className="list-disc pl-6 mb-6">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      {/* Instructions */}
      <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
      <p className="leading-relaxed">{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
