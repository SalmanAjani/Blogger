import "./styles.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreateBlog from "./pages/CreateBlog";
import Navbar from "./components/Navbar";
import SingleBlog from "./pages/SingleBlog";
import Error from "./pages/Error";
import Logout from "./pages/Logout";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create",
        element: <CreateBlog />,
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
      <ToastContainer autoClose={2500} position="top-center" />
    </div>
  );
}

export default App;
