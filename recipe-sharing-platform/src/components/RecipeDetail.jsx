import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    import("../data.json").then((data) => {
      const found = data.default.find((item) => item.id === Number(id));
      setRecipe(found);
    });
  }, [id]);

  if (!recipe) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      {/* Ingredients section */}
      <div className="bg-gray-100 rounded-md p-4 mb-6">
        <h2 className="text-lg font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
        </ul>
      </div>

      {/* Instructions section */}
      <div className="bg-gray-100 rounded-md p-4">
        <h2 className="text-lg font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Step one of the cooking instructions.</li>
          <li>Step two of the cooking instructions.</li>
          <li>Step three of the cooking instructions.</li>
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
