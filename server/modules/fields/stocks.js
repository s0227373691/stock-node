const mongoose = require('mongoose');

const stocksField = new mongoose.Schema({
    date: {
        type: Object,
    },
    trade_volume: {
        type: Object,
    },
    trade_value: {
        type: Object,
    },
    opening_price: {
        type: Object,
    },
    highest_price: {
        type: Object,
    },
    lowest_price: {
        type: Object,
    },
    closing_price: {
        type: Object,
    },
    change: {
        type: Object,
    },
    transaction: {
        type: Object,
    },
});

module.exports = StocksField = mongoose.model('stocks_field', stocksField);
