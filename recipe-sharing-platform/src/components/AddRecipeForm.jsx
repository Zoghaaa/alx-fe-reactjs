import React, { useState } from "react";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "", // Add a new state for steps
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, ingredients, steps } = formData;

    // Validation: Ensure all fields are filled
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }

    // Validation: Ensure at least two ingredients are entered
    const ingredientsArray = ingredients.split("\n");
    if (ingredientsArray.length < 2) {
      setError("Please enter at least two ingredients.");
      return;
    }

    // Handle form submission logic (e.g., sending data to a server or updating state)
    console.log("New Recipe Submitted:", { title, ingredientsArray, steps });
    setError(""); // Clear error after successful submission
    alert("Recipe added successfully!");

    // Reset the form
    setFormData({ title: "", ingredients: "", steps: "" });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-black mb-6 text-center">Add a New Recipe</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <div>
          <label htmlFor="title" className="block font-medium mb-1">
            Recipe Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Enter recipe title"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label htmlFor="ingredients" className="block font-medium mb-1">
            Ingredients (separate by new lines):
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Enter ingredients (e.g., '200g flour\n100g sugar')"
          ></textarea>
        </div>

        {/* Steps */}
        <div>
          <label htmlFor="steps" className="block font-medium mb-1">
            Preparation Steps (separate by new lines):
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Enter steps (e.g., 'Mix ingredients\nBake for 20 minutes')"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-900 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
