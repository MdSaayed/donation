import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import DonationDetails from "../components/DonationDetails/DonationDetails";

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
                path: '/login',
                element: <Login />
            },
            {
                path: '/donation/:donationId',
                loader: ()=> fetch('donation.json'),
                element: <DonationDetails />
            }
        ]
    }
]);

export default myCreatrRoute;