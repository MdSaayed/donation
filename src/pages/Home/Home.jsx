import { useState } from "react";
import Banner from "../../components/Banner/Banner";
import Donations from "../../components/Donation/Donations";

const Home = () => {
    const [searchText, setSearchText] = useState('');
    const [inputVal, setInputVal] = useState('');

    const handleSearch = (e) => {
        const val = e.target.value;
        setInputVal(val);
    }
   
    return (
        <div>
            <Banner handleSearch={handleSearch} setSearchText={setSearchText} inputVal={inputVal}  />
            <Donations searchText={searchText} />
        </div>
    );
};

export default Home;








