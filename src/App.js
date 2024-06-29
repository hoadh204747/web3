import Navbar from "./components/Navbar/Navbar";
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreatePosition from "./pages/CreatePosition/CreatePosition";
import TopPosition from "./components/TopPosition/TopPosition";
import MainNet from "./components/MainNet/MainNet";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div className="app-inner">
          <Routes>
            <Route path="/create-position" element={<CreatePosition />} />
            <Route path="top-position" element={<TopPosition/>} />
            <Route path="main-net" element={<MainNet />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
