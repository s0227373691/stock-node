const express = require('express');
const axios = require('axios');
const dateformat = require('dateformat');
const router = express.Router();

const JuristicPerson = require('../../modules/juristicPersonNetBuySell');

router.get('/', async (req, res) => {
    const now = new Date();
    const today = dateformat(now, 'yyyymmdd');
    const today = '20200916';

    const juristicPerson = await JuristicPerson.findOne({ date: today });

    //判斷DB是否有當天資料
    if (juristicPerson) {
        console.log('y');
    } else {
        console.log('n');
        const URL = `https://www.twse.com.tw/fund/TWT44U?response=json&date=${today}`;
        const {
            data: { date, fields, data },
        } = await axios.get(URL);
        const juristicPersonModule = new JuristicPerson({
            date,
            fields,
            data,
        });
        await juristicPersonModule.save();
    }

    res.send('');
});

module.exports = router;
