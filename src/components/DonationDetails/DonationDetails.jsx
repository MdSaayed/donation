import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {

    const AllDonation = useLoaderData();
    const { donationId } = useParams();
    const idInt = parseInt(donationId);

    const currentDonation = AllDonation.find((dtn) => dtn.id === idInt);
    const { picture, donate_amount, description, btn_bg, title } = currentDonation;


    const bgImg = {
        backgroundImage: `url(${picture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '35rem',
    }
    const btn_bg_color = {
        backgroundColor: `${btn_bg}`
    }

    return (
        <div className="max-w-6xl mx-auto my-10">
            <div>
                <div className="flex items-end rounded-md" style={bgImg}>
                    <div className="bg-[#0b0b0b80] w-full p-4">
                        <button style={btn_bg_color} className="py-2 px-4 text-white rounded">Donate ${donate_amount}</button>
                    </div>
                </div>
                <div className="my-8">
                    <h1 className="text-[#0B0B0B] text-4xl font-bold mb-3">{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default DonationDetails;