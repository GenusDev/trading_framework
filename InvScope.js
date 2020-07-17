<<<<<<< HEAD
 const APICall = require('./APICall')
 
 
 class InvScope extends APICall {
    constructor (APIHeadersAndData){

        super(APIHeadersAndData)
        
=======
 class InvScope {
    constructor (){
>>>>>>> 76b638bf6700ac72a0047000317db5477a3ea4f7
        this.predicted_dir = 0
        this.prob = 0
        this.value = [] //nadaq
        this.signals = [] // array of objects
        this.fundamentals = []
<<<<<<< HEAD
        this.APIHeadersAndData = APIHeadersAndData
=======
>>>>>>> 76b638bf6700ac72a0047000317db5477a3ea4f7
    }

    determineCalculations(){
        this.dir = calculateDirection()
        this.dir = calculateProbability()
    }

    updateValue(){
<<<<<<< HEAD

        this.value = this.callAPI(this.APIHeadersAndData)
        
=======
        //calls the nasdaq function and 
>>>>>>> 76b638bf6700ac72a0047000317db5477a3ea4f7
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