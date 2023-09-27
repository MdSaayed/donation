import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import DonationDetails from "../components/DonationDetails/DonationDetails";
import Donations from "../components/Donation/Donations";
import Donates from "../components/Donate/Donates";
import Chart from "../components/Chart/Chart";
import ErrorPage from "../pages/Home/ErrorPage";

const myCreatrRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/donation/:donationId',
                loader: ()=> fetch('/donation.json'),
                element: <DonationDetails />
            },
            {
                path: '/donate',
                loader: ()=> fetch('/donation.json'),
                element: <Donates />
            },
            {
                path: '/chart',
                element: <Chart />
            }
        ]
    }
]);

export default myCreatrRoute;