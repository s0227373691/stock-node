const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const InvestmentTrustCompanies = require('./routes/api/investmentTrustCompanies');
const updateDatabase = require('./routes/api/updateDatabase');
// const stocks = require('./server/routes/api/stocks');

const connectDB = require('./config/db');

connectDB();
app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

app.use('/api/investmenttrustcompanies', InvestmentTrustCompanies);
app.use('/api/updateDatabase', updateDatabase);
// app.use('/api/stocks', stocks);

// app.get('*', (req, res) => {
//     const htmlUrl = path.join(__dirname, 'dist', 'index.html');
//     res.sendFile(htmlUrl, (err) => {
//         if (err) res.sendStatus(404);
//     });
//     res.send('index');
// });

const port = process.env.port || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
