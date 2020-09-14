const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.get('/', (req, res) => {
    app.use('/', express.static('./dist'));
    app.use('/node_modules', express.static('./node_modules'));
    res.sendFile(`${__dirname}/dist/index.html`, (err) => {
        if (err) res.sendStatus(404);
    });
});

app.get('/stocksInfo', (req, res) => {
    fetch(
        'https://www.twse.com.tw/fund/TWT44U?response=json&date=&_=1599933809217'
    )
        .then((data) => data.json())
        .then((stocks) => res.send(stocks))
        .catch((err) => console.log(err));
});

const port = process.env.port || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
