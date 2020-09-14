const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/', (req, res) => {
    fetch(
        'https://www.twse.com.tw/fund/TWT44U?response=json&date=&_=1599933809217'
    )
        .then((data) => data.json())
        .then((stocks) => res.send(stocks))
        .catch((err) => console.log(err));
});

module.exports = router;
