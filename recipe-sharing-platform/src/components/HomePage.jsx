import React , {useState , useEffect} from "react";

const HomePage = ()=>{
const [recipes , setRecipes] = useState([])

useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

return(
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    {recipes.map((recipe) => (
      <div key={recipe.id} 
      className="card bg-white shadow-md p-4 rounded-lg hover:shadow-lg">
        <img 
        src={recipe.image} 
        alt={recipe.title} 
        className="w-full h-40 object-cover rounded-t-lg" />
        <h2 className="text-lg font-bold mt-4">{recipe.title}</h2>
        <p className="text-gray-600 mt-2">{recipe.summary}</p>
      </div>
    ))}
  </div>
)


}

export default HomePage;