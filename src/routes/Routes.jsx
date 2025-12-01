import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../components/Home";
import Populartoys from "../Pages/Populartoys";
import Login from "../Auth/Login";

import Register from "../Auth/Register";
import AuthLayouts from "../Layouts/AuthLayouts";
// import Toydetailes from "../Pages/Toydetailes";
import ToyDetails from "../Pages/ToyDetails";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../Pages/MyProfile";
import ErrorPage from "../components/ErrorPage";
import MyOrders from "../Pages/MyOrders";
import Loading from "../Pages/Loading";

const router = createBrowserRouter([
  {
    path: "/",  
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage />, 
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {    
        path:"/populartoys",
        element:<Populartoys></Populartoys>,
        loader:() => fetch("/Toys.json").then(res => res.json()),
        hydrateFallbackElement:<Loading></Loading>
      },
      {
           path:"/my-profile",
           element:(<PrivateRoute>
            <MyProfile></MyProfile>
           </PrivateRoute>),

           },
           {
                 path: "/my-orders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
           },
    ],
  },


  {
  path: "/auth",
  element:<AuthLayouts></AuthLayouts>,
  children: [
    {
      path: "/auth/login",     
      element: <Login />,
    },
    {
      path: "/auth/register", 
      element: <Register />,
    },
  ],
},



{

  path:"/toys-details/:toyId",
  element:(<PrivateRoute>
    <ToyDetails></ToyDetails>
  </PrivateRoute>),
  loader: ()=> fetch("/Toys.json"),
  hydrateFallbackElement:<Loading></Loading>


},


 
]);
export default router;
