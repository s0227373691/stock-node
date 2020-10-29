const mongoose = require('mongoose');

const StocksTradingVolume = new mongoose.Schema({
    date: {
        type: String,
    },
    fields: {
        type: Array,
    },
    stockId: {
        type: String,
    },
    tradeVolume: {
        type: String,
    },
    tradeValue: {
        type: String,
    },
    openingPrice: {
        type: Number,
    },
    highestPrice: {
        type: Number,
    },
    lowestPrice: {
        type: Number,
    },
    closingPrice: {
        type: Number,
    },
    change: {
        type: String,
    },
    transaction: {
        type: String,
    },
});

module.exports = stocksTradingVolume = mongoose.model(
    'stocks_trading_volume',
    StocksTradingVolume
);
