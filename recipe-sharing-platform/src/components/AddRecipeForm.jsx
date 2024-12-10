import React, { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const [errors, setErrors] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const resetFields = () => {
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({
      title: "",
      ingredients: "",
      steps: "",
    });
  };

  const validate = () => {
    let isValid = true;
    const newErrors = {
      title: "",
      ingredients: "",
      steps: "",
    };

    if (title.trim() === "") {
      newErrors.title = "Title is required.";
      isValid = false;
    }

    if (ingredients.trim() === "" || ingredients.split("\n").length < 2) {
      newErrors.ingredients = "Please enter at least two ingredients.";
      isValid = false;
    }

    if (steps.trim() === "") {
      newErrors.steps = "Steps are required.";
      isValid = false;
    }

    return { isValid, newErrors };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { isValid, newErrors } = validate();

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    console.log("Form data:", { title, ingredients, steps });

    resetFields();
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Add New Recipe
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Recipe Title */}
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div className="mb-5">
          <label
            htmlFor="ingredients"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Ingredients
          </label>
          <textarea
            id="ingredients"
            rows="3"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="List ingredients, separated by new lines"
          ></textarea>
          {errors.ingredients && (
            <p className="mt-1 text-sm text-red-600">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div className="mb-5">
          <label
            htmlFor="steps"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Preparation Steps
          </label>
          <textarea
            id="steps"
            rows="4"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Describe the preparation steps"
          ></textarea>
          {errors.steps && (
            <p className="mt-1 text-sm text-red-600">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 "
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
