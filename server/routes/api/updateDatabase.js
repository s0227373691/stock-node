const express = require('express');
const Axios = require('axios');
const dateformat = require('dateformat');
const router = express.Router();

// 爬蟲
const request = require('request');
const iconv = require('iconv-lite');

const StockList = require('../../modules/stockList');
const StocksTradingVolume = require('../../modules/stocksTradingVolume');
const JuristicPerson = require('../../modules/juristicPersonNetBuySell');

// 更新個股編號
router.get('/stocklist', (req, res) => {
    request(
        {
            url: 'https://isin.twse.com.tw/isin/C_public.jsp?strMode=2',
            method: 'GET',
            encoding: null,
        },
        async function (error, response, body) {
            stockLength = await StockList.countDocuments();
            if (stockLength === 947) return;

            if (!error && response.statusCode == 200) {
                let buf = iconv.decode(body, 'BIG5');
                const table = buf.split('<tr>');
                table.shift();
                table.shift();

                for (let i = 0; i < 947; i++) {
                    let row = table[i].split('<td bgcolor=#FAFAD2>'); //去首tag
                    row = row[1].split('</td>'); //去尾tag
                    row.pop();
                    const [stockId, stockName] = row[0].split('　');

                    async function saveData() {
                        const stockList = new StockList({
                            stockId,
                            stockName,
                        });

                        await stockList.save();
                        console.log(stockId, stockName, '已更新');
                    }
                    saveData();
                }
            }
        }
    );
    res.send('更新完成');
});

// 更新個股資訊
router.get('/stockstradingvolume', (req, res) => {
    fetchStockList();
    async function fetchStockList() {
        const stockList = await StockList.find();
        fetchData(stockList, 0);
    }

    async function fetchData(stockList, i) {
        const stockId = stockList[i].stockId;
        const url = `https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20201027&stockNo=${stockId}`;
        const {
            data: { stat, fields, data },
        } = await Axios.get(url);

        if (stat === 'OK') {
            data.map(
                async ([
                    date,
                    tradeVolume,
                    tradeValue,
                    openingPrice,
                    highestPrice,
                    lowestPrice,
                    closingPrice,
                    change,
                    transaction,
                ]) => {
                    const stocksTradingVolume = new StocksTradingVolume({
                        date,
                        fields,
                        stockId,
                        tradeVolume,
                        tradeValue,
                        openingPrice,
                        highestPrice,
                        lowestPrice,
                        closingPrice,
                        change,
                        transaction,
                    });
                    await stocksTradingVolume.save();
                    console.log(`已更新  股票代號:${stockId}  日期:${date}`);
                }
            );
        }

        i += 1;
        console.log(`${i}:${stockList.length}`);
        if (i < stockList.length) {
            setTimeout(() => {
                fetchData(stockList, i);
            }, 5000);
        }
    }
    // fetchData();
});

// 更新投信買賣超資訊
router.get('/investmenttrustcompanies', (req, res) => {
    const now = new Date();
    fetchData();
    async function fetchData() {
        //判斷DB是否有當天資料
        now.setDate(now.getDate() - 1);

        //判斷是否為周末
        const day = now.getDay().toString();
        if (day === '0' || day === '6') {
            fetchData();
        } else {
            try {
                const today = dateformat(now, 'yyyymmdd');
                console.log(today, day);
                const juristicPerson = await JuristicPerson.findOne({
                    date: today,
                });
                if (!juristicPerson) {
                    //TODO 傳入當天日期檢查今天以前資料庫是否有資料
                    const URL = `https://www.twse.com.tw/fund/TWT44U?response=json&date=${today}`;
                    const {
                        data: { stat, date, fields, data },
                    } = await Axios.get(URL);
                    if (stat === 'OK') {
                        fields.shift(); //過濾空欄位
                        const filterData = data.map((stock) => {
                            stock.shift();
                            const param = stock.map((item) => item.trim());
                            return param;
                        });
                        // console.log(data);

                        const juristicPersonModule = new JuristicPerson({
                            date,
                            fields,
                            data: filterData,
                        });
                        await juristicPersonModule.save();
                        await setTimeout(() => fetchData(), 1600);
                    } else {
                        await setTimeout(() => fetchData(), 1600);
                    }
                }
            } catch (error) {
                console.log(error.name);
            }
        }
    }

    res.send('更新完成!!');
});

module.exports = router;
