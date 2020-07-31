/*const InvScope = require("./InvScope");

const InvScope = require('./InvScope')



const APIHeadersAndData = {
	// url: 'https://api.bls.gov/publicAPI/v2/timeseries/data',
	// body : {"seriesid": ['CUUR0000SA0','SUUR0000SA0'],"startyear":"2011", "endyear":"2014"},
	// headers: {'Content-Type': 'application/json'},
	apiKey : 'bs8g407rh5r8i6g9ii8g' //finhub 
}


const Global_scope = new InvScope(name="global", APIHeadersAndData=APIHeadersAndData)
*/

//$npm install finnhub --save

const finnhub = require('finnhub');
 
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "bs8g407rh5r8i6g9ii8g" 
const finnhubClient = new finnhub.DefaultApi()
 
// Stock candles

finnhubClient.stockCandles("GOOG", "D", 159090000, 1591852249, {}, (error, data, response) => {
    console.log(data)
});

const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://bennyz:qwerty12345@cluster0.jbsat.mongodb.net/Cluster0/test?retryWrites=true&w=majority";

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?mongodb+srv://bennyz:qwerty12345@cluster0.jbsat.mongodb.net/Cluster0/test?retryWrites=true&w=majority=true&w=majority";
 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

// const date = new Date()

// console.log('date', Date.parse(date))
//Quote
// finnhubClient.quote("AAPL", (error, data, response) => {
//     console.log(data)
// });
 
// //Company News
// finnhubClient.companyNews("AAPL", "2020-01-01", "2020-05-01", (error, data, response) => {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log(data)
//     }
// });
 
// // Investor Ownership
// let optsLimit = {'limit': 10};
// finnhubClient.investorsOwnership("AAPL", optsLimit, (error, data, response) => {
//     console.log(data)
// });
 
// //Aggregate Indicator
// finnhubClient.aggregateIndicator("AAPL", "D", (error, data, response) => {
//     console.log(data)
// });
 
// // Basic financials
// finnhubClient.companyBasicFinancials("AAPL", "margin", (error, data, response) => {
//     console.log(data)
// });
 
// // Company earnings
// finnhubClient.companyEarnings("AAPL", {'limit': 10}, (error, data, response) => {
//     console.log(data)
// });
 /*
// Company EPS estimates
finnhubClient.companyEpsEstimates("AAPL", {}, (error, data, response) => {
    console.log(data)
});
 
// Company executive
finnhubClient.companyExecutive("AAPL", (error, data, response) => {
    console.log(data)
});
 
// Company peers
finnhubClient.companyPeers("AAPL", (error, data, response) => {
    console.log(data)
});
 
// Company profile
finnhubClient.companyProfile({'symbol': 'AAPL'}, (error, data, response) => {
    console.log(data)
});
finnhubClient.companyProfile({'isin': 'US0378331005'}, (error, data, response) => {
    console.log(data)
});
finnhubClient.companyProfile({'cusip': '037833100'}, (error, data, response) => {
    console.log(data)
});
 
//Company profile2
finnhubClient.companyProfile2({'symbol': 'AAPL'}, (error, data, response) => {
    console.log(data)
});
 
// Revenue Estimates
finnhubClient.companyRevenueEstimates("AAPL", {}, (error, data, response) => {
    console.log(data)
});
 
// List country
finnhubClient.country((error, data, response) => {
    console.log(data)
});
 
// Covid-19
finnhubClient.covid19((error, data, response) => {
    console.log(data)
});
 
// Crypto candles
finnhubClient.cryptoCandles("BINANCE:BTCUSDT", "D", 1590988249, 1591852249, (error, data, response) => {
    console.log(data)
});
 
// Crypto exchanges
finnhubClient.cryptoExchanges((error, data, response) => {
    console.log(data)
});
 
//Crypto symbols
finnhubClient.cryptoSymbols("BINANCE", (error, data, response) => {
    console.log(data)
});
 
// Earnings calendar
finnhubClient.earningsCalendar({"from": "2020-06-01", "to": "2020-06-30"}, (error, data, response) => {
    console.log(data)
});
 
// Economic code
finnhubClient.economicCode((error, data, response) => {
    console.log(data)
});
 
// Economic data
finnhubClient.economicData("MA-USA-656880", (error, data, response) => {
    console.log(data)
});
 
// Filings
finnhubClient.filings({"symbol": "AAPL"}, (error, data, response) => {
    console.log(data)
});
 
//Financials
finnhubClient.financials("AAPL", "ic", "annual", (error, data, response) => {
    console.log(data)
});
 
// Financials Reported
finnhubClient.financialsReported({"symbol": "AAPL"}, (error, data, response) => {
    console.log(data)
});
 
// Forex candles
finnhubClient.forexCandles("OANDA:EUR_USD", "D", 1590988249, 1591852249, (error, data, response) => {
    console.log(data)
});
 
// Forex exchanges
finnhubClient.forexExchanges((error, data, response) => {
    console.log(data)
});
 
// Forex rates
finnhubClient.forexRates({"base": "USD"}, (error, data, response) => {
    console.log(data)
});
 
// Forex symbols
finnhubClient.forexSymbols("OANDA", (error, data, response) => {
    console.log(data)
});
 
//Fund ownership
finnhubClient.fundOwnership("AAPL", {'limit': 10}, (error, data, response) => {
    console.log(data)
});
 
// General news
finnhubClient.generalNews("general", {}, (error, data, response) => {
    console.log(data)
});
 
// Ipo calendar
finnhubClient.ipoCalendar("2020-01-01", "2020-06-15", (error, data, response) => {
    console.log(data)
});
 
//Major development
finnhubClient.majorDevelopments("AAPL", {}, (error, data, response) => {
    console.log(data)
});
 
// News sentiment
finnhubClient.newsSentiment("AAPL", (error, data, response) => {
    console.log(data)
});
 
// Pattern recognition
finnhubClient.patternRecognition("AAPL", "D", (error, data, response) => {
    console.log(data)
});
 
// Price target
finnhubClient.priceTarget("AAPL", (error, data, response) => {
    console.log(data)
});
 

 
// Recommendation trends
finnhubClient.recommendationTrends("AAPL", (error, data, response) => {
    console.log(data)
});
 
// Stock dividends
finnhubClient.stockDividends("KO", "2019-01-01", "2020-06-30", (error, data, response) => {
    console.log(data)
});
 
// Splits
finnhubClient.stockSplits("AAPL", "2000-01-01", "2020-06-15", (error, data, response) => {
    console.log(data)
});
 
// Stock symbols
finnhubClient.stockSymbols("US", (error, data, response) => {
    console.log(data)
});
 
// Support resistance
finnhubClient.supportResistance("AAPL", "D", (error, data, response) => {
    console.log(data)
});
 
// Technical indicator
finnhubClient.technicalIndicator("AAPL", "D", 1580988249, 1591852249, "macd", {}, (error, data, response) => {
    console.log(data)
});
 
// Transcripts
finnhubClient.transcripts("AAPL_162777", (error, data, response) => {
    console.log(data)
});
 
// Transcripts list
finnhubClient.transcriptsList("AAPL", (error, data, response) => {
    console.log(data)
});
 
// Upgrade/downgrade
finnhubClient.upgradeDowngrade({"symbol": "AAPL"}, (error, data, response) => {
    console.log(data)
});
 
// Tick Data
api.stockTick("AAPL", "2020-03-25", 500, 0, (error, data, response) => {
    console.error(data);
});
*/