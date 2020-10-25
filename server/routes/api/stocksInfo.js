const express = require('express');
const router = express.Router();

const JuristicPerson = require('../../modules/juristicPersonNetBuySell');

router.get('/', async (req, res) => {
    const now = new Date();
    const query = {
        date: `${now.getFullYear()}${now.getMonth() + 1}${now.getDate() - 2}`,
    };

    const stockList = await JuristicPerson.find(query);
    res.send(stockList);
});

module.exports = router;
