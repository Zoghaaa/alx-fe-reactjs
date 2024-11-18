<<<<<<< HEAD
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter basename="/">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
=======
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
>>>>>>> aa9ec3e56c4e2d217635d2c2bf28056c3bfa892c
