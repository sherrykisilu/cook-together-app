import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Overview, SignUp, Login } from './pages'
import { Navbar, NewRecipeForm, Recipes } from './components'
import './App.css'

function App() {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = (user) => {
    setUser(true);
    setIsAuthenticated(true);
    // navigate("/recipes");
    console.log(user);
  }

  const handleLogin = (user) => {
    setUser(true);
    setIsAuthenticated(true);
    // navigate("/recipes");
    console.log(user);
  }

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    // navigate("/");
    // console.log();
  }

  useEffect(()=> {
    if(!isAuthenticated) {
      navigate("/");
    } 
    else {
      navigate("/recipes");
    }
  }, [isAuthenticated])
  

  return (
    <>
      <div className="flex w-screen h-screen bg-black">
        <Navbar user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={ <Overview /> } />
          <Route path="/signup" element={ <SignUp  onSignUp={handleSignUp} /> } />
          <Route path="/login" element={ <Login onLogin={handleLogin} /> } />
          <Route path="/recipes" element={ <Recipes /> } />
          <Route path="/create-recipe" element={ <NewRecipeForm /> } />
        </Routes>
      </div>
    </>
  )
}

export default App