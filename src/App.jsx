import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <div>
      <header style={{ textAlign: 'center', margin: '20px 0' }}>
        <h1>Recipe Sharing Application</h1>
      </header>

      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <AddRecipeForm />

        
        <section style={{ marginTop: '20px', width: '80%' }}>
          <RecipeList />
        </section>
      </main>
    </div>
  );
}

export default App;
