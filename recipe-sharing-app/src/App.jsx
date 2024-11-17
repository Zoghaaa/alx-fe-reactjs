import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <div>
        <header style={{ textAlign: 'center', margin: '20px 0' }}>
          <h1>Recipe Sharing Application</h1>
        </header>

        <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Routes>
            {/* Default Route: Displays the Form and Recipe List */}
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

            {/* Route for Recipe Details */}
            <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
