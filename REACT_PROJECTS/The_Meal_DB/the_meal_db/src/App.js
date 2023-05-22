import React from 'react';
import Header from './Header.js/Header';
import { Outlet } from 'react-router-dom';
// import Footer from './Header.js/Footer';



const App = () => {
  return (
    <div>
    <Header/>
    <Outlet/>
    {/* <Footer/> */}
    </div>
  )}

export default App;