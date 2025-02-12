import React from "react";
import Logo from "./components/Logo.jsx";
import NavOptions from "./components/NavOptions.jsx"
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx"
import Store from "./pages/Store.jsx"
import Login from "./pages/Login.jsx"
import SignUp from "./pages/SignUp.jsx"
const App = () => {
  
  return (
    <>
      <nav className='relative flex items-center justify-between bg-gray-700 font-semibold w-full'>
        <Logo/>
        <NavOptions />
      </nav>
      <Routes>
        <Route  path='/' element={<HomePage/>}/>
        <Route  path='/store' element={<Store/>}/>
        <Route  path='/login' element={<Login/>}/>
        <Route  path='/sign-up' element={<SignUp/>}/>
      </Routes>
    </>
  );
}
 
export default App;