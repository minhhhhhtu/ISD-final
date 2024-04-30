import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Home/HomePage.tsx";
import HomePageLoggedIn from "./HomeLoggedIn/HomePageLoggedIn.tsx";
import LoginPage from "./Login/LoginPage.tsx";
import SignUp from "./Login/SignUp.tsx";
import ShoppingCart from "./ShoppingCart/DetailProductPage.tsx";
import DetailProduct from "./DetailProduct/Product.tsx"
import FavListContainer from "./favList/FavListContainer.tsx";
import { useAuth } from "./AuthContext/AuthContext.tsx";
import { ToastContainer, Zoom } from "react-toastify";
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

            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<HomePageLoggedIn />} />
            <Route path="/favourite" element={<FavListContainer />} />
            <Route path="/product/:productName" element={<DetailProduct />}/>
            <Route path="/carts" element={<ShoppingCart />} />
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
