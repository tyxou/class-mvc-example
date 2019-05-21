class Model {
  constructor() {
    this.dataPoint = Model.api();
		this.textArr = null;
  }
    
  static api() {
		return fetch('https://opentdb.com/api.php?amount=10&category=18&type=boolean')
	}
	
	load() {
		return this.dataPoint.then(res=>res.json()).then(res=>this.textArr=res.results)
	}
}

export default Model;