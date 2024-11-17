// src/recipeStore.js
import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [],
  generateRecommendations: () => set(state => {
    // Simple recommendation logic: Recommend recipes from favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id)
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;
