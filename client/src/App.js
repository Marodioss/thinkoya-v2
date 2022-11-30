import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { About } from "./pages/About";
import { AddDesign } from "./pages/AddDesign";
import { ContactUS } from "./pages/Contactus";
import { Design } from "./pages/Design";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:idDesigns" element={<Design />} />
        <Route path="/AddDesign" element={<AddDesign />} />
        <Route path="/ContactUS" element={<ContactUS />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
