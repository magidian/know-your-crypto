import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import Home from "./Routes/Home";
import CoinPage from "./Routes/CoinPage";

function App() {
  return (
    // <Router>
      <HashRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CoinPage/:id" element={<CoinPage />} />
          </Routes>
        </div>
      </HashRouter>
    // </Router>
  );
}

export default App;
