// import logo from "./logo.svg";
import "./App.css";
// import Greeting from "./components/Greeting";
// import Counter from "./components/Counter";
import { Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { ThemeProvider } from "./contexts/ThemeContext";
import React, { useState, useEffect } from 'react';
import LoginForm from "./pages/Login";
import SignupForm from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const checkAuth = () => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem('jwtToken', token);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    setIsAuthenticated(false);
  };


  return (
    <div className="App">
    
      {/* <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Counter></Counter> */}
      <ThemeProvider>
        {/* <Router>
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link>
            </nav>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
            </Switch>
        </Router> */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes> */}
         <div>
      {isAuthenticated ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <div>
          <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
          </button>
          {isLogin ? (
            <LoginForm onLogin={handleLogin} />
          ) : (
            <SignupForm onSignup={handleLogin} />
          )}
        </div>
      )}
    </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
