const APICall = require('./API_call');

class InvScope extends APICall {
  constructor(APIHeadersAndData) {
    super(APIHeadersAndData);
        this.predicted_dir = 0;
        this.prob = 0;
        this.value = []; //nadaq
        this.signals = []; // array of objects
        this.fundamentals = [];        
    }

    //calls the nasdaq function and
  updateData() {
    // pull in api information and update signals
    this.updateValue();
    // this.updateSignals()
  }

  updateValue() {
    //calls the nasdaq function and
    this.value = this.APICall();
    
  }

  updateSignals() {
    // todo api call to each api
    this.signals.forEach((sig) => {
      sig.callAPI();
    });
  }

  calculateDirection() {}

  saveToMongo() {}
}

module.exports = InvScope;
