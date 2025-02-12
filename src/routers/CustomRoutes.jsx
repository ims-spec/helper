import React from "react";

import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/dashboard/Home";
import Todos from "../pages/dashboard/Todos";
import Budget from "../pages/dashboard/Budget"
import Reports from "../pages/dashboard/Reports"
import Experience from "../pages/dashboard/Experience";
import NotFoundPage from "../pages/NotFoundPage";


export default function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="todos" element={<Todos />} />
        <Route path="budget" element={<Budget />} />
        <Route path="reports" element={<Reports />} />
        <Route path="experience" element={<Experience />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
