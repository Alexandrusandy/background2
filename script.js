// referente type
var object1 ={value:10};
var object2 = object1;
var object3={value:10};

// content vs scope
const object4 ={
	a:function(){
		console.log(this);
	}
}

// instantiation

class PLayer{
	constructor(name,type) {
		console.log(this);
		this.name =name;
		this.type= type;
	}
	introduce() {
		console.log(`Hi i am ${this.name},I'm ${this.type}`)
	}
}

class Wizard extends Player{
	constructor(name,type) {
		super(name,type)
	}
	play(){
		console.log(`WEEEE i'm a ${this.type}`);
	}
}

const wizard1 = new Wizard('Shelly','Healer');
const wizard2 = new Wizard('Sean','Dark magic');