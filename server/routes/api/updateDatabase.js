const express = require('express');
const axios = require('axios');
const dateformat = require('dateformat');
const router = express.Router();

const JuristicPerson = require('../../modules/juristicPersonNetBuySell');

router.get('/', (req, res) => {
    const now = new Date();
    fetchData();
    async function fetchData() {
        //判斷DB是否有當天資料
        now.setDate(now.getDate() - 1);

        //判斷是否為周末
        const day = now.getDay().toString();
        if (day === '0' || day === '6') {
            fetchData();
        } else {
            const today = dateformat(now, 'yyyymmdd');
            console.log(today, day);
            const juristicPerson = await JuristicPerson.findOne({
                date: today,
            });
            if (!juristicPerson) {
                //TODO 傳入當天日期檢查今天以前資料庫是否有資料
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
                await setTimeout(() => fetchData(), 800);
            }
        }
    }

    res.send('更新完成!!');
});

module.exports = router;
