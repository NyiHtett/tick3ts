import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Menu from './pages/Menu';
import Reserve from './pages/Reserve';
import Checkout from './pages/Checkout';
import { CartProvider } from './CartContext';


const router = createBrowserRouter([
  {
    path:"/",
    element: <layout><Main/></layout>
  },
  {
    path:"/About",
    element: <layout><About/></layout>
  },
  {
    path:"/Menu",
    element: <layout><Menu/></layout>
  },
  {
    path:"/Reserve",
    element: <layout><Reserve/></layout>
  },
  {
    path:"/Checkout",
    element: <layout><Checkout/></layout>
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
