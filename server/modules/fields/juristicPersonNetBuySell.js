const mongoose = require('mongoose');

const juristicPersonNetBuySell = new mongoose.Schema({
    stock_code: {
        type: String,
        // required,
    },
    stock_name: {
        type: String,
        // required,
    },
    buy_shares: {
        type: String,
        // required,
    },
    sell_shares: {
        type: String,
        // required,
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
