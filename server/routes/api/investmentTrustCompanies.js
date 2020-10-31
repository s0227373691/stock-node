const express = require('express');
const router = express.Router();

const JuristicPerson = require('../../modules/juristicPersonNetBuySell');

//投信買賣超彙總表
router.get('/', async (req, res) => {
    const now = new Date();
    let queryDate = new Date();
    const todayDay = now.getDay().toString();
    switch (todayDay) {
        case '0':
            queryDate.setDate(now.getDate() - 2);
            break;
        case '6':
            queryDate.setDate(now.getDate() - 1);
            break;
        default:
            break;
    }

    const query = {
        date: `${queryDate.getFullYear()}${queryDate.getMonth() + 1}${
            queryDate.getDate() - 1
        }`,
    };

    const stockList = await JuristicPerson.find(query);
    res.send(stockList);
});

module.exports = router;
