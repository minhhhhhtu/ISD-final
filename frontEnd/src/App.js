import HomePage from "./Home/HomePage.tsx";
import LoginPage from "./Login/LoginPage.tsx";
import DetailProductPage from "./DetailProduct/DetailProductPage.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return ( 
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<LoginPage />} />
            <Route path={`/products`} element={<DetailProductPage/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
  }

export default App;
