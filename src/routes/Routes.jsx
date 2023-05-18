/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
import ServicesLayout from "../layouts/ServicesLayout/ServicesLayout";
import Login from "../pages/Login/Login";
import Services from "../pages/Services/Services";
import ServiceDetails from "./../pages/ServiceDetails/ServiceDetails";
import Register from "./../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import MainLayout from "../layouts/Main/MainLayout";
import Home from "../pages/Home/Home";
import AddJob from "../pages/AddJob/AddJob";
import MyJobs from "../pages/MyJobs/MyJobs";
import JobDetails from "../pages/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "services",
        element: <Services></Services>,
      },
      {
        path: "/addJob",
        element: <AddJob></AddJob>,
      },
      {
        path: "/MyJobs",
        element: <MyJobs></MyJobs>,
      },
      {
        path: 'jobDetails/:id',
        element: <JobDetails></JobDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/jobDetails/${params.id}`)
      },
      {
        path: "services/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
