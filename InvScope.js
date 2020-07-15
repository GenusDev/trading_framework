

class InvScope {
    constructor (){
        this.dir = 0
        this.prob = 0
        this.fundamentals = {}
        this.signals= []
    }

    determineCalculations(){
        this.dir = calculateDirection()
        this.dir = calculateProbability()
    }

    updateData(){
        // pull in api information and update signals
    }

    calculateDirection(){

    }

}