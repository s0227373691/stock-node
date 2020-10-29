import axios from 'axios';

const fetchSaleShares = async (setValue) => {
    const { data } = await axios
        .get('/api/updateDatabase/investmenttrustcompanies')
        .catch((err) => console.error(err));
    setValue(data);
};

export default fetchSaleShares;
