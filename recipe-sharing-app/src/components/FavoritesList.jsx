import React from 'react';
import useRecipeStore from '../recipeStore';

const FavoritesList = () => {
    const favorites = useRecipeStore((state) => state.favorites);
    const recipes = useRecipeStore((state) => state.recipes);
    const removeFavorite = useRecipeStore((state) => state.removeFavorite);

    const favoriteRecipes = recipes.filter((recipe) => favorites.includes(recipe.id));

    return (
        <div className="mt-6">
            <h2 className="text-lg font-bold mb-3">Favorites</h2>
            {favoriteRecipes.length > 0 ? (
                favoriteRecipes.map((recipe) => (
                    <div key={recipe.id} className="flex justify-between items-center p-2 bg-gray-100 rounded mb-2">
                        <div>
                            <h3 className="font-medium">{recipe.title}</h3>
                            <p className="text-sm text-gray-600">{recipe.description}</p>
                        </div>
                        <button
                            className="text-red-500 font-semibold"
                            onClick={() => removeFavorite(recipe.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))
            ) : (
                <p className="text-gray-500">No favorites yet.</p>
            )}
        </div>
    );
};

export default FavoritesList;