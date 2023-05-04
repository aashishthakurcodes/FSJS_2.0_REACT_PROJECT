import React from 'react';
import Header from './Header.js/Header';
// import Container from './Container/Container';
import { Outlet } from 'react-router-dom';



const App = () => {
  return (
    <div>
    <Header/>
    <Outlet/>
   
   
    </div>
  )
}





export default App