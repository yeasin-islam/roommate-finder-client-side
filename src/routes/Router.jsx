import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../pages/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import LoadingFallback from "../components/shared/LoadingFallback";
import SingUp from "../pages/SingUp";
import BrowseListing from "../pages/BrowseListing";
import UpdateListing from "../pages/UpdateListing";
import DetailsPage from "../pages/DetailsPage";
import TermsOfUse from "../pages/TermsOfUse";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import CookiePolicy from "../pages/CookiePolicy";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Support from "../pages/Support";
import Dashboard from "../pages/Dashboard";
import MyListing from "../pages/Dashboard/MyListing";
import AddToFindRoommate from "../pages/Dashboard/AddToFindRoommate";
import AllPost from "../pages/Dashboard/AllPost";
import Overview from "../pages/Dashboard/Overview";


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
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/featured-posts`),
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
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/posts`),
                element: <BrowseListing />,
                hydrateFallbackElement: <LoadingFallback />,
            },
            {
                path: '/update-my-listing/:id',
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/posts/${params.id}`),
                element: <PrivateRoute><UpdateListing /></PrivateRoute>,
            },
            {
                path: '/details/:id',
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/posts/${params.id}`),
                element: <PrivateRoute><DetailsPage /></PrivateRoute>,
            },
            {
                path: "/terms",
                element: <TermsOfUse />,
            },
            {
                path: "/privacy",
                element: <PrivacyPolicy />,
            },
            {
                path: "/cookies",
                element: <CookiePolicy />,
            },
            {
                path: "/about-us",
                element: <AboutUs />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/support",
                element: <Support />,
            },
            {
                path: '/dashboard',
                element: <Dashboard />,
                children: [
                    {
                        path: 'overview',
                        element: <PrivateRoute><Overview /></PrivateRoute>,
                    },
                    {
                        path: 'all-post',
                        element: <PrivateRoute><AllPost /></PrivateRoute>,
                        loader: () => fetch(`${import.meta.env.VITE_API_URL}/posts`),
                    },
                    {
                        path: 'addtofind-roommate',
                        element: <PrivateRoute><AddToFindRoommate /></PrivateRoute>,
                        // loader: () => fetch('../events.json'),
                        hydrateFallbackElement: <LoadingFallback />,
                    },
                    {
                        path: 'my-listing',
                        element: <PrivateRoute><MyListing /></PrivateRoute>,
                    },
                    //     {
                    //         path: 'my-applications',
                    //         element: <PrivateRoute><MyApplyList /></PrivateRoute>
                    //     },
                ]
            },

        ]
    },
]);

export default Router