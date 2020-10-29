import axios from 'axios';

//取得投信買賣超彙總表
const fetchDailyInvestmentTrustCompanies = async (setValue) => {
    const { data } = await axios.get('/api/investmenttrustcompanies');
    setValue(data[0]);
};

export default fetchDailyInvestmentTrustCompanies;
