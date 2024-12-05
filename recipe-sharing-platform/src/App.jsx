import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/new" element={<AddRecipeForm />} /> {/* Specific route first */}
        <Route path="/recipe/:id" element={<RecipeDetail />} /> {/* Dynamic route last */}
      </Routes>
    </Router>
  );
}

export default App;
