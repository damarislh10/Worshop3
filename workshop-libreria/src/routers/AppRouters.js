import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from '../components/Login';
import Registro from '../components/Registro';

function AppRouters() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registro' element={<Registro/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default AppRouters;
