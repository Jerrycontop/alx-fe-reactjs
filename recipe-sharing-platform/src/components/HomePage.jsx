import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    import("../data.json").then((data) => setRecipes(data.default));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Recipes</h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
        <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h2 className="text-lg font-medium mb-2">{recipe.title}</h2>
          <p className="text-gray-600">{recipe.summary}</p>
        </div>
      </div>
    </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
