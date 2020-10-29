const mongoose = require('mongoose');

const stocks = new mongoose.Schema({
    stockNo: {
        type: String,
    },
    date: {
        type: Date,
    },
    trade_volume: {
        type: String,
    },
    trade_value: {
        type: String,
    },
    opening_price: {
        type: String,
    },
    highest_price: {
        type: String,
    },
    lowest_price: {
        type: String,
    },
    closing_price: {
        type: String,
    },
    change: {
        type: String,
    },
    transaction: {
        type: String,
    },
});

module.exports = Stocks = mongoose.model('stocks', stocks);
