import { useEffect, useState } from "react";
import Donation from "./Donation";

const Donations = ({ searchText }) => {

    const [donations, setDonations] = useState([]);
    const search = searchText;
    const searchTextLowerCase = search.toLowerCase();

    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => setDonations(data));
    }, [searchText])


    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto py-12 md:py-12 lg:py-20  px-2 lg:px-0">
                {
                    donations.filter((dtn) => {
                        return searchTextLowerCase === '' ? dtn : dtn?.category?.toLowerCase().includes(searchTextLowerCase);
                    }).map((dtn, idx) => <Donation key={idx} dtn={dtn} />)
                }
            </div>
        </div>
    );
};

export default Donations;