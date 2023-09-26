import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import DonationDetails from "../components/DonationDetails/DonationDetails";
import Donations from "../components/Donation/Donations";
import Donates from "../components/Donate/Donates";

const myCreatrRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/donation/:donationId',
                loader: ()=> fetch('donation.json'),
                element: <DonationDetails />
            },
            {
                path: '/donation',
                loader: ()=> fetch('/donation.json'),
                element: <Donates />
            }
        ]
    }
]);

export default myCreatrRoute;