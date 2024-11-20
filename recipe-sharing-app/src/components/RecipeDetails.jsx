import React from 'react';
import { useParams } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const RecipeDetails = () => {
    const { id } = useParams();
    const recipe = useRecipeStore((state) =>
        state.recipes.find((recipe) => recipe.id === parseInt(id))
    );

    if (!recipe) {
        return <p>Recipe not found!</p>;
    }

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold">{recipe.title}</h2>
            <h3 className="mt-4 text-lg">Ingredients:</h3>
            <ul className="list-disc pl-6">
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeDetails;