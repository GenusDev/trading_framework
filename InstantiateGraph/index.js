const InvScope = require("../inv_scope");
const finnhub = require("finnhub");

const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "bs8g407rh5r8i6g9ii8g";

const finnhubClient = new finnhub.DefaultApi();

;
console.log("before loading");
const GlobalScope = new InvScope(name="apple", ticker="AAPL",  InitiateAPI={ APILabel:'stockCandles', APIClient:finnhubClient, indicator: 'o', period: 't', libraryCall: true });
GlobalScope.populateValuesForDates(1565984000, 1594361726, 'D');

console.log('final output', GlobalScope.values);

// Stock candles
// finnhubClient.stockCandles("AAPL", "D", 1565984000, 1594361726, {}, (error, data, response) => {
//     console.log('after', data)
// });

