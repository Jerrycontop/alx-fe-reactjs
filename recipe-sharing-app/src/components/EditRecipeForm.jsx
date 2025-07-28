import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleUpdate = (event) => {
  event.preventDefault();
  updateRecipe({ id: recipe.id, title, description });
  alert('Recipe updated!');
};

  return (
    <form onSubmit={handleUpdate}>
      <h4>Edit Recipe</h4>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <button type="submit">Update</button>
    </form>
  );
};

export default EditRecipeForm;
