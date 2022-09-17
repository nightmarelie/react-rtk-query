import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { FavouritesPage } from "./pages/FavouritesPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Navigation />
      <Route path="/" element={<HomePage />} />
      <Route path="/favorites" element={<FavouritesPage />} />
    </Routes>
  );
}

export default App;
