import HomePage from "./Home/HomePage.tsx";
import LoginPage from "./Login/LoginPage.tsx";
import SignUp from "./Login/SignUp.tsx";
import DetailProductPage from "./DetailProduct/DetailProductPage.tsx";
import FavListContainer from "./favList/FavListContainer.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/carts" element={<DetailProductPage />} />
            <Route path="/favourite" element={<FavListContainer />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
