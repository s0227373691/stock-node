import axios from 'axios';

const config = {};

// 個股成交資訊
export const updateStocksId = async () => {
    const config = {
        method: 'get',
        baseURL: 'http://localhost:3000',
        url: '/api/updateDatabase/stocklist',
    };

    await axios(config)
        .then((res) => {
            if (res.status === 200) alert('更新完成');
        })
        .catch((err) => console.error(err));
};

// 個股成交資訊
export const updateStocksTradingVolume = async () => {
    await axios
        .get('/api/updateDatabase/stockstradingvolume')
        .then((res) => {
            if (res.status === 200) alert('更新完成');
        })
        .catch((err) => console.error(err));
};

// 更新投信買賣超彙總表
export const updateDailyInvestmentTrustCompanies = async () => {
    await axios
        .get('/api/updateDatabase/investmenttrustcompanies')
        .then((res) => {
            if (res.status === 200) alert('更新完成');
        })
        .catch((err) => console.error(err));
};
