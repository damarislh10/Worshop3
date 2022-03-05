import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Agregar from "../components/Agregar";

function AppRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/agregar" element={<Agregar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouters;
