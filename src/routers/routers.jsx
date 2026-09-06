import { Routes, Route } from "react-router-dom";
import MainLayout from "../shared/layouts/MainLayout";
import Home from "../features/Landing/pages/Home";
import ServiciosPage from "../features/Services/pages/ServiciosPage";
import GaleriaPage from "../features/Galeria/pages/GaleriaPage";

export function RouterApp() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="servicios" element={<ServiciosPage />} />
        <Route path="galeria" element={<GaleriaPage />} />
      </Route>
    </Routes>
  );
}
