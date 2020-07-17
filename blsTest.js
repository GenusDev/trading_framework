/*var Bls2 = require('../trading_framework/bls2');

const API_KEY = '78cde6739045407386ed2dc608d6370a';

let bls = new Bls2(API_KEY);

let options = {
    'seriesid': ['CES3000000001'],
    'startyear': '2008',  
    'endyear': '2018',
    // ...
};

bls.fetch(options).then(function (response) {
    console.log(JSON.stringify(response));
});
*/
//$ npm install expect.js
//$ npm install --save-dev jasmine
var expect = require('expect.js');

//var Bls2 = require('c:/Users/benny/OneDrive/Documents/GitHub/trading_framework/lib/bls2');
class Bls2 {

    constructor(api_key) {
        if (!api_key) {
            throw new Error('API key is required');
        }
        this.api_key = api_key;
        this.api_endpoint = 'https://api.bls.gov/publicAPI/v2/timeseries/data/';
    }

    fetch(options) {
        let errors = this.validate(options);
        if (errors.length > 0) {
            if (errors.length === 1) {
                throw new Error(`Missing required parameter: ${errors[0]}`);
            } else {
                let list = errors.join(', ');
                throw new Error(`Missing required parameters: ${list}`);
            }
        }

        options.registrationkey = this.api_key;
        const axios = require('axios');
        return axios.post(this.api_endpoint, options)
            .then(function (response) {
                return response.data;
            })
            .catch (function (err) {
                throw new Error(err);
            });
    }

    validate(options) {
        let errors = [];
        if (!options.hasOwnProperty('seriesid')) {
            errors.push('seriesid');
        }
        if (!options.hasOwnProperty('startyear')) {
            errors.push('startyear');
        }
        if (!options.hasOwnProperty('endyear')) {
            errors.push('endyear');
        }
        return errors;
    }

}

let bls = new Bls2('78cde6739045407386ed2dc608d6370a')

let options = {
    'seriesid': ['CES3000000001'],
    'startyear': '2008',  
    'endyear': '2018'
}

bls.fetch(options).then(function (response) {
    console.log(JSON.stringify(response));
})

/*
describe('Initialization', function() {
  describe('Constructor', function() {
    it('should throw an error if an api key is not sent to the constructor', function() {

      expect(() => {new Bls2();})
      .to.throwError();

    });
  });
});

describe('Options', function() {
  describe('seriesid', function() {
    it('should throw an error if seriesid is not included in options', function() {

      expect(() => {
          const API_KEY = '78cde6739045407386ed2dc608d6370a';
          let bls = new Bls2(API_KEY);
          let options = {
              'startyear': '2017',  
              'endyear': '2018',
          };       
          bls.fetch(options);     
      })
      .to.throwError();

    });
  });
});



describe('Options', function() {
  describe('startyear', function() {
    it('should throw an error if startyear is not included in options', function() {

      expect(() => {
          const API_KEY = '78cde6739045407386ed2dc608d6370a';
          let bls = new Bls2(API_KEY);
          let options = {
            'seriesid': ['CES3000000001'],
            'endyear': '2018',
          };       
          bls.fetch(options);     
      })
      .to.throwError();

    });
  });
});


describe('Options', function() {
  describe('endyear', function() {
    it('should throw an error if endyear is not included in options', function() {

      expect(() => {
          const API_KEY = '78cde6739045407386ed2dc608d6370a';
          let bls = new Bls2(API_KEY);
          let options = {
            'seriesid': ['CES3000000001'],
            'startyear': '2008',
          };       
          bls.fetch(options);     
      })
      .to.throwError();

    });
  });
});
*/