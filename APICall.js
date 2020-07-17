const fetch = require('node-fetch');


class APICall {
    constructor(HeadersAndData){
        this.HeadersAndData  = HeadersAndData
    }

    APICall(){
        const HeadersAndData = this.HeadersAndData
        let results = {}
        fetch(HeadersAndData.url, {
            method: 'POST', // or 'PUT'
            headers: HeadersAndData.headers,
            body: HeadersAndData.body,
            })
            .then((response) => response.json())
            .then((data) => {
            console.log('Success:', data, data.Results);
            results = data.Results
    
            })
            .catch((error) => {
            console.error('Error:', error);
    
        });
       return results
    }

    APIDataCheck(){
        //make sure that the format is as expected. 
        // better as a unit test 

    }



}

module.exports = APICall