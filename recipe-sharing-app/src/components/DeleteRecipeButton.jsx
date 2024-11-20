import React from 'react';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const DeleteRecipeButton = ({ id }) => {
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
    const navigate = useNavigate();

    const handleDelete = () => {
        deleteRecipe(id);
        navigate('/'); // Redirect to the home page or recipe list
    };

    return (
        <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white rounded"
        >
            Delete Recipe
        </button>
    );
};

export default DeleteRecipeButton;