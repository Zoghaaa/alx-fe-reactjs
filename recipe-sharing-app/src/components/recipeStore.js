import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // All recipes
  searchTerm: '', // Search term input by the user
  filteredRecipes: [], // Computed filtered recipes based on the search term

  setSearchTerm: (term) =>
    set((state) => {
      const lowercasedTerm = term.toLowerCase();
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(lowercasedTerm)
      );
      return {
        searchTerm: term,
        filteredRecipes: filtered,
      };
    }),

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.filteredRecipes, newRecipe], // Keep filteredRecipes updated
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
      filteredRecipes: state.filteredRecipes.filter((recipe) => recipe.id !== id),
    })),
}));

export default useRecipeStore;
