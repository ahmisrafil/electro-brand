import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root.jsx';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthProvider from './components/AuthProvider/AuthProvider';
import AddProduct from './pages/AddProduct';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Cart from './pages/Cart';
import Brand from './pages/Brand';
import ProductDetail from './pages/ProductDetail';
import UpdateProduct from './pages/UpdateProduct';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/addproduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
        loader: () => fetch('data.json')
      },
      {
        path: "/cart",
        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
        loader: ()=>fetch('http://localhost:5000/cart')
      },
      {
        path: "/brands/:brandName",
        element: <Brand></Brand>,
        loader: () => fetch('http://localhost:5000/product')
      },
      {
        path: "/:name",
        element: <PrivateRoute><ProductDetail></ProductDetail></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/product')
      },
      {
        path: "/update/:id",
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
      }
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
