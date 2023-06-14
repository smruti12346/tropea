(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Subluxation_b2_atlas_", frames: [[0,398,220,396],[222,0,220,396],[222,398,220,396],[0,0,220,396],[444,0,220,396],[444,398,12,12],[0,796,12,12]]}
];


// symbols:



(lib._2 = function() {
	this.spriteSheet = ss["Subluxation_b2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["Subluxation_b2_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["Subluxation_b2_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["Subluxation_b2_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.spriteSheet = ss["Subluxation_b2_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.blue = function() {
	this.spriteSheet = ss["Subluxation_b2_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.red = function() {
	this.spriteSheet = ss["Subluxation_b2_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.red();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12,12);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.blue();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12,12);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AHVAAQAADCiJCKQiKCJjCAAQjBAAiKiJQiJiKAAjCQAAjBCJiKQCKiJDBAAQDCAACKCJQCJCKAADBg");
	this.shape.setTransform(46.9,46.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,0,0,0.4)").s().p("AlKFLQiKiJAAjCQAAjBCKiJQCJiKDBAAQDDAACJCKQCJCJAADBQAADCiJCJQiJCKjDAAQjBAAiJiKg");
	this.shape_1.setTransform(46.9,46.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,95.8,95.8);


// stage content:
(lib.Subluxationb2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_42 = function() {
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.button_5.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_9.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_9()
		{
			this.gotoAndPlay(89);
		}
	}
	this.frame_67 = function() {
		this.gotoAndPlay(43);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(42).call(this.frame_42).wait(25).call(this.frame_67).wait(1));

	// Ged-circle
	this.instance = new lib.Symbol6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(119.6,216.1,1,1,0,0,0,46.9,46.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).to({alpha:1},15).wait(26));

	// Red
	this.instance_1 = new lib.Symbol8("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(115.9,211.3,1,1,0,0,0,6,6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(42).to({_off:false},0).to({x:128.4,y:219.6},5).to({x:150.9,y:227.6},5).to({scaleX:0.72,scaleY:0.72,x:183.4,y:251.6},5).to({regY:6.1,scaleX:0.63,scaleY:0.63,x:203.2,y:274.4},5).to({regY:6,scaleX:0.72,scaleY:0.72,x:223.7,y:301.6},5).wait(1));

	// Red copy
	this.instance_2 = new lib.Symbol8("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(113.6,215.8,1,1,0,0,0,6,6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(42).to({_off:false},0).to({x:125.4,y:225.6},5).to({x:148.2,y:233.6},5).to({scaleX:0.72,scaleY:0.72,x:183.4,y:251.6},5).to({regY:6.1,scaleX:0.63,scaleY:0.63,x:203.2,y:274.4},5).to({regY:6,scaleX:0.72,scaleY:0.72,x:223.7,y:301.6},5).wait(1));

	// blue1 copy 4
	this.instance_3 = new lib.Symbol7("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(118.7,279.4,1,1,0,0,0,6,6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(42).to({_off:false},0).to({x:140,y:291.9},5).to({x:165.2,y:295.8},5).to({scaleX:0.75,scaleY:0.75,x:184.3,y:303.3,alpha:0.801},5).to({scaleX:0.79,scaleY:0.79,x:203.8,y:314.7,alpha:0.5},5).to({scaleX:0.65,scaleY:0.65,x:222,y:327.5,alpha:0},5).wait(1));

	// blue1 copy 3
	this.instance_4 = new lib.Symbol7("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(124.7,270.4,1,1,0,0,0,6,6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(42).to({_off:false},0).to({x:142.7,y:280.5},5).to({x:168.2,y:286.5},5).to({scaleX:0.75,scaleY:0.75,x:187.7,y:296.4,alpha:0.801},5).to({scaleX:0.79,scaleY:0.79,x:206.9,y:309.6,alpha:0.5},5).to({scaleX:0.65,scaleY:0.65,x:223.5,y:321.9,alpha:0},5).wait(1));

	// blue1 copy 2
	this.instance_5 = new lib.Symbol7("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(108.2,158.9,1,1,0,0,0,6,6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(42).to({_off:false},0).to({x:131.8,y:169.9},5).to({scaleX:0.9,scaleY:0.9,x:163.1,y:184.7},5).to({scaleX:0.62,scaleY:0.62,x:180.3,y:198.2,alpha:0.801},5).to({regX:6.1,scaleX:0.53,scaleY:0.53,x:198.6,y:220.2,alpha:0.5},5).to({regX:6,scaleX:0.48,scaleY:0.48,x:222.9,y:254.4,alpha:0},5).wait(1));

	// blue1 copy
	this.instance_6 = new lib.Symbol7("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(108.2,150.4,1,1,0,0,0,6,6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(42).to({_off:false},0).to({x:133.8,y:163.9},5).to({scaleX:0.9,scaleY:0.9,x:163.6,y:181.2},5).to({scaleX:0.62,scaleY:0.62,x:182,y:194.9,alpha:0.801},5).to({regX:6.1,scaleX:0.53,scaleY:0.53,x:201.8,y:216.2,alpha:0.5},5).to({regX:6,scaleX:0.48,scaleY:0.48,x:225.9,y:242.7,alpha:0},5).wait(1));

	// blue2
	this.instance_7 = new lib.Symbol7("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(77.7,104.4,1,1,0,0,0,6,6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(42).to({_off:false},0).to({x:111.3,y:115.4},5).to({scaleX:0.9,scaleY:0.9,x:141.6,y:120.6},5).to({scaleX:0.62,scaleY:0.62,x:169.5,y:128,alpha:0.801},5).to({regX:6.1,scaleX:0.53,scaleY:0.53,x:201.8,y:141.4,alpha:0.5},5).to({regX:6,scaleX:0.48,scaleY:0.48,x:225.9,y:151.9,alpha:0},5).wait(1));

	// blue1
	this.instance_8 = new lib.Symbol7("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(77.7,91.7,1,1,0,0,0,6,6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(42).to({_off:false},0).to({x:111.3,y:102.9},5).to({scaleX:0.9,scaleY:0.9,x:141.6,y:110.2},5).to({scaleX:0.62,scaleY:0.62,x:169.5,y:118.7,alpha:0.801},5).to({regX:6.1,scaleX:0.53,scaleY:0.53,x:201.8,y:132.7,alpha:0.5},5).to({regX:6,scaleX:0.48,scaleY:0.48,x:225.9,y:145.9,alpha:0},5).wait(1));

	// 6 copy
	this.instance_9 = new lib._6();
	this.instance_9.parent = this;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({_off:false},0).wait(59));

	// 5 copy 2
	this.instance_10 = new lib._5();
	this.instance_10.parent = this;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(6).to({_off:false},0).to({_off:true},3).wait(59));

	// 4 copy 2
	this.instance_11 = new lib._4();
	this.instance_11.parent = this;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(4).to({_off:false},0).to({_off:true},2).wait(62));

	// 3 copy 2
	this.instance_12 = new lib._3();
	this.instance_12.parent = this;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(2).to({_off:false},0).to({_off:true},2).wait(64));

	// 2 copy 2
	this.instance_13 = new lib._2();
	this.instance_13.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},2).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(110,198,220,396);
// library properties:
lib.properties = {
	id: '0D2162E2BB83854CBCD7764A515F0755',
	width: 220,
	height: 396,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Subluxation_b2_atlas_.png", id:"Subluxation_b2_atlas_"}
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
an.compositions['0D2162E2BB83854CBCD7764A515F0755'] = {
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