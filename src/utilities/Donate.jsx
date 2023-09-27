import {  toast } from 'react-toastify';


// get donate from local storage
const getDonationFromLS = () => {
    const donationFromLS = localStorage.getItem('donation-item');
    if (donationFromLS) {
        return JSON.parse(donationFromLS);

    } else {
        return [];
    }
}

// save donation on ls
const saveDonationOnLS = (id) => {
    const donationFromLs = getDonationFromLS();
    const idInt = id;
    const isExist = donationFromLs?.find((dtnId) => dtnId === idInt);
    if (!isExist) {
        donationFromLs?.push(idInt);
        localStorage.setItem('donation-item', JSON.stringify(donationFromLs));
        toast.success('Donation sucessful.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    } else {
        toast.warn('Already donated this campaign.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

    }
}

export { getDonationFromLS, saveDonationOnLS }

