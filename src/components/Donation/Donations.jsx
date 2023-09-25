import { useEffect, useState } from "react";
import Donation from "./Donation";

const Donations = () => {

    const [donations, setDonations] = useState([]);

    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => setDonations(data));
    }, [])

    return (
        <div>
            <div className="grid grid-cols-4 gap-4 max-w-6xl mx-auto my-20">
                {
                    donations.map((dtn) => <Donation dtn={dtn} />)
                }
            </div>
        </div>
    );
};

export default Donations;