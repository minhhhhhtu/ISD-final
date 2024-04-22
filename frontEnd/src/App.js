import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Home/HomePage.tsx";
import LoginPage from "./Login/LoginPage.tsx";
import SignUp from "./Login/SignUp.tsx";
import DetailProductPage from "./DetailProduct/DetailProductPage.tsx";
import FavListContainer from "./favList/FavListContainer.tsx";
import { useAuth } from "./AuthContext/AuthContext.tsx";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={isLoggedIn ? <Navigate to="/favourite" /> : <HomePage />} />
            <Route path="/favourite" element={isLoggedIn ? <FavListContainer /> : <Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/carts" element={<DetailProductPage />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
