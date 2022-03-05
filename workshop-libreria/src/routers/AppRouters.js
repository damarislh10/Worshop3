import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Registro from "../components/Registro";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import { DashboardRoutes } from "./DashboardRoutes";



function AppRouters() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [checking, setChecking] = useState(false)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if(user?.uid) {
        console.log(user);
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
      setChecking(false)
    })
  }, [])

  if(checking) {
    return(
      <h1>un momento por favor...</h1>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <PublicRoute isAuthenticated={isLoggedIn}>
            <Login />
          </PublicRoute>
            } />
        <Route path="/registro" element={
          <PublicRoute isAuthenticated={isLoggedIn}>
            <Registro/>
          </PublicRoute>
        }/>
        <Route path="/*" element={
         <PrivateRoute isAuthenticated={isLoggedIn}>
           {/* <Agregar /> */}
           <DashboardRoutes/>
         </PrivateRoute>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouters;
