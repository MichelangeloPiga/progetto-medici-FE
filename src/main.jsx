import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./routes/landingPage.jsx";
import LoginPaziente from "./routes/authentication/login/loginPaziente.jsx";
import LoginDottore from "./routes/authentication/login/loginDottore.jsx";
import LoginAdmin from "./routes/authentication/login/loginAdmin.jsx";
import RegistrazionePaziente from "./routes/authentication/registration/registrazionePaziente.jsx";
import RegistrazioneDottore from "./routes/authentication/registration/registrazioneDottore.jsx";
import RegistrazioneGenerale from "./routes/authentication/registration/registrazioneGenerale.jsx";
import LoginGenerale from "./routes/authentication/login/loginGenerale.jsx";
//import Navbar from "./components/navbar.jsx";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page.jsx";

const router = createBrowserRouter([
  {
    path: "/", // The path to match
    element: < LandingPage />, // The element to render when the path matches
    errorElement: <ErrorPage />, // The element to render when an error occurs
  },

  {
    path: "/registrazioneGenerale",
    element: <RegistrazioneGenerale />,
  },

  {
    path: "/loginGenerale",
    element: <LoginGenerale />,
  },

  {
    path: "/loginPaziente",
    element: <LoginPaziente />,
  },
  {
    path: "/loginDottore",
    element: <LoginDottore />,
  },
  {
    path: "/loginAdmin",
    element: <LoginAdmin />,
  },

  {
    path: "/registrazionePaziente",
    element: <RegistrazionePaziente />,
  },
  {
    path: "/registrazioneDottore",
    element: <RegistrazioneDottore />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

);


