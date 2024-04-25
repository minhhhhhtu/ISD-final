import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Home/HomePage.tsx";
import HomePageLoggedIn from "./HomeLoggedIn/HomePageLoggedIn.tsx";
import LoginPage from "./Login/LoginPage.tsx";
import SignUp from "./Login/SignUp.tsx";
import DetailProductPage from "./DetailProduct/DetailProductPage.tsx";
import FavListContainer from "./favList/FavListContainer.tsx";
import { useAuth } from "./AuthContext/AuthContext.tsx";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={isLoggedIn ? <Navigate to="/favourite" /> : <HomePage />}
            />

            <Route path="/home" element={<HomePageLoggedIn />} />
            <Route path="/favourite" element={<FavListContainer />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/carts" element={<DetailProductPage />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Zoom}
        />
      </header>
    </div>
  );
}

export default App;
