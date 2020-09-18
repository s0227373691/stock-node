const express = require('express');

const app = express();
const stocksInfo = require('./server/routes/api/stocksInfo');
const updateDatabase = require('./server/routes/api/updateDatabase');

const connectDB = require('./server/config/db');

connectDB();
app.use(express.json());

app.get('/', (req, res) => {
    app.use('/', express.static('./dist'));
    app.use('/node_modules', express.static('./node_modules'));
    res.sendFile(`${__dirname}/dist/index.html`, (err) => {
        if (err) res.sendStatus(404);
    });
});

app.use('/api/stocksInfo', stocksInfo);
app.use('/api/updateDatabase', updateDatabase);

const port = process.env.port || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
