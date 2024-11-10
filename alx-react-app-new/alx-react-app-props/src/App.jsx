// src/App.jsx
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import UserContext from './components/UserContext';

function App() {
  const userData = { name: "Alice", age: 25, bio: "Loves hiking and photography" };

  return (
    <>
    <WelcomeMessage />
    <Header />
    <MainContent />
    <Footer />
    <UserContext.Provider value={userData}>
      <UserProfile />
    </UserContext.Provider>
  </>
  );
}

export default App;
