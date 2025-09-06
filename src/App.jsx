import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import './App.css'
import Home from "./Pages/Home/Home";
import Navbar from "./components/common/Navbar";
import Registration from "./Pages/Registration/Registration";
import Login from "./Pages/Login/Login";

const MainLayOut = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayOut />}>
      <Route path="/" element={<Home />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
    </Route>
  ))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
