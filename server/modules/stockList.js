const mongoose = require('mongoose');

const StockList = new mongoose.Schema({
    stockId: {
        type: String,
    },
    stockName: {
        type: String,
    },
});

module.exports = stockList = mongoose.model('stock_list', StockList);
