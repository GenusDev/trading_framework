 const APICall = require('./APICall')
 
 
 class InvScope extends APICall {
    constructor (APIHeadersAndData){

        super(APIHeadersAndData)
        
        this.predicted_dir = 0
        this.prob = 0
        this.value = [] //nadaq
        this.signals = [] // array of objects
        this.fundamentals = []
        this.APIHeadersAndData = APIHeadersAndData
    }

    determineCalculations(){
        this.dir = calculateDirection()
        this.dir = calculateProbability()
    }

    updateValue(){

        this.value = this.callAPI(this.APIHeadersAndData)
        
    }

    updateData(){
        // pull in api information and update signals
        this.updateValue()
        this.updateSignals()
    }

    updateSignals(){
        // todo api call to each api 
        this.signals.forEach((sig)=>{
            sig.callAPI()
        })
        
    }

    calculateDirection(){

    }

    saveToMongo(){

    }

}

module.exports = InvScope