import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <Router>
      <div>
        {/* Header with Navigation */}
        <header style={{ textAlign: 'center', margin: '20px 0' }}>
          <h1>Recipe Sharing Application</h1>
          <nav style={{ margin: '20px 0' }}>
            <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
            <Link to="/favorites" style={{ marginRight: '20px' }}>Favorites</Link>
            <Link to="/recommendations">Recommendations</Link>
          </nav>
        </header>

        {/* Main Content */}
        <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Routes>
            {/* Default Route: Home */}
            <Route
              path="/"
              element={
                <>
                  <AddRecipeForm />
                  <section style={{ marginTop: '20px', width: '80%' }}>
                    <RecipeList />
                  </section>
                </>
              }
            />

            {/* Recipe Details Route */}
            <Route path="/recipe/:recipeId" element={<RecipeDetails />} />

            {/* Favorites Route */}
            <Route
              path="/favorites"
              element={
                <div style={{ width: '80%' }}>
                  <FavoritesList />
                </div>
              }
            />

            {/* Recommendations Route */}
            <Route
              path="/recommendations"
              element={
                <div style={{ width: '80%' }}>
                  <RecommendationsList />
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
