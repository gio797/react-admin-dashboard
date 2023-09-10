import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Login from "./pages/login/Login";
import "../src/styles/global.scss";
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import Product from "./pages/product/Product";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="products" element={<Products />} />
        <Route path="users/:id" element={<User />} />
        <Route path="products/:id" element={<Product />} />
      </Route>
      <Route path="login" element={<Login />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
