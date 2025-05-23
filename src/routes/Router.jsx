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
                loader: () => fetch('https://batch11-assignment-10-server-side.vercel.app/featured-posts'),
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
                path: '/browse-listings',
                loader: () => fetch('https://batch11-assignment-10-server-side.vercel.app/posts'),
                element: <BrowseListing />,
                hydrateFallbackElement: <LoadingFallback />,
            },
            {
                path: '/addtofind-roommate',
                element: <PrivateRoute><AddToFindRoommate /></PrivateRoute>,
                // loader: () => fetch('../events.json'),
                hydrateFallbackElement: <LoadingFallback />,
            },
            {
                path: '/my-listing',
                element: <PrivateRoute><MyListing /></PrivateRoute>,
            },
            {
                path: '/update-my-listing/:id',
                loader: ({ params }) => fetch(`https://batch11-assignment-10-server-side.vercel.app/posts/${params.id}`),
                element: <PrivateRoute><UpdateListing /></PrivateRoute>,
            },
            {
                path: '/details/:id',
                loader: ({ params }) => fetch(`https://batch11-assignment-10-server-side.vercel.app/posts/${params.id}`),
                element: <PrivateRoute><DetailsPage /></PrivateRoute>,
            },

        ]
    },
]);

export default Router