var inC = [];
var notInC = [];

function Unicorn(name, color, favorFood, majestic) {
	this.name = name;
	this.color = color;
	this.favorFood = favorFood;
	this.majestic = majestic;
	this.moveCorral = function() {
		if(inC.indexOf(this) === -1) {
			inC.push(this);
		}
		
		if(notInC.indexOf(this) !== -1) {
				notInC.splice(notInC.indexOf(this), 1);
		}
	}
	this.moveOutCorral = function() {
		if(notInC.indexOf(this) === -1) {
			notInC.push(this);

		}
		
		if(inC.indexOf(this) !== -1) {
				inC.splice(inC.indexOf(this), 1);
		}
	}
};

var Joey = new Unicorn('joey', 'red', 'apples', 8);
var Pickles = new Unicorn('pickles', 'green', 'pickles', 11);
Joey.moveCorral();

Pickles.moveCorral();
Joey.moveOutCorral();



var Sam = new Unicorn('sam', 'blue', 'peanuts', 7);
Sam.moveOutCorral();
// Sam.moveCorral();



$(function() {
	var uniString = '';
	  for(var i = 0; i < inC.length; i++) {
		uniString += '<p>' + inC[i].name + '</p>';
	}

	var outString = '';
	for(var i = 0; i <notInC.length; i++) {
		outString += '<p>' + notInC[i].name + '</p>';
	}

	$('#inCorral').append(uniString);
	$('#notInCorral').append(outString);
});
