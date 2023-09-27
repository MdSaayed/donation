

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
        alert('Donation sucessful.');
    } else {
        alert('Already applied this job.');
    }
}
export { getDonationFromLS, saveDonationOnLS }

