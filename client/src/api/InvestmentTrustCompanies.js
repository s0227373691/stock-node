import axios from 'axios';

//取得投信買賣超彙總表
const fetchDailyInvestmentTrustCompanies = async (setValue) => {
    const config = {
        method: 'get',
        baseURL: 'http://localhost:3000',
        url: '/api/investmenttrustcompanies',
    };
    const { data } = await axios(config)
        .then((res) => res)
        .catch((err) => console.error(err));
    setValue(data[0]);
};

export default fetchDailyInvestmentTrustCompanies;
