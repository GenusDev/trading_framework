 class InvScope {
    constructor (){
        this.predicted_dir = 0
        this.prob = 0
        this.value = [] //nadaq
        this.signals = [] // array of objects
        this.fundamentals = []
    }

    determineCalculations(){
        this.dir = calculateDirection()
        this.dir = calculateProbability()
    }

    updateValue(){
        //calls the nasdaq function and 
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