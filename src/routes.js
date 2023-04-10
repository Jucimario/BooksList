import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Login from "./pages/Login";
import Book from "./pages/Book";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login/>} />
        <Route path="/Book" element={<Book/>} />
      </Routes>
    </BrowserRouter>
  );
}