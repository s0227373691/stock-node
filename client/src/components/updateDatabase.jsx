import React, { useState, useEffect } from 'react';
// import axios from 'axios';

import { fetchSaleShares } from '../api/investmentTrust';

const UpdateDatabase = () => {
    const [stockData, setStockData] = useState(null);
    useEffect(() => {
        async function fetchStockData() {
            const data = await fetchSaleShares();
            setStockData(data);
        }
        fetchStockData();
    }, []);

    //市值
    // https://www.twse.com.tw/rsrc/data/zh/home/values.json?_=1600205768914

    return <div>UpdateDatabase</div>;
};

export default UpdateDatabase;
