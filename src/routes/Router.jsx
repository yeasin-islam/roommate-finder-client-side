import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../pages/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import LoadingFallback from "../components/shared/LoadingFallback";
import SingUp from "../pages/SingUp";
import AddToFindRoommate from "../pages/AddToFindRoommate";
import BrowseListing from "../pages/BrowseListing";
import MyListing from "../pages/MyListing";
import UpdateListing from "../pages/UpdateListing";
import DetailsPage from "../pages/DetailsPage";
import Profile from "../pages/Profile";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                Component: Home,
                loader: () => fetch('http://localhost:3000/featured-posts'),
                hydrateFallbackElement: <LoadingFallback />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/singup',
                element: <SingUp />,
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile /></PrivateRoute>,
            },
            {
                path: '/browse-listings',
                loader: () => fetch('http://localhost:3000/posts'),
                element: <BrowseListing />,
                hydrateFallbackElement: <LoadingFallback />,
            },
            {
                path: '/addtofind-roommate',
                element: <AddToFindRoommate />,
                // loader: () => fetch('../events.json'),
                hydrateFallbackElement: <LoadingFallback />,
            },
            {
                path: '/my-listing',
                element: <MyListing />,
            },
            {
                path: '/update-my-listing/:id',
                loader: ({params}) => fetch(`http://localhost:3000/posts/${params.id}`),
                element: <UpdateListing />,
            },
            {
                path: '/details/:id',
                element: <DetailsPage />,
            },

        ]
    },
]);

export default Router