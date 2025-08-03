import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Add new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.recipes, newRecipe].filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // Set entire list
  setRecipes: (recipes) => set({ recipes }),

  // Delete recipe
  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updated,
        filteredRecipes: updated.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  // Update recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      return {
        recipes: updated,
        filteredRecipes: updated.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  // Set search term and trigger filtering
  setSearchTerm: (term) => {
    const recipes = get().recipes;
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    set({ searchTerm: term, filteredRecipes: filtered });
  },
}));
