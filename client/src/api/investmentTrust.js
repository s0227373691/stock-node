import axios from 'axios';

export const fetchSaleShares = async () => {
    const { data } = await axios
        .get('/api/updateDatabase')
        .catch((err) => console.error(err));
    return data;
};
