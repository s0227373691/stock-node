const express = require('express');
const router = express.Router();

const JuristicPerson = require('../../modules/juristicPersonNetBuySell');

//投信買賣超彙總表
router.get('/', async (req, res) => {
    const now = new Date();
    date = now.getDay().toString();
    switch (date) {
        case '0':
            now.setDate(now.getDate() - 2);
            break;
        case '6':
            now.setDate(now.getDate() - 1);
            break;
        default:
            break;
    }

    const query = {
        date: `${now.getFullYear()}${now.getMonth() + 1}${now.getDate() - 1}`,
    };

    const stockList = await JuristicPerson.find(query);
    res.send(stockList);
});

module.exports = router;
