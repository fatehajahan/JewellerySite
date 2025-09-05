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
    </Route>
  ))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
