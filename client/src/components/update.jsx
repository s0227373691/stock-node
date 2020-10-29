import React, { useState, useEffect } from 'react';

// import fetchSaleShares from '../api/investmentTrust';
import {
    updateStocksId,
    updateStocksTradingVolume,
    updateDailyInvestmentTrustCompanies,
} from '../lib/updateDatabase';

const Update = () => {
    // const [stockData, setStockData] = useState(null);
    // useEffect(() => {
    //     fetchSaleShares(setStockData);
    // }, []);

    return (
        <div>
            <h2>UpdateDatabase</h2>
            <button onClick={updateStocksId}>更新個股編號</button>
            <button onClick={updateStocksTradingVolume}>更新個股資訊</button>
            <button onClick={updateDailyInvestmentTrustCompanies}>
                更新投信買賣超資訊
            </button>
        </div>
    );
};

export default Update;
