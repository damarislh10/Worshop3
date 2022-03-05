import { Navigate, Route, Routes } from "react-router-dom"
import Agregar from "../components/Agregar"

export const DashboardRoutes = () => {
    return (
        <>
         <Routes>
            <Route path="/agregar" element={<Agregar />} />
            <Route path='*' element={<Navigate to="/agregar"/>}/>
         </Routes>
        </>
    )
}