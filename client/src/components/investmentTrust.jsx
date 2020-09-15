import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InvestmentTrust = () => {
    const [data, setDate] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const stocksInfo = await axios.get('/api/stocksInfo');
            setDate(stocksInfo.data);
        }

        fetchData();
    }, []);

    console.log(data);
    return <div>{data ? data.data : 'Loading...'}</div>;
};

export default InvestmentTrust;
