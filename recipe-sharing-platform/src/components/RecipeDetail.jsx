import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [{ title, summary, image, ingredients, instructions }, setRecipe] = useState({});

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        const recipe = data.find((recipe) => recipe.id === Number(id));
        setRecipe(recipe);
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (!title) return <div>Loading...</div>;

  return (
    <div className="shadow-lg rounded-lg p-3 w-full">
      <img src={image} alt="Recipe" className="rounded-lg w-full max-h-60 hover:scale-110" />
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-600 mt-2">{summary}</p>
      </div>

      {/* Ingredients Section */}
      <section className="m-2 p-2 border-2 rounded-lg">
        <h2 className="text-lg font-semibold">Ingredients:</h2>
        <ul className="list-disc ml-6">
          {ingredients?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Instructions Section */}
      <section className="m-2 p-2 border-2 rounded-lg">
        <h2 className="text-lg font-semibold">Instructions:</h2>
        <ol className="list-decimal ml-6">
          {instructions?.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>
    </div>
  );
}

export default RecipeDetail;
