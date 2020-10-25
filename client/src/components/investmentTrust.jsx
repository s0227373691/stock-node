import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InvestmentTrust = () => {
    const [everyDayTransaction, setEveryDayTransaction] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get('/api/stocksInfo');
            setEveryDayTransaction(data[0]);
        }

        fetchData();
    }, []);
    return (
        <>
            {everyDayTransaction ? (
                <>
                    <h2>{everyDayTransaction.date}投信買賣超彙總表</h2>
                    <div>
                        {everyDayTransaction.fields.map((field) => (
                            <div key={field}>{field}</div>
                        ))}
                    </div>
                    <div>
                        {everyDayTransaction.data.map((item) => (
                            <div key={item[1]}>{item}</div>
                        ))}
                    </div>
                </>
            ) : (
                'Loading...'
            )}
        </>
    );
};

export default InvestmentTrust;
