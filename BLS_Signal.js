
const fetch = require('node-fetch');
const Signal = require('./Signal.js')

/*
 * This Javascript library is intended to serve as a wrapper for the Bureau of 
 * Labor Statistics' API.  It was designed with Version 2.0 in mind.
 * It allows for making requests, and then making cached copies of those
 * requests in order to prevent recycling.
 */

//Strict mode activated.
// 'use strict';
 
// var apiKey = '78cde6739045407386ed2dc608d6370a';
// var mostRecentRequest = null;
// var blsURL = 'http://api.bls.gov/publicAPI/v2/timeseries/data/';

console.log('hello world')


const APIHeadersAndData = {
	url: 'https://api.bls.gov/publicAPI/v2/timeseries/data',
	body : {"seriesid": ['CUUR0000SA0','SUUR0000SA0'],"startyear":"2011", "endyear":"2014"},
	headers: {'Content-Type': 'application/json'},
	apiKey : '78cde6739045407386ed2dc608d6370a'
}

function makeRequest(seriesID, paramPairs){
	// potentially better to put this in class, and make consistent across all signals. 
	let BLS_Signal  = new Signal(name='BLS',APIHeadersAndData, dataParameters='m')
	return 'BLS_Signal'
}

/*
 * Sets the API Key of the user of the script
 * key -- The API key to use
 * TODO -- Get this to search a local directory or other storage in
 * to separate out API key knowledge.
 */
// function checkAPIKey(){
// 	 if(!localStorage.getItem('apiKey')){
// 		 return null;
// 	 }else{
// 		 apiKey = localStorage.getItem('apiKey');
// 	 }
//  }
 
// function setAPIKey(key){
// 	apiKey = key;
// 	localStorage.setItem('apiKey',apiKey);
// }

// function clearAPIKey(){
// 	apiKey = null;
// 	localStorage.clearItem('apiKey');
// }

/*
 * General wrapper for making BLS data requests
 */


return makeRequest('CES1021100001', [2011,2012])