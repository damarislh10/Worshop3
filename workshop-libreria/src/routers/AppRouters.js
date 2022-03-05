import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Agregar from "../components/Agregar";
import Registro from "../components/Registro";

function AppRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/registro" element={<Registro/>}/>
        <Route path="/agregar" element={<Agregar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouters;
