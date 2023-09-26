import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { saveDonationOnLS } from "../../utilities/Donate";

const DonationDetails = () => {

    const AllDonation = useLoaderData();
    const { donationId } = useParams();
    const idInt = parseInt(donationId);

    const currentDonation = AllDonation.find((dtn) => dtn.id === idInt);
    const { id, picture, donate_amount, description, btn_bg, title } = currentDonation;

    // handle donate
    // const [currentDonateId, setDonatesId] = useState([]);
    const handleDonate = (id) => {
        const donateId = id;
        // const newDonates = [...currentDonateId,donateId];
        // setDonatesId(newDonates);
        saveDonationOnLS(donateId);
        console.log(donateId);
    }



    const bgImg = {
        backgroundImage: `url(${picture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
    const btn_bg_color = {
        backgroundColor: `${btn_bg}`
    }

    return (
        <div className="max-w-6xl mx-auto my-10">
            <div>
                <div className="flex items-end rounded-md h-[20rem] md:h-25 lg:h-[30rem]" style={bgImg}>
                    <div className="bg-[#0b0b0b80] w-full p-4">
                        <button onClick={() => handleDonate(id)} style={btn_bg_color} className="py-2 px-4 text-white rounded">Donate ${donate_amount}</button>
                    </div>
                </div>
                <div className="my-8">
                    <h1 className="text-[#0B0B0B] text-3xl font-bold mb-3">{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default DonationDetails;