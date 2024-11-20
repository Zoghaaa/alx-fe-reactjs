import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from '../recipeStore';

const EditRecipeForm = () => {
    const { id } = useParams(); // Extract recipe ID from URL
    const navigate = useNavigate(); // To navigate back after editing
    const { recipes, updateRecipe } = useRecipeStore((state) => ({
        recipes: state.recipes,
        updateRecipe: state.updateRecipe,
    }));

    // Find the recipe to edit based on the ID
    const recipeToEdit = recipes.find((recipe) => recipe.id === parseInt(id));

    // Handle missing recipe
    if (!recipeToEdit) {
        return <p>Recipe not found!</p>;
    }

    // State for editing the recipe
    const [title, setTitle] = useState(recipeToEdit.title || '');
    const [description, setDescription] = useState(recipeToEdit.description || '');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent page reload
        updateRecipe(recipeToEdit.id, { title, description }); // Update recipe in store
        navigate('/'); // Redirect to the home page after editing
    };

    return (
        <div className="p-4">
            <h2 className="text-xl mb-4">Edit Recipe</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="title">
                        Title
                    </label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border rounded-md"
                        placeholder="Enter recipe title"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 border rounded-md"
                        rows="4"
                        placeholder="Enter recipe description"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditRecipeForm;