import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

// Pages/////
import App from "./App.jsx";
import Home from "./Pages/Home";
import Activité from "./Pages/Activité";
import Activités from "./Pages/Activités";
import Logement from "./Pages/Logement.jsx";
import Logements from "./Pages/Logements.jsx";
import Restaurant from "./Pages/Restaurant.jsx";
import Restaurants from "./Pages/Restaurants.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/activités",
        element: <Activités />,
      },
      {
        path: "/activité",
        element: <Activité />,
      },
      {
        path: "/logements",
        element: <Logements />,
      },
      {
        path: "/logement",
        element: <Logement />,
      },
      {
        path: "/restaurants",
        element: <Restaurants />,
      },
      {
        path: "/restaurant",
        element: <Restaurant />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
