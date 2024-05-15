import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Home/HomePage.tsx";
import HomePageLoggedIn from "./HomeLoggedIn/HomePageLoggedIn.tsx";
import LoginPage from "./Login/LoginPage.tsx";
import SignUp from "./Login/SignUp.tsx";
import ShoppingCart from "./ShoppingCart/DetailProductPage.tsx";
import DetailProduct from "./DetailProduct/Product.tsx";
import FavListContainer from "./favList/FavListContainer.tsx";
import SearchComponent from "./Search/SearchComponent.tsx";
import Profile from "./Profile/Profile.tsx";
import { ToastContainer, Zoom } from "react-toastify";
import { ProductProvider } from "./ProductContext/ProductContext.tsx";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/home" element={<HomePageLoggedIn />} />
              <Route path="/favourite" element={<FavListContainer />} />
              <Route path="/product/:productName" element={<DetailProduct />} />
              <Route path="/carts" element={<ShoppingCart />} />
              <Route path="/search" element={<SearchComponent />} />
              <Route path="/profile" element={<Profile />} />
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
    </ProductProvider>
  );
}

export default App;
