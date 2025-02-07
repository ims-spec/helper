import React from "react";

import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/dashboard/Home";
import Todos from "../pages/dashboard/Todos";
import NotFoundPage from "../pages/NotFoundPage";


export default function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="todos" element={<Todos />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
