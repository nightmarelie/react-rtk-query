import React from "react";
import { Route, Routes } from "react-router-dom";
import { FavoritesPage } from "./pages/FavoritesPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Navigation />
      <Route path="/" element={<HomePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
}

export default App;
