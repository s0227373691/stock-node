const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const JuristicPersonNetBuySell = require('../../modules/fields/juristicPersonNetBuySell');

router.get('/', async (req, res) => {
    let juristicPersonNetBuySell = await fetch(
        'https://www.twse.com.tw/fund/TWT44U?response=json&date=&_=1599933809217'
    )
        .then((res) => res.json())
        .catch((err) => {
            console.log(err);
            return res.status(400).json({
                errors: [{ msg: 'Failed to get juristic person net buy sell' }],
            });
        });
    const fields = await getFields(juristicPersonNetBuySell);
    console.log(fields);
    res.send('cc');
    // await res.send(juristicPersonNetBuySell);
});

router.post('/', async (req, res) => {
    const { stock_code, stock_name, buy_shares, sell_shares } = req.body;
    const user = {
        stock_code,
        stock_name,
        buy_shares,
        sell_shares,
    };

    let module = new JuristicPersonNetBuySell(user);
    await module.save();
});

module.exports = router;

function getFields({ fields }) {
    const filtered = fields
        .map((field) => field.trim())
        .filter((field) => field !== '');
    return filtered;
}
