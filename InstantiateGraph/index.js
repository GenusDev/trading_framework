const InvScope = require("../inv_scope");
const finnhub = require("finnhub");

const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "bs8g407rh5r8i6g9ii8g";

const finnhubClient = new finnhub.DefaultApi();

const APICall = finnhubClient.stockCandles(
  "AAPL",
  "D",
  1595984098,
  1564361726,
  {},
  (error, data, response) => {
      console.log('data', data)
    return data;
  }
);

console.log("before loading");
const GlobalScope = new InvScope({ APICall, libraryCall: true });

console.log("final output", GlobalScope.values);


 
 
// Stock candles
finnhubClient.stockCandles("AAPL", "D", 1595984098, 1564361726, {}, (error, data, response) => {
    console.log('after', data)
});

