import { useState } from "react";

function AddRecipe() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // In future tasks we will save this data to state or an API
    console.log({ title, description });
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Add New Recipe</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="Recipe title"
          />
        </div>

        <div>
          <label className="block mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded p-2"
            rows={4}
            placeholder="Recipe description"
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddRecipe;
