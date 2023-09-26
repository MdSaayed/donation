
import { useEffect, useState } from 'react';
import Donate from './Donate';
import { getDonationFromLS } from '../../utilities/Donate';
import { useLoaderData } from 'react-router-dom';


const Donates = () => {
    const donations = useLoaderData();
    const donateId = getDonationFromLS();
    const [showDonations, setShowDonations] = useState();
    const filteredDonatons = donations.filter((dtn) => donateId.includes(dtn.id));

    useEffect(() => {
        setShowDonations(filteredDonatons);
    }, [donations]);


    const [showDonate, setShowDonate] = useState(false);

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-6xl mx-auto py-16'>
                {
                    showDonate ? showDonations?.map((dtn, index) => <Donate key={index} dtn={dtn} />) : showDonations?.slice(0, 4).map((dtn, index) => <Donate key={index} dtn={dtn} />)
                }
            </div>
            <div className='flex justify-center items-center pb-4'>
                <button onClick={() => setShowDonate(!showDonate)} className='bg-[#009444] text-white rounded py-2 px-6'>{showDonate ? 'See Less' : 'See All'} </button>
            </div>
        </div>
    );
};

export default Donates;