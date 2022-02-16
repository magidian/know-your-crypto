import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import CoinPage from "./Routes/CoinPage";
import ErrorPage from "./Routes/ErrorPage"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CoinPage/:id" element={<CoinPage />} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
