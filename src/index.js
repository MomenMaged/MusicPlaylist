import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import Playlistpage from './components/pages/Playlistpage';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Profile from './components/pages/Profile';
import Home from './components/pages/home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/Signup",
    element: <Signup/>,
  },
  {
    path: "/app",
    element: <App/>,
  },
  {
    path: "/page",
    element: <Playlistpage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
