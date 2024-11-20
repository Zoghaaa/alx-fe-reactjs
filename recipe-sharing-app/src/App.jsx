import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList.jsx';
import AddRecipeForm from './components/AddRecipeForm.jsx';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList'; // New Favorites Component
import RecommendationsList from './components/RecommendationsList'; // New Recommendations Component

function App() {
    return (
        <Router>
            <div className="flex justify-center items-center h-screen">
                <div className="w-96 p-6 bg-white rounded-lg shadow-md">
                    <h1 className="text-2xl mb-6">Recipe Sharing App</h1>

                    {/* Search Bar */}
                    <SearchBar />

                    {/* Main Routes */}
                    <Routes>
                        <Route path="/recipes/:id" element={<RecipeDetails />} />
                        <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
                    </Routes>

                    {/* Recipe List */}
                    <RecipeList />

                    {/* Add Recipe Form */}
                    <AddRecipeForm />

                    {/* Favorites Section */}
                    <FavoritesList />

                    {/* Recommendations Section */}
                    <RecommendationsList />
                </div>
            </div>
        </Router>
    );
}

export default App;