const mongoose = require('mongoose');

const juristicPersonNetBuySell = new mongoose.Schema({
    stock_code: {
        type: String,
    },
    stock_name: {
        type: String,
    },
    buy_shares: {
        type: String,
    },
    sell_shares: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = JuristicPersonNetBuySell = mongoose.model(
    'juristic_person_net_buy_sell',
    juristicPersonNetBuySell
);
