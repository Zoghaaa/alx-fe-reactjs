// src/components/AddRecipeForm.js
import React, { useState } from 'react';

const AddRecipeForm = () => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Simple validation
        if (!title || !ingredients || !instructions) {
            setError('All fields are required');
            return;
        }

        const ingredientsList = ingredients.split(',').map(item => item.trim());
        if (ingredientsList.length < 2) {
            setError('Please provide at least two ingredients');
            return;
        }

        // Reset error and handle form submission logic here
        setError('');
        console.log({ title, ingredients: ingredientsList, instructions });

        // Clear form fields after submission
        setTitle('');
        setIngredients('');
        setInstructions('');
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6 text-blue text-center">Add a New Recipe</h2>
            {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-black mb-2" htmlFor="title">Recipe Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-black mb-2" htmlFor="ingredients">Ingredients (comma separated)</label>
                    <textarea
                        id="ingredients"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        className="w-full p-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                        rows="4"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-black mb-2" htmlFor="instructions">Preparation Steps</label>
                    <textarea
                        id="instructions"
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        className="w-full p-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                        rows="4"
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition duration-300">
                    Add Recipe
                </button>
            </form>
        </div>
    );
};

export default AddRecipeForm;