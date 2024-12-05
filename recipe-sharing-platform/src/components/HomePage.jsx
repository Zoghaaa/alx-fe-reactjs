import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));
  }, []);

  if (recipes.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      {/* Add New Recipe Link */}
      <div className="mb-6">
        <Link
          to="/recipe/new"
          className="text-blue-500 underline hover:text-blue-700"
        >
          Add New Recipe
        </Link>
      </div>

      {/* Recipe Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="card bg-white shadow-md p-4 rounded-lg hover:shadow-lg"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h2 className="text-lg font-bold mt-4">{recipe.title}</h2>
            <p className="text-gray-600 mt-2">{recipe.summary}</p>
            <Link
              to={`/recipe/${recipe.id}`}
              className="text-blue-500 underline hover:text-blue-700 mt-4 block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
