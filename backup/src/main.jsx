import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePages from './pages/homepages.jsx';
import ProductPages from './pages/productpages.jsx';

const router = createBrowserRouter([
  {path: "/",
  element: <HomePages/>
},
{ path: "/product",
  element: <ProductPages/>

}

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
