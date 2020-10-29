const express = require('express');
const axios = require('axios');
const router = express.Router();

const Stocks = require('../../modules/stocks');
const Fields = require('../../modules/fields/stocks');

router.get('/', async (req, res) => {
    updatedFields();
    updatedStock();
    res.send('updated!!');
});

module.exports = router;

async function updatedFields() {
    const isUpdated = (await Fields.find()).length;
    if (isUpdated) {
        return;
    }

    const date = '20200801';
    const stockNo = '2330';
    const url_en = `https://www.twse.com.tw/en/exchangeReport/STOCK_DAY?response=json&date=${date}&stockNo=${stockNo}`;
    const url_zhtw = `https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=${date}&stockNo=${stockNo}`;

    const {
        data: { fields: field_en },
    } = await axios.get(url_en);
    const {
        data: { fields: field_zhtw },
    } = await axios.get(url_zhtw);

    const fields = new Fields({
        date: {
            en: field_en[0],
            zh_tw: field_zhtw[0],
        },
        trade_volume: {
            en: field_en[1],
            zh_tw: field_zhtw[1],
        },
        trade_value: {
            en: field_en[2],
            zh_tw: field_zhtw[2],
        },
        opening_price: {
            en: field_en[3],
            zh_tw: field_zhtw[3],
        },
        highest_price: {
            en: field_en[4],
            zh_tw: field_zhtw[4],
        },
        lowest_price: {
            en: field_en[5],
            zh_tw: field_zhtw[5],
        },
        closing_price: {
            en: field_en[6],
            zh_tw: field_zhtw[6],
        },
        change: {
            en: field_en[7],
            zh_tw: field_zhtw[7],
        },
        transaction: {
            en: field_en[8],
            zh_tw: field_zhtw[8],
        },
    });

    await fields.save();
}

async function updatedStock() {
    const date_ = '20200801';
    const stockNo = '2330';
    const url = `https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=${date_}&stockNo=${stockNo}`;
    const {
        data: { data },
    } = await axios.get(url);

    data.map(
        async ([
            date_,
            trade_volume,
            trade_value,
            opening_price,
            highest_price,
            lowest_price,
            closing_price,
            change,
            transaction,
        ]) => {
            const dbDataDate = await Stocks.find({
                stockNo: stockNo,
                date: new Date(2020, 08),
            });
            console.log(dbDataDate);

            // storage of data
            const [year_AD, month, date] = date_.split('/');
            const year_ROC = 1911 + Number(year_AD);
            const stocks = new Stocks({
                date: new Date(year_ROC, month, date),
                stockNo: stockNo,
                trade_volume,
                trade_value,
                opening_price,
                highest_price,
                lowest_price,
                closing_price,
                change,
                transaction,
            });
            await stocks.save();
        }
    );
}
