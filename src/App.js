import React, { useState } from "react";
import Login from "./componets/pages/Login";

import'./componets/pages/style.css';
import Main from "./componets/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./componets/Card";
import Register from "./componets/pages/Register";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleRegister = (userData) => {
    // Here, you can implement the registration logic, e.g., sending data to backend
    setUser(userData);
    setIsLoggedIn(true);
  };

  const handleLogin = (userData) => {
    // Here, you can implement the login logic, e.g., sending data to backend
    setUser(userData);
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login  onLogin={handleLogin}  />}>
          <Route path="/reg" element={<Register onRegister={handleRegister}/>} />
          <Route path="/card" element={<Card/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
        </>
      ) : (
        <Main user={user} />
      )}
    </div>
  );
};

export default App;
