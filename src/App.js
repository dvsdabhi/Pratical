import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Admin from './components/Admin';
import User from './components/User';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <>
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/user' element={<User/>} />
        <Route path='/update/:id' element={<UpdateUser/>} />
      </Routes>
    </div>
    </>
  );
}

export default App;
