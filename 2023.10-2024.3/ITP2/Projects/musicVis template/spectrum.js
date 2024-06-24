function Spectrum(){
	this.name = "spectrum";

	this.draw = function(){
		push();
		var spectrum = fourier.analyze();
		noStroke();
		
		fill(0,255,0)
		for (var i = 0; i< spectrum.length; i++){
			var x = map(i, 0, spectrum.length, 0, width);
		    var w = map(spectrum[i],0,255,0,width);
			fill(spectrum[i],map(spectrum[i],0,255,255,0),0)
		    rect(0,x,w,height / spectrum.length);
  		}
	
		pop();
	};
}
