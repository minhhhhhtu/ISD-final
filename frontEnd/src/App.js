import HomePage from "./Home/HomePage.tsx";
import MainPage from "./Login/MainPage.tsx";
import DetailProductPage from "./DetailProduct/DetailProductPage.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return ( 
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<MainPage />} />
            <Route path={`/products`} element={<DetailProductPage/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
  }

export default App;
