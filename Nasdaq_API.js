const InvScope = require("./InvScope");

const InvScope = require('./InvScope')



const APIHeadersAndData = {
	// url: 'https://api.bls.gov/publicAPI/v2/timeseries/data',
	// body : {"seriesid": ['CUUR0000SA0','SUUR0000SA0'],"startyear":"2011", "endyear":"2014"},
	// headers: {'Content-Type': 'application/json'},
	apiKey : 'bs8g407rh5r8i6g9ii8g' //finhub 
}


const Global_scope = new InvScope(name="global", APIHeadersAndData=APIHeadersAndData)