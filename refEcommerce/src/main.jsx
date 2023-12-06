import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ErrorPage from './pages/errorPage';
import ProductsPage from './pages/productsPage';

const router = createBrowserRouter([
  {
    path:"/",
    element: <div>Hello world</div>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/login",
    element: <LoginPage/>
  },
  {
    path:"/register",
    element: <RegisterPage/>
  },
  {
    path: "/products",
    element: <ProductsPage/>

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
