import Navbar from "./components/Navbar/Navbar";
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreatePosition from "./pages/CreatePosition/CreatePosition";
import TopPosition from "./components/TopPosition/TopPosition";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div className="app-inner">
          <Routes>
            <Route path="/create-position" element={<CreatePosition />} />
            <Route path="top-position" element={<TopPosition/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
