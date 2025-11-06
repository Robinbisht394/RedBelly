import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Cart from "./Components/Pages/Cart";
import Layout from "./Layout/Layout";
import { ToastContainer } from "react-toastify";
import Contact from "./Components/Pages/Contact";
import RestaurantDetails from "./Components/Features/RestaurantDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <Cart /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:id", element: <RestaurantDetails /> },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default App;
