const APICall = require('./APICall')


class Signal extends APICall{

    constructor(name, APIHeadersAndData, params){
        super(APIHeadersAndData)
        this.name= name
        this.values = []
    }

    updateValue(){
        this.value = this.APICall()

    }

}

module.exports = Signal