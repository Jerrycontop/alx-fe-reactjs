import React from 'react';
import { useRecipeStore } from '../recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="border rounded p-4 shadow">
            <h3 className="text-xl font-bold">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No matching recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
