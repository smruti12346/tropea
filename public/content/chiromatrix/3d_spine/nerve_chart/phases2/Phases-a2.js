(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bitmap140 = function() {
	this.initialize(img.bitmap140);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,396);


(lib.bitmap147 = function() {
	this.initialize(img.bitmap147);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,396);


(lib.bitmap149 = function() {
	this.initialize(img.bitmap149);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,396);


// stage content:
(lib.Phasesa2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_6 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(1));

	// Layer 12
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bitmap140, null, new cjs.Matrix2D(1,0,0,1,-110,-198)).s().p("AxLe8MAAAg93MAiXAAAMAAAA93g");
	this.shape.setTransform(116.4,198);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.bitmap147, null, new cjs.Matrix2D(1,0,0,1,-110,-198)).s().p("AxLe8MAAAg93MAiXAAAMAAAA93g");
	this.shape_1.setTransform(119.4,198);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.bitmap149, null, new cjs.Matrix2D(1,0,0,1,-110,-198)).s().p("AxLe8MAAAg93MAiXAAAMAAAA93g");
	this.shape_2.setTransform(123.7,198);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(116.4,198,220,396);
// library properties:
lib.properties = {
	id: '02A559EBA2A24E4E97BEE3AD39A333C3',
	width: 220,
	height: 396,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bitmap140.png", id:"bitmap140"},
		{src:"images/bitmap147.png", id:"bitmap147"},
		{src:"images/bitmap149.png", id:"bitmap149"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['02A559EBA2A24E4E97BEE3AD39A333C3'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;