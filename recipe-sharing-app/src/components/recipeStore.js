import create from 'zustand';

const useRecipeStore = create((set, get) => ({
    recipes: [],

    // Add a new recipe
    addRecipe: (newRecipe) =>
        set((state) => ({
            recipes: [...state.recipes, newRecipe],
        })),

    // Set recipes (replace the entire recipes array)
    setRecipes: (recipes) => set({ recipes }),

    // Delete a recipe by ID
    deleteRecipe: (id) =>
        set((state) => ({
            recipes: state.recipes.filter((recipe) => recipe.id !== id),
        })),

    // Update a recipe by ID
    updateRecipe: (id, updatedData) =>
        set((state) => ({
            recipes: state.recipes.map((recipe) =>
                recipe.id === id ? { ...recipe, ...updatedData } : recipe
            ),
        })),

    // Search term state and action
    searchTerm: '',
    setSearchTerm: (term) => {
        set({ searchTerm: term });
        set({ filteredRecipes: get().computeFilteredRecipes() }); // Update filtered recipes
    },

    // Filtered recipes
    filteredRecipes: [],
    computeFilteredRecipes: () => {
        const { recipes, searchTerm } = get();
        return recipes.filter((recipe) =>
            recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    },

    // Favorites
    favorites: [],
    addFavorite: (recipeId) => {
        set((state) => {
            if (!state.favorites.includes(recipeId)) {
                return { favorites: [...state.favorites, recipeId] };
            }
            return state; // Avoid duplicates
        });
    },
    removeFavorite: (recipeId) =>
        set((state) => ({
            favorites: state.favorites.filter((id) => id !== recipeId),
        })),

    // Recommendations
    recommendations: [],
    generateRecommendations: () => {
        const { recipes, favorites } = get();
        const recommended = recipes.filter(
            (recipe) => favorites.includes(recipe.id) && Math.random() > 0.5
        );
        set({ recommendations: recommended });
    },
}));

export default useRecipeStore;