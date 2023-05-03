import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import About from "./About_pg/About";
import Contact from "./Contact_pg/Contact"
import Info from './moreInfo/Info';
import Header from './Header.js/Header';





const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
   
  },
  
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Header/>,
        element:<Contact/>
      },
      {
        path:'/info/:id',
        element:<Info/>
      }
 
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);


