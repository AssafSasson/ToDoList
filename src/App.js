import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./components/Top.jsx";
import Footer from "./components/Footer";
import "./App.css";
import FullList from "./components/FullList.jsx";
import WelcomePage from "./components/WelcomePage.jsx";
import AddTask from "./components/AddTask.jsx";

function App() {
  return (
    <div className="App">
      <Top />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/fulllist" element={<FullList />} />
          <Route path="/add" element={<AddTask />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
