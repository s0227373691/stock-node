import React, { useState } from 'react';

import setInputValue from '../lib/setInputValue';

const Query = () => {
    const [inputVal, setInputVal] = useState('');

    return (
        <div>
            <form onSubmit={() => alert('success')}>
                <input
                    type="text"
                    value={inputVal}
                    placeholder="請輸入查詢量縮起始日期"
                    onChange={(e) => setInputValue(e, setInputVal)}
                />
            </form>
        </div>
    );
};

export default Query;
