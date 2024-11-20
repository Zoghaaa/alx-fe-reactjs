import { useRecipeStore } from '../recipeStore.js';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom

const RecipeList = () => {
    // Get the filtered recipes from the Zustand store
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

    return (
        <div>
            {/* Check if there are any filtered recipes */}
            {filteredRecipes.length > 0 ? (
                filteredRecipes.map((recipe) => (
                    <div key={recipe.id} className="mb-4">
                        <h3 className="font-semibold">
                            {/* Make the recipe title clickable */}
                            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                        </h3>
                        <p>{recipe.description}</p>
                    </div>
                ))
            ) : (
                <p>No recipes found.</p>
            )}
        </div>
    );
};

export default RecipeList;