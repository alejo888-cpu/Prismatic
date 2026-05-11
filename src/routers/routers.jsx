import { Routes, Route } from "react-router-dom";
import MainLayout from "../feature/layouts/MainLayout";
import Home from "../feature/pages/Home";

export function RouterApp() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    );
}