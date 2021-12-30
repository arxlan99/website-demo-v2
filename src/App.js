import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BattleCardsPage from "./pages/BattleCardsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/battle-cards" element={<BattleCardsPage />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
