import React, { useState } from 'react';
import useRecipeStore from '../recipeStore';

const EditRecipeForm = ({ recipeId, onClose }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [formData, setFormData] = useState({
    title: recipe.title,
    description: recipe.description,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    updateRecipe(recipeId, formData); // Update the recipe in the store
    onClose(); // Close the form after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
