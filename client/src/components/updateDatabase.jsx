import React from 'react';
import axios from 'axios';
const UpdateDatabase = () => {
    // try {
    //     const updateMessage = fetch('/api/test1')
    //         .then((res) => res.json())
    //         // .then((res) => console.log(res.json()))
    //         .catch((err) => console.error(err));

    //     console.log(updateMessage);
    // } catch (err) {
    //     console.error('cc');
    //     throw new Error(err.msg);
    // }

    const body = JSON.stringify({
        stock_code: 'a',
        stock_name: 'b',
        buy_shares: 'c',
        sell_shares: 'd',
    });
    axios.post('/api/test', body, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return <div>UpdateDatabase</div>;
};

export default UpdateDatabase;
