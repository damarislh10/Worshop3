import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from '../components/Login';

function AppRouters() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/login' element={<Login/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default AppRouters;
