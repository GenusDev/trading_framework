const fetch = require('node-fetch');

class APICall {
  constructor(InitiateAPI) {
    if (InitiateAPI.libraryCall) {
      this.APIClient = InitiateAPI.APIClient;
      this.label = InitiateAPI.APILabel;

      this.indicator = InitiateAPI.indicator;
      this.period = InitiateAPI.indicator;
    } else {
      this.APICall = this._APICallDirect(InitiateAPI.HeadersAndData);
    }
  }

  async populateValuesForDates(start, end, resolution) {
    console.log('passing', this.ticker, resolution, start, end);
    this.values = await this.APIClient.stockCandles(
      this.ticker,
      resolution,
      start,
      end,
      {},
      (error, data, response) => {
        //   console.log('data', data)
        this.values = data;
      }
    );
    console.log('this.values', this.values);
  }

  _APICallDirect() {
    const HeadersAndData = this.HeadersAndData;
    let results = {};
    fetch(HeadersAndData.url, {
      method: 'POST', // or 'PUT'
      headers: HeadersAndData.headers,
      body: HeadersAndData.body,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data, data.Results);
        results = data.Results;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    return results;
  }

  APIDataCheck() {
    //make sure that the format is as expected.
    // better as a unit test
  }
}

module.exports = APICall;
