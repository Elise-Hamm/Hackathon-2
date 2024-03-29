import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

// Pages //
import App from "./App.jsx";
import Home from "./Pages/Home";
import Activité from "./Pages/Activité";
import Activités from "./Pages/Activités";
import Logement from "./Pages/Logement.jsx";
import Logements from "./Pages/Logements.jsx";
import Restaurant from "./Pages/Restaurant.jsx";
import Restaurants from "./Pages/Restaurants.jsx";
import Git from "./Components/Git.jsx";
import Linkedin from "./Components/Linkedin.jsx";
import Cards from "./Components/CardsA.jsx";
import Infos from "./Components/InfosA.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/cards",
        element: <Cards />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/activités",
        element: <Activités />,
      },
      {
        path: "/activité/:id",
        element: <Activité />,
      },
      {
        path: "/logements",
        element: <Logements />,
      },
      {
        path: "/logement/:id",
        element: <Logement />,
      },
      {
        path: "/restaurants",
        element: <Restaurants />,
      },
      {
        path: "/restaurant/:id",
        element: <Restaurant />,
      },
      {
        path: "/git",
        element: <Git />,
      },
      {
        path: "/linkedin",
        element: <Linkedin />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
