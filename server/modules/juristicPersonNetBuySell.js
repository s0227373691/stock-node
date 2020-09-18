const mongoose = require('mongoose');

const juristicPerson = new mongoose.Schema({
    date: {
        type: String,
    },
    fields: {
        type: Array,
    },
    data: {
        type: Array,
    },
});

module.exports = JuristicPerson = mongoose.model(
    'juristi_person',
    juristicPerson
);
