import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './layout/Root';
import Home from './components/home/Home';
import Login from './components/header/login/Login';
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [{
      index: true,
      Component: Home,
    }, {
      path: 'login',
      Component: Login,
    }
  
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
