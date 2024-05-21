(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"animacion_pig_atlas_1", frames: [[828,1195,690,402],[758,0,744,402],[0,852,1650,341],[0,0,756,850],[0,1696,1057,117],[758,404,426,426],[0,1195,826,499]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_7 = function() {
	this.initialize(ss["animacion_pig_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["animacion_pig_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["animacion_pig_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["animacion_pig_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["animacion_pig_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Group = function() {
	this.initialize(ss["animacion_pig_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.titulo = function() {
	this.initialize(ss["animacion_pig_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.titulocompleto = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.titulo();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.titulocompleto, new cjs.Rectangle(0,0,413,249.5), null);


(lib.pigblanco = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pigblanco, new cjs.Rectangle(0,0,372,201), null);


(lib.pig = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pig, new cjs.Rectangle(0,0,825,170.5), null);


(lib.fondonegro = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AyFSGMAAAgkLMAkLAAAMAAAAkLg");
	this.shape.setTransform(350.0034,350.0323,3.0224,3.0226);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fondonegro, new cjs.Rectangle(0,0,700,700.1), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhURAhSMAAAhCjMCojAAAMAAABCjg");
	mask.setTransform(539.375,213.025);

	// Capa_3
	this.instance = new lib.Group();
	this.instance.setTransform(653.65,0);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(0,0.9,0.5,0.5);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,1078.8,426), null);


(lib.en_crecimientp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAZEsIAApXMAhSAAAIAAJXgEghqAEYIAAnfIHgAAIAAHfg");
	mask.setTransform(213.5,194.05);

	// Capa_1
	this.instance = new lib.titulo();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.en_crecimientp, new cjs.Rectangle(0,164.1,413,60), null);


(lib.delcerdominuatura = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EghgAEiIAApDMBDBAAAIAAJDg");
	mask.setTransform(203.5,128.05);

	// Capa_1
	this.instance = new lib.titulo();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.delcerdominuatura, new cjs.Rectangle(0,99.1,413,58), null);


(lib.botontrans = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Egm/AaKMAAAg0TMBN/AAAMAAAA0Tg");
	this.shape.setTransform(249.55,167.375);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,499.1,334.8);


(lib.anatomia = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EghWAIrIAAxVMBCtAAAIAARVg");
	mask.setTransform(207.5,45.55);

	// Capa_1
	this.instance = new lib.titulo();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.anatomia, new cjs.Rectangle(0,0,413,101.1), null);


(lib.secuenciaanimadaredux = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

	// cuerpo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#535A9F").s().p("AHnPtQgQgDgTgHQgngPgLgWQgQgggPhBQgShKAIgcQAAgWgHgOQgIgPgEgKQgPgmARhwIAEgUQg+Brg2A1QgXAYgEBWQgDBBAHAwQADAWAaAcQAaAcADAQIinAAIggggQgggjgDgPQgGgXAMg3QAOhCAdgkQAGgygBgwIgFhIQgBgMgFgaQloC5mBhJQhHgOhDgVQADAfAQAzQAXBIAYAiQAJANAiAbIBBA0QBVBFAAAbIiTAAQgQABgZgKQgxgUgsg7Qgsg7gyhkIgphYIgggoQgkgrgOgLQgJgHgJgdQgFgTgDgWIgKgIIgrBBQgZAqgCATQgEApAYBOQAVBEAeA8QAVAsAzA4QAZAbAVATIjsAAQgEgIgGgQQgMghgHgkQgIgmgjhOIgwhjQgUgogMg9QgQhQAVgsQAbg6ghhFQgRgkg4hFIgKgPIgEgGQiEixgRjEQgIhoAbh4IAKgiQgYgKgVBAQgLAjgSBHQgJAagRAnQgKAkAIA0QAIAzgnAvQgUAWgVANIgdgGQgjAdgOARQgXAdgQArQgXg5AhhSQASgvAkg2QAKgOAOgpQANgiAQgQQAgggAXglQAhg1AAgrQAAgvAQgiQAPghAYgKQAUgIA3g7QAcgeAYgcQANgUA8glQA9gmBOgkQDGhcB8AAQBgAADvAmICrAaQBXAMAvAAQBjAADrgwQDhguA+gdQBDgfBdgaQB0ghCBgQQB8gPBlA/QAmAYAcAfQAYAcAHAWQAzgEA8ApQAOAIAhAaQAbAVAPAIQAdADB2AxIBvAvIECAGIADgNQAFgNATAAQAhASAQBUQAIAqABAmIgLAAQgNADgIALQhMCYjZBlQhMAkhlAgIiUAsQiNCljoB/QhjA2hUAhQAFAUgHAKQgGAIggBgQgeBagGAXQgDAPglBTQgdBDgOAeQgEAJAAAaQAAAcAGAfQAPBTArAnQAOAPAgAXQAYAVAAARg");
	this.shape.setTransform(186.0189,100.4979);

	this.instance = new lib.pigblanco();
	this.instance.setTransform(186,100.5,1,1,0,0,0,186,100.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.instance}]},52).to({state:[{t:this.instance}]},5).to({state:[]},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(53).to({_off:false},0).to({alpha:1},5).to({_off:true},1).wait(11));

	// cuerpo
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("AqhKrQh2gWhqgyQhTgngxgpQgggcgpgWIhGgiQgogVgegaQgoghgkg0QhviVgOilQgHhWAXhlQALgtAcg9QAZg1AYgmQAMgQAygfQAzggBCgeQClhNBoAAQBRAADIAgICPAWQBJAKAnAAQBTAADGgpQC7gnA0gXQA5gbBNgWQBhgbBsgNQBogNBVA1QAgAUAXAaQAUAXAGATQArgDAyAiQAMAHAcAVQAWASANAGQAYADBjApIBdAoIDYAFIACgLQAFgMAPAAQAcAQAOBGQAGAjABAgIgJAAQgLADgGAJQhAB/i2BVQhAAehUAaIh8AkQh3CMjCBqQiABGhiAcQgtANhIAjIkgCSQjbByjmAAQhZAAhcgSg");
	this.shape_1.setTransform(199.5183,83.6686);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.094)").s().p("ArILTQh9gYhwg1QhYgpgzgsQgigdgsgXQgxgYgYgNQgrgWgggbQgqgjgmg3Qh1idgPivQgIhbAZhrQALgvAehBQAbg4AZgoQAMgRA1ghQA2giBGggQCvhRBuAAQBVAADTAiQByASAmAFQBNAKApAAQBYAADRgrQDHgpA3gZQA7gcBTgXQBmgcBygPQBugNBaA4QAiAVAYAcQAVAYAHAUQAtgDA1AjQAMAIAeAWQAYATANAHQAaADBoArIBjAqIDkAGIADgMQAEgMARAAQAdAQAOBKQAHAmACAhIgLABQgLACgHAKQhDCGjABaQhEAghZAbIiDAnQh+CUjNBwQiIBKhnAeQgwAOhMAlIkwCaQjoB4jzAAQhfAAhhgSg");
	this.shape_2.setTransform(199.5121,83.6645);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.165)").s().p("ArmLxQiDgZh0g2Qhcgsg1gtQgkgegugZIhMgmQgtgXghgcQgrglgpg5Qh6ikgPi2QgIhfAahvQALgyAghDQAbg7AbgpQAMgTA3giQA5gjBIghQC3hVBzAAQBYAADdAjQB2ATAoAGQBQALArAAQBcAADagtQDPgrA5gaQA+gdBWgYQBrgeB3gPQBygOBeA6QAjAXAaAcQAWAaAHAUQAugDA4AlQANAIAfAXQAZAUANAHQAbADBtAtIBnAsIDuAGIACgMQAFgNARAAQAfARAPBNQAHAnACAjIgLABQgMACgHALQhGCMjJBdQhGAhhdAdIiJAoQiDCajWB1QiNBOhsAeQgyAPhPAnIk+CgQjyB9j9AAQhjAAhkgTg");
	this.shape_3.setTransform(199.5148,83.6594);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.22)").s().p("Ar9MIQiGgah5g4Qhegsg3gvQglgfgvgZQg1gagagOQgugYgigdQgtglgpg8Qh+iogQi8QgIhiAahyQAMgzAhhGQAcg9AcgqQANgTA4gjQA6glBLgiQC8hXB3AAQBbAADjAkICjAZQBTALAsAAQBfAADgguQDVgsA7gbQBBgeBYgYQBugfB7gQQB2gOBgA8QAlAXAaAeQAXAaAHAVQAwgEA5AnQANAIAgAYQAaAUAOAIQAcADBwAuIBqAuID1AFIADgMQAFgNASAAQAfASAPBPQAIAoABAkIgLABQgMADgHAKQhICQjPBgQhJAjhgAdIiNAqQiGCejdB5QiSBQhvAgQgzAOhSAoIlHCmQj5CBkFAAQhmAAhogUg");
	this.shape_4.setTransform(199.5059,83.6519);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.255)").s().p("AsNMZQiJgah7g5Qhhgug4gwQglgggxgZIhQgoQgvgZgjgdQgugngqg9QiBisgQjAQgIhkAbh0QAMg1AhhGQAdg/AcgrQANgTA6gkQA8glBMgjQDAhaB5AAQBdAADpAmQB8ATAqAGQBUAMAuAAQBgAADlgwQDagsA8gcQBCgfBagZQBxgfB9gQQB5gPBiA+QAlAXAbAeQAXAbAIAVQAxgDA6AnQAOAIAgAZQAaAVAPAHQAcAEByAvIBtAuID7AGIACgNQAFgNASAAQAhASAPBRQAIApABAlIgLABQgNADgHAKQhKCUjTBiQhKAjhiAeIiQArQiJChjiB7QiVBShxAhQg1APhTApIlOCoQj/CEkKAAQhoAAhqgUg");
	this.shape_5.setTransform(199.5072,83.6414);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.078)").s().p("ArILTQh9gYhwg1QhYgpgzgsQgigdgsgXQgxgYgYgNQgrgWgggbQgqgjgmg3Qh1idgPivQgIhbAZhrQALgvAehBQAbg4AZgoQAMgRA1ghQA2giBGggQCvhRBuAAQBVAADTAiQByASAmAFQBNAKApAAQBYAADRgrQDHgpA3gZQA7gcBTgXQBmgcBygPQBugNBaA4QAiAVAYAcQAVAYAHAUQAtgDA1AjQAMAIAeAWQAYATANAHQAaADBoArIBjAqIDkAGIADgMQAEgMARAAQAdAQAOBKQAHAmACAhIgLABQgLACgHAKQhDCGjABaQhEAghZAbIiDAnQh+CUjNBwQiIBKhnAeQgwAOhMAlIkwCaQjoB4jzAAQhfAAhhgSg");
	this.shape_6.setTransform(199.5121,83.6645);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.282)").s().p("AsYMkQiLgah8g7Qhjgug4gwQgmghgxgZIhSgpQgvgZgkgeQgugngrg+QiCiugRjDQgIhlAbh3QAMg0AihIQAdg/AdgsQANgUA7gkQA8gmBOgjQDDhbB6AAQBfAADrAmICpAaQBWALAtAAQBiAADpgvQDcguA9gcQBDgfBcgaQByggB/gPQB6gQBjA/QAmAYAcAeQAXAbAHAWQAygDA8AnQANAJAhAZQAbAVAOAIQAdADB0AwIBuAvID+AGIADgNQAFgOATAAQAgATAQBSQAIApABAmIgLAAQgNADgHALQhMCVjVBkQhMAkhjAeIiSArQiLCljlB8QiXBThzAhQg1APhVAqIlTCrQkCCGkOAAQhqAAhrgVgAzLoIQhGAfg2AiQg0AhgMASQgaAngaA5QgfBAgLAwQgZBqAIBbQAPCvB1CdQAnA3AqAkQAfAbArAWQAYANAyAXQArAYAiAdQA0ArBXAqQBxA0B9AYQFXBCFDioIEwiaQBMglAwgOQBogdCIhLQDMhwB+iTICDgnQBagcBDgfQDBhaBDiGQAGgKAMgDIAKAAQgBgigHglQgOhKgegRQgQAAgFANIgCALIjlgFIhigqQhpgrgagDQgNgHgYgTQgdgXgMgHQg2gkgtADQgGgTgVgZQgZgbgigWQhZg4hvAOQhxAOhnAdQhSAXg8AcQg3AZjGApQjRArhYAAQgpAAhNgLQgngFhxgSQjUgihVAAQhuAAivBSg");
	this.shape_7.setTransform(199.4997,83.6478);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.125)").s().p("ArBLMQh8gYhwgzQhXgqgygrQgigdgrgXIhJgkQgrgWgfgbQgqgjgmg2Qh0icgOitQgIhaAYhqQALgvAehAQAag4AagnQAMgSA0ggQA2giBFgfQCthRBtAAQBVAADRAiQBwASAnAFQBMAKApAAQBXAADPgrQDFgoA2gZQA7gbBSgXQBlgdBxgOQBtgOBZA4QAiAVAYAcQAVAYAHATQAsgDA1AkQAMAHAdAWQAYATANAHQAaADBnAqIBiAqIDiAFIADgLQADgKALgCIAHAAIABABQAcARAOBIQAHAlABAhIgKAAQgMADgGAKQhDCFi+BZQhDAfhZAbIiCAnQh8CSjMBvQiGBKhnAdQgvAOhMAlIktCYQjmB4jxAAQheAAhfgTg");
	this.shape_8.setTransform(199.5107,83.6725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.141)").s().p("ArmLxQiDgZh0g2Qhcgsg1gtQgkgegugZIhMgmQgtgXghgcQgrglgpg5Qh6ikgPi2QgIhfAahvQALgyAghDQAbg7AbgpQAMgTA3giQA5gjBIghQC3hVBzAAQBYAADdAjQB2ATAoAGQBQALArAAQBcAADagtQDPgrA5gaQA+gdBWgYQBrgeB3gPQBygOBeA6QAjAXAaAcQAWAaAHAUQAugDA4AlQANAIAfAXQAZAUANAHQAbADBtAtIBnAsIC0AEQgLADgDAJIgDALIjigFIhigqQhngqgagDQgNgHgYgTQgdgWgMgHQg1gkgsADQgHgTgVgYQgYgcgigVQhZg4htAOQhxAOhlAdQhSAXg7AbQg2AZjFAoQjPArhXAAQgpAAhMgKQgngFhwgSQjRgihVAAQhtAAitBRQhFAfg2AiQg0AggMASQgaAngaA4QgeBAgLAvQgYBqAIBaQAOCtB0CcQAmA2AqAjQAfAbArAWIBJAkQArAXAiAdQAyArBXAqQBwAzB8AYQFUBBFAimIEtiYQBMglAvgOQBngdCGhKQDMhvB8iSICCgnQBZgbBDgfQC+hZBDiFQAGgKAMgDIAKAAQgBghgHglQgOhIgcgRIAyABIACgMQAFgNARAAQAfARAPBNQAHAnACAjIgLABQgMACgHALQhGCMjJBdQhGAhhdAdIiJAoQiDCajWB1QiNBOhsAeQgyAPhPAnIk+CgQjyB9j9AAQhjAAhkgTg");
	this.shape_9.setTransform(199.5148,83.6594);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.298)").s().p("AseMrQiNgbh9g7Qhjgug6gxQgmghgxgaIhSgpQgxgZgjgeQgvgngrg+QiDiwgRjFQgIhmAbh3QAMg2AihIQAehAAdgsQANgUA7glQA9glBOgkQDFhcB7AAQBgAADtAnQB/AUArAFQBXAMAuAAQBjAADqgwQDeguA+gcQBDgfBdgaQByggCBgQQB7gQBkA/QAnAYAbAfQAYAbAHAWQAygDA9AoIAuAiQAbAVAPAIQAdADB1AwIBuAwIEBAGIACgNQAFgOATAAQAhATAQBTQAIApABAmIgMABQgMADgHALQhMCWjYBlQhMAjhkAfIiTAsQiMCljnB+QiYBUh0AhQg2APhWAqIlVCtQkECGkQAAQhrAAhsgUgAz/ofQhJAig4AjQg4AigMASQgaAqgcA7QgfBDgMAxQgZBvAHBfQAQC3B6CjQAoA6AsAlQAhAcAsAXIBNAmQAuAYAjAfQA1AtBcArQB0A3CDAZQFmBEFRivIE9igQBQgnAxgOQBsgfCOhOQDWh0CCiaICJgpQBdgcBHgiQDIhdBHiMQAGgKAMgDIALAAQgBgjgIgnQgOhNgfgRQgRAAgFAMIgCAMIgygBIgCgBIgGABIi1gEIhngsQhsgtgbgDQgOgIgZgTQgfgYgNgHQg3gmgvADQgHgUgWgZQgagdgjgWQhdg7hzAPQh3AOhrAeQhVAYg/AeQg5AajPAqQjaAthbAAQgrAAhQgLQgpgFh1gTQjdgkhZAAQhyAAi3BVg");
	this.shape_10.setTransform(199.4997,83.6319);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.224)").s().p("ArcLnQiBgYhzg2Qhagrg1gsQgjgegtgYIhMgmQgsgXgggbQgrglgog4Qh4iigPi0QgIhdAZhuQALgxAfhCQAcg6AagpQAMgSA3giQA3giBIghQC0hUBxAAQBYAADZAjICcAYQBPALArAAQBaAADXgtQDMgqA4gZQA+gdBUgYQBqgdB1gPQBxgOBcA6QAkAWAZAcQAVAZAHAUQAugDA3AlQANAHAeAXQAZAUANAHQAbADBrAsIBmAsIDrAFIACgMQACgGAFgDQAGgDAJAAIAGAEQAZAVANBEQAIAmABAjIgLAAQgLADgHAKQhFCKjGBcQhGAhhcAcIiHAoQiACYjTBzQiMBNhrAeQgxAOhOAmIk5CfQjuB7j5AAQhiAAhkgTg");
	this.shape_11.setTransform(199.503,83.6401);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.188)").s().p("Ar9MIQiGgah5g4Qhegsg3gvQglgfgvgZQg1gagagOQgugYgigdQgtglgpg8Qh+iogQi8QgIhiAahyQAMgzAhhGQAcg9AcgqQANgTA4gjQA6glBLgiQC8hXB3AAQBbAADjAkICjAZQBTALAsAAQBfAADgguQDVgsA7gbQBBgeBYgYQBugfB7gQQB2gOBgA8QAlAXAaAeQAXAaAHAVQAwgEA5AnQANAIAgAYQAaAUAOAIQAcADBwAuIBqAuIC8AEQgFADgCAGIgCAMIjrgGIhmgrQhrgsgbgDQgNgIgZgTQgegXgNgIQg3glguAEQgHgVgVgZQgZgcgkgWQhcg6hxAOQh1APhqAeQhUAXg+AdQg4AajMAqQjXAshaAAQgrAAhPgLIicgYQjZgihYAAQhxAAi0BTQhIAhg3AjQg3AhgMATQgaAogcA6QgfBDgLAxQgZBtAIBeQAPC0B4ChQAoA5ArAkQAgAcAsAXIBMAlQAtAYAjAeQA1AtBaArQBzA1CBAZQFhBDFMisIE5ieQBOgmAxgOQBrgfCMhMQDTh0CAiXICHgoQBcgdBGggQDGhdBFiJQAHgLALgCIALgBQgBgigIgnQgNhEgZgUIAkAAIADgMQADgIAHgDQAGgCAHAAIAEACQAcAVAOBKQAIAoABAkIgLABQgMADgHAKQhICQjPBgQhJAjhgAdIiNAqQiGCejdB5QiSBQhvAgQgzAOhSAoIlHCmQj5CBkFAAQhmAAhogUg");
	this.shape_12.setTransform(199.5059,83.6519);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.306)").s().p("AsiMuQiNgbh+g7Qhjgug6gxQgmghgxgaIhTgqQgxgZgjgeQgvgogsg+QiEixgQjFQgJhnAch3QAMg2AihJQAehAAdgsQAOgUA7glQA8gmBPgkQDGhcB8AAQBfAADvAnICrAaQBXAMAuAAQBjAADrgxQDgguA+gcQBDgfBdgaQBzghCBgQQB8gPBlA/QAmAYAcAfQAYAcAHAVQAzgDA8AoQANAJAiAZQAbAVAOAIQAdAEB2AwIBvAwIDDAEQgIADgDAIIgCANIglgBIgGgEQgJAAgGADIi8gEIhqgtQhwgugcgEQgOgHgZgUQgggZgNgIQg6gmgwADQgHgVgXgaQgagegkgWQhhg9h2APQh6APhuAfQhZAZhAAeQg7AbjVAsQjhAuheAAQgsAAhTgLIijgZQjkglhbAAQh3AAi7BYQhLAig6AkQg5AjgNATQgbArgdA9QggBFgMAzQgaByAIBiQAPC8B+CpQAqA7AtAmQAiAdAuAYQAaAOA1AZQAvAZAkAfQA3AvBfAtQB4A4CHAaQFwBGFbi0IFHilQBSgoA0gPQBvggCRhQQDdh4CHifICNgpQBggeBIgiQDPhgBIiQQAHgLAMgDIAMAAQgCgkgHgoQgPhLgcgUIAvABIACgNQAFgOATAAQAhATAQBTQAIAqACAmIgMAAQgNADgHALQhMCYjZBkQhMAkhlAfIiUAsQiMCmjoB/QiZBTh1AiQg1APhWAqIlXCuQkGCHkRAAQhrAAhtgVg");
	this.shape_13.setTransform(199.4997,83.641);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.306)").s().p("ArxL9QiFgZh2g4Qhdgsg3guQgkgfgugYIhOgnQgtgXgigdQgsglgpg7Qh8imgPi5QgIhgAahxQAMgyAfhEQAcg8AcgqQAMgTA4giQA5gkBKgiQC5hWB1AAQBaAADgAkQB3ATApAFQBSAMArAAQBeAADdguQDRgrA7gbQA/gdBXgZQBsgeB5gPQB1gPBeA8QAkAWAaAeQAXAZAHAVQAvgDA5AmQAMAIAgAXQAZAUAOAIQAbADBvAtIBoAtIDyAGIACgNIADgFQAGgHAOAAQAFADAFAFQAYAXAMBAQAHAoACAjIgLABQgMADgHAKQhICOjLBfQhIAhheAdIiLAqQiFCcjZB2QiPBPhuAgQgzAOhQAnIlCCjQj2B/kAAAQhlAAhmgTg");
	this.shape_14.setTransform(199.5148,83.6377);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.22)").s().p("AsNMZQiJgah7g5Qhhgug4gwQglgggxgZIhQgoQgvgZgjgdQgugngqg9QiBisgQjAQgIhkAbh0QAMg1AhhGQAdg/AcgrQANgTA6gkQA8glBMgjQDAhaB5AAQBdAADpAmQB8ATAqAGQBUAMAuAAQBgAADlgwQDagsA8gcQBCgfBagZQBxgfB9gQQB5gPBiA+QAlAXAbAeQAXAbAIAVQAxgDA6AnQAOAIAgAZQAaAVAPAHQAcAEByAvIBtAuIDHAFIgDAFIgCANIjygGIhogtQhvgtgbgDQgOgIgZgUQgggXgMgIQg5gmgvADQgHgVgXgZQgagegkgWQheg8h1APQh5APhsAeQhXAZg/AdQg7AbjRArQjdAuheAAQgrAAhSgMQgpgFh3gTQjggkhaAAQh1AAi5BWQhKAig5AkQg4AigMATQgcAqgcA8QgfBEgMAyQgaBxAIBgQAPC5B8CmQApA7AsAlQAiAdAtAXIBOAnQAuAYAkAfQA3AuBdAsQB2A4CFAZQFrBFFWixIFCijQBQgnAzgOQBuggCPhPQDZh2CFicICLgqQBegdBIghQDLhfBIiOQAHgKAMgDIALgBQgCgjgHgoQgMhAgYgXIAWAAIACgNIABgBQAFgMARAAQAIAEAHAJQAWAZALA9QAIApABAlIgLABQgNADgHAKQhKCUjTBiQhKAjhiAeIiQArQiJChjiB7QiVBShxAhQg1APhTApIlOCoQj/CEkKAAQhoAAhqgUg");
	this.shape_15.setTransform(199.5072,83.6414);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.31)").s().p("AsjMwQiNgbh/g7Qhjgvg5gxQgnghgxgaIhTgqQgwgZgkgeQgvgogsg+QiFixgQjGQgIhnAbh4QAMg1AjhJQAdhAAegtQANgUA8glQA9gmBOgkQDGhcB8AAQBgAADvAnICrAaQBXAMAuAAQBkAADrgxQDgguA+gcQBEggBdgaQBzggCBgQQB8gQBlBAQAnAYAbAfQAYAbAIAWQAygDA9AoQANAJAhAZQAbAVAPAIQAdAEB2AwIBvAwIDYAFIAAABIgDANIgVAAQgFgFgGgDQgNAAgGAHIjIgFIhtguQhxgvgdgEQgOgHgagVQghgZgNgIQg7gngxADQgHgVgYgbQgagegmgXQhig+h4APQh+AQhwAfQhbAZhCAfQg7AcjbAsQjkAwhhAAQgtAAhVgMQgqgGh8gTQjogmheAAQh4AAjBBaQhMAjg7AlQg6AkgOATQgbArgeA/QghBGgMA1QgaB0AIBkQAQDACACsQArA9AuAnQAjAdAuAZIBRAoQAwAZAlAgQA4AwBhAuQB7A5CJAaQF5BIFii4IFOioQBTgpA1gPQByghCVhSQDhh7CJihICQgrQBigeBKgjQDUhiBKiUQAHgKANgDIALgBQgCglgHgpQgMg9gWgZIAFAAIADgNQAFgOATAAQAhATAQBTQAHAqACAmIgLABQgNADgIALQhMCXjZBlQhMAkhlAfIiUAsQiNCnjoB+QiZBUh1AiQg2APhWAqIlXCuQkGCHkSAAQhrAAhtgUg");
	this.shape_16.setTransform(199.4997,83.639);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.369)").s().p("AsCMNQiHgah5g4Qhggtg3gvQglgggvgZIhQgnQgugYgigeQgtgmgqg7Qh/iqgQi9QgIhjAbhzQAMgzAghGQAdg9AcgrQANgTA5gkQA6gkBLgjQC+hYB3AAQBcAADlAlICkAZQBTAMAtAAQBfAADigvQDWgsA8gbQBAgeBZgZQBvgfB8gQQB2gPBhA9QAlAXAbAeQAWAaAIAVQAwgDA6AnQANAIAgAYQAaAUAOAIQAcADBxAvIBrAtID3AGIACgMIABgCQACgEAEgDQAGgEAKAAIAHAFIAIAHQAVAZALA9QAIAoABAkIgLABQgMADgHAKQhJCRjQBhQhKAjhgAdIiOAqQiHCgjeB5QiTBRhwAgQg0APhSAoIlJCmQj7CCkGAAQhnAAhpgUg");
	this.shape_17.setTransform(199.5072,83.6522);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.243)").s().p("AsYMkQiLgah8g7Qhjgug4gwQgmghgxgZIhSgpQgvgZgkgeQgugngrg+QiCiugRjDQgIhlAbh3QAMg0AihIQAdg/AdgsQANgUA7gkQA8gmBOgjQDDhbB6AAQBfAADrAmICpAaQBWALAtAAQBiAADpgvQDcguA9gcQBDgfBcgaQByggB/gPQB6gQBjA/QAmAYAcAeQAXAbAHAWQAygDA8AnQANAJAhAZQAbAVAOAIQAdADB0AwIBuAvIDUAFIAAABIgDANIj3gGIhrguQhwgugdgDQgOgIgagUQgggZgNgIQg5gngxAEQgHgVgXgbQgagdglgXQhhg9h3APQh7APhvAfQhZAZhBAeQg7AbjXAtQjiAuhfAAQgsAAhUgLIikgZQjlglhcAAQh3AAi9BYQhLAig7AlQg5AjgNATQgcArgcA9QghBGgMA0QgaBzAIBiQAQC+B+CpQAqA8AtAmQAjAdAuAYIBPAoQAwAZAlAfQA2AvBgAtQB5A5CIAaQFzBHFdi1IFJinQBTgoAzgPQBwggCThQQDeh6CHifICOgqQBhgeBJgiQDQhhBJiRQAHgLANgDIALAAQgCglgHgoQgMg9gVgYIAFAAIACgIIABgFQAFgOATAAIACACQAfAUAPBPQAIApABAmIgLAAQgNADgHALQhMCVjVBkQhMAkhjAeIiSArQiLCljlB8QiXBThzAhQg1APhVAqIlTCrQkCCGkOAAQhqAAhrgVg");
	this.shape_18.setTransform(199.4997,83.6478);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.31)").s().p("AsjMwQiNgbh/g7Qhkgvg5gxQgmghgygaIhTgqQgwgZgkgeQgvgogsg+QiEixgQjGQgJhnAch4QAMg1AihJQAehAAdgtQAOgUA7glQA9gmBPgkQDGhcB8AAQBgAADvAnICrAaQBXAMAuAAQBkAADrgxQDgguA+gcQBEggBdgaQBzggCBgQQB8gQBlBAQAnAYAbAfQAYAbAIAWQAygDA9AoQANAJAhAZQAbAVAPAIQAeAEB1AwIBwAwIDGAEQgEADgCAFIjUgFIhugvQh0gwgdgDQgOgIgbgVQghgZgNgJQg8gngyADQgHgWgXgbQgcgegmgYQhjg/h6AQQh/APhyAgQhcAahDAfQg9AcjcAuQjpAvhiAAQgtAAhWgLIipgaQjrgmhfAAQh6AAjDBbQhOAjg8AmQg7AkgNAUQgdAsgdA/QgiBIgMA0QgbB3AIBlQARDDCCCuQArA+AuAnQAkAeAvAZIBSApQAxAZAmAhQA4AwBjAuQB8A7CLAaQF+BJFni6IFTirQBVgqA1gPQBzghCXhTQDlh8CLilICSgrQBjgeBMgkQDVhkBMiVQAHgLANgDIALAAQgBgmgIgpQgPhPgfgUQAGgJAPAAQAhATAQBTQAIAqACAmIgMABQgNADgHALQhMCXjZBlQhNAkhlAfIiUAsQiNCnjoB+QiZBUh1AiQg2APhWAqIlXCuQkGCHkSAAQhrAAhtgUgAZMnTIgIgIIAPAAIgCAIg");
	this.shape_19.setTransform(199.4997,83.639);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.416)").s().p("AsOMaQiJgah8g5Qhggug4gwQgmgggwgZIhRgpQgvgYgjgeQgtgmgrg9QiBisgQjBQgIhkAbh1QAMg0AhhHQAdg+AcgsQAOgTA5gkQA8glBMgjQDBhaB5AAQBdAADpAmICnAZQBUAMAtAAQBhAADmgwQDagsA8gcQBCgfBagZQBxggB9gPQB5gPBjA9QAlAYAbAeQAXAbAHAVQAygDA6AnQAOAJAgAYQAbAVAOAIQAcADBzAvIBsAuID8AGIABgKIABgCIABgEQAGgKAQAAIABABIAIAGQAaAXANBGQAIApABAlIgLAAQgNADgHALQhKCTjTBjQhLAjhiAeIiQArQiJCijiB7QiVBShyAgQg1AQhTAoIlPCpQj/CEkLAAQhoAAhqgUg");
	this.shape_20.setTransform(199.4982,83.6404);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.243)").s().p("AAjBZIAEgBIAAACIgEgBgAgmhSQAGgGALgBQgFAEgDAGIAAADIgJgGg");
	this.shape_21.setTransform(365.75,43.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.369)").s().p("AgLADIAEgDQAGgDAJAAIAEACIgCADIAAACg");
	this.shape_22.setTransform(358.4375,35.9375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.255)").s().p("AseMrQiNgbh9g7Qhjgug6gxQgmghgxgaIhSgpQgxgZgjgeQgvgngrg+QiDiwgRjFQgIhmAbh3QAMg2AihIQAehAAdgsQANgUA7glQA9glBOgkQDFhcB7AAQBgAADtAnQB/AUArAFQBXAMAuAAQBjAADqgwQDeguA+gcQBDgfBdgaQByggCBgQQB7gQBkA/QAnAYAbAfQAYAbAHAWQAygDA9AoIAuAiQAbAVAPAIQAdADB1AwIBuAwIDMAEIAVABIgBAKIj8gGIhsguQhzgvgcgDQgOgIgbgVQgggYgOgJQg7gngxADQgHgVgXgbQgbgeglgYQhjg9h5APQh9APhxAgQhaAZhCAfQg8AcjbAsQjlAwhhAAQgtAAhUgMIingZQjpgmhdAAQh5AAjBBaQhMAjg8AlQg5AkgOATQgcAsgdA+QghBHgMA0QgbB1AIBkQAQDBCBCsQArA9AtAmQAjAeAvAYIBRApQAwAZAmAgQA4AwBgAuQB7A5CKAaQF5BIFji4IFPipQBTgoA1gQQByggCVhSQDih7CJiiICQgrQBigeBLgjQDThjBKiTQAHgLANgDIALAAQgBglgIgpQgNhGgagXIABgDQACgGAFgEQAFgDAHgBIAFAAQAhATAQBTQAHAoACAlIAAACIgGAAIgGABIgCAAIgDABQgJAEgFAJQhMCWjYBlQhMAjhkAfIiTAsQiMCljnB+QiYBUh0AhQg2APhWAqIlVCtQkECGkQAAQhrAAhsgUg");
	this.shape_23.setTransform(199.4997,83.6319);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.31)").s().p("AsjMwQiNgbh/g7Qhkgvg5gxQgmghgygaIhTgqQgwgZgkgeQgvgogsg+QiEixgQjGQgJhnAch4QAMg1AihJQAehAAdgtQAOgUA7glQA9gmBPgkQDGhcB8AAQBgAADvAnICrAaQBXAMAuAAQBkAADrgxQDgguA+gcQBEggBdgaQBzggCBgQQB8gQBlBAQAnAYAbAfQAYAbAIAWQAygDA9AoQANAJAhAZQAbAVAPAIQAeAEB1AwIBwAwIDGAEIgDADIjMgEIhugwQh1gwgdgDQgPgIgbgVIgugiQg9gogyADQgHgWgYgbQgbgfgngYQhkg/h7AQQiBAQhyAgQhdAahDAfQg+AcjeAuQjqAwhjAAQguAAhXgMQgrgFh/gUQjtgnhgAAQh7AAjFBcQhOAkg9AlQg7AlgNAUQgdAsgeBAQgiBIgMA2QgbB3AIBmQARDFCDCwQArA+AvAnQAjAeAxAZIBSApQAxAaAmAhQA6AxBjAuQB9A7CNAbQGBBJFqi7IFVitQBWgqA2gPQB0ghCYhUQDnh+CMilICTgsQBkgfBMgjQDYhlBMiWQAFgJAJgEIADABIAAgCIACAAIAGgBQgJAEgGAJQhMCXjZBlQhNAkhlAfIiUAsQiNCnjoB+QiZBUh1AiQg2APhWAqIlXCuQkGCHkSAAQhrAAhtgUgAaqmMQgQhTghgTIgFAAQAGgDAJAAQAhATAQBTQAIAqACAmIgLAAQgCglgHgog");
	this.shape_24.setTransform(199.4997,83.639);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.243)").s().p("AAEAAIAAAAIgIABIAIgBg");
	this.shape_25.setTransform(363.1,34.2375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.255)").s().p("AAeBaIAEgBIAEAAIAAABIgGAAIgBAAIgBAAgAgjhVIgCAAIABgBQAEgCAGgBQgEACgDADIgCgBg");
	this.shape_26.setTransform(367.2375,42.8252);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.416)").s().p("AgLAHIAAgBIACgDQAGgJAOAAIABAAQgEADgCAEIgBAGg");
	this.shape_27.setTransform(360.65,35.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.369)").s().p("AgKACIACgBQAGgDAJAAIAEACIgCADIAAAAg");
	this.shape_28.setTransform(358.55,35.8375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.451)").s().p("AsXMjQiLgah8g6Qhigvg5gwQgmgggxgaIhRgpQgwgYgjgeQgugngsg+QiCiugQjDQgIhlAbh2QAMg1AihIQAdg/AdgsQANgTA7glQA8glBNgkQDDhaB6AAQBfAADrAmICoAZQBWAMAuAAQBiAADogwQDcgtA9gcQBDgfBbgaQByggB/gQQB6gPBkA/QAmAXAbAfQAXAbAIAWQAxgEA8AoQANAIAhAaQAbAUAOAIQAdAEB0AvIBuAvID+AGIABgHIABgGQACgFAEgDQADgDAFgBIAIgBIACAAIACABQAfAUAPBPQAIAqABAlIgLABQgNADgHAKQhLCWjWBjQhLAkhjAeIiSArQiLCkjkB9QiXBThzAhQg1APhVApIlSCrQkCCGkOAAQhpAAhsgVg");
	this.shape_29.setTransform(199.4982,83.6336);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.263)").s().p("AsiMuQiNgbh+g7Qhjgug6gxQgmghgxgaIhTgqQgxgZgjgeQgvgogsg+QiEixgQjFQgJhnAch3QAMg2AihJQAehAAdgsQAOgUA7glQA8gmBPgkQDGhcB8AAQBfAADvAnICrAaQBXAMAuAAQBjAADrgxQDgguA+gcQBDgfBdgaQBzghCBgQQB8gPBlA/QAmAYAcAfQAYAcAHAVQAzgDA8AoQANAJAiAZQAbAVAOAIQAdAEB2AwIBvAwIDIAEIAUABIARAAIgBAHIj/gGIhtgvQh0gvgdgEQgOgIgbgUQghgagOgIQg7gogxAEQgIgWgXgbQgcgfglgXQhkg/h6APQh/AQhyAgQhbAahDAfQg9AcjcAtQjoAwhiAAQguAAhWgMIiogZQjrgmhfAAQh6AAjEBaQhMAkg8AlQg7AlgNATQgdAsgdA/QgiBIgMA1QgbB2AIBlQAQDDCCCuQAsA+AuAnQAjAeAwAYIBRApQAxAaAmAgQA5AwBiAvQB8A6CLAaQF+BJFmi6IFTirQBVgpA0gPQB0ghCXhTQDkh9CLikICSgrQBjgeBLgkQDWhjBKiWQAIgKANgDIALgBQgBglgIgqQgQhPgegUQACgEAFgBIADgCIAKgBQAhATAQBTQAIApACAmIAAABIgIAAIgEAAIgEABQgKAEgGAJQhMCYjZBkQhMAkhlAfIiUAsQiMCmjoB/QiZBTh1AiQg1APhWAqIlXCuQkGCHkRAAQhrAAhtgVg");
	this.shape_30.setTransform(199.4997,83.641);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.31)").s().p("AsjMwQiNgbh/g7Qhkgvg5gxQgmghgygaIhTgqQgwgZgkgeQgvgogsg+QiEixgQjGQgJhnAch4QAMg1AihJQAehAAdgtQAOgUA7glQA9gmBPgkQDGhcB8AAQBgAADvAnICrAaQBXAMAuAAQBkAADrgxQDgguA+gcQBEggBdgaQBzggCBgQQB8gQBlBAQAnAYAbAfQAYAbAIAWQAygDA9AoQANAJAhAZQAbAVAPAIQAeAEB1AwIBwAwIDGAEIgBABIjIgEIhvgwQh2gwgdgEQgOgIgbgVQgigZgNgJQg8gogzADQgHgVgYgcQgcgfgmgYQhlg/h8APQiBAQhzAhQhdAahDAfQg+AcjgAuQjrAxhjAAQguAAhXgMIirgaQjvgnhfAAQh8AAjGBcQhPAkg8AmQg7AlgOAUQgdAsgeBAQgiBJgMA2QgcB3AJBnQAQDFCECxQAsA+AvAoQAjAeAxAZIBTAqQAxAaAmAhQA6AxBjAuQB+A7CNAbQGDBKFsi8IFXiuQBWgqA1gPQB1giCZhTQDoh/CMimICUgsQBlgfBMgkQDZhkBMiYQAGgJAKgEIACAAQgJAEgGAJQhMCXjZBlQhNAkhlAfIiUAsQiNCnjoB+QiZBUh1AiQg2APhWAqIlXCuQkGCHkSAAQhrAAhtgUgAa7k/QgCgmgIgpQgQhTghgTIgKABQAGgCAHAAQAhATAQBTQAIAqACAmIgDAAg");
	this.shape_31.setTransform(199.4997,83.639);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.243)").s().p("AgHABQAGgEAJgBQgHADgCAGIAAAAIgGgEg");
	this.shape_32.setTransform(362.6625,34.6875);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.416)").s().p("AgOAGIABgCQAGgKAPAAIABABIAGAEIgCAIg");
	this.shape_33.setTransform(360.9875,35.4125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.255)").s().p("AAhBaIAAgBIABAAIABAAIAAABIgCAAgAgbhZIgCABIgGABIAIgCg");
	this.shape_34.setTransform(367.45,42.8125);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.369)").s().p("AgJACQAGgDAJAAIAEABIgBACg");
	this.shape_35.setTransform(358.625,35.7875);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.475)").s().p("AsdMpQiMgah9g7Qhjgvg5gwQgmghgxgaIhTgpQgvgZgkgeQgvgngrg+QiDiwgRjEQgIhmAbh3QAMg1AihJQAeg/AdgsQANgUA7glQA9glBOgkIA9gbQCCg2BegJQASgBAQAAQBfAADtAmICqAaQBWALAvAAQBiAADqgwQDegtA+gdQBDgfBcgaQBzggCAgQQB7gPBkA/QAmAYAbAeQAYAcAIAWQAygEA8AoQANAJAhAZQAbAVAOAIQAeADB0AwIBvAwIEAAFIAAgEIACgIIAAAAQADgHAGgEIAFgCIAGgBIAEAAQAhATAQBSQAHApACAlIAAABIAAABIgDgBIgBAAIgHABQgOADgGALQhMCWjXBlQhMAjhkAfIiTAsQiMCljmB+QiZBThzAhQg2APhVAqIlVCsQkECHkPAAQhrAAhsgVg");
	this.shape_36.setTransform(199.4997,83.6319);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.31)").s().p("AzMKJQgmghgygaIhTgqQgwgZgkgeQgvgogsg+QiEixgQjGQgJhnAch4QAMg1AihJQAehAAdgtQAOgUA7glQA9gmBPgkIAMgFIgMAFQhOAkg9AmQg8AlgNAUQgeAtgdBAQgjBJgMA1QgbB4AIBnQAQDGCFCxQAsA+AvAoQAkAeAwAZIBTAqQAxAaAnAhIAOAMIgPgMgATHAeQBlgfBMgkQDZhlBMiXQAGgJAJgDIABAAQgKADgFAJQhMCXjZBlQhNAkhlAfIgKADIAKgDgAa9kwQgCgmgHgqQgQhTghgTIAAAAQAhATAQBTQAIAqACAmgAVmnRIhvgwIgPgGIAPAGIBwAwgAw5qUIgIADQheAIiCA2IgRAFQCTg/BmgHg");
	this.shape_37.setTransform(199.4997,82.1125);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.267)").s().p("AsjMwQiNgbh/g7IiOhUIgOgMQgnghgxgaIhTgqQgwgZgkgeQgvgogsg+QiFixgQjGQgIhnAbh4QAMg1AjhJQAdhAAegtQANgUA8glQA9gmBOgkIAMgFIArgNIARgEIg9AbQhOAkg9AlQg7AlgNAUQgdAsgeA/QgiBJgMA1QgbB3AIBmQARDECDCwQArA+AvAnQAkAeAvAZIBTApQAxAaAmAhQA5AwBjAvQB9A7CMAaQGABKFqi8IFVisQBVgqA2gPQBzghCZhTQDmh+CMilICTgsQBkgfBMgjQDXhlBMiWQAGgLAOgDIAHgBQgJAEgGAJQhMCXjZBlQhMAkhlAfIgKADIiKApQiNCnjoB+QiZBUh1AiQg2APhWAqIlXCuQkGCHkSAAQhrAAhtgUgAanmMQgQhSghgTIgEAAIABgBQAFgCAGgBIAFAAQAhATAQBTQAHAqACAmIgKAAIgBABIgCAAQgCglgHgpgAVcncIhvgwQh0gwgegDQgOgIgbgVQghgZgNgJQg8gogyAEQgIgWgYgcQgbgegmgYQhkg/h7APQiAAQhzAgQhcAahDAfQg+AdjeAtQjqAwhiAAQgvAAhWgLIiqgaQjtgmhfAAQgQAAgSABIAIgCIASgFQBgAADvAnICrAaQBXAMAuAAQBkAADrgxQDgguA+gcQBEggBdgaQBzggCBgQQB8gQBlBAQAnAYAbAfQAYAbAIAWQAygDA9AoQANAJAhAZQAbAVAPAIICEAuIAPAGIBvAwIABAAIDHAEIASABIAcAAIAAAEg");
	this.shape_38.setTransform(199.4997,83.639);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.718)").s().p("AsjMwQiNgbh/g7Qhkgvg5gxQgmghgygaIhTgqQgwgZgkgeQgvgogsg+QiEixgQjGQgJhnAch4QAMg1AihJQAehAAdgtQAOgUA7glQA9gmBPgkQDGhcB8AAQBgAADvAnICrAaQBXAMAuAAQBkAADrgxQDgguA+gcQBEggBdgaQBzggCBgQQB8gQBlBAQAnAYAbAfQAYAbAIAWQAygDA9AoQANAJAhAZQAbAVAPAIQAeAEB1AwIBwAwIDHAEQAFgEALAAIADACQAGgKAQAAIABABQAGgGAKgBQAFgDAHgBQAGgDAJAAQAhATAQBTQAIAqACAmIgLAAIAAACIgGAAIgEACQgGADgEAGIAAAAIgBACQhMCXjZBlQhNAkhlAfIiUAsQiNCnjoB+QiZBUh1AiQg2APhWAqIlXCuQkGCHkSAAQhrAAhtgUg");
	this.shape_39.setTransform(199.4997,83.639);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.812)").s().p("AsjMwQiNgbh/g7Qhkgvg5gxQgmghgygaIhTgqQgwgZgkgeQgvgogsg+QiEixgQjGQgJhnAch4QAMg1AihJQAehAAdgtQAOgUA7glQA9gmBPgkQDGhcB8AAQBgAADvAnICrAaQBXAMAuAAQBkAADrgxQDgguA+gcQBEggBdgaQBzggCBgQQB8gQBlBAQAnAYAbAfQAYAbAIAWQAygDA9AoQANAJAhAZQAbAVAPAIQAeAEB1AwIBwAwIDHAFQAGgFAKAAIADADQAHgLAPAAIABABQAGgGAKgBQAFgDAHAAQAGgEAJAAQAhATAQBTQAIAqACAmIgLABIAAABIgFAAIgFACQgFADgFAGIAAAAIgBACQhMCXjZBlQhNAkhlAfIiUAsQiNCnjoB+QiZBUh1AiQg2APhWAqIlXCuQkGCHkSAAQhrAAhtgUg");
	this.shape_40.setTransform(199.4997,83.639);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.906)").s().p("AsjMwQiNgbh/g7Qhkgvg5gxQgmghgygaIhTgqQgwgZgkgeQgvgogsg+QiEixgQjGQgJhnAch4QAMg1AihJQAehAAdgtQAOgUA7glQA9gmBPgkQDGhcB8AAQBgAADvAnICrAaQBXAMAuAAQBkAADrgxQDgguA+gcQBEggBdgaQBzggCBgQQB8gQBlBAQAnAYAbAfQAYAbAIAWQAygDA9AoQANAJAhAZQAbAVAPAIQAeAEB1AwIBwAwIDHAFQAGgFAKAAIADADQAHgLAPAAIABABQAGgGAKgBQAFgDAHAAQAGgEAJAAQAhATAQBTQAIAqACAmIgLABIAAABIgFAAIgFACQgFADgFAGIAAAAIgBACQhMCXjZBlQhNAkhlAfIiUAsQiNCnjoB+QiZBUh1AiQg2APhWAqIlXCuQkGCHkSAAQhrAAhtgUg");
	this.shape_41.setTransform(199.4997,83.639);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AsjMwQiNgbh/g7Qhkgvg5gxQgmghgygaIhTgqQgwgZgkgeQgvgogsg+QiEixgQjGQgJhnAch4QAMg1AihJQAehAAdgtQAOgUA7glQA9gmBPgkQDGhcB8AAQBgAADvAnICrAaQBXAMAuAAQBkAADrgxQDgguA+gcQBEggBdgaQBzggCBgQQB8gQBlBAQAnAYAbAfQAYAbAIAWQAygDA9AoQANAJAhAZQAbAVAPAIQAeAEB1AwIBwAwIDHAEQAFgEALAAIADACQAGgKAQAAIABABQAGgGAKgBQAFgDAHgBQAGgDAJAAQAhATAQBTQAIAqACAmIgLAAIAAACIgGAAIgEACQgGADgEAGIAAAAIgBACQhMCXjZBlQhNAkhlAfIiUAsQiNCnjoB+QiZBUh1AiQg2APhWAqIlXCuQkGCHkSAAQhrAAhtgUg");
	this.shape_42.setTransform(199.4997,83.639);

	this.instance_1 = new lib.CachedBmp_7();
	this.instance_1.setTransform(26.95,0,0.5,0.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AHnPtQgQgDgTgHQgngPgLgWQgQgggPhBQgShKAIgcQAAgWgHgOQgIgPgEgKQgPgmARhwIAEgUQg+Brg2A1QgXAYgEBWQgDBBAHAwQADAWAaAcQAaAcADAQIinAAIggggQgggjgDgPQgGgXAMg3QAOhCAdgkQAGgygBgwIgFhIQgBgMgFgaQloC5mBhJQhHgOhDgVQADAfAQAzQAXBIAYAiQAJANAiAbIBBA0QBVBFAAAbIiTAAQgQABgZgKQgxgUgsg7Qgsg7gyhkIgphYIgggoQgkgrgOgLQgJgHgJgdQgFgTgDgWIgKgIIgrBBQgZAqgCATQgEApAYBOQAVBEAeA8QAVAsAzA4QAZAbAVATIjsAAQgEgIgGgQQgMghgHgkQgIgmgjhOIgwhjQgUgogMg9QgQhQAVgsQAbg6ghhFQgRgkg4hFIgKgPIgEgGQiEixgRjEQgIhoAbh4IAKgiQgYgKgVBAQgLAjgSBHQgJAagRAnQgKAkAIA0QAIAzgnAvQgUAWgVANIgdgGQgjAdgOARQgXAdgQArQgXg5AhhSQASgvAkg2QAKgOAOgpQANgiAQgQQAgggAXglQAhg1AAgrQAAgvAQgiQAPghAYgKQAUgIA3g7QAcgeAYgcQANgUA8glQA9gmBOgkQDGhcB8AAQBgAADvAmICrAaQBXAMAvAAQBjAADrgwQDhguA+gdQBDgfBdgaQB0ghCBgQQB8gPBlA/QAmAYAcAfQAYAcAHAWQAzgEA8ApQAOAIAhAaQAbAVAPAIQAdADB2AxIBvAvIECAGIADgNQAFgNATAAQAhASAQBUQAIAqABAmIgLAAQgNADgIALQhMCYjZBlQhMAkhlAgIiUAsQiNCljoB/QhjA2hUAhQAFAUgHAKQgGAIggBgQgeBagGAXQgDAPglBTQgdBDgOAeQgEAJAAAaQAAAcAGAfQAPBTArAnQAOAPAgAXQAYAVAAARg");
	this.shape_43.setTransform(186.0189,100.4979);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EFF0F6").s().p("AHnPtQgQgDgTgHQgngPgLgWQgQgggPhBQgShKAIgcQAAgWgHgOQgIgPgEgKQgPgmARhwIAEgUQg+Brg2A1QgXAYgEBWQgDBBAHAwQADAWAaAcQAaAcADAQIinAAIggggQgggjgDgPQgGgXAMg3QAOhCAdgkQAGgygBgwIgFhIQgBgMgFgZQlpC5mAhKQhHgNhDgWQADAgAQAyQAXBIAYAiQAJANAiAbIBBA0QBVBFAAAbIiTAAQgQABgZgKQgxgUgsg7Qgsg7gyhkIgphYIgggoQgkgrgOgLQgJgHgJgdQgFgTgDgWIgKgIIgrBBQgZAqgCATQgEApAYBOQAVBEAeA8QAVAsAzA4QAZAbAVATIjsAAQgEgIgGgQQgMghgHgkQgIgmgjhOIgwhjQgUgogMg9QgQhQAVgsQAbg6ghhFQgRgkg4hFIgKgPIgEgGQiEixgRjEQgIhoAbh4QAEgQAGgRQgYgLgVBAQgLAjgSBHQgJAagRAnQgKAkAIA0QAIAzgnAvQgUAWgVANIgdgGQgjAdgOARQgXAdgQArQgXg5AhhSQASgvAkg2QAKgOAOgpQANgiAQgQQAgggAXglQAhg1AAgrQAAgvAQgiQAPghAYgKQAUgIA3g7QAcgeAYgcQANgUA8glQA9gmBOgkQDGhcB8AAQBgAADvAmICrAaQBXAMAvAAQBjAADrgwQDhguA+gdQBDgfBdgaQB0ghCBgQQB8gPBlA/QAmAYAcAfQAYAcAHAWQAzgEA8ApQAOAIAhAaQAbAVAPAIQAdADB2AxIBvAvIECAGIADgNQAFgNATAAQAhASAQBUQAIAqABAmIgLAAQgNADgIALQhMCYjZBlQhMAkhlAgIiUAsQiNCljoB/QhjA2hUAhQAFAVgHAJQgGAIggBgQgeBagGAXQgDAPglBTQgdBDgOAeQgEAJAAAaQAAAcAGAfQAPBTArAnQAOAPAgAXQAYAVAAARg");
	this.shape_44.setTransform(186.0189,100.4979);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E0E1EE").s().p("AHnPtQgQgDgTgHQgngPgLgWQgQgggPhBQgShKAIgcQAAgWgHgOQgIgPgEgKQgPgmARhwIAEgUQg+Brg2A1QgXAYgEBWQgDBBAHAwQADAWAaAcQAaAcADAQIinAAIggggQgggjgDgPQgGgXAMg3QAOhCAdgkQAGgygBgwIgFhIQgBgMgFgZQlpC5mAhKQhHgNhDgWQADAgAQAyQAXBIAYAiQAJANAiAbIBBA0QBVBFAAAbIiTAAQgQABgZgKQgxgUgsg7Qgsg7gyhkIgphYIgggoQgkgrgOgLQgJgHgJgdQgFgTgDgWIgKgIIgrBBQgZAqgCATQgEApAYBOQAVBEAeA8QAVAsAzA4QAZAbAVATIjsAAQgEgIgGgQQgMghgHgkQgIgmgjhOIgwhjQgUgogMg9QgQhQAVgsQAbg6ghhFQgRgkg4hFIgKgPIgEgGQiEixgRjEQgIhoAbh4QAEgQAGgRQgYgLgVBAQgLAjgSBHQgJAagRAnQgKAkAIA0QAIAzgnAvQgUAWgVANIgdgGQgjAdgOARQgXAdgQArQgXg5AhhSQASgvAkg2QAKgOAOgpQANgiAQgQQAgggAXglQAhg1AAgrQAAgvAQgiQAPghAYgKQAUgIA3g7QAcgeAYgcQANgUA8glQA9gmBOgkQDGhcB8AAQBgAADvAmICrAaQBXAMAvAAQBjAADrgwQDhguA+gdQBDgfBdgaQB0ghCBgQQB8gPBlA/QAmAYAcAfQAYAcAHAWQAzgEA8ApQAOAIAhAaQAbAVAPAIQAdADB2AxIBvAvIECAGIADgNQAFgNATAAQAhASAQBUQAIAqABAmIgLAAQgNADgIALQhMCYjZBlQhMAkhlAgIiUAsQiNCljoB/QhjA2hUAhQAFAVgHAJQgGAIggBgQgeBagGAXQgDAPglBTQgdBDgOAeQgEAJAAAaQAAAcAGAfQAPBTArAnQAOAPAgAXQAYAVAAARg");
	this.shape_45.setTransform(186.0189,100.4979);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D0D2E5").s().p("AHnPtQgQgDgTgHQgngPgLgWQgQgggPhBQgShKAIgcQAAgWgHgOQgIgPgEgKQgPgmARhwIAEgUQg+Brg2A1QgXAYgEBWQgDBBAHAwQADAWAaAcQAaAcADAQIinAAIggggQgggjgDgPQgGgXAMg3QAOhCAdgkQAGgygBgwIgFhIQgBgMgFgZQlpC5mAhKQhHgNhDgWQADAgAQAyQAXBIAYAiQAJANAiAbIBBA0QBVBFAAAbIiTAAQgQABgZgKQgxgUgsg7Qgsg7gyhkIgphYIgggoQgkgrgOgLQgJgHgJgdQgFgTgDgWIgKgIIgrBBQgZAqgCATQgEApAYBOQAVBEAeA8QAVAsAzA4QAZAbAVATIjsAAQgEgIgGgQQgMghgHgkQgIgmgjhOIgwhjQgUgogMg9QgQhQAVgsQAbg6ghhFQgRgkg4hFIgKgPIgEgGQiEixgRjEQgIhoAbh4QAEgQAGgRQgYgLgVBAQgLAjgSBHQgJAagRAnQgKAkAIA0QAIAzgnAvQgUAWgVANIgdgGQgjAdgOARQgXAdgQArQgXg5AhhSQASgvAkg2QAKgOAOgpQANgiAQgQQAgggAXglQAhg1AAgrQAAgvAQgiQAPghAYgKQAUgIA3g7QAcgeAYgcQANgUA8glQA9gmBOgkQDGhcB8AAQBgAADvAmICrAaQBXAMAvAAQBjAADrgwQDhguA+gdQBDgfBdgaQB0ghCBgQQB8gPBlA/QAmAYAcAfQAYAcAHAWQAzgEA8ApQAOAIAhAaQAbAVAPAIQAdADB2AxIBvAvIECAGIADgNQAFgNATAAQAhASAQBUQAIAqABAmIgLAAQgNADgIALQhMCYjZBlQhMAkhlAgIiUAsQiNCljoB/QhjA2hUAhQAFAVgHAJQgGAIggBgQgeBagGAXQgDAPglBTQgdBDgOAeQgEAJAAAaQAAAcAGAfQAPBTArAnQAOAPAgAXQAYAVAAARg");
	this.shape_46.setTransform(186.0189,100.4979);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C0C3DC").s().p("AHnPtQgQgDgTgHQgngPgLgWQgQgggPhBQgShKAIgcQAAgWgHgOQgIgPgEgKQgPgmARhwIAEgUQg+Brg2A1QgXAYgEBWQgDBBAHAwQADAWAaAcQAaAcADAQIinAAIggggQgggjgDgPQgGgXAMg3QAOhCAdgkQAGgygBgwIgFhIQgBgMgFgZQlpC5mAhKQhHgNhDgWQADAgAQAyQAXBIAYAiQAJANAiAbIBBA0QBVBFAAAbIiTAAQgQABgZgKQgxgUgsg7Qgsg7gyhkIgphYIgggoQgkgrgOgLQgJgHgJgdQgFgTgDgWIgKgIIgrBBQgZAqgCATQgEApAYBOQAVBEAeA8QAVAsAzA4QAZAbAVATIjsAAQgEgIgGgQQgMghgHgkQgIgmgjhOIgwhjQgUgogMg9QgQhQAVgsQAbg6ghhFQgRgkg4hFIgKgPIgEgGQiEixgRjEQgIhoAbh4QAEgQAGgRQgYgLgVBAQgLAjgSBHQgJAagRAnQgKAkAIA0QAIAzgnAvQgUAWgVANIgdgGQgjAdgOARQgXAdgQArQgXg5AhhSQASgvAkg2QAKgOAOgpQANgiAQgQQAgggAXglQAhg1AAgrQAAgvAQgiQAPghAYgKQAUgIA3g7QAcgeAYgcQANgUA8glQA9gmBOgkQDGhcB8AAQBgAADvAmICrAaQBXAMAvAAQBjAADrgwQDhguA+gdQBDgfBdgaQB0ghCBgQQB8gPBlA/QAmAYAcAfQAYAcAHAWQAzgEA8ApQAOAIAhAaQAbAVAPAIQAdADB2AxIBvAvIECAGIADgNQAFgNATAAQAhASAQBUQAIAqABAmIgLAAQgNADgIALQhMCYjZBlQhMAkhlAgIiUAsQiNCljoB/QhjA2hUAhQAFAVgHAJQgGAIggBgQgeBagGAXQgDAPglBTQgdBDgOAeQgEAJAAAaQAAAcAGAfQAPBTArAnQAOAPAgAXQAYAVAAARg");
	this.shape_47.setTransform(186.0189,100.4979);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B1B4D3").s().p("AHnPtQgQgDgTgHQgngPgLgWQgQgggPhBQgShKAIgcQAAgWgHgOQgIgPgEgKQgPgmARhwIAEgUQg+Brg2A1QgXAYgEBWQgDBBAHAwQADAWAaAcQAaAcADAQIinAAIggggQgggjgDgPQgGgXAMg3QAOhCAdgkQAGgygBgwIgFhIQgBgMgFgZQlpC5mAhKQhHgNhDgWQADAgAQAyQAXBIAYAiQAJANAiAbIBBA0QBVBFAAAbIiTAAQgQABgZgKQgxgUgsg7Qgsg7gyhkIgphYIgggoQgkgrgOgLQgJgHgJgdQgFgTgDgWIgKgIIgrBBQgZAqgCATQgEApAYBOQAVBEAeA8QAVAsAzA4QAZAbAVATIjsAAQgEgIgGgQQgMghgHgkQgIgmgjhOIgwhjQgUgogMg9QgQhQAVgsQAbg6ghhFQgRgkg4hFIgKgPIgEgGQiEixgRjEQgIhoAbh4QAEgQAGgRQgYgLgVBAQgLAjgSBHQgJAagRAnQgKAkAIA0QAIAzgnAvQgUAWgVANIgdgGQgjAdgOARQgXAdgQArQgXg5AhhSQASgvAkg2QAKgOAOgpQANgiAQgQQAgggAXglQAhg1AAgrQAAgvAQgiQAPghAYgKQAUgIA3g7QAcgeAYgcQANgUA8glQA9gmBOgkQDGhcB8AAQBgAADvAmICrAaQBXAMAvAAQBjAADrgwQDhguA+gdQBDgfBdgaQB0ghCBgQQB8gPBlA/QAmAYAcAfQAYAcAHAWQAzgEA8ApQAOAIAhAaQAbAVAPAIQAdADB2AxIBvAvIECAGIADgNQAFgNATAAQAhASAQBUQAIAqABAmIgLAAQgNADgIALQhMCYjZBlQhMAkhlAgIiUAsQiNCljoB/QhjA2hUAhQAFAVgHAJQgGAIggBgQgeBagGAXQgDAPglBTQgdBDgOAeQgEAJAAAaQAAAcAGAfQAPBTArAnQAOAPAgAXQAYAVAAARg");
	this.shape_48.setTransform(186.0189,100.4979);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A1A5CB").s().p("AHnPtQgQgDgTgHQgngPgLgWQgQgggPhBQgShKAIgcQAAgWgHgOQgIgPgEgKQgPgmARhwIAEgUQg+Brg2A1QgXAYgEBWQgDBBAHAwQADAWAaAcQAaAcADAQIinAAIggggQgggjgDgPQgGgXAMg3QAOhCAdgkQAGgygBgwIgFhIQgBgMgFgZQlpC5mAhKQhHgNhDgWQADAgAQAyQAXBIAYAiQAJANAiAbIBBA0QBVBFAAAbIiTAAQgQABgZgKQgxgUgsg7Qgsg7gyhkIgphYIgggoQgkgrgOgLQgJgHgJgdQgFgTgDgWIgKgIIgrBBQgZAqgCATQgEApAYBOQAVBEAeA8QAVAsAzA4QAZAbAVATIjsAAQgEgIgGgQQgMghgHgkQgIgmgjhOIgwhjQgUgogMg9QgQhQAVgsQAbg6ghhFQgRgkg4hFIgKgPIgEgGQiEixgRjEQgIhoAbh4QAEgQAGgRQgYgLgVBAQgLAjgSBHQgJAagRAnQgKAkAIA0QAIAzgnAvQgUAWgVANIgdgGQgjAdgOARQgXAdgQArQgXg5AhhSQASgvAkg2QAKgOAOgpQANgiAQgQQAgggAXglQAhg1AAgrQAAgvAQgiQAPghAYgKQAUgIA3g7QAcgeAYgcQANgUA8glQA9gmBOgkQDGhcB8AAQBgAADvAmICrAaQBXAMAvAAQBjAADrgwQDhguA+gdQBDgfBdgaQB0ghCBgQQB8gPBlA/QAmAYAcAfQAYAcAHAWQAzgEA8ApQAOAIAhAaQAbAVAPAIQAdADB2AxIBvAvIECAGIADgNQAFgNATAAQAhASAQBUQAIAqABAmIgLAAQgNADgIALQhMCYjZBlQhMAkhlAgIiUAsQiNCljoB/QhjA2hUAhQAFAVgHAJQgGAIggBgQgeBagGAXQgDAPglBTQgdBDgOAeQgEAJAAAaQAAAcAGAfQAPBTArAnQAOAPAgAXQAYAVAAARg");
	this.shape_49.setTransform(186.0189,100.4979);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#9296C2").s().p("AHnPtQgQgDgTgHQgngPgLgWQgQgggPhBQgShKAIgcQAAgWgHgOQgIgPgEgKQgPgmARhwIAEgUQg+Brg2A1QgXAYgEBWQgDBBAHAwQADAWAaAcQAaAcADAQIinAAIggggQgggjgDgPQgGgXAMg3QAOhCAdgkQAGgygBgwIgFhIQgBgMgFgZQlpC5mAhKQhHgNhDgWQADAgAQAyQAXBIAYAiQAJANAiAbIBBA0QBVBFAAAbIiTAAQgQABgZgKQgxgUgsg7Qgsg7gyhkIgphYIgggoQgkgrgOgLQgJgHgJgdQgFgTgDgWIgKgIIgrBBQgZAqgCATQgEApAYBOQAVBEAeA8QAVAsAzA4QAZAbAVATIjsAAQgEgIgGgQQgMghgHgkQgIgmgjhOIgwhjQgUgogMg9QgQhQAVgsQAbg6ghhFQgRgkg4hFIgKgPIgEgGQiEixgRjEQgIhoAbh4QAEgQAGgRQgYgLgVBAQgLAjgSBHQgJAagRAnQgKAkAIA0QAIAzgnAvQgUAWgVANIgdgGQgjAdgOARQgXAdgQArQgXg5AhhSQASgvAkg2QAKgOAOgpQANgiAQgQQAgggAXglQAhg1AAgrQAAgvAQgiQAPghAYgKQAUgIA3g7QAcgeAYgcQANgUA8glQA9gmBOgkQDGhcB8AAQBgAADvAmICrAaQBXAMAvAAQBjAADrgwQDhguA+gdQBDgfBdgaQB0ghCBgQQB8gPBlA/QAmAYAcAfQAYAcAHAWQAzgEA8ApQAOAIAhAaQAbAVAPAIQAdADB2AxIBvAvIECAGIADgNQAFgNATAAQAhASAQBUQAIAqABAmIgLAAQgNADgIALQhMCYjZBlQhMAkhlAgIiUAsQiNCljoB/QhjA2hUAhQAFAVgHAJQgGAIggBgQgeBagGAXQgDAPglBTQgdBDgOAeQgEAJAAAaQAAAcAGAfQAPBTArAnQAOAPAgAXQAYAVAAARg");
	this.shape_50.setTransform(186.0189,100.4979);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#8287B9").s().p("AHnPtQgQgDgTgHQgngPgLgWQgQgggPhBQgShKAIgcQAAgWgHgOQgIgPgEgKQgPgmARhwIAEgUQg+Brg2A1QgXAYgEBWQgDBBAHAwQADAWAaAcQAaAcADAQIinAAIggggQgggjgDgPQgGgXAMg3QAOhCAdgkQAGgygBgwIgFhIQgBgMgFgZQlpC5mAhKQhHgNhDgWQADAgAQAyQAXBIAYAiQAJANAiAbIBBA0QBVBFAAAbIiTAAQgQABgZgKQgxgUgsg7Qgsg7gyhkIgphYIgggoQgkgrgOgLQgJgHgJgdQgFgTgDgWIgKgIIgrBBQgZAqgCATQgEApAYBOQAVBEAeA8QAVAsAzA4QAZAbAVATIjsAAQgEgIgGgQQgMghgHgkQgIgmgjhOIgwhjQgUgogMg9QgQhQAVgsQAbg6ghhFQgRgkg4hFIgKgPIgEgGQiEixgRjEQgIhoAbh4QAEgQAGgRQgYgLgVBAQgLAjgSBHQgJAagRAnQgKAkAIA0QAIAzgnAvQgUAWgVANIgdgGQgjAdgOARQgXAdgQArQgXg5AhhSQASgvAkg2QAKgOAOgpQANgiAQgQQAgggAXglQAhg1AAgrQAAgvAQgiQAPghAYgKQAUgIA3g7QAcgeAYgcQANgUA8glQA9gmBOgkQDGhcB8AAQBgAADvAmICrAaQBXAMAvAAQBjAADrgwQDhguA+gdQBDgfBdgaQB0ghCBgQQB8gPBlA/QAmAYAcAfQAYAcAHAWQAzgEA8ApQAOAIAhAaQAbAVAPAIQAdADB2AxIBvAvIECAGIADgNQAFgNATAAQAhASAQBUQAIAqABAmIgLAAQgNADgIALQhMCYjZBlQhMAkhlAgIiUAsQiNCljoB/QhjA2hUAhQAFAVgHAJQgGAIggBgQgeBagGAXQgDAPglBTQgdBDgOAeQgEAJAAAaQAAAcAGAfQAPBTArAnQAOAPAgAXQAYAVAAARg");
	this.shape_51.setTransform(186.0189,100.4979);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#7278B0").s().p("AHnPtQgQgDgTgHQgngPgLgWQgQgggPhBQgShKAIgcQAAgWgHgOQgIgPgEgKQgPgmARhwIAEgUQg+Brg2A1QgXAYgEBWQgDBBAHAwQADAWAaAcQAaAcADAQIinAAIggggQgggjgDgPQgGgXAMg3QAOhCAdgkQAGgygBgwIgFhIQgBgMgFgZQlpC5mAhKQhHgNhDgWQADAgAQAyQAXBIAYAiQAJANAiAbIBBA0QBVBFAAAbIiTAAQgQABgZgKQgxgUgsg7Qgsg7gyhkIgphYIgggoQgkgrgOgLQgJgHgJgdQgFgTgDgWIgKgIIgrBBQgZAqgCATQgEApAYBOQAVBEAeA8QAVAsAzA4QAZAbAVATIjsAAQgEgIgGgQQgMghgHgkQgIgmgjhOIgwhjQgUgogMg9QgQhQAVgsQAbg6ghhFQgRgkg4hFIgKgPIgEgGQiEixgRjEQgIhoAbh4QAEgQAGgRQgYgLgVBAQgLAjgSBHQgJAagRAnQgKAkAIA0QAIAzgnAvQgUAWgVANIgdgGQgjAdgOARQgXAdgQArQgXg5AhhSQASgvAkg2QAKgOAOgpQANgiAQgQQAgggAXglQAhg1AAgrQAAgvAQgiQAPghAYgKQAUgIA3g7QAcgeAYgcQANgUA8glQA9gmBOgkQDGhcB8AAQBgAADvAmICrAaQBXAMAvAAQBjAADrgwQDhguA+gdQBDgfBdgaQB0ghCBgQQB8gPBlA/QAmAYAcAfQAYAcAHAWQAzgEA8ApQAOAIAhAaQAbAVAPAIQAdADB2AxIBvAvIECAGIADgNQAFgNATAAQAhASAQBUQAIAqABAmIgLAAQgNADgIALQhMCYjZBlQhMAkhlAgIiUAsQiNCljoB/QhjA2hUAhQAFAVgHAJQgGAIggBgQgeBagGAXQgDAPglBTQgdBDgOAeQgEAJAAAaQAAAcAGAfQAPBTArAnQAOAPAgAXQAYAVAAARg");
	this.shape_52.setTransform(186.0189,100.4979);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#6369A8").s().p("AHnPtQgQgDgTgHQgngPgLgWQgQgggPhBQgShKAIgcQAAgWgHgOQgIgPgEgKQgPgmARhwIAEgUQg+Brg2A1QgXAYgEBWQgDBBAHAwQADAWAaAcQAaAcADAQIinAAIggggQgggjgDgPQgGgXAMg3QAOhCAdgkQAGgygBgwIgFhIQgBgMgFgZQlpC5mAhKQhHgNhDgWQADAgAQAyQAXBIAYAiQAJANAiAbIBBA0QBVBFAAAbIiTAAQgQABgZgKQgxgUgsg7Qgsg7gyhkIgphYIgggoQgkgrgOgLQgJgHgJgdQgFgTgDgWIgKgIIgrBBQgZAqgCATQgEApAYBOQAVBEAeA8QAVAsAzA4QAZAbAVATIjsAAQgEgIgGgQQgMghgHgkQgIgmgjhOIgwhjQgUgogMg9QgQhQAVgsQAbg6ghhFQgRgkg4hFIgKgPIgEgGQiEixgRjEQgIhoAbh4QAEgQAGgRQgYgLgVBAQgLAjgSBHQgJAagRAnQgKAkAIA0QAIAzgnAvQgUAWgVANIgdgGQgjAdgOARQgXAdgQArQgXg5AhhSQASgvAkg2QAKgOAOgpQANgiAQgQQAgggAXglQAhg1AAgrQAAgvAQgiQAPghAYgKQAUgIA3g7QAcgeAYgcQANgUA8glQA9gmBOgkQDGhcB8AAQBgAADvAmICrAaQBXAMAvAAQBjAADrgwQDhguA+gdQBDgfBdgaQB0ghCBgQQB8gPBlA/QAmAYAcAfQAYAcAHAWQAzgEA8ApQAOAIAhAaQAbAVAPAIQAdADB2AxIBvAvIECAGIADgNQAFgNATAAQAhASAQBUQAIAqABAmIgLAAQgNADgIALQhMCYjZBlQhMAkhlAgIiUAsQiNCljoB/QhjA2hUAhQAFAVgHAJQgGAIggBgQgeBagGAXQgDAPglBTQgdBDgOAeQgEAJAAAaQAAAcAGAfQAPBTArAnQAOAPAgAXQAYAVAAARg");
	this.shape_53.setTransform(186.0189,100.4979);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#535A9F").s().p("AHnPtQgQgDgTgHQgngPgLgWQgQgggPhBQgShKAIgcQAAgWgHgOQgIgPgEgKQgPgmARhwIAEgUQg+Brg2A1QgXAYgEBWQgDBBAHAwQADAWAaAcQAaAcADAQIinAAIggggQgggjgDgPQgGgXAMg3QAOhCAdgkQAGgygBgwIgFhIQgBgMgFgaQloC5mBhJQhHgOhDgVQADAfAQAzQAXBIAYAiQAJANAiAbIBBA0QBVBFAAAbIiTAAQgQABgZgKQgxgUgsg7Qgsg7gyhkIgphYIgggoQgkgrgOgLQgJgHgJgdQgFgTgDgWIgKgIIgrBBQgZAqgCATQgEApAYBOQAVBEAeA8QAVAsAzA4QAZAbAVATIjsAAQgEgIgGgQQgMghgHgkQgIgmgjhOIgwhjQgUgogMg9QgQhQAVgsQAbg6ghhFQgRgkg4hFIgKgPIgEgGQiEixgRjEQgIhoAbh4IAKgiQgYgKgVBAQgLAjgSBHQgJAagRAnQgKAkAIA0QAIAzgnAvQgUAWgVANIgdgGQgjAdgOARQgXAdgQArQgXg5AhhSQASgvAkg2QAKgOAOgpQANgiAQgQQAgggAXglQAhg1AAgrQAAgvAQgiQAPghAYgKQAUgIA3g7QAcgeAYgcQANgUA8glQA9gmBOgkQDGhcB8AAQBgAADvAmICrAaQBXAMAvAAQBjAADrgwQDhguA+gdQBDgfBdgaQB0ghCBgQQB8gPBlA/QAmAYAcAfQAYAcAHAWQAzgEA8ApQAOAIAhAaQAbAVAPAIQAdADB2AxIBvAvIECAGIADgNQAFgNATAAQAhASAQBUQAIAqABAmIgLAAQgNADgIALQhMCYjZBlQhMAkhlAgIiUAsQiNCljoB/QhjA2hUAhQAFAUgHAKQgGAIggBgQgeBagGAXQgDAPglBTQgdBDgOAeQgEAJAAAaQAAAcAGAfQAPBTArAnQAOAPAgAXQAYAVAAARg");
	this.shape_54.setTransform(186.0189,100.4979);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},37).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_43}]},4).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).wait(1));

	// pata4
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0.086)").s().p("AA0FyQgTgDgMgUQgGgJgJgcIgIgeQgGgTABgKQABgLAGgJQAHgIAKgEQAKgEALACQALACAIAHQALAJAHAUIAKAhIAIAUQAEAMAAAJQABATgOANQgKAKgOAAIgIgBgAgMAFQgPgEgJgSQgEgJgFgYIgJg6QgGghgKgYIgNgdQgIgRgCgNQgEgPAAgYQAAgwAOgWQASgdAmgGQAkgGAfAVQAfAWAJAkQAHAYgGArQgIBBgOAyQgGATABAKQAAALAEAUQABAOgEAMQgEAOgKAHQgIAGgQACQgNADgIAAIgIAAg");
	this.shape_55.setTransform(64.1533,153.4967);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(255,255,255,0.247)").s().p("ABLF0QgEAAgHgHQgEgBgMgJIgKgHQgXgTgHgbIgCgIIgBgDIgHgLIgFgKQgFgLgDgPIgEgbIgCgRIgEgvQgBgOgCgIIgBgEQgDgMgHgUQgGgSAAgMIAAgBQAAgOAGgMIABgBQgIgPgDgOIgBgCQgEgQgDgTIgEgmIAAgCQgFgqgGgkIgBgGIgJgiIgBgCIgNgmIgBgGQgHgWgBgXIAAgBQAAgSAFgQQAFgSAKgMQAJgLALgGQAGgEAIgDQATgHATACQAMACAKAGQAHADAFAFQAQAJALAUIALAVQAKAVAEAUQAEAWgCAXQgBAMgDANQgBAIgEALIgGATQgDAKgBAKIABAAIAAABIAEASQAGAfgCAWIAAACIgBALIAAABIgBAEIABADQADAJABAMIAAAXIABAMIAAAAIAAAHIADAMIAGARIACAHQAEAMAAANIgCAJQgCAGgDAEIgBACIABAPIgCAXQgCAOgEAPIgEAMQgDAHgBAGQgCAHAAAHQAEAGAEAJQAIASADANIABAEIAAAKIABAEIABACQAEAFADAJIACAIIACAIIACAKIABAGIAEAIQAGAKAAAGQABAJgEAIQgBAEgDADIgFAEQgEACgGABQgFAAgDgCg");
	this.shape_56.setTransform(64.31,154.9778);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(255,255,255,0.408)").s().p("ABUGDQgIgBgGgFQgEgCgKgOIgWgUIgPgOQgegkgEgrIAAgMIgDgEIgLgSIgIgQQgIgRgDgYQgCgOgBgcIgBgZIgBgIIgFgOIgBgCQgHgVgDgYQgCgTgBgcIAAgDIgDgqIAAgCQgKgcgCgSIAAgDQAAgQAGgPIgEgaIgBgCQgEgRgMggIgCgHQgLgfgBgYIAAgBQgBgYAJgUQAJgWAQgNQAOgKASgFQAJgCALgBQAbgBAUAKQAQAIALAOQAGAIAEAJQALASAFAiIAFAgQADAegBAaQgCAagFAYQAKAZACAhQACAwgFAkQgCARgFAQQgHAYgKAUIAAABIAAABQAHAJAEAQIAFAcIAFAQIAAACIABAIIAJAOIANATIAFAJQAGAPgDAQQgBAGgDAGQgEAHgGAEQgHAFgIABIgCAAIAEALIADANIAFAPIACAJIAKALQANAQADAJQAFANgEANQgCAIgFAFQgEAEgFADQgGADgHAAIgDAAg");
	this.shape_57.setTransform(64.8839,155.9752);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(255,255,255,0.569)").s().p("ABVGTQgMgCgIgHQgFgFgNgUIgdggQg5g+AAhGIAAgRIAAAAIgDgFQgVghgFgNQgKgYgEgfQgCgTAAgnIgBiDQgBgpgDgPQgEgSgTgxQgQgpgBgaQgBgcANgZQANgaAXgNQAdgQAoAEQAiADAZATQAbAVAKApQAIAcgBAuQgCBCgKAyQgMA9gcAtIgQAYQgKAPgGALQgHAOgBAOIABACQAIAHAKAVQAVAxABAbIAAAEIAAAQIAAACIAAAGIAEADQALAJAHAUIAKAhIAIAUIADAMIAPAPQAVAVAFAMQAJASgEASQgFAUgSAIQgHADgIAAIgGAAg");
	this.shape_58.setTransform(65.4963,156.6886);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(255,255,255,0.639)").s().p("ABjGjQgMgCgKgGQgHgEgPgRQgJgFgZgVIgKgIIgLgPQgOgXgJgYQgNghgFgnIgBgPIAAgDIgEgGQgTgggIgSIgEgKQgIgVgEgbIgEgfIgBgfQgBggADgeQADgngDgoIgCgRQgDgagGgQQgFgPgNgeIgKgYIgCgDQgPgpAAgdQgBgcATgZIACgCQAQgWAZgNQATgJAXgDQAQgCAQAAQAkACAcAPIADACQAhARAMAkQANAbABAyIgBAZQAAAdgEAfIgFAoIgDAPQgKAzgeAxIgNAUIgFAHQgLAPgGAMQgJARgDAMIACACIALAeIAEAQQAMAmAEAeIABAFIAAALIABAFIAAACIAAAGIAEAEQAKAMAHAUIAMAjIAEAKIAFAMIAFAMIAPARQAQARAKANIADAFQALATgBASIgBACQgIAPgSAGQgHADgJAAIgHAAg");
	this.shape_59.setTransform(65.3035,155.5905);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(255,255,255,0.714)").s().p("ABxGzQgNgBgKgFQgKgDgRgOQgNgEgagRIgNgHIgKgQQgOgZgIgbQgMgggJgsIgDgQIAAgDIgEgHQgSgfgLgXIgFgMQgJgWgFgcIgEghQgCgQgBgRQgBgjAFgfQAHgogHgrQgBgKgCgJQgEgZgJgTIgXguIgMgaIgBgEQgRgpABggIAAgBQABgbAZgaIACgCQATgUAbgNQAVgJAZgEQARgCARgBQAnAAAfAMIACABQAoAOAQAgQASAaADA3IAAAaQAAAegEAjIgFAsIgCAPQgIAygkA6IgOAWIgFAHIgTAdQgLATgDALIACACQAAANAEATIACARQAJAmAHAkIABAFIABAMIABAFIAAADIABAGIADAEQAKAPAIAUIANAlIAEAKIAGANIAGAOIAPASQARASALAPIAEAFQANATADASIAAACQgMAMgTAFQgIACgJAAIgIAAg");
	this.shape_60.setTransform(65.1721,154.4475);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(255,255,255,0.784)").s().p("AB+HDQgNgBgLgEQgNgCgSgKQgSgEgbgMIgOgFIgLgTQgNgbgIgdQgKgggOgxIgEgRIgBgDIgEgHQgRgegNgdIgGgMQgKgXgGgeQgDgPgDgUIgDgjQgCgnAIgfQALgqgKguIgFgUQgGgYgMgWIgbgwQgHgLgGgQIgCgEQgSgqACglIAAAAQACgbAggaIACgCQAVgTAfgMQAWgJAbgFQASgDASgBQApgCAiAJIADABQAvAKASAcQAYAaAEA6IABAcQAAAegDAoIgEAuIgCARQgGAwgqBEIgPAXIgGAIIgUAfQgMAVgEAKIABACQgDAPABASQgBALABAIQAGAlAKArIABAFIACAMIABAGIAAADIACAHIADAFQAJAQAIAVIAOAmIAFAMIAHAOIAHAOIAQAUIAeAjIAEAFQAPAUAGASIABABQgPAKgUADQgJACgKAAIgJAAg");
	this.shape_61.setTransform(65.0647,153.3121);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(255,255,255,0.855)").s().p("ACMHUQgNgBgNgCQgQgCgSgHQgXgCgcgIIgQgDQgFgIgGgNQgMgdgIgfQgJghgSg1IgGgTIgCgDIgDgHIgghAIgGgMQgLgYgIggQgEgQgDgUIgDglQgDgsAKgfQAPgsgNgxIgHgVQgHgXgQgaIgfgxQgIgLgHgQIgCgFQgTgrAEgpIAAAAQACgbAmgaIADgCQAYgRAhgMQAYgJAcgFQAUgEATgCQArgEAlAFIADABQA3AGAVAZQAdAZAGA+IACAeQAAAfgDAsIgEAxIgBASQgEAugwBNIgQAZIgGAJIgWAhQgOAXgDAJIAAABQgHASgBASQgDALABAIQACAlAMAyIACAFIACANIACAHIAAACIACAHIADAGQAJATAIAVIAQAoIAGAMIAHAQIAIAOIARAWIAfAlIAFAGQARAVAKARIABABQgSAGgVADIgWABIgIAAg");
	this.shape_62.setTransform(64.9222,152.08);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(255,255,255,0.929)").s().p("ACaHlQgOAAgOgCQgSAAgVgEQgagBgegEIgSgCIgLgWQgLgfgIgiQgHgggXg6IgIgUIgBgEIgEgHIgihEIgGgOQgMgZgJghQgEgRgEgVQgDgVgCgSQgDgvANggQASgtgQg1QgDgLgFgLQgJgWgTgdIgjgzQgJgLgIgRIgCgGQgUgrAFgsIAAgBQADgbAtgaIADgCQAagPAkgMQAagIAegHQAUgEAUgDQAugGAoACIADABQA+ACAYAVQAiAZAIBCQACAPABARQAAAfgDAwIgDA1IgBASQgCAtg1BWIgRAaIgHAKIgXAjIgUAhIAAABQgKAVgFARQgEAMAAAIQAAAkAPA5IACAGIADANIABAHIABADIADAHIACAHIARArIARApIAHANIAIAQIAJAQIARAXIAhAnIAGAHIAgAmIACABQgVADgXABIgUABIgLAAg");
	this.shape_63.setTransform(64.8078,150.8083);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAOH4QgFgJgGgQQgLgggHglQgHglgkhPIgwhiQgUgpgMg8QgPhRAVgrQAbg5gihGQgRgjg3hGQgLgNgKgWQgUgtAFgxQAEgbA3gbQAygYBMgRQBJgQBBgBQBFgCAbARQAwAeAEBjQABAfgDA0IgDBMQAAAxhNB1Ig2BTQgaAqgBATQgEApAYBOQAUBEAeA7QAWAsAyA4QAZAcAVATg");
	this.shape_64.setTransform(64.6907,149.4439);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_55}]},44).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[]},1).wait(16));

	// pata3
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(255,255,255,0.098)").s().p("ABzD3QgMgKgQgGQgPgHgggXQgggXgRgnQgMgZgMgwQgOg2gIgUIgOgoQgIgZgDgjQgDgjggggQgfghAIgUQAHgQASgFQATgFAOAJQANAKAMAhQAOAnARAkQAIARgDAyQgCAxAXACQAYACAMAmQAMAoAJAVQARApAdAeIAWAYQALAPACAOQADAOgIANQgEAJgHAAQgEAAgFgFg");
	this.shape_65.setTransform(100.2833,166.7534);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(255,255,255,0.125)").s().p("AB4D4QgMgJgOgGQgKgEgUgNIgQgKQgdgUgTggIgDgIIgHgNQgKgXgKglIgEgNQgMgrgIgTIgPgpQgIgagEgjQgBgOgGgPQgJgUgSgSIgBgBQgIgIgGgJQgPgWAFgPQAHgQARgGQASgGAOAIQAJAGAIAOQAFAIAEALIAQAlIASAkQAIAPAAAoIAAAMQgBAxAXADQALABAIAKQAJAKAGAVIABAEIAJAfIAJAbQAIATAKAQQAMAWAQAQIAPARIAHAIQAIAKAEAKIADAJQADAOgHANQgDAGgEACIgDABQgEAAgEgEg");
	this.shape_66.setTransform(100.234,166.6899);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(255,255,255,0.212)").s().p("ACFD6QgIgGgLgEQgHAAgSgLIgRgJQgggSgXgdIgFgHIgJgMQgMgXgNgmIgEgNQgOgrgKgYIgRgqQgJgcgGgjQgCgPgIgPQgLgWgSgSIgBgBQgIgIgGgKQgPgXAFgSQAGgRAQgIQARgIANAFQAIADAJALQAFAGAFAJIAVAeIAXAiQAKAQAEAoIABALQADAxAVAIQAKADAHALQAIAMAEAVIAAAEQADAUADANIAJAdQAHATAKATQANAXAQASIAPASQAGAIACABQAIAKAGALIADAJQAEANgEAOQgCAGgCADIgDABQgDAAgDgDg");
	this.shape_67.setTransform(100.0731,166.4174);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(255,255,255,0.353)").s().p("ACaEAQgCgCgHAAQAAAFgPgGIgTgIQglgOgdgYIgIgGIgLgMQgSgWgRgnIgGgNQgQgrgPgdIgSgtIgBgBQgLgegIglQgFgQgJgQQgQgagRgRIgBgBQgIgIgGgNQgOgYADgVQAFgUANgKQAOgNAMAAQAIgCAKAGQAGACAHAFQANAGAPAOIAeAgQAOAQAKAnIADAMQAKAwASAPQAJAGAFANQAGAOAAAYIAAAFQAAAWACAMQADAQAEAQQAHAVALAWQAMAbAQAUIAQAVIAJAKQAJAKAHALIAFAJQAGANABAPIgBAJQAAABAAAAQgBABAAAAQAAAAgBAAQAAABAAAAIgCgBg");
	this.shape_68.setTransform(99.94,165.8214);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(255,255,255,0.549)").s().p("ACbEVQgrgKgngRIgJgEIgQgLQgZgUgXgpIgIgPIgphPIgWgyIgBgBQgOgigMgnIAAAAQgIgRgLgSQgWgfgQgOIgBgBQgJgIgGgSQgNgaACgaQACgWAKgPQALgSALgIQAHgIAKgBQAJgFAJAAQASgEAUAKQARAKAXAUQATAQATAmIAHAMQATAuAOAbQAHAJACAPQADARgEAbIgBAFQgGAcACALQAAAQAFAUQAGAXALAbQANAgAPAXQAJAPAIAJIALAMIAUAWIAHAJQAIANAIAQIAEAKIACAFQAGAFABAFQAIANgKAAIgXgFg");
	this.shape_69.setTransform(100.7321,165.3929);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(255,255,255,0.745)").s().p("AC/E9QgzgGgvgKQgGAAgGgDQgJgDgLgGQghgTgdgrIgKgPQgZgpgZgvQgNgYgOgeIAAgBQgRgngQgnIAAgBQgKgSgPgTQgcgkgPgNIgBgBQgIgIgIgWQgKgcgBgfQABgZAGgTQAHgYAKgPQAHgPALgHQALgLAKgGQAXgPAZAHQAWAGAdAVQAZARAcAkIAKANQAdAsAJAmQAEAOAAARQgBATgHAeIgCAGQgLAgAAALQgBAQAEAYQAGAZALAfQAOAmAPAaQAJAQAIALIAMANIAYAYIAJAJIAZAdIAKALQAFAHAEADQAOAMAHAJQARAUgGAHIgZgCg");
	this.shape_70.setTransform(102.4033,164.1494);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(255,255,255,0.886)").s().p("ADXFZQg3gCg2gEQgGAAgIgCQgKgDgNgFQgmgTghgsIgMgQQgcgogcg1QgPgagPgfIgBgCQgTgpgSgqIAAgBIgdgmQgggogPgMIgBgBQgIgHgIgZQgJgegCgiQgBgbAEgWQAEgcAJgVQAHgTALgNQAMgPANgJQAagWAcAEQAZADAiAVQAcASAjAjIAMANQAkAsAGAtQADARgDASQgCAWgLAfIgDAHQgOAkgBAKQgCARAEAaQAFAaAMAjQAOApAOAcQAJASAJAMIANAOIAbAZIALAJIAfAdIAOANIANAMQAUAQAMAOQAXAZgCAMIgcgCg");
	this.shape_71.setTransform(103.7259,163.1755);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(255,255,255,0.973)").s().p("ADmFrIh0gCQgHABgIgCQgLgCgOgGQgogRglgtIgNgRQgdgngfg5QgPgbgQggIgBgCIgohWIAAgBQgOgTgRgUQgjgqgOgLIgBgBQgJgIgIgaQgJgfgCgkQgBgdACgXQACgfAIgYQAHgVAMgQQANgSANgLQAcgbAfADQAbABAkAVQAfATAnAiIANANQAoArAEAyQACATgEATQgEAXgMAgIgDAHQgQAmgCAKQgEARAFAcQAFAbAMAlQANArAPAeQAJASAJANQAFAGAJAJIAdAZIALAKIAkAdIAPAMIAQAOQAYAUAOAPQAbAdAAAOIgdAAg");
	this.shape_72.setTransform(104.4933,162.5642);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("ABMFoQgxgUgrg7Qgsg7gyhkIgphYIgggnQgkgrgOgLQgJgHgJgdQgIgegDgmQgHhhAkgzQApg7AuACQAyACBWBJQBIA+gQBUQgFAagQAlQgRAngCAKQgGAhAYBNQAXBIAYAiQAJANAiAbIBBA0QBVBFAAAbIiTAAIgFAAQgPAAgVgJg");
	this.shape_73.setTransform(104.7424,162.3565);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_65}]},43).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_73}]},1).to({state:[]},1).wait(16));

	// pata2
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(255,255,255,0.098)").s().p("AiDD5QgPgCgMgJQgLgJgHgOQgGgOAAgOQABgQANggIAdhCIAJgXIADgfQACghASgxQAjheAwglQAZgSA3gVQAfgMAUgDQAfgDAUAOQAOAKAHARQAGARgCASQgEAggbAdQgVAYgtAeQgdATgIANQgEAHgHAWQgKAggcAwQghA4gJAWIgKAaIgMAYQgQAcgWAJQgKAEgLAAIgIgBg");
	this.shape_74.setTransform(216.8482,142.8426);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(255,255,255,0.125)").s().p("AiFEAQgQgCgMgJIgEgDQgIgIgFgJIgCgDQgHgOAAgOIAAgBQABgNAJgaIAEgLIATgpIALgaIAGgUIACgEIADggIAAgBIABgTIAFgZQAFgTAIgVIACgGIAMgdQAJgVAKgRQAYgpAdgVIARgKQATgLAfgNIAQgGIAcgJQAOgEALgCQAggEAVAPIAIAHQAJAIAEAMQAHAPgCARIgBAEQgBAIgDAJIgEAKQgJARgQASIgHAHQgXAWgnAaIgCACQgbASgIAOQgEAIgIAWIgCAFQgLAggaAtIgNAVQgRAegIATIgFAMIgKAaIgFAMIgFANIgHAMQgGALgJAHQgHAFgIADQgLAEgLAAIgIgBg");
	this.shape_75.setTransform(217.0485,143.1846);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(255,255,255,0.212)").s().p("AiLEVQgSgCgOgIIgFgDQgIgIgHgKIgCgDQgIgQgBgOIAAgBQAAgOAJgcIAFgMQAJgYALgWIALgdIAGgVIABgFIACgiIAAgCIABgVQABgOADgNQADgWAIgXIACgFIANggQAKgYALgTQAagtAhgWIATgKQAVgLAigOIATgGIAegKQAQgFAMgBQAigEAYAPIAJAGQAKAJAGAMQAIARgEASIAAAEQgCAJgEAJIgGAKQgLARgTASIgIAIQgeAZglAcIgCACQgbAVgKARQgFAJgIAYIgDAEQgPAmgbAuIgPAXQgSAcgIAaIgEAOIgJAdIgEAOIgEAOIgEAMQgDANgIAIQgIAFgJACQgLAEgMAAIgJgBg");
	this.shape_76.setTransform(217.6654,144.1615);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(255,255,255,0.353)").s().p("AiVE5QgUgCgSgGIgGgDQgKgJgIgMIgCgDQgMgTgBgNIAAgBQgCgQAKghIAFgOQAKgcAOgYIAJgiQAEgOABgKIABgGIABgnIAAgCIgBgZQgBgSACgMQABgcAJgYIACgGIAOglQAMgcAMgWQAegzAogYIAXgLIBAgaIAWgHIAjgLQARgFAOgBQAngFAdAQIAKAGQAOAJAHANQALASgHAVIgBAEQgEAJgGAKIgHALQgQARgXATIgJAIQgpAfgjAdIgDADQgbAagMAVQgHAOgJAYIgDAGQgWAugeAvIgSAaQgTAbgHAlIgEARIgHAhIgCARQgCAIAAAJIAAANQACAQgFAJQgKAEgLACQgNADgNAAIgKAAg");
	this.shape_77.setTransform(218.6859,145.8198);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(255,255,255,0.549)").s().p("AijFrQgYgCgWgEIgIgCQgMgLgKgNIgDgEQgRgWgCgOIAAgBQgDgSALgoIAFgQQALgjARgZIAIgqIADgdIABgGIgBgtIAAgDIgCgdQgDgYAAgMQgCgkAIgaIADgIIARgrQANgiAPgZQAjg9AygaQANgHAOgFIBOgbIAagJIApgNQAUgFARgCQAtgEAkAQIALAGQASAKAJANQAQAUgLAYIgCAFQgGALgIAKIgLALIgyAmIgMAJQg5AmggAgIgDAEQgaAhgPAcQgKASgLAZIgEAHQgdA6gjAyIgXAdQgUAbgHAzIgDAWIgEAoIgBATQAAAKADALQACAIADAIQAKATgDAMIgZAEQgPACgQAAIgLAAg");
	this.shape_78.setTransform(220.12,148.1381);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(255,255,255,0.745)").s().p("AixGcQgcAAgagDIgKgBQgOgNgNgPIgDgEQgWgagCgOIAAAAQgEgVALguIAFgTQAMgqAUgbIAHgxIACghIAAgHIgCgzIAAgEQgBgMgDgWQgGgeAAgLQgHgsAKgcIADgJIATgyQAOgoARgcQAphHA8gdQAPgHARgFQAkgLA3gSIAegKQAfgKARgEQAWgGAUgCQA0gFAqAQIANAHQAWAKALAOQAUAWgPAcIgDAGQgHALgMALIgNALIg+AoIgOAKQhJAugdAiIgDAEQgaApgTAiIgZAwIgFAJQglBHgoA0QgOASgNAPQgVAZgGBDIgCAbIgBAtIAAAXQABALAGANQAEAJAGAJQARAXAAAOIgcACIglABIgMAAg");
	this.shape_79.setTransform(221.5309,150.4375);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(255,255,255,0.886)").s().p("Aj3G+IgMAAQgOgOgPgRIgDgEQgagdgDgOQgFgWAMgzIAFgVQANguAXgdQADgbACgbQABgTAAgSIAAgHIgEg4IAAgEQAAgMgFgZQgHgjgBgKQgJgyAJgeIAEgJIAUg3QAQgrATggQAshNBDgfQARgIATgFQAogKA8gUIAhgLQAjgLASgEQAYgGAWgCQA4gGAuARIAPAGQAZALANAOQAWAYgRAeIgEAHQgJALgNAMIgQAMQghASglAXIgQAKQhTA0gcAkIgDAFIgvBTIgbA1IgFAKQgtBPgqA2QgQAUgPAQQgWAYgFBOIgCAeQAAAaABAXIACAaQABAMAJAOQAFAKAJAKQAWAaABAPIgfABIg1ABIg8gCg");
	this.shape_80.setTransform(222.5321,152.0828);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(255,255,255,0.973)").s().p("AjBHVIg/AAIgNgBQgPgOgQgSIgEgFQgbgegDgNIAAgBQgGgXAMg2IAFgVQAOgxAYgeQADgdABgcIABgnIAAgIIgFg6IAAgFQgBgMgFgbIgKgvQgKg1AKgfIADgKIAWg6QAQguAUghQAuhRBIggQASgIAUgFQApgKBAgVIAjgLQAlgMATgEQAZgGAXgCQA7gGAxARIAPAGQAbALAOAOQAYAZgTAgIgEAHQgKAMgOAMIgRAMQgkASgnAXIgRALQhbA3gZAlIgEAFIgwBaIgdA3IgGAKQgwBVgsA3QgRAVgQAQQgXAYgEBUIgBAgQAAAcABAYIADAbQACANAJAPQAHAKAKALQAZAbADAQIghABIg4AAg");
	this.shape_81.setTransform(223.1448,153.0717);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AkQHcIggggQgggjgDgPQgGgXAMg3QAOhCAdgkQAGgygBgwIgFhIQgBgMgFgbIgLgwQgMhAAPggIAWg7QARguATgiQA8hoBjgYQArgKBAgVQBCgWAbgGQBigYBMAhQBOAhgfAyQgKAQgTAPIgSANQgsAWgyAeQhjA8gWAnQgwBcgkBBQhFB6g7A6QgXAYgEBWQgDBBAHAwQADAWAaAcQAaAcADAQg");
	this.shape_82.setTransform(223.3429,153.3947);
	this.shape_82._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_74}]},42).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[]},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.shape_82).wait(50).to({_off:false},0).wait(3).to({_off:true},1).wait(16));

	// pata1
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(255,255,255,0.118)").s().p("Ag7CeQgUgLgIgZQgGgYAKgkIAIgeQAFgRABgNIAAghQABgMAFgYQACgRAFgMIANgZQAKgSAJgIQASgSAZAAQAaAAASARQARAQAHAcQADAQAAAiQgBAZgCAMQgFAUgRAfQgVAmgFANIgKAgQgGATgJAKQgNAQgUADIgLABQgQAAgNgIg");
	this.shape_83.setTransform(232.872,150.4688);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(255,255,255,0.145)").s().p("AgmCoQgLgDgKgGQgJgGgGgIIgIgMIgEgMQgHgZAKgnIAJgfQAFgRABgNQABgXABgMIAEgTIADgSQAEgQAFgMIAAgBIANgYIABgBQAIgLAGgGIAGgGIAGgFQAOgMAUADIADAAQAXADAQARIAEAEQANAQAFAZIAAABQACAQAAAdIAAAHIAAAIIgDAZIAAAGQgEAUgOAdIgBAEIgIARIgHARIgKARIgMAfIgCAFQgDAHgEAGQgEAGgEADQgFAFgFAEQgKAGgOACIgGAAIgMgBg");
	this.shape_84.setTransform(232.71,150.8876);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(255,255,255,0.227)").s().p("AgWCzQgJgBgIgEQgLgFgJgIQgJgIgFgJIgIgPIgFgNIAAAAQgIgaALguIAKgjQAGgSADgPQACgZAEgOIAGgUIAHgTQAFgRAIgMIAAgCIARgXIABgBQAKgJAFgCIAGgDIAFgDQANgKAPALIADABQASAJAOATIADAFQALAPABAfIAAACIgCAxIgBAIIAAAJIgBAbIgBAHQgBAagJAdIAAAFQgDAJgBAJQgBALgDAIQgIALgGAFQgIAJgKATIgDAEIgKALQgEAEgFADIgMAFQgGADgJAAIgIgBg");
	this.shape_85.setTransform(232.323,152.0769);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(255,255,255,0.365)").s().p("AgGDNQgKAAgNgIQgIgFgIgHQgKgJgIgLQgIgNgDgKQgDgKgFgIQgEgIgCgIIgBAAQgIgcAMg6QAFgXAGgRIANgoQAGgaAIgSIAKgXIALgUQAJgTALgNIABgBQALgLALgLIACgBQAMgGAHAEIAGACIADAAQAKgHAHAZIABACIAVApIACAHQAJAPgGAoIgBADQgFAcgEAcIgBAKIAAAJQgBATABAPIAAAIIACBBIABAFQAAAKAEALQADAMgDAKQgLAJgJAEQgNAHgQAQIgEADQgHAFgHACIgNAEIgHAAIgGAAg");
	this.shape_86.setTransform(231.9729,154.0105);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(255,255,255,0.561)").s().p("AAHECQgIAAgIgBQgKgDgGgFQgLgGgMgQQgHgJgHgMQgKgPgGgOQgHgUgBgMQgCgNgFgLIgIgSIgBAAQgKggANhIQAGgdAIgWQAJgZAKgXQAKgdAOgWIARgbIAQgWQAOgVAQgOIABgBQAUgPAMgGIADAAQAPgCAIAMQAEAFACAEQABAEAAACQAFgDgEAtIAAADQABAkAEAXIAAAIQAFAQgPA1IgCAFQgMAlgGAcIgCALIAAANQgBAVADAVIABAKQAGAtALAgIAEAGQAEALAKANQAKAPgCAMQgQAGgNADQgVAFgXALIgGACQgHACgIAAIgGAAg");
	this.shape_87.setTransform(232.412,156.206);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(255,255,255,0.753)").s().p("AgIE5QgMgCgJgEQgNgGgGgIQgLgNgLgYQgHgNgGgSQgIgVgFgRQgGgaACgPQgCgQgGgNIgJgUIgBgBQgMgiAPhZQAGghAKgcQAKgcAOgbQAPggAVgbIAWgeIAVgZQAVgWAUgPIADgCQAbgSANgCIADABQAUADAJAVQAEAJAAAGQACAHgDAEIgPBCIAAAFQgKAzgCAZIgBALQABAPgYBCIgDAHQgSAugKAdQgCAEAAAKIgBAPQAAAYAEAZIACAMQALA5AXAhIAGAHQAIAMAQAPQAQARgBAPIgmAFQgdADgdAGIgJABQgMAAgOgEg");
	this.shape_88.setTransform(233.1991,158.525);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(255,255,255,0.89)").s().p("AgbFgQgOgEgKgGQgQgIgGgMQgKgRgLgdIgMgmQgHgZgEgUQgFgfADgPQAAgUgHgNQgHgNgDgKIgBgBQgOgkAQhlQAGgjAMggQALgfARgeQASghAZgfQANgQAOgQIAZgbQAZgXAYgRIADgBQAggVAPACIADABQAWAGAKAbQAEALAAAJQABAJgEAFQgDAEgXBPIgCAGQgRA+gFAcIgDAMQgBAPggBMIgDAHIgiBSQgCAFgBALIgBAQQAAAbAFAcIADANQAOBCAfAiIAIAIQAMAMATAQQAVATAAARIgtACIhFAEIgKAAQgNgBgRgGg");
	this.shape_89.setTransform(234.5261,160.2699);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(255,255,255,0.973)").s().p("AgEGBQgRgCgSgHQgPgGgKgGQgRgKgHgNQgKgUgKghIgLgpQgIgcgDgWQgEghAEgRQAAgVgHgOQgIgOgDgKIgBgBQgOglARhsQAFglANgiQAMghATgfQAUgjAbghIAeghIAcgcQAagYAbgRIADgCQAjgWAPAEIAEABQAYAJAKAdQAEAOAAAKQABAKgFAGQgFAGgcBXIgCAHQgWBEgIAdIgDANQgDAPgjBQIgEAJIgmBXQgDAFgBALIAAASQAAAcAGAeIACAOQAQBHAlAiIAJAJQANANAWAQQAYAUAAASIgxAAIhLABIgJAAg");
	this.shape_90.setTransform(235.3114,161.2942);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgHGKQgRgDgTgIQgmgOgLgWQgQgggQhCQgRhKAIgcQAAgVgHgPQgJgPgEgKQgOgmARhuQATh+BvhyQApgsAqgaQAngYAQAEQAbAIALAiQAJAdgJAMQgGAHggBhQgeBagFAXQgEAPgkBSQgdBDgOAeQgEAJAAAaQAAAcAFAfQAQBTAqAmQAPAPAfAYQAZAUAAASg");
	this.shape_91.setTransform(235.5727,161.6401);
	this.shape_91._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_83}]},42).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_91}]},1).to({state:[]},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.shape_91).wait(50).to({_off:false},0).wait(3).to({_off:true},1).wait(16));

	// Capa_13
	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(255,255,255,0.047)").s().p("AAKCiQg7gIgcgOQgygYgYg3QgVgwAFg7QADgXAGgNQAIgTAUgUQAUgUASgKQAXgMAdgBQAagBAZAJQAUAHAkAVQAeASAPAMQAYASANAUQASAfACApQADA1gUAmQgaAwgtALQgMADgSAAQgSAAgXgDg");
	this.shape_92.setTransform(308.1934,51.8143);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(255,255,255,0.059)").s().p("AAmCoIgbgCIgCAAQgUgCgRgEQgPgCgMgEQgOgEgLgFIgCgBQgNgGgLgIQgMgIgKgLQgSgTgMgbIAAgBQgMgZgEgbQgFgaAEgfIAAgCQADgXAFgOIAFgJQAKgPAPgPIAYgTQAIgHAIgFIASgHQARgGATAAQALgBAMACQAQABAPAFIAUAJIAUALIAPAJIACABIARAKIAMAIIAJAGIAJAGIATAPQAKAKAIAMIACADQAPAXAGAdIAAADIABAGIABAJIABAQIgBATIAAACIgBAHQgFAcgMAXQgKASgNAMQgQAQgUAIIgPAGQgIACgKAAIgVABIgIAAg");
	this.shape_93.setTransform(307.8484,51.775);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(255,255,255,0.086)").s().p("AANCzIgCABQgWgCgTgDQgRgCgOgEIgcgJIgCgBQgQgHgLgIQgOgJgLgLQgVgUgQgeIAAgBQgOgbgGgdQgGgdAEgjIAAgCQADgYAGgSIAFgKQANgQARgPIAbgTIATgNIATgHQATgHAWgBQAMgBANACQASABARAFQAKAEANAGIAVANIAQAKIADABIATALIANAJIALAHIALAHIAVAPQAMALAJAMIADACQATAXAKAcIAAACIACAGIACAKIACASIgBAVIgBACIgBAHQgHAegPAZQgMATgQANQgRARgYAJQgHADgKADQgJACgLABQgOAEgRABIgegBg");
	this.shape_94.setTransform(306.8355,51.705);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(255,255,255,0.137)").s().p("AgiDHQgTgCgRgEQgRgEgQgGIgDgBQgUgIgNgIQgRgJgNgMQgagWgUgiIgBgBQgTgfgIgiQgIghAEgqIAAgBQADgbAHgXIAFgNQASgPAVgPIAggVQALgIAMgGIAXgJQAWgHAZgBQAPgCAPABQAWAAATAHQANAEAOAHQAMAHAMAJIARAMIAFABQAMAGALAHIAPAKIAMAJIAOAHIAaARQAPALAMANIADACQAZAWARAaIABACIADAEIAEANIACAUQABANgBALIgBACIgDAIQgJAigVAcQgPAUgTAPQgWASgcALIgVAGQgKADgNACQgPAGgUAEIgiACIgDAAIgQAAIgggBg");
	this.shape_95.setTransform(305.1583,51.7354);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(255,255,255,0.208)").s().p("AgnDnQgWgCgWgEIgogLIgDgBQgagJgPgJQgVgKgRgNQgggYgcgnIAAgCQgaglgLgmQgLgpAEgzIAAgBQAEgfAIgeIAFgQIAygfQAZgNAPgJQAOgJAPgGIAcgLQAbgIAdgDQASgCATAAQAaAAAZAHQAOAFARAJQAOAJAOAKQAKAIAIAIIAIACQAOAFAOAKIASAMIAPAKIARAIIAgATQATANAQANIAEACQAjAUAaAYIABAAIAFAEQADAFADAJIAEAYQACAQgBAOIgCACQgDADgCAFQgMAngdAhQgTAXgZARQgbATgjANIgZAIIgcAGQgSAKgWAHQgVAFgTACIgEAAQgXADgVAAIgPAAg");
	this.shape_96.setTransform(302.793,51.8939);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(255,255,255,0.298)").s().p("AgtEPQgagBgcgFQgWgEgcgIIgEgCQghgJgSgJQgbgLgVgOQgogbglgwIgBgBQgigtgOguQgQgwAFg/IAAgCQADgjALgoIAGgTIBAggQAhgOARgKQARgKATgIQAQgGATgGQAggKAjgEQAWgDAXgBQAhgBAeAJQASAFAUAMQASAKAPAOQAMAKAIAKIALABQARAGARAMQAJAFANAKIATANIAVAJIApAVQAYAOAVAPIAFACQAuARAnAWIABgCQACgBAGACQAFAGAEALQAEANACASQADASgBARIgDACQgEADgDAGQgRAvgmAmQgZAZggAUQgiAWgrAPIghAKIghAIQgVAPgZAMQgbAIgWADIgEABQgmAIgeAAIgEAAg");
	this.shape_97.setTransform(299.7838,52.1407);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(255,255,255,0.408)").s().p("Ah4E6QgZgEglgJIgEgCQgqgLgVgJQgigNgagQQgzgegvg5IgBgCQgug2gSg2QgVg7AGhOIAAgBQADgpANg0IAGgXQAugRAkgPQAqgQAVgLQAVgLAYgKQAUgHAWgHQAogMAqgGQAbgEAcgBQAogDAlAKQAXAHAYAPQAVAMASARQAOAOAIAMIAPABQAVAGAVAPQAKAGARANIAXAPIAaAKIAzAZQAfAQAbAQIAGACQA9AOA2ATIABgEQADgEAIACQAHAHAGANQAFAQAEAWQADAXAAAUIgFACQgGADgDAHQgXA3gyAtQggAdgpAXQgpAZg2ASIgpAMIgpALQgYAVgdASQgiALgZAGIgFACQgxANgnAAQgfAAgkgGg");
	this.shape_98.setTransform(296.1083,52.4417);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(255,255,255,0.537)").s().p("AiPFzQgcgFgvgLIgFgCQg0gNgZgJQgqgOgggSQg+gig8hEIgCgCQg5hAgYhAQgbhHAIhfIAAgBQAEgvAOhBIAHgdQA6gRAsgQQA1gRAYgMQAZgNAegLQAYgJAbgIQAwgOAzgIQAggFAigDQAxgFAsANQAdAJAcARQAZAQAVAUQAQARAIAPQAKgBAKADQAZAGAbASIAfAWQASAOAKAGQAKACAWAIIBAAcIBHAlIAIABQBMAMBIAOIACgGQADgGALABQAKAHAHARQAHASAFAbQAEAcABAZIgHABQgHADgFAIQgdBChAA0QgnAig0AbQgyAbhDAWIgwAPIgyANQgcAbgiAZQgqAQgcAIIgHACQg6ATgwACIgKAAQghAAgmgFg");
	this.shape_99.setTransform(291.9185,52.7872);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(255,255,255,0.647)").s().p("AijGkQgggFg3gMIgGgCQg8gOgdgKQgxgPglgUQhIgmhHhNIgCgDQhFhJgbhIQgghRAIhuIAAgBQAEg0ARhOIAHggQBGgTAygQQA+gSAcgNQAdgPAigMQAcgKAfgJQA3gQA6gJQAmgHAmgEQA5gGAyAPQAjAKAfATQAdATAXAXQATAVAHARQAMgBANADQAcAGAfAVIAkAaQAVAQALAGQAMACAaAKQAdALAtAUIBTAoIAKABQBaAJBYAKIACgIQAEgIANABQALAIAJATQAJAVAGAfQAFAgABAdIgIABQgJADgGAJQgiBKhMA8QguAlg9AeQg6AehNAZIg5ARIg5AQQgfAhgmAeQgxAUgfALIgIADQhEAXg2ADIgWABQgiAAgmgGg");
	this.shape_100.setTransform(288.245,53.0934);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(255,255,255,0.737)").s().p("Ai0HMQgigFg+gOIgHgCQhEgPgfgKQg3gQgogVQhRgphQhVIgCgDQhOhRgfhPQgkhZAJh6IAAgBQAEg5AShXIAJgkQBOgTA3gQQBHgTAegPQAggPAmgOQAfgLAjgKQA8gRBAgLQAqgHArgFQA+gHA4AQQAmAKAjAXQAhAUAYAaQAVAXAHATQAOgBAOADQAfAHAjAXIAoAdQAXARAMAHQANACAdALQAgAMAyAWQAyAVAsAVIALABIDKAPIACgKQAFgLAPABQANAJAKAVQAKAWAHAjQAGAkABAhIgJAAQgLAEgGAIQgnBShWBBQg0AohDAhQhBAghWAbIg/AUIg/ARQgiAngpAjQg3AWgiANIgJADQhLAcg7AEIgaABQgkAAgrgGg");
	this.shape_101.setTransform(285.236,53.3576);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(255,255,255,0.808)").s().p("AjBHrQgkgFhDgOIgHgCQhKgRghgKQg8gRgsgWQhXgrhXhbIgCgDQhVhXghhUQgohhAJiDIAAAAQAFg9AUhfIAIgnQBWgTA7gQQBMgUAggPQAjgQApgPQAigMAlgKQBBgTBFgMQAtgIAugFQBDgIA8ARQApALAlAYQAkAWAZAcQAWAZAIAVQAPgBAPADQAiAHAlAZQANAIAeAXQAZATANAHQAOACAgAMQAiAMA2AXIBmAtIAMAAIDdALIACgLQAFgMAQABQAPAJALAXQALAXAHAmQAHAnACAjIgLAAQgLADgHAKQgrBXhdBGQg4AqhKAjQhGAihcAdIhEAVIhEATQgkAqgsAnQg6AZglAOIgJAEQhRAehAAFIggACQgmAAgrgHg");
	this.shape_102.setTransform(282.8838,53.5585);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(255,255,255,0.859)").s().p("AjKICQgmgFhHgQIgHgCQhOgRgjgKQg+gSgvgXQhcgshbhfIgDgEQhZhbgkhYQgqhlAKiKQAEg/AVhkIAJgqQBagSA/gRQBQgVAigQQAkgQAsgQQAjgMAngLQBEgTBIgNQAvgIAxgGQBHgJA/ASQArAMAnAZQAlAXAaAeQAXAaAIAVQAQAAAQADQAjAHAoAaQANAIAgAZQAaAUAOAIQAOABAiAMQAkAOA5AXIBrAuIANABIDqAIIACgMQAGgNARABQAQAIAMAZQALAZAIAoQAIAoABAkIgLABQgMADgIALQgtBahjBJQg7AshNAkQhKAjhhAfIhIAWIhHAUQgmAtgtApQg+AbgmAPIgKAEQhVAhhDAGIgiABQgnAAgtgGg");
	this.shape_103.setTransform(281.2038,53.7002);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(255,255,255,0.886)").s().p("AjQIPQgngFhIgPIgIgCQhRgSgjgKQhBgTgvgXQhfguhfhhIgDgDQhcheglhbQgrhoAKiNQAEhBAWhoIAJgqQBdgTBBgRQBTgVAigQQAlgRAtgQQAkgMApgMQBGgTBKgOQAwgIAygHQBJgIBBASQAtAMAnAaQAmAYAcAeQAXAcAIAWQAQgBARADQAkAHApAbQANAJAhAZQAbAVAPAIQAOABAjANQAlAMA7AZIBuAvIANAAIDzAHIACgNQAGgNASAAQAQAJANAaQALAZAIApQAIAqACAlIgMABQgNADgHALQgvBdhmBKQg9AthQAlQhMAkhkAgIhKAWIhIAVQgoAvguArIhmArIgLAEQhXAihFAGIgkACQgoAAgugHg");
	this.shape_104.setTransform(280.2229,53.786);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(255,255,255,0.898)").s().p("AjRIUQgqgGhPgRQhRgSgkgKQhBgTgwgXQhigvhhhlQhdheglhcQgshpAKiPQAGhOAdiGQDagtA8gcQBEggBdgaQBzggCBgQQB8gQBkBAQAnAYAbAfQAYAbAIAWQAygDA9AoQANAJAiAZQAbAVAOAIQAeAEB1AwIBwAwIECAGIACgNQAGgOASAAQAhATAQBTQAIAqACAmIgMABQgNADgHALQhMCWjZBlQhNAkhlAgIiUAsQgnAvgvAsQhJAggpAQQhYAihGAHQgRABgTAAQgoAAgugGg");
	this.shape_105.setTransform(279.8739,53.8203);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_92}]},39).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_105}]},1).to({state:[]},1).wait(16));

	// Capa_9
	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(255,255,255,0.188)").s().p("AAsCZIg7gEIgbgCQgPgCgLgEQghgLgXglQgPghgKgQQgSgZgHgOQgLgTgBgYQgCgZAJgWQAIgWASgQQASgQAWgHQAPgEAUgBIAkAAIAwgBQAdAAAUACQA5AGAgAdQAdAbAKAsQAIAjgHAtQgFAhgNAVQgRAfgjARQgfAPgkAAIgDAAg");
	this.shape_106.setTransform(118.3077,149.2258);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(255,255,255,0.2)").s().p("AAuCeIgEAAQgegCgcgEIgdgDQgIAAgHgCIgNgEQgjgMgagmIgEgIIgOgYIgLgSIgFgHQgPgVgIgMIgHgSQgFgOAAgPQgBgPAEgNQACgLAFgJQAGgNAIgKQAHgIAJgHQATgQAYgGQAQgEAVgBIAlABIAzABIAZACIAbACIABAAIAdAFQAOAEANAFQAPAFALAHIANAJQAPANAMARQAMASAGAXQAEARABAUQACATgEAWIgBAHIgGAXQgGASgJANIgBABQgUAfglARIgCABQggAOgkAAIgFAAg");
	this.shape_107.setTransform(118.3114,148.8281);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(255,255,255,0.239)").s().p("AA1CsIgFAAQgigDgjgFQgVgDgNgDIgSgDIgQgGQglgNgmgqIgGgIQgNgPgHgLIgOgTIgIgIQgSgWgJgPQgGgKgDgMQgFgQABgSQAAgRAGgPQAEgLAHgKQAJgNAMgJQAJgIALgGQAYgPAcgFQAUgDAYABQAIABAjACIA7AGIAdAFIAfAGIACAAIAiAHIAgAHQATAEAMAHIASAJQASAMARARQATASAIAZQAHASACAYQADAZgEAXIgDAJQgEAOgGALQgJASgOAOIgBABQgfAegpAQIgDABQgmANgoAAIgIAAg");
	this.shape_108.setTransform(118.2767,147.5209);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(255,255,255,0.306)").s().p("ABADFIgGAAQgrgEgsgKQgYgEgTgFQgLgCgLgEIgUgHQgsgSg4guIgKgJQgUgRgJgLIgVgVIgKgJQgYgZgMgUQgHgNgEgOQgGgVACgWIAAgBQACgWAKgRQAHgMAMgKQAMgNASgJQANgHAOgFQAhgNAjgDIABAAQAZgBAdADQAPADAlAEIBJAPIAkAKIAnALIACABQAXAGAUAEQASADAWADQAcACAMAGQAMADANAFQAZALAYARQAeATANAaIAAABQALAUAFAfQAGAigHAbIgEALQgHAQgLANQgOASgWANIgCACQgvAdgyAQIgDABQguAMgtAAIgSgBg");
	this.shape_109.setTransform(118.2135,145.2507);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(255,255,255,0.396)").s().p("ABQDqIgIgBQg2gFg6gPQgdgHgagIQgOgEgOgGIgagKQg1gWhSg1IgPgLQgfgUgMgLIgdgXIgOgMQgfgbgQgcQgKgRgFgSQgIgcAEgbIAAgBQAFgdAQgUQALgOASgLQASgMAagIQATgGATgEQAsgLAtABIABAAQAhABAkAGIBCAOQApALA0AQIAtARQAhANARAGIACAAQAdALAZAEQAWADAfABQAnAAANAEQARACATAEQAgAKAkASQAsAUATAdIABABQAQAYAJAoQALAugKAgQgDAIgEAHQgKATgTAOQgUASghAOIgEACQhGAdg+ANIgDABQg3ALg0AAIgigBg");
	this.shape_110.setTransform(118.1379,141.9848);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(255,255,255,0.482)").s().p("ABfEPIgKgBQhBgHhHgUQgigKghgLIgjgNIgggNQg9gbhsg8IgUgMQgpgYgQgLIgmgaIgRgNQgngfgUgjQgMgVgHgWQgJghAHgiIAAgBQAHgjAWgYQAPgQAXgLQAZgMAigHQAYgFAYgDQA4gIA3AEIACAAQAoADArAJIBPAUQA0AQA8AXIA4AZQApATATAHIACABQAkAOAeAFQAaAEAngCQAzgCANACQAWABAZAEQAoAJAwASQA7AVAZAfIABACQAVAbANAyQAPA7gNAlQgDAJgGAIQgNAXgbAQQgaASgtAOIgFACQhdAchKAMIgEABQg+AKg5AAQgcAAgagCg");
	this.shape_111.setTransform(118.0283,138.6194);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(255,255,255,0.549)").s().p("ABqEqIgLgBQhKgIhQgZQgmgLgmgNIgngPIgkgQQhDgeh/hCIgYgMQgxgagSgLIgsgcIgTgPQgtgigXgnQgOgYgHgZQgKgmAIgmIAAgBQAJgnAbgbQARgRAcgLQAcgMAogGQAcgFAcgCQBAgGA/AGIABAAQAuAFAwALQApAKAvAOQA8AUBCAcQAfAOAgAQQAvAXAVAJIADABQAoARAiAFQAdAEAsgDQA8gEANABQAZAAAdAEQAuAIA4ASQBGAVAeAiIABACQAZAeAQA5QASBEgQAoQgEAKgGAJQgQAZggASQgeASg2AOIgGACQhtAchTALIgEABQhCAJg8AAQgkAAgigDg");
	this.shape_112.setTransform(117.9606,136.179);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(255,255,255,0.588)").s().p("ABxE6IgMgBQhOgIhXgbQgngMgqgPIgpgRIgogRQhGggiKhEIgagOQg1gbgUgLIgvgdIgWgQQgvgjgZgqQgPgZgIgbQgLgpAJgpIAAgBQAKgqAegcQATgRAegMQAfgMAsgGQAegEAegCQBFgEBDAHIACAAQAwAGA0ANQAtAKAxAQQBAAWBGAfQAhAQAiARQAyAaAWAJIADACQArASAlAFQAeAEAwgEQBAgFAOAAQAbAAAgAFQAxAGA9ATQBMAWAgAiIACACQAcAgARA9QATBJgQAqQgEAMgHAJQgSAagjATQghASg7AOIgGACQh4AchXAKIgFABQhFAJg+AAQgoAAgmgEg");
	this.shape_113.setTransform(117.9006,134.6917);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(255,255,255,0.6)").s().p("ABnE+QiEgPihhCQhEgcjUhpIhLgnQgpgXgegWQhNg6gUhLQgLgqAJgqQAKgrAfgcQAoglBXgLQBpgNBiAMQC0AVDgByQA3AdAVAJQAsATAlAFQAfAEAxgEQBCgGAOAAQBGgBBoAeQBOAWAhAjQAdAgASBBQAVBLgRArQgRApgxAZQgiATg8AOQiDAehdALQhGAIg/AAQgwAAgtgFg");
	this.shape_114.setTransform(117.8955,134.2046);
	this.shape_114._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_106}]},31).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_114}]},1).to({state:[]},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.shape_114).wait(39).to({_off:false},0).wait(14).to({_off:true},1).wait(16));

	// Capa_8
	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(255,255,255,0.078)").s().p("AgUDDQhOgKg3ghQhCgqgXhAQgMghACgjQABgkAPggQAQggAbgYQAbgYAhgMQAfgKA7gEQAmgCAUACQAfADAWAOIAZATQAOALALAEQAOAEAcABQAYADAVAQQAUAPAMAWQAWAqgHA0QgKBAgqAjQgJAIgQAJIgaAPIgmAaQgWAPgSAHQgYAJggAAQgQAAgTgDg");
	this.shape_115.setTransform(96.5795,72.2614);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(255,255,255,0.082)").s().p("AAEDHIgXgCIgQgCQgUgDgTgFQgUgGgTgHQgUgIgRgKIgDgCQgSgLgPgNQgSgQgNgSQgKgNgHgOIgJgVIgDgIQgKgfACgeQACglAPggIALgTQANgUASgRQAXgVAbgMIALgEQARgFAZgEQAVgDAcgCIAjgCQAMAAALABQAeADAVANIACABQAFADAUAQQAPALALAEQAIACAMACIAWABQAYADAVAQIAIAGQAPANAJASIABABQALAVADAWQACAOAAAOQABAMgCAMIgBAGQgGAegNAYQgLAUgRAQIgEADQgKAIgPAJIgLAGIgLAHIgFADIgCABIgjAZQgNAJgMAGIgQAHQgMAFgOACQgOADgPAAIgNgBg");
	this.shape_116.setTransform(96.4876,72.2642);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(255,255,255,0.102)").s().p("AAKDUIgYgBIgRgCQgUgDgVgFQgWgGgTgHQgWgIgSgKIgDgCQgTgMgRgNQgSgQgPgTQgLgOgIgPIgKgWIgDgIQgKgfACgiQABgmAPgiQAFgLAGgKQANgWATgSQAXgXAcgNIALgFQARgGAbgFQAXgEAcgDQAUgCAQgBIAYAAQAgACAXAMIADACQAGACAUAPQAQALAMAEIAUAFIAYACQAZAEAWARIAHAHQAQAOAKATIABACQALAXADAVQADAOABAQQAAAMgBAMIgBAGQgEAhgNAZQgMAVgSARIgEADQgLAIgQAJIgMAHIgMAHIgFADIgCABIgjAcIgZASIgPAIQgMAFgOAEQgSAEgWAAIgEAAg");
	this.shape_117.setTransform(95.9146,72.2898);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(255,255,255,0.157)").s().p("AAAD4IgTgCQgVgCgagGQgbgGgVgHQgZgIgVgLIgEgCQgWgMgTgQQgUgQgTgXQgOgPgKgQQgHgMgFgMIgEgKQgNghACgpIAAAAQACgsAOgoIALgYQANgaATgVQAYgdAegRIAMgHQAUgIAdgIQAagHAegFQAXgFASgCIAcgCQAkAAAbAJIADACQAKABAWAOQASAKAOAFIAYAGIAaAEQAcAIAXATIAIAJQAQAQAMAXIABACQANAfAEATIAGAhQACAPgBAOIAAAGQAAAlgOAcQgMAZgXATIgEADQgNAKgTAJIgOAGIgNAHIgGAFIgCACQgWAWgNAOIgZAXIgQALQgMAKgOAFQgVAKgaACIgUABIgHAAg");
	this.shape_118.setTransform(94.3412,72.43);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(255,255,255,0.263)").s().p("AAAE/QgWgCgkgGQglgGgYgHQghgIgZgMIgFgCQgbgOgagUQgWgRgegdQgUgUgLgQQgLgOgHgPIgGgMQgQgnACg3IAAAAQABg2APgyQAEgQAGgPQANgjATgcQAagpAigYIAPgKQAXgMAjgOQAhgNAhgJQAcgJAWgFIAjgGQArgGAlAGIAEAAQAQABAZAMQAXAIATAGIAcAIIAhAJQAiANAZAaIAKALQARAUANAfIABACQATAvADAPIALAoQAFATACAPIABAIQAGAugOAjQgOAggdAXIgGAEQgSAMgXAJIgRAGQgMAEgGAEQgEADgCAEIgCADQgWAdgPAXIgYAiIgQASQgNAPgNAKQgYATgdAHQgPAEgSABIgIAAIgRgBg");
	this.shape_119.setTransform(91.5564,72.6083);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(255,255,255,0.416)").s().p("AAcGtQgZgBgzgHQgzgHgcgGQgsgIgggNIgHgDQgigPgkgaQgagUgrgmQgdgagPgSQgPgSgLgSIgIgOQgWguAChMIAAgBQABhEAOhDIAKgqQAOgvATgmQAcg6ApgiIASgOQAbgTAsgWQAqgVAogQQAigOAcgKQAYgIAVgFQA3gOAyABIAGAAQAZgBAeAHQAdAGAbAIIAjALQAVAHAVAJQApAVAeAjIAMAPQATAaARArIABADQAZBGACAIIAUAzQAJAXAFATIACAJQARA9gRAtQgOAqgoAcIgJAGQgXAPgfAJIgWAGQgRADgHAGQgEAEgDAHIgCADQgVAogQAkIgaAyIgPAcQgNAYgOAPQgaAigjAOQgTAIgWACIgYABIgJAAg");
	this.shape_120.setTransform(87.6327,72.6188);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(255,255,255,0.522)").s().p("AAuH6QgagBg9gIQg9gHgfgFQg0gIglgPIgIgDQgngRgrgeQgcgVg1gsQgjgegQgTQgTgUgNgUIgKgRQgZgzABhaIAAAAQABhRAOhMIAKgxQANg3AUgtQAehGAsgpQAJgJAMgJQAfgXAxgbQAxgcAsgUQAmgSAhgMQAagLAZgHQA/gUA7gCIAHgBQAfgCAhAFQAiAFAhAIQATAGAUAHQAZAKAXAMQAvAaAhApIANARQAUAfATAyIABAEQAfBVAAAEIAaA6QAMAcAHAUIAEAKQAXBIgRAzQgQAwgvAhIgKAGQgcARgjAJIgaAGQgUADgIAHQgFAEgDAKIgCAEIgmBbIgZA9IgPAjQgPAegNAUQgdArgmATQgVAKgaAEQgPACgQAAIgHAAg");
	this.shape_121.setTransform(85.0094,72.4869);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(255,255,255,0.576)").s().p("AglIYQhCgHghgFQg4gIgngPIgJgEQgqgRgtggQgegWg5gvQgmgggSgUQgVgVgOgWIgKgRQgcg2ABhhIAAgBQABhVAOhSIAKg1QANg8AUgwQAfhLAvguIAWgTQAggZA0geQA1gfAtgWQApgUAjgOQAbgMAcgIQBEgWA+gFIAHgBQAjgCAjADQAkAEAjAJQAVAGAWAIQAaALAYANQAyAdAiAsIAOATQAVAhAUA2IABAEIAiBfIAcA+QAOAdAIAVIAEALQAaBNgRA2QgQA0g0AjIgKAGQgfATglAJQgNAEgPACQgVADgIAGQgFAGgEAKIgCAFIgmBjIgaBDQgHAVgIAQQgOAjgOAVQgdAwgpAVQgVAMgcAEQgTADgWAAQgbAAhCgJg");
	this.shape_122.setTransform(83.6463,72.4386);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(255,255,255,0.596)").s().p("AglInQhDgHghgFQg6gJgogPIgJgDQgrgSgvghQgegWg7gwQgnghgTgUQgVgWgOgWIgLgSQgcg2ABhkIAAgBQABhXANhUIAKg2QAOg+AUgxQAfhOAwguQAJgKANgKQAhgaA1ggQA2gfAugXQAqgVAjgPQAdgLAbgJQBGgYBAgFIAIgBQAkgDAjADQAlAEAkAJQAWAGAVAJQAcALAYAOQAzAeAiAsIAOAUQAWAiAUA4IABAEIAjBhIAdA/QAOAeAJAVIAEALQAcBPgSA4QgQA1g1AjIgKAHQggATgmAJQgOAEgPACQgWADgIAHQgFAFgEAKIgCAFIgmBnIgZBFIgPAnQgPAjgNAWQgeAygqAWQgWAMgcAFQgUADgWAAQgbAAhFgJg");
	this.shape_123.setTransform(83.1755,72.3932);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(255,255,255,0.6)").s().p("AglIoQhDgHgigFQg5gIgpgPQgvgSg0gkQgegWg7gxQgoghgSgUQgfgfgQgfQgcg3ABhkQABh1AXhtQAiigBPhNQAigiBLgrQBng8BKgfQBlgqBZgIQBogJBdAkQBkAoAzBQQAWAjAVA7IAjBhIAdA/QATAnAJAYQAcBPgSA4QgQA1g1AkQgwAgg+AIQgWADgIAHQgHAHgEAOIhACsQgXBAgUAhQgeAygpAWQglAUg3AAQgcAAhFgJg");
	this.shape_124.setTransform(83.1005,72.4019);
	this.shape_124._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_115}]},28).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_124}]},1).to({state:[]},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.shape_124).wait(37).to({_off:false},0).wait(16).to({_off:true},1).wait(16));

	// Capa_7
	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(255,255,255,0.078)").s().p("AgFC/QgpgBglgVQglgVgXgiQgMgRgKgZQgTgrAAgdQAAgVAIgeQAJgbAFgMQAWgwAwgaQAlgTA4gGQAqgDAZAGQAbAHAXAQQAXARAOAYQAPAZAHAgQAKAmgCAcQgDAdgPAlQgPAkgQAUQgYAggnATQgkARgmAAIgEAAg");
	this.shape_125.setTransform(242.0424,44.0776);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(255,255,255,0.255)").s().p("AgeD0Qg+gCgygaIgHgFQgZgPgfgdQgOgOgKgMIgFgFQgNgQgJgSIgIgRQgLgdgGgiQgEgYABgTIAAgBQACgXAIgUQAFgMAHgMIAKgMQALgRAOgMIADgDQA1gvBAgbQAogRAtgJQAXgFAYgDQArgEAgADIAVADQAoAIAgAWQAKAHAJAJQAVASAOAaQAJARAIAUQAJAXAEAYQAKArgDAlIgBAPQgEAYgLAZQgHAUgMASIgMATQgWAcgcASIgOAJQgfAVgzAOIgIACQgeAIgWAEQgdAEgaAAIgGAAg");
	this.shape_126.setTransform(244.2746,41.3673);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(255,255,255,0.384)").s().p("AgwEdIgBAAQhNgDg7gfIgKgGQgcgQgpglIgegeIgGgHQgRgUgLgVQgFgJgEgKQgOgigGgsQgEgfACgXIAAgBQACgdAMgYQAHgNAMgNIAOgOQAOgQAXgMIAEgDQBMgwBNgdQAzgTA0gMQAdgGAcgEQA1gGAoADIAZAEQAzAJAnAbQAMAIALALQAZAXARAgQAMAVAJAZQALAdAGAdQAKA0gEAuIgDASQgGAegNAdQgLAZgPAVIgSAVQgcAegoATIgTAKQgmAShCAOIgLACQgnAHgZAEQghAEgeAAIgMAAg");
	this.shape_127.setTransform(245.9592,39.3221);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(255,255,255,0.478)").s().p("Ag+E6IAAAAQhZgDhCgjIgLgGQgegSgwgrQgVgTgNgNIgHgIQgVgWgMgXQgGgKgEgMQgPglgGg0QgEgjADgaIAAgBQADgiAOgZQAIgPAPgOQAHgIAKgHQARgOAdgOIAEgDQBdgxBWgeQA8gVA4gNQAhgHAggEQA7gIAvAEIAcAEQA6AKArAeQAOAJANAMQAbAaAVAlQANAYAKAcQAMAhAHAhQALA6gGA1IgDAVQgHAigQAgQgNAcgSAWQgKANgLAKQghAhgwAUIgXAJQgrARhOAMIgNACQguAIgaADQgnAEghAAIgOAAg");
	this.shape_128.setTransform(247.1693,37.8417);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(255,255,255,0.541)").s().p("AhGFNIgBAAQhggDhHglIgMgHQgfgTg1guIglgjIgIgIQgWgYgOgYQgGgLgFgMQgPgogGg5QgEgmADgbIAAgCQADglAQgbQAKgQAQgOQAIgIALgHQATgOAhgPIAFgDQBngxBdgfQBBgWA8gNQAkgJAigEQA/gJAzAEQAPABAPADQA/ALAvAgQAPAKANANQAeAcAWAoQAOAaALAeQANAkAHAkQAMA+gHA6IgEAWQgIAlgRAiQgOAegUAXQgLAOgNALQgkAhg2AVIgZAJQguAPhWANIgOACQgyAHgcADQgnAEgiAAIgTAAg");
	this.shape_129.setTransform(247.9763,36.8558);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(255,255,255,0.58)").s().p("AhMFZIgBAAQhlgDhJgnIgMgHQgggTg4gxQgYgVgPgPIgIgIQgYgagOgZQgGgKgFgOQgQgogGg8QgEgpADgcIAAgCQADgnARgbQALgRARgOQAJgIALgIQAVgNAigQIAGgDQBugwBhghQBEgWA+gOQAmgJAjgFQBCgJA1AEQAQACAQADQBBALAxAhQAQALAOANQAfAdAXAqQAOAbAMAgQAOAmAHAlQAMBBgIA8IgDAXQgJAngSAjQgPAfgVAYQgMAOgNAMQgnAig4AVIgbAJQgxAPhaAMIgPACQg1AHgdADQgsAEglAAIgPAAg");
	this.shape_130.setTransform(248.4668,36.261);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(255,255,255,0.6)").s().p("AhPFfIgBAAQhngDhKgoIgNgHQghgTg5gyIgnglIgJgIQgYgagPgaQgGgLgFgNQgQgpgHg+QgEgqADgcIAAgCQAEgoASgcQAKgRASgPQAKgIALgHQAVgOAkgPIAGgDQBxgxBjggQBGgXA/gPQAngJAkgFQBDgJA2AEQARACAQADQBDALAyAiQAPALAPANQAgAeAXArQAPAcAMAgQAOAnAHAmQANBBgIA+IgEAYQgJAogTAkQgPAfgWAZQgMAOgOAMQgnAig7AVIgbAJQgyAPhcAMIgQACQg2AHgeADQgsAEgmAAIgQAAg");
	this.shape_131.setTransform(248.7131,35.961);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(255,255,255,0.608)").s().p("AhQFhIgBAAQhogDhLgnIgNgIQgggTg6gzIgogkIgIgJQgZgagPgaQgGgLgFgNQgQgqgHg+QgEgqADgdIAAgCQAEgoASgcQALgRASgPQAJgIAMgHQAVgOAkgPIAGgDQBzgxBjghQBHgXBAgOQAngJAjgFQBEgKA3AEQARACAQADQBDALAzAiQAQALAOAOQAgAeAYAsQAPAbAMAhQAOAnAHAmQANBCgIA/IgEAYQgJAogTAkQgQAggVAZQgNAOgOAMQgoAig7AVIgcAJQgyAPhdAMIgPACQg3AHgeADQgqADgkAAIgVAAg");
	this.shape_132.setTransform(248.8287,35.8475);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(255,255,255,0.608)").s().p("AhQFhQhxgDhQgvQghgTg5gzQghgdgQgQQgZgagOgaQgagtgIhTQgEgsADgdQAEgoARgcQARgbAigVQAWgOApgSQDEhTCZgkQBxgaBUAHQBwAKBGBAQA0AxAeBWQAoBsgOBiQgHA2gYAuQgZAxgnAiQgxAqhOAWQgyAPheAMQhCAJgiADQgqAEgkAAIgVgBg");
	this.shape_133.setTransform(248.8326,35.8192);
	this.shape_133._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_125}]},29).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_133}]},1).to({state:[]},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.shape_133).wait(37).to({_off:false},0).wait(16).to({_off:true},1).wait(16));

	// Capa_6
	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(255,255,255,0)").s().p("AhgCmQgcgOgUghQgMgTgOgqQgJgdgEgTQgGgaACgXQADgfAQgbQAQgcAagRQAegUAugHQAbgEA3gBQAVgBAMACQASABAOAGQAWAKAWAcQAmAxAIA3QAEAcgHAdQgGAdgQAXQgXAhgsAWQggAQgyAMQggAHgXABIgFAAQgcAAgVgKg");
	this.shape_134.setTransform(173.8745,83.8979);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(255,255,255,0.004)").s().p("AhhCoQgcgMgVgiQgMgUgOgrIgPgyQgHgbAEgXQAEggAQgbQAQgcAbgQQAggUAtgHQAcgFA3gBQAWAAAMABQASACAOAGQAWALAYAaQAoAwAGA5QAEAegHAdQgGAegRAYQgXAhgsAWQgiAPgyAMQggAJgXAAIgGAAQgcAAgWgKg");
	this.shape_135.setTransform(173.7779,83.9231);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(255,255,255,0.027)").s().p("AgpDDQgkgCgdgEQghgHgWgpQgPgcgLguQgHghgRgaQgTghANgdQAOglARgcQARgcAkgLIBWgbQAegLA5ACIAmAEQASACAPAJIA6AgQAzAoADBDQgBApgJAgQgJAigRAfQgXAogzARQgqAMgyARQgcALgZAAIgJAAg");
	this.shape_136.setTransform(173.2567,84.0785);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(255,255,255,0.09)").s().p("AjMDAQgVgxgEg3QgBgrgxgqQgxgvAngtQAog0AUgdQAUgdA7AEQA+ACAygdQAhgbBAAIIAxAMQATAEARAOQAZARBCACQBQAUgIBfQgLBIgQApIghBbQgXA6hHAGQg+AAg0AfQglAbgpgJQgxgJgrAMIgMABQgmAAgXg0g");
	this.shape_137.setTransform(171.9348,84.5467);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(255,255,255,0.212)").s().p("AkiEYQgghaAIhIQALg/hthHQhvhNBbhMQBchRAZgfQAZggBoAjQBrAgA2g8QApg6BPAVIBGAcQATAGAXAYQAcAbB+ghQCJgUgeCWQgfCEgcA5QgbA7gUBWQgZBchsgQQhlgUg3A4QgtA2hDgWQhJgWhFAqQgVAMgSAAQgrAAgbhFg");
	this.shape_138.setTransform(169.5065,86.5234);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(255,255,255,0.396)").s().p("AmgGXQgwiVAahhQAchcjHh0QjHh4Cmh5QCnh8AggiQAhgiCrBNQCsBNA9hoQA2hnBhAnQBWAoARAJQAUAKAeAoQAhAqDWhVQDchOg8DlQg/DcgtBTQgtBUgXCLQgZCOikgxQifgzg8BfQg2BdhqgpQhtgphsBYQgnAfgfAAQg5AAghhjg");
	this.shape_139.setTransform(166.0527,89.6184);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(255,255,255,0.518)").s().p("An1HuQg8i+AmhyQAohwkDiTQkEiUDZiYQDaiZAmgkQAmglDYBsQDZBrBAiHQBAiGBvA0QBpA0ATANQAUAMAjAzQAkAzETh4QEVh2hSEcQhTEYg5BjQg5BmgZCvQgbCwjIhHQjHhHhAB4Qg9B4iDg2QiGg2iGB2QgzAtgoAAQhCAAgmh3g");
	this.shape_140.setTransform(163.683,91.7434);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(255,255,255,0.58)").s().p("AoiIaQhCjSAuh7QAth6kiijQkjijD0ioQD0ioAoglQApgmDvB7QDwB6BDiVQBEiXB1A7QB0A6AUAOQAVAOAlA4QAmA5EyiLQEyiKhdE4QheE2g/BtQg/BugbDBQgbDCjchSQjbhShBCGQhACFiRg8QiTg9iTCGQg5A0gtAAQhHAAgpiCg");
	this.shape_141.setTransform(162.4697,92.8298);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(255,255,255,0.604)").s().p("AoyIrQhEjbAwh+QAvh+ktioQkvipD+itQD9itAqgmQApgmD4CAQD4CABFicQBFicB4A9QB3A9AVAPQAUAOAnA6QAmA6E9iRQE9iRhgFCQhiFBhCBwQhBBxgbDJQgbDIjjhWQjjhWhCCLQhBCKiWg/QiXhAiZCNQg7A2gvAAQhJAAgpiFg");
	this.shape_142.setTransform(162.047,93.2355);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(255,255,255,0.608)").s().p("Ao0ItQhFjbAwh/QAwh+kvipQkwiqD/iuQD/iuApgmQAqgmD5CBQD5CBBFidQBFidB5A9QB4A+AUAOQAVAPAmA6QAnA7E/iTQE+iShhFDQhiFEhCBwQhCBygbDJQgbDJjkhXQjkhWhCCLQhCCMiWhAQiYhAiZCNQg8A3gvAAQhJAAgpiGg");
	this.shape_143.setTransform(161.9663,93.2895);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(255,255,255,0.69)").s().p("AorIQQhIi6Awh7QAwh7kUinQkWioDsikQDrikAwgaQAwgbDsBpQDrBqBIiJQBJiKB0AzQB0AyASASQASASAqAuQApAvEjh+QEjh+hhE0QhhEzguBnQgvBoghCyQghCxjWg6QjXg6hHBnQhIBmiRgcQiSgciVBqQg2AmgrAAQhOAAguh4g");
	this.shape_144.setTransform(161.432,92.1628);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(255,255,255,0.741)").s().p("AokH9QhLilAwh4QAwh5kDilQkDinDeidQDeidA0gTQA1gTDiBaQDiBZBLh8QBLh8ByArQBxArAQAUQARAUArAnQAsAmEQhwQEQhwhgEpIiCGJQghBiglCiQglChjNgnQjOgnhMBPQhMBNiNgEQiOgEiSBSQgxAbgoAAQhSAAgxhug");
	this.shape_145.setTransform(161.0655,91.423);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(255,255,255,0.776)").s().p("AogHxQhMiXAwh3QAwh3j4ilQj5ilDWiZQDWiZA3gPQA4gODcBQQDcBQBMh0QBNh1BwAnQBwAmAPAWQAPAWAtAhQAtAiEFhoQEFhohgEiQhhEjgZBdIhBD2QgnCXjIgbQjIgbhOA/QhPA/iKALQiMAJiRBEQgsAVgmAAQhVAAg0hpg");
	this.shape_146.setTransform(160.8666,90.9645);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(255,255,255,0.792)").s().p("AoeHrQhNiRAwh2QAwh2jyikQjzimDSiXQDRiWA5gMQA5gMDaBLQDZBLBMhwQBOhxBvAlQBvAkAPAWQAOAXAuAfQAtAfEAhkQD/hjhgEfQhhEegVBcQgVBcgoCTQgpCSjFgVQjGgVhPA3QhQA4iJASQiLARiQA8QgqASgkAAQhXAAg2hmg");
	this.shape_147.setTransform(160.7453,90.7581);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(255,255,255,0.8)").s().p("AodHpQhNiOAwh2QAwh2jxikQjwilDQiWQDQiXA5gLQA5gLDZBJQDYBKBNhvQBOhvBvAkQBuAjAPAXQAOAWAuAfQAuAeD9hiQD9hihgEdQhhEegTBbQgUBbgpCRQgoCQjFgSQjEgThQA1QhRA0iIAVQiKAUiQA5QgpARgkAAQhYAAg2hlg");
	this.shape_148.setTransform(160.699,90.6735);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(255,255,255,0.8)").s().p("AoeHoQhMiNAwh2QAwh2jxikQjwilDQiWQDQiWA5gLQA6gLDYBJQDYBJBNhvQBOhuBvAjQBuAjAPAXQAOAXAuAeQAuAeD8hiQD9hihgEeQhgEegUBaQgTBbgpCRQgpCQjEgTQjEgShRA0QhQA0iJAVQiJAViQA5QgpAQgkAAQhYAAg3hlg");
	this.shape_149.setTransform(160.6829,90.6555);
	this.shape_149._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_134}]},24).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[]},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.shape_149).wait(39).to({_off:false},0).wait(14).to({_off:true},1).wait(16));

	// Capa_5
	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(255,255,255,0.086)").s().p("Ag0E5QgegKgYgYQgngngUhJQgRg8AJgrQAIghAhgwIARgaQAIgPADgNQADgKAAgOIAAgYQgBguANgmQAOgsAcgdQAfgfAqgJQAugJAjAWQAkAVARAvQANAgADA2QAEBDgIBMQgRCbg5BcQgmA/gzANQgLADgNAAQgSAAgTgHg");
	this.shape_150.setTransform(169.883,87.6442);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(255,255,255,0.161)").s().p("AgdFcQgUgBgTgFQgLgEgLgFQgLgGgKgIQgagRgVgeQgKgNgJgTQgJgPgFgRQgOgqAGgoIAAgDQAHgqAhg1IABgBIAUgfIAIgMIAIgUQAFgLADgPIABgEQABgOADgIQAHgpAOglIAGgOIAGgPIAJgbQAKgZANgWIAJgOQAMgUAPgKQAKgKAMgHIAKgFQAggRAfAHIAGABQAfAIAZAcIAEAEQASAQAMAkIAIAYIADAOQAEASACAUQADAmgEAsIgDAfQgHA/gPA4QgFAWgLAgQgLAfgKAaQgMAfgNAfIgDAFQgYAtgdAjQgMALgNAHQgaAQgcAAIgGAAg");
	this.shape_151.setTransform(168.8019,88.85);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(255,255,255,0.231)").s().p("AhJGDQgNgCgNgFQghgIgdgbQgPgNgNgRIAAAAQgNgRgIgSQgTgsAFgyIAAgBQAFg0Ajg8IABgBQAOgXAKgOIAIgOIAMgVQAGgMAGgRIACgDQAEgPAEgKQAOgrAVgpIAIgPIAIgRQAFgOADgSQAIgeAJgbIAHgRQAIgaAMgOQAIgNAIgKIAIgJQAageAfgFIAGgBQAhgFAjARIAFADQAbAJATAhQAIAKAHAPIAFANQAIAVADAXQAGApgFA1IgDAiQgIBIgTBAQgFAUgQAsIgXBBIgYBJIgDAGQgUAwgbAzQgLAPgMALQgYAYgdAIIgGACQgVAGgVAAQgMAAgNgCg");
	this.shape_152.setTransform(167.7322,89.9694);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(255,255,255,0.306)").s().p("AhWG6QgpAAgmgXQgSgLgRgRIgBgBQgRgQgLgUQgYgvADg7IAAgBQAEg+AlhBIABgBQAOgZANgSIAKgPIAPgYIARggIACgDQAGgPAGgLQAWguAbgsIAKgRIAJgTQAGgPACgWQAFgiAHggIAEgUQAEghAJgRQAFgRAHgOIAGgMQASgrAfgRIAHgDQAhgSAuAHIAGABQAkABAbAfQALAKAJAPIAIAPQALAWAFAaQAJAsgFA+IgEAmQgKBRgWBJQgFASgUA1IgaBKQgMAogLAsIgDAHIgpB2QgKATgLAOQgXAigdAQIgHAEQgUAMgYAGQgOAEgOAAIgPABIgPgBg");
	this.shape_153.setTransform(166.6457,90.9745);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(255,255,255,0.38)").s().p("AioHuQgYgKgUgRIgBAAQgVgRgOgWQgegxADhEIAAgBQAChIAmhGIABgBQAPgaAPgWIAMgRIASgaIAVgiIADgFIARgcQAdgxAhgvIAMgSQAIgMADgIQAGgRABgaIAGhLIACgYQABgnAFgTQACgXAFgRIADgPQANg3AfgeIAGgFQAkgfA3gDIAIgBQAsgGAiAcQAPAKAMAPIAKAQQAPAYAHAdQALAwgFBGQgCAVgDAVQgLBZgaBTQgEAPgZBAQgRAvgLAjQgNAsgKAyIgCAIQgPA3gUBTQgJAWgKATQgVAqgeAZIgHAGQgWATgaAMQgOAGgQAEQgRAFgSABQgOACgNAAQgjAAgggNg");
	this.shape_154.setTransform(165.5819,91.886);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(255,255,255,0.455)").s().p("AisI5QgbgIgZgRIAAAAQgagRgRgYQgjg0ABhNIAAgBQABhRAohLIABgCQAPgcASgaIANgSIAVgcIAbglIADgEIAWgfQAkgzAngzIAOgUQAJgMADgKQAHgRAAgeIABhUIgBgcQgDgtACgXQgBgaACgVIACgSQAGhFAfgpIAHgHQAkgsBBgOIAKgDQA1gNAqAaQASAJAPAQIAMARQASAZAJAhQAOAzgGBOIgFAvQgMBhgeBbQgEAOgdBLQgUA0gLAmQgNAvgJA6IgCAJQgMA6gRBjQgIAagJAWQgUAzgdAhIgHAIQgXAZgeASQgPAKgRAHQgTAIgUAFQgdAHgbAAQgcAAgbgHg");
	this.shape_155.setTransform(164.487,92.743);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(255,255,255,0.525)").s().p("AivKDQgggGgcgQIgBgBQgdgSgVgZQgog2AAhXQgBhbAqhRIABgCQAPgdAWgeIAOgTIAYgfIAfgnIAEgFIAaghIBZhsIAQgVQAKgOAEgKQAGgSAAgiQgBgwgEguIgDgfQgHgzgBgaQgEgfgBgYIAAgWQAAhRAhg1IAGgKQAlg4BLgZIALgEQA+gVAxAYQAWAIARARIAPARQAWAcALAjQAQA2gHBYQgBAZgEAZQgNBqgjBkQgDALghBWQgWA6gLAoQgPA0gHBAIgBAKIgYCxQgGAdgJAbQgSA7geApIgHAKQgYAgggAYQgRANgSAKQgVAMgXAIQgrAPgpAAQgVAAgVgEg");
	this.shape_156.setTransform(163.379,93.6573);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(255,255,255,0.6)").s().p("AiyLOQglgEghgSQghgRgXgcQgvg4gBhfQgBhlArhXQAVgqAjgtQAWgdAugzICFiWQAbgdAGgTQAHgTgCglQgEhGgLhEIgQhXQgJgzgCglQgHhnAnhEQAnhFBVgkQBPgiA9AWQAjAMAbAgQAZAdANAmQATA6gHBgQgMCPgvCGIgoBqQgZA/gLArQgQA8gGBOIgSDEQgQBvgrBGQgbAtgoAjQgnAjgvAVQg5AZg4AAQgOAAgPgCg");
	this.shape_157.setTransform(162.2767,94.5501);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(255,255,255,0.604)").s().p("AivLDIgDAAQgagFgYgLIgQgIQgVgLgRgPQgKgJgJgKQgNgQgJgSQgOgagHghQgGgcAAghQgChjArhVQAUgpAjgtQAIgLAMgPIAug1ICDiSQAagdAHgSIADgLQADgSgBgbQgEhEgKhCIgPhVQgHgpgDgfIAAgOQgGhkAnhCQAmhEBTgjIAEgCQAbgLAagFQAfgGAbAFQAOACANAFIARAHQAVALARASIAIAJQAZAdANAoIABAGQAMAogBA3QAAAZgCAdIgFAqIgEAbIgFAhIgKA/IgNA9IgPA1QgCAJgcBMIgHAWIgQAtQgMAkgHAbIgBADQgKAogIAvIgHAwIgFAnIgIBCIgJA/IgDAZQgDAUgFASQgIAfgJAbQgQAsgWAhQgLASgNAQQgSAVgXASQgSAPgTANQgWANgYAKQgXAIgWAFQgVAFgVABIgKAAQgVAAgUgDg");
	this.shape_158.setTransform(162.3735,93.5886);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(255,255,255,0.616)").s().p("Ah3KrQgYgDgXgGIgDgBQgYgIgXgNIgQgJQgUgNgTgQQgKgJgJgLQgPgQgKgRQgQgbgIgiQgHgeAAgiQgChdAohRQATgnAhgrIATgYQASgWAZgcIB8iLQAZgbAHgRIADgKQADgQAAgaQgCg/gIg+QgJg0gDgaQgGgmgBgdIgBgMQgDhdAlg9QAng+BNghIAEgCQAagKAegGQAhgHAcAFQAOACAOAFIASAIQAVAMASATIAIAKQAZAfALAqIACAHQAKApgDA6QgBAagEAeIgGArIgEAdQgDAQgBARIgDBAIgGA9IgJA1QADANgYBKIgFAWIgOAwIgTBCIgBAEIgYBYIgMAvIgIAmQgJAdgGAjQgIAdgIAfIgFAYIgNAjQgLAbgMAWQgRAmgVAYQgLANgNAMQgRARgUANQgQALgTAIQgTAKgWAEQgUAFgUABIgWABIgQAAg");
	this.shape_159.setTransform(162.6973,90.7984);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(255,255,255,0.639)").s().p("AgwKDQgRAAgQgFQgQgDgPgHIgogTIgCgBQgVgOgWgQIgPgLQgVgOgUgSQgLgKgKgKQgQgSgMgRQgSgdgKgiQgKgggBgkQgBhVAjhKQARgjAdgnIASgWIAmguIBxh9QAXgYAHgPIACgJQAEgOAAgXQABg3gDg2QgGgtgBgXQgDghgBgYIABgLQABhQAjg1QAmg1BEgdIAEgBQAYgKAlgHQAkgIAdAFQAQACAPAGIASAJQAXAOARAVIAJALQAYAiAKAuIABAHQAIAugFA8QgDAbgGAhQgEAWgFAXQgEAQgCAOQgCASACASQABAgAGAhQAAAcAHAhQACAaAAAbQAKASgRBHIgDAYQgEAbgFAZQgJAogKAgIgBADQgOAsgUAuQgIAXgMAYIgPAkQgQAegKAfQgOAcgMAcIgLAVQgJAPgKAOQgRAWgPAOQgVAagVAJQgKAHgLAFQgPAIgRAEQgOAFgOABQgHACgIAAQgKAAgKgDg");
	this.shape_160.setTransform(163.28,86.9172);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(255,255,255,0.667)").s().p("AAHJrQgIgCgJgFQgMgDgMgIQgLgFgKgJQgNgFgMgQQgMgIgLgOQgLgKgLgNQgNgUgQgOIgCgCQgQgWgVgUIgOgOIgrglIgXgVQgUgTgMgSQgXgegNgkQgNgjgBgnQgBhIAdhAQAOgfAYggIAPgTIAggoQAwg3Ayg0QATgTAHgNIACgHQAEgMACgSQAFgsACgqQgCgkADgSQgBgZACgTIABgJQAHg+AhgpQAmgqA3gWIADgBQAWgIAugKQAogJAfAFQARADARAHQAKAEAJAGQAZAQASAYIAIANQAZAmAGAzIABAIQAGAzgKBBQgFAdgJAjQgGAYgIAZQgGASgBAOQgCATAGAUQAHAhAPAhQAHAbASAiQALAaAHAbQATAZgGBFQABAMgBANQAAAegDAcQgGAsgNAkIgBADQgRAvgeAuQgNAVgTAZIgYAhQgbAegOAbIgrAxIgRARQgPAMgOAJQgZAOgUAEQgMAFgLAAQgMAAgLgHg");
	this.shape_161.setTransform(166.3026,84.7057);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(255,255,255,0.702)").s().p("AgaJ5QgigIgSgmQgIgMgGgRQgIgTgIgXIgLgkQgHgQgFgeQgGgSgFgZIgLgnQgGgfgKgUIgBgDQgKgggUgaIgOgRQgTgUgagXIgZgWQgYgWgOgRQgcgfgQgnQgQgngCgpQgBg5AVgzQALgaASgaIALgQIAZggQAlgtApgnQAPgOAHgKIACgFQAFgIADgMIATg8QADgYAHgMQADgRAEgMIACgGQAQgoAcgbQAlgbApgPIACgBQAUgGA3gNQAugKAgAFQAUADASAJQALAFALAHQAaASATAdIAJAOQAXArAEA5IABAJQACA5gQBGQgHAggNAnIgSA0QgJAVgBAPQgBAUAKAWQAOAiAaAiQAPAZAgAiQAVAbAPAcQAgAjAGBAIAFAcQAFAggCAhQgCAxgQAnIgCAEQgUAygrAuQgRAUgdAYIgjAfQgpAegTAVQgiAYgcASQgMAHgNAFQgUAIgVADQgLACgLAAQgUAAgQgHg");
	this.shape_162.setTransform(171.2639,85.8777);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("rgba(255,255,255,0.729)").s().p("AgWKTQgrgDgdgUQgngZgRg6QgHgWgEgbQgGgegCgjIgEg3QgCgZAAgqQgBgaAAghIgBg1QAAgpgFgYIgBgFQgGgogSgeQgGgKgHgJQgTgYgdgYIgbgXQgbgXgPgRQggghgTgpQgUgqgBgsQgCgtAQgpQAIgVANgVIAIgNQAIgMALgNQAcgkAigdIATgRIABgDIALgOQANgUAPgRQAHgOAKgHQAFgKAIgHIACgDQAWgXAZgPQAlgPAcgJIACAAIBSgUQAygMAiAFQAVAEAUAKQAMAFALAIQAcAVATAfIAJARQAXAuABA/IABAKQAAA+gVBKQgJAigQAqIgXA3QgLAYAAAPQgBAUAOAYQATAjAkAjQAVAWArAkQAeAcAWAdQAqApAQA9IAJAeQAIAiABAkQAAA1gSArIgCAFQgYA1g1AtQgWATgkAYIgsAdQgzAdgYASQgrAWgjANQgQAFgPADQgUAEgTAAIgLgBg");
	this.shape_163.setTransform(175.494,87.6309);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("rgba(255,255,255,0.753)").s().p("Ag+KhQgxgJgggcQgrgkgQhKQgHgcgCghQgDgnAAgsQAAghACgjQABggAFgyIAGhIIAFg+QAEgwgBgcIgBgFQgCgsgSgiQgFgLgHgKQgTgZgegbIgdgXQgdgZgQgRQgjgigVgqQgWgsgCguQgCglALghQAGgSAKgRIAGgLIAOgVQAXgeAcgVIARgMIABgCIAMgJQAQgMATgJQAKgHAMgEQAIgEAJgDIADgCQAagKAXgGIA3gMIACAAIBYgUQA0gNAjAFQAXAEAVALQAMAGALAIQAeAXATAiIAJARQAXAyAABCIgBAKQgBBCgYBOQgLAjgSArQgMAcgOAfQgMAZgBAOQAAAWARAZQAWAjArAkQAZAVA1AlQAjAcAcAdQAwAvAXA6QAHAQAFAPQAMAkABAmQADA5gVAtIgCAEQgaA4g9AtQgYASgpAYIgzAbIhWAsQgxAVgoAJQgTAEgQABIgVABQgTAAgSgCg");
	this.shape_164.setTransform(178.5296,89.0502);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("rgba(255,255,255,0.765)").s().p("AhVKoQg1gMgjghQgsgqgQhTQgGgggCgmQgCgrADgyQABgkAEgoQADgjAHg4IALhPIAJhEQAGgzABgdIAAgGQgBgxgRgjQgFgMgHgLQgSgagggcIgegYQgegZgRgQQglgkgVgqQgYgugCgvQgCgfAJgdQAFgQAHgPIAFgJIAMgTQASgaAZgRIAQgJIABgBIANgFQARgJAWgEQAMgDANgBIATgCIAEAAIAygEQAlgCAMgCIACAAQAPgCBMgTQA2gNAkAFQAXAEAWALQAMAHAMAJQAeAXAUAjIAJASQAXAzgCBFIAAALQgDBEgaBPQgMAkgUAtIgbA8QgNAZAAAQQAAAWASAZQAZAkAvAjQAcAVA5AmQAnAcAeAdQA1AyAbA5QAIAQAGAQQANAlACAoQAEA5gWAvIgCAFQgbA4hBAuQgaASgtAXIg3AaIhcAqQg1AUgrAIQgTADgTAAIgIAAQgcAAgZgFg");
	this.shape_165.setTransform(180.3445,89.9771);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(255,255,255,0.769)").s().p("AheKqQg2gNgjgiQg/g+gFiNQgDhPALhhQAGg7ARhzIALhHQAIg5AAgfQAAgygQgkQgRglgugoQg1grgYgXQgmgkgWgrQgYgugCgvQgDgzAYgsQAZgvAsgUQAlgRA+ABQBZABAPgCQAOgCBOgTQA3gOAjAGQAlAGAhAZQAfAYATAjQAiA9gEBZQgDBFgbBQQgUA5goBVQgNAagBAPQAAAWATAaQAaAkAwAjQAdAVA7AmQBtBMAtBZQAbA0AEA5QAEA9gYAyQgcA5hDAtQgoAbhYAoQhBAegeALQg2AUgsAHQgVADgWAAQgeAAgdgHg");
	this.shape_166.setTransform(180.9668,90.2865);
	this.shape_166._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_150}]},19).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_166}]},1).to({state:[]},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.shape_166).wait(35).to({_off:false},0).wait(18).to({_off:true},1).wait(16));

	// forma_mas_c12
	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("rgba(255,255,255,0.047)").s().p("AhgC0QgkgFglgNQgvgQgWgVQgZgXgTg3QgSgwgCgkQgCgyAXggQAggtBSgNQBKgLBIAMQA5AJAyAYQAUAKAdASIAoAYQAqAZAOALQAfAWARAZQAWAgACAtQABAggMAVQgOAXgkAQQgmAQgsAEQgTACgdgBIgxgBIhPACIgTAAQgkAAgZgDg");
	this.shape_167.setTransform(177.0918,81.2036);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(255,255,255,0.106)").s().p("AhzDRIgIAAQgkgFgigMIgDgBQgagKgSgOQgRgLgLgMIgMgQQgSgdgOgtQgSg2ABgoQAAgjAMgdQAGgPAJgNQALgQAPgNQAagUAmgNQAQgFARgDQATgEAUgCQAdgCAgABQAdABAfAFIAEAAQAuAGAmAOQASAGASAHQAWAJAaAPIAHAEIAuAaQAhATASAOIALAIQATAQANASQAJALAGAMQAHAOAEAOQAGAagEAdIgBAGQgEAcgPATIgIAIQgTASgfANQgUAIgVAFQgSAEgNABIgTADIgMACIgkAGIgDABQgQABgOAEIgUADQggAIggAEIgUACQgaACgYAAQgVAAgSgCg");
	this.shape_168.setTransform(177.2043,82.4424);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("rgba(255,255,255,0.165)").s().p("AiGDtIgJgBQgpgEgjgOIgDgBQgbgLgUgSQgRgMgLgQIgMgRQgTgjgOgvQgRg8ADgtQACgkAOghQAHgRAJgOQAMgSAQgPQAcgYApgPQARgGATgEQAVgFAVgDQAggDAjABQAeABAlAFIAEABQA1AHAoANQAUAGAUAHQAZAJAdAPIAIAEQAaANAYAOQAkAVAUAQIALAKQAUASANAVQAJANAFAOQAHAPACAQQADAcgJAeIgCAGQgIAcgTATIgKAIQgWASgiANQgWAIgXAFIgiAGIgUADIgNADQgRAEgVAHIgDABQgPACgQAJIgUAHQghAOgiAGIgVAEQglAGgiAAIgbgBg");
	this.shape_169.setTransform(177.4727,83.6317);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(255,255,255,0.216)").s().p("AiYEGIgKAAQgugEgkgPIgDgBQgdgNgVgVQgRgOgMgSIgLgUQgUgogOgyQgQhAAFgxQADgnAQgkQAIgTAKgPQAOgUAQgQQAegcArgRQASgHAUgGQAXgFAXgDQAigFAnACQAfABAqAGIAFAAQA6AIAqAMQAXAGAVAIQAcAJAfAPIAJAEQAdANAaAPQAmAWAWATIAMALQAVAVANAXQAIAPAEAOQAGASAAASQABAdgNAfIgDAGQgLAcgYATIgLAIQgaASgkAMQgYAIgZAGIgkAGIgWAEIgNAEQgTAFgVAKIgDACQgPAEgQAMIgVALQgiATgkAKIgWAFQgtAJgsAAIgRgBg");
	this.shape_170.setTransform(177.7939,84.7729);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("rgba(255,255,255,0.267)").s().p("AiqEeIgLAAQgzgEglgQIgCgBQgfgOgWgZQgQgPgNgVQgGgJgFgMQgVgtgNg0QgQhFAHg1QAFgpASgoQAJgTAKgRQAOgWARgRQAggfAtgTQAUgJAVgGQAYgHAZgDQAkgFAqABQAhABAuAHIAFAAQBBAJArAMQAZAGAWAHQAgAJAgAPIAKAEQAgAOAbAQQApAWAXAWIANAMQAWAXAMAaQAIAQAEAQQAFATgBAUQgCAfgSAfIgEAHQgOAbgcATIgLAIQgeASglANQgbAIgaAFIgnAHIgXAFIgOAEQgUAHgVANIgEACQgNAFgTARIgUANQgkAYglANIgYAHQgxALg0AAIgMAAg");
	this.shape_171.setTransform(178.1276,85.8407);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("rgba(255,255,255,0.31)").s().p("Ai7E0IgLAAQg3gDgngSIgCgBQgggPgXgcQgRgRgMgXIgMgXQgVgxgNg3QgPhJAJg5QAGgrATgqQAKgVALgSQAPgYASgSQAhgiAvgVQAVgKAWgHQAagHAagEQAmgGAtACQAiABAyAHIAGAAQBGAJAtAMIAzANQAiAKAiAOIAKAEQAiAPAeAQQAqAYAaAYIANANQAWAZANAcQAIASADARQAEAVgDAUQgEAhgWAgIgEAHQgSAagfAUIgNAIQghASgnAMQgcAJgcAFIgpAHIgYAFIgPAGQgVAIgWAQIgDACQgNAGgTAUIgVARQgkAdgnAPIgaAJQg1AOg7AAIgIAAg");
	this.shape_172.setTransform(178.4578,86.862);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("rgba(255,255,255,0.353)").s().p("AjKFJIgMAAQg8gDgngTIgCgBQghgQgYgfQgRgSgMgZIgMgZQgWg1gMg5QgPhNAKg9QAHgsAWgtQAKgXAMgSQAQgaASgTQAigkAygYQAVgLAYgHQAagJAcgEQAogGAwABQAjACA2AHIAGAAQBLAKAvALIA1ANQAlAKAjAOIALAFQAlAOAfARQAtAZAaAaIAOAPQAXAaAMAeQAIAUADASQADAWgEAWQgGAjgaAgIgFAHQgUAagjAUIgOAIQgkASgoAMQgeAJgdAFIgrAHIgaAGIgQAGQgVAJgWATIgEADQgMAHgVAYIgVATQgkAhgpARQgMAGgOAFQg6ARhCAAIgDAAg");
	this.shape_173.setTransform(178.7781,87.7616);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("rgba(255,255,255,0.392)").s().p("AjlFcQg/gDgogTIgDgBQgigSgZghQgQgUgNgbIgMgaQgWg5gMg6QgPhRAMhAQAIguAXgwQALgXAMgUQARgbATgUQAkgnAzgaQAWgLAZgJQAcgJAcgEQArgHAyACQAkABA5AHIAGABQBQAKAxALQAdAGAbAHQAnAKAlAOIALAFQAnAPAgARQAvAaAcAcQAIAIAGAIQAYAbAMAgQAHAVACAUQADAXgFAXQgIAkgdAhIgGAHQgXAaglAUIgQAIQgmASgqAMQgfAJgfAFIgtAHIgbAHIgQAHQgXAKgWAVIgDADQgMAIgWAbIgVAVQglAmgqATQgNAHgPAFQg8AUhJAAIgMAAg");
	this.shape_174.setTransform(179.078,88.6359);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("rgba(255,255,255,0.427)").s().p("AjzFtQhDgDgogUIgDgBQgjgTgagjQgQgVgNgcIgMgcQgXg8gLg9QgPhUAOhDQAJgvAYgzQAMgYAMgUQASgdATgVQAlgpA0gbQAYgNAZgIQAdgKAegFQAsgHA1ABQAlACA8AHIAGABQBVAKAyALIA6ANQApAKAmAOIANAFQAoAPAiASQAwAbAdAeIAPAQQAYAdAMAiQAHAWACAVQACAYgGAYQgKAmggAhIgHAHQgZAagoAUIgQAHQgpATgsAMQggAJggAFIgvAIQgPADgMAEIgSAHQgXALgWAXIgEAEQgLAIgWAeIgWAYQgmAqgrAVQgOAHgPAGQg9AVhNABIgNAAg");
	this.shape_175.setTransform(179.3656,89.4118);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("rgba(255,255,255,0.463)").s().p("Aj/F8QhGgCgpgVIgDgBQgkgTgbgmQgQgWgNgeIgMgdQgXg/gLg+QgPhXAPhGQAKgwAag1QAMgZANgWQASgdAUgWQAmgrA2gdQAYgNAagKQAegKAfgFQAtgIA3ACQAmABA/AIIAHABQBYALAzAKIA9ANQArALAnANIANAFQAqAQAjASQAxAbAfAgQAIAIAHAJQAZAeALAkQAIAXABAWQABAZgGAZQgMAngjAiIgHAHQgbAZgrAUIgRAIQgrASgtAMQgiAJghAGIgwAIQgQADgNAEQgJADgIAFQgYAMgXAZIgEAEQgKAJgYAhIgVAaQgnAsgsAXQgOAIgQAGQg+AYhRABIgNgBg");
	this.shape_176.setTransform(179.6253,90.1375);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("rgba(255,255,255,0.49)").s().p("AkLGKQhIgCgqgVIgCgBQgmgVgbgoQgQgWgNggIgMgeQgYhCgLg/QgOhaAQhIQALgyAbg2QAMgaAOgWQASgfAUgWQAoguA3geQAZgOAbgKQAegKAggGQAvgIA5ACQAmABBCAIIAHABQBbALA0AKIA/ANQAtALAoAOIAOAFQArAPAkATQAzAcAfAhIAQASQAZAfAMAmQAHAYABAWQABAbgIAYQgNApgmAiIgIAHQgcAaguAUIgRAHQgtATguAMQgjAJgiAFIgyAIQgQADgNAFIgSAIQgZANgXAbIgDAEQgKAKgZAjIgWAcQgnAwgtAYQgOAJgQAGQhAAZhUABIgOAAg");
	this.shape_177.setTransform(179.8539,90.756);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("rgba(255,255,255,0.518)").s().p("AkUGXQhLgCgrgWIgCgBQgmgWgbgpQgQgYgOggIgMgfQgYhFgLhAQgOhdARhKQAMgyAcg5QANgbANgWQAUgfAUgYQAogvA4gfQAagPAcgKQAfgLAhgGQAvgIA7ACQAnABBEAIIAHABQBfAMA1AJQAhAGAgAIQAuAKApAOIAOAFQAtAQAkATQA1AcAgAjQAJAJAHAJQAZAhAMAmQAHAZAAAXQABAcgJAZQgOArgoAiIgIAGQgfAZgvAVIgSAHQgvATgvAMQgkAJgjAFIgzAIQgQAEgNAEQgKAEgJAFQgZAOgXAcIgEAEQgKALgYAlIgWAdQgoAzguAaQgPAJgQAHQhBAahXACIgOAAg");
	this.shape_178.setTransform(180.0353,91.331);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("rgba(255,255,255,0.537)").s().p("AkdGhQhNgBgrgXIgCgBQgngWgcgrQgQgYgOgiIgLggQgZhHgKhBQgOhfAShMQAMgzAdg6QANgbAOgXQAUggAUgYQApgxA5ggQAbgPAcgLQAggLAhgGQAxgJA8ACQAoABBGAJIAHABQBhALA2AKQAiAGAgAHQAwALAqANIAOAFQAuAQAlAUQA2AdAhAjQAJAKAHAJQAaAiALAoQAHAZAAAYQABAcgKAaQgPAsgqAiIgJAHQggAYgwAVIgTAHQgxATgvAMQglAJgkAGIg0AIQgQADgOAFIgTAJQgaAOgXAeIgEAEQgJAMgaAnIgWAeQgoA1gvAbQgOAKgRAHQhCAchZABIgPAAg");
	this.shape_179.setTransform(180.22,91.8068);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("rgba(255,255,255,0.557)").s().p("AkkGqQhPgBgrgXIgCgBQgogXgcgsQgQgZgOgiIgMghQgZhJgKhCQgOhgAThOQANg0Adg7QAOgcAOgXQAUghAVgZQAqgxA5ghQAbgQAdgLQAhgMAigGQAxgJA9ACQApABBHAJIAIABQBjAMA3AJIBDANQAxALArAOIAOAFQAvAQAmAUQA2AdAiAlIAQATQAaAiAMApQAHAaAAAZQAAAcgKAbQgRAsgrAiIgJAHQghAZgyAUIgUAIQgxASgxAMQglAKglAFIg1AIQgQAEgPAFIgTAJQgaAPgYAfIgDAFQgJAMgaAoIgWAfQgpA3gvAdQgPAJgRAIQhCAchcACIgPAAg");
	this.shape_180.setTransform(180.378,92.2068);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("rgba(255,255,255,0.573)").s().p("AkqGyQhQgCgsgXIgCgBQgogXgdguQgQgZgOgjIgMghQgZhKgKhEQgNhhAThPQANg1Aeg8QAOgcAOgYQAVgiAVgYQAqgzA6giQAcgQAdgLQAhgMAigGQAygKA/ACQApACBIAJIAIABQBlAMA3AJIBFANQAyALArANIAOAFQAwARAnAUQA3AeAiAlQAJAKAHAKQAbAjALApQAHAbAAAYQgBAegKAaQgRAtgsAjIgKAHQgiAZg0AUIgTAIQgzASgxAMQgmAJglAGIg2AIQgRAEgOAFQgLAEgIAFQgbAQgYAgIgDAEIgjA2QgLASgLAPQgqA4gvAdQgPAKgSAIQhDAdhdADIgPAAg");
	this.shape_181.setTransform(180.5239,92.5576);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("rgba(255,255,255,0.584)").s().p("AkvG3QhRgBgsgYIgCgBQgogXgeguQgQgagNgkIgMghQgahLgJhEQgOhjAUhQQANg1Afg9IAcg1QAVgiAVgZQArgzA7giQAbgRAdgLQAigNAjgGQAygJBAACQApABBKAJIAHABQBnAMA4AKIBFANQAzALArANIAPAFQAwAQAnAVQA4AeAjAmQAJAJAHALQAbAjALAqQAHAbAAAZQgBAegLAbQgRAtguAjIgKAHQgjAZg0AUIgUAIQg0ASgxAMQgnAKglAFIg2AIQgSAEgOAFQgLAFgJAFQgaAQgYAgIgEAFIgjA3QgLASgKAPQgrA6gwAeQgPAKgSAIQhDAehfADIgPgBg");
	this.shape_182.setTransform(180.6239,92.8326);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("rgba(255,255,255,0.592)").s().p("AkyG7QhSgBgsgYIgCgBQgpgXgdgvQgQgagOgkIgMgiQgZhMgKhEQgOhkAVhRQAOg1Aeg+QAPgcAOgZQAVgiAVgZQArg0A7gjQAcgQAdgMQAigNAkgGQAygJBAACQAqABBKAJIAIABQBoAMA3AJQAlAGAhAHQAzALAsAOIAPAFQAxAQAoAVQA3AeAjAmIARAVQAbAjALArQAHAbgBAaQAAAdgLAcQgSAtgvAjIgKAHQgjAZg1AUIgVAIQg0ASgxAMQgnAKgmAFIg2AJQgSADgOAGQgLAEgJAGQgbAPgYAhIgDAFIgkA4QgLASgKAQQgrA7gwAeQgPALgSAHQhEAfhgACIgPAAg");
	this.shape_183.setTransform(180.6676,93.0068);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("rgba(255,255,255,0.6)").s().p("Ak0G+QhTgBgsgYIgCgBQgogYgegvQgQgagOglIgMgiQgZhMgKhFQgNhkAUhRQAOg1Afg+QAOgdAPgZQAVgiAVgaQArg0A8gjQAcgQAdgMQAigNAjgGQAzgKBBACQApACBLAJIAIABQBoAMA4AJIBHANQAzALAsAOIAPAFQAxAQAoAVQA4AeAjAnQAJAJAIALQAbAkALArQAHAbgBAaQgBAegLAbQgSAugvAjIgKAHQgkAZg1AUIgVAIQg0ASgyAMQgnAKgmAFIg3AIQgRAEgPAFQgLAFgJAFQgbAQgYAiIgDAFIgkA4QgLATgKAPQgrA8gwAeQgQALgSAIQhDAfhhACIgPAAg");
	this.shape_184.setTransform(180.7297,93.1326);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("rgba(255,255,255,0.6)").s().p("Am0GlQgpgXgfgxQgXglgTg7Qg+i/AiiIQAOg2Afg+QAjhGAkgrQAsg1A7gjQA8gjBDgMQAzgKBBACQApACBLAJQBuANA7AJQBdAPBJAXQCDApBABGQApAsAOA3QAPA8gVAzQgUAzg3AlQgrAdhDAXQheAhhWANIg3AIQgfAHgVAMQgbAQgYAiIgnA9QgzBWg9AnQhQA0iGAAQhSgBgtgZg");
	this.shape_185.setTransform(180.7284,93.1576);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("rgba(255,255,255,0.086)").s().p("AhIB9Qg0gQgbgfQgTgWgIgdQgHgcAGgcQAGgcATgXQATgYAagMQAZgMAmgCIBAgBIA5AAQAgACAVALQAXANAPAXQAOAWADAbQACAZgKAZQgJAZgSATQgYAZgjANQggAJgPAGIgVAJQgNAFgIACQgLADgNAAQgVAAgbgIg");
	this.shape_186.setTransform(333.6415,56.7381);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("rgba(255,255,255,0.09)").s().p("AhBCAIgHgCIgRgFQgOgFgLgGQgLgGgJgHQgKgHgHgJIgCgBQgMgOgIgQQgEgKgDgLIgEgQQgCgUAEgUIAAgBQAEgTAKgRQAFgJAGgHQAJgLAJgIQAMgKAQgIIAMgFQAQgGAUgCIAPgCIAYgBIAVAAIAUAAIADAAIAVAAIAXAAIAKAAIAIABQAVACARAHIAIAEQAQAJAMAMQAHAHAEAIIAEAGQAHAMADANQADAIABAJIAAACQABALgCAKQAAAMgDALIgDAFIgGAOIgJAQIgKANIgCACQgMAMgPAJQgPAKgSAIIgPAEIggALIgTAIIgDABQgNAFgJACQgIACgKABIgHAAQgSAAgWgGg");
	this.shape_187.setTransform(333.4504,56.7132);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("rgba(255,255,255,0.125)").s().p("Ag/COIgJgCIgTgFQgPgEgMgGQgOgGgJgGQgMgHgJgJIgBgBQgPgOgJgRQgGgLgEgMIgEgSQgEgWADgVIAAgBQADgWAKgSQAFgKAHgJQAJgMAKgJQANgLARgKIANgGQASgJAUgDIAQgDQAEgCAWgBIAXAAIAWABIADAAIAXACIAYADIAMAAIAIABQAXADAUAIIAJAFQARAJAOAMIANAOIAFAGQAIALAGAMQAEAJACAIIABACQACAKAAALQABALgCAMIgCAGQgCAIgDAIIgKARIgMAPIgCACQgOAPgOAJQgRAMgUAIIgQAGQgWAHgNAFIgVAJIgDABIgZAJIgTAEIgMAAQgTAAgUgEg");
	this.shape_188.setTransform(332.2326,56.4375);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("rgba(255,255,255,0.216)").s().p("Ag/CyIgLgBIgYgEQgWgEgOgFQgTgEgLgGQgQgGgNgJIgCgBQgUgOgOgUQgJgNgGgOIgIgWQgJgbACgbIAAgBQAAgbALgZQAFgMAIgMQAKgPANgNQANgMAWgRIAPgKQAYgQAUgGIATgGQAHgEAXgCQANgCAQABQAOABAOACIAEABQAMACAPAGIAdAHIAPACIAJACQAZADAdANIAKAFQAYAMARAMIAUANIAIAFIAYATQAJAGAEAIIACABQAHAJAEALQAFAMABAQIgBAHQAAAKgEAKQgEALgHALIgPATIgDADQgTAUgPALQgUAQgZAMIgUAIIgrARIgaAMIgEABQgSAIgNAEQgNAEgLACQgTADgTAAIgZgBg");
	this.shape_189.setTransform(329.1888,55.7264);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("rgba(255,255,255,0.392)").s().p("AhQD1IgjgBQgggCgSgDQgfgCgOgEQgZgEgSgJIgEgBQgfgOgYgcQgOgPgMgTQgIgOgHgPQgQglgEgmIAAgBQgEgnAMgjQAGgSAKgRQAMgWARgUQAPgQAfgdIAUgSQAigdAVgLQAMgHAMgGQAPgJAYgDQAUgEAWABQATACASAGIAEABQAPAFAXAOQAXAMAPAFIAVAFIANADQAcAGAuAVIAOAGIA7AbQAQAGARAFIANADQARAHAaAEQASAEAKAFIAEABQAQAGALAMQAOANAGAVIACALQADAPgEAPQgFAOgKAQQgHAKgNAQIgFAFQgdAhgRANQgaAXgiATIgbAOIg7AbIglAQIgGACIgqARQgTAGgPAEQgsANgqAAIgQAAg");
	this.shape_190.setTransform(323.3965,54.5795);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("rgba(255,255,255,0.569)").s().p("AjFE4QgqAAgSgCQghgCgYgJIgGgCQgpgOgjgiQgTgTgRgXQgMgRgKgUQgYgvgIgwQgJg1ANgtQAGgXAMgXQAPgcAWgcQAQgTApgqIAYgYQArgsAXgPQAPgMAOgIQAXgOAZgFQAagGAcACQAYADAWAJIAGACQAQAIAfAWQAdAUAUAHIAaAIIAQAEQAgAIA/AdIARAIQAvAVAfAJQAVAGAZADIARACQAZADAnAAQAbAAAPADIAFAAQAaAEATAMQAWAOALAbIAFAOQAFAUgEAUQgFATgNATQgIANgSAVIgGAHQgnAtgSAQQghAegrAaIgiAUQggAQgsAUIgvAVIgIADIg2AWIgrAPQg5ATg0AEIgVACQgVABgYAAIhCgBg");
	this.shape_191.setTransform(317.5846,53.6132);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("rgba(255,255,255,0.659)").s().p("AkYFdQglgCgdgIIgGgCQgugPgpglQgWgUgSgaQgPgTgLgWQgdg0gKg1IAAgBQgLg6ANg0QAGgZAOgaQAQgfAYgfQAQgVAugxIAbgcQAxgzAWgSQARgNAQgKQAagQAagGQAdgIAfAEQAbACAYAMIAGACQARAJAjAaQAhAYAVAIQALAFASAFIASAFQAiAJBHAhIAUAJQA0AXAjAIQAYAGAcADIAVABQAbABAugDQAggBASABIAGABQAfACAWAMQAaAPAPAeIAGAPQAGAWgEAXQgFAVgOAWQgJAOgVAYIgHAIQgrAygUASQgkAigwAeQgSALgTALQgiATgyAWIg0AXIgJAEIg9AZIgwARQhAAWg4AHIgYACQgXACgbABIhKABIgpAAIgaAAg");
	this.shape_192.setTransform(314.5951,53.2193);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("rgba(255,255,255,0.694)").s().p("AkhFrQgngBgdgJIgGgCQgxgOgqgnQgYgVgTgaQgPgUgMgXQgfg1gLg4QgLg9ANg1QAGgbAOgbQAQggAaghQAQgVAwgzIAcgeQAyg1AXgTQARgOAQgKQAcgRAagHQAegIAgADQAdADAZAMIAGADQAQAJAmAcQAhAZAWAJQALAFAUAFIASAFQAjAKBKAiIAUAKQA3AYAkAIQAZAGAeACIAVAAQAdABAwgEQAigBATABIAGAAQAhACAXAMQAcAPAQAfIAGAQQAHAXgEAYQgFAWgPAWQgJAOgWAaIgHAIQgtA0gUASQglAkgyAfIgnAXQgjAUgzAXIg3AYIgJAEIg/AaIgxASQhDAXg6AIIgZADIg0ADIhNABIg2ABIgQAAg");
	this.shape_193.setTransform(313.4931,53.0801);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("rgba(255,255,255,0.698)").s().p("AkiFtQgngBgegJQg0gOgugpQgpglgdg2Qgfg1gLg4QgMg+AOg1QAOg6Awg9QAVgcBHhLQAzg2AXgTQAsglArgLQAfgIAgADQAgAEAbAOQARAJAmAcQAhAaAWAJQAQAGAhAJQAjAKBLAiQBGAhApAJQAiAIArAAQAdABAxgEQAogCATABQAhACAYANQAcAPAQAfQAPAfgGAgQgFAWgPAWQgJAPgWAZQgzA8gVATQg0AxhLAqQg0AdhaAmQhKAggwAQQhDAYg6AIQghAEgtABIhNACIg7ABIgLAAg");
	this.shape_194.setTransform(313.3284,53.078);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_167}]},13).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186},{t:this.shape_185}]},5).to({state:[{t:this.shape_187},{t:this.shape_185}]},1).to({state:[{t:this.shape_188},{t:this.shape_185}]},1).to({state:[{t:this.shape_189},{t:this.shape_185}]},1).to({state:[{t:this.shape_190},{t:this.shape_185}]},1).to({state:[{t:this.shape_191},{t:this.shape_185}]},1).to({state:[{t:this.shape_192},{t:this.shape_185}]},1).to({state:[{t:this.shape_193},{t:this.shape_185}]},1).to({state:[{t:this.shape_194},{t:this.shape_185}]},1).to({state:[{t:this.shape_194},{t:this.shape_185}]},1).to({state:[{t:this.shape_194},{t:this.shape_185}]},1).to({state:[{t:this.shape_194},{t:this.shape_185}]},1).to({state:[{t:this.shape_194},{t:this.shape_185}]},1).to({state:[{t:this.shape_194},{t:this.shape_185}]},1).to({state:[{t:this.shape_194},{t:this.shape_185}]},1).to({state:[{t:this.shape_194},{t:this.shape_185}]},1).to({state:[{t:this.shape_194},{t:this.shape_185}]},1).to({state:[]},1).wait(16));

	// forma_c11
	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("rgba(255,255,255,0.067)").s().p("AgQDgQghgUgTgxQgFgPgHgbIgLgqIgZhBQgQgngEgaQgIgrAKgqQAFgVAJgQQAOgXAegRQAkgUAdAGQAcAGAgAqQAcAlANAfQAKAVANAsIAOA0QARBIgEBLQgCAdgHAOQgMAXggAPQgaALgbABQgdAAgVgOg");
	this.shape_195.setTransform(178.9853,84.6953);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("rgba(255,255,255,0.192)").s().p("AAjEFIgPgEQgVgFgUgQIgFgEQgWgUgOgUIgaglIgQgeIgHgOQgPgggHgNIgHgOQgMgXgOgmIgDgHQgOgpAAgfIAAgBQgCgeAIgeQAEgUAIgSIAJgTQAHgLAIgIQAMgOASgJQAOgHAOgEQALgCAKAAQAMgBALAEQAKACAKAIIADABQAWATAXAiIAIAQIAKARIARAfQALASAMAPIAEAFQAJANASAXIANAUIAUAfIAMAUQAHANAFANQAHAWACAaQACAXgCAaQgCAagFAWQgFAcgMAOIgDADQgJAKgNAGQgNAHgUAFIgFAAQgTADgQABQgOAAgNgCg");
	this.shape_196.setTransform(178.5375,84.8969);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("rgba(255,255,255,0.302)").s().p("ABqEhIgngBQgQgBgPgEIgQgGQgWgJgWgTIgGgFQgZgagQgVIghgoIgXgfIgLgPIgfgwIgIgOQgSgcgPgpIgCgIQgOguACgmIAAgBQACghAMgjQAIgWAKgTQAGgLAHgJQAJgLAKgJQARgNAVgIQARgFARgBQAMAAALACQANADALAJQAJAGAKAMIACACQAWAfASAlIAIATIAJAUQAIAVAKAQQANATARAQIAFAFQALAMAbAWIAUATIAdAdQALALAHAKQALAOAGANQALAYABAeQACAZgEAgQgEAfgHAXQgJAegRAOIgFAEQgMAIgQAEQgPAFgYABIgHgBg");
	this.shape_197.setTransform(178.0521,84.825);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("rgba(255,255,255,0.392)").s().p("AB7E8IgIgBIgsgGQgSgDgPgFIgSgIQgXgLgYgXIgGgGQgcgfgRgVQgNgQgbgbIgcggIgNgPIgngyIgLgQQgWgggOgsIgDgJQgPgyAGgsIAAgBQAEgkAQgmQAKgYANgUQAIgLAJgKQAKgLANgIQATgNAZgGQAUgFASABQANACAMAFQAOAGALANQAJAIAJARIACACQAVAqAPAnIAHAVIAIAXQAIAYAMARQANAVAWARIAGAEQANAMAjAWIAZASIAlAcQANALAKAKQAOAOAIAOQANAZABAiQABAbgFAkQgGAjgKAYQgMAggVAOIgFAEQgPAIgTACQgJACgMAAIgXgBg");
	this.shape_198.setTransform(177.6071,84.8727);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("rgba(255,255,255,0.467)").s().p("ACDFRIgJgCIgwgJQgTgFgQgGIgTgKQgXgNgZgaIgHgGIgwg4QgOgQgggeIghghIgPgPQgcgfgSgVIgMgQQgZgkgPguIgDgKQgOg2AHgwIAAgBQAGgmATgpQANgaAPgUQAJgMAKgKQANgMANgIQAXgNAbgEQAWgEATADQAPADAMAHQAPAJALAPQAIALAJAVIABACQAWAyAMApIAGAYQAFATACAGQAJAaAMASQAOAWAaASIAGAFQAPAKAqAWIAdAQIArAcQAQALAMALQAQAOAJAPQAPAaACAlQABAcgHAnQgIAngLAZQgPAigYANIgHAEQgQAIgWABIgHAAQgRAAgYgDg");
	this.shape_199.setTransform(177.2534,84.9658);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("rgba(255,255,255,0.525)").s().p("ACJFhIgJgDIgzgLQgTgFgRgIQgLgFgJgGQgYgPgagcIgHgHIgzg7QgPgQgjgfIgkgiIgRgQQgggegTgXIgNgRQgcgngPgvIgDgLQgPg4AKg0QAHgoAWgsQAOgbARgVQAKgNALgJQAOgMAPgIQAYgNAdgEQAYgDAUAFQAQAEANAJQAOAKALASQAIANAJAXIABADQAVA4ALArIAFAZIAHAbQAIAdANASQAPAXAdATIAHAEQAQAKAvAVIAgAQQAYANAYAPQASAKANALQATAPAJAPQARAbABAnQABAegIApQgJAqgMAZQgRAkgbANIgHAEQgSAHgYAAQgSAAgigGg");
	this.shape_200.setTransform(176.9425,85.0188);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("rgba(255,255,255,0.569)").s().p("ADEF0QgTAAgjgIIgLgDIg0gNQgUgGgRgIIgVgMQgYgQgbgdIgHgIIg1g+QgPgQgmggIgngiIgSgQQgigfgUgYIgOgRQgfgngPgyIgCgMQgPg6ALg2QAIgqAXgsQAQgdASgVQALgNAMgKQAOgMAQgIQAagMAegEQAagCAUAGQARAFANAKQAPALALAUQAIAOAIAZIABADQAVA9AJArIAFAbIAGAcQAIAeAOAUQAQAXAeATIAIAEQARAKAyAUIAjAQQAaANAaAPQATAKAOALQAUAPAKAQQASAbABApQABAegJAsQgJArgOAaQgSAlgdANIgIAEQgRAFgVAAIgGAAg");
	this.shape_201.setTransform(176.7436,85.08);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("rgba(255,255,255,0.592)").s().p("ADIF8QgUgBgjgIIgLgDQgigIgTgGQgVgHgRgJIgWgMQgYgRgcgeIgHgIQgjgrgTgUQgPgRgnggIgpgjIgSgQQgjgegWgZIgOgRQgggpgPgyIgDgMQgPg7AMg4QAIgrAZgtQAQgeATgVQAMgNAMgKQAPgMAQgIQAbgMAfgDQAbgCAVAGQAQAFAOALQAPAMALAWQAHAOAJAaIABADQAUBAAIAsIAFAcIAGAcQAIAgAOATQARAYAfATIAIAFQARAJA1AUIAkAQQAbAMAbAPQAUAKAPALQAUAQALAPQATAcABAqQABAfgKAsQgKAtgOAaQgTAlgeAOIgIADQgQAGgUAAIgKgBg");
	this.shape_202.setTransform(176.5881,85.1155);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("rgba(255,255,255,0.6)").s().p("ADJF/QgUgBgkgJQgqgKgWgHQgjgMgZgRQgbgSggglQgkgrgTgVQgXgYhJg8Qg+gzgdglQgkgvgOg5QgPg8AMg4QAJgrAZguQAagvAigbQAngfAzgEQAwgDAeAYQAPANALAVQAIAPAIAbQAVBDAIAtIALA4QAIAgAOAUQATAbAmAUQARAJA1AUQAuASAuAZQAwAaATAbQATAcABAqQAAAfgJAtQgKAtgPAaQgTAlgfAOQgSAIgaAAIgKAAg");
	this.shape_203.setTransform(176.5596,85.1441);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("rgba(255,255,255,0.62)").s().p("ADRF5IgEAAQgTgDgigIIgbgIIgmgLQgWgIgSgIIgWgLQgPgKgRgOQgPgMgPgQIgQgRQgWgZgRgRIgDgDQgPgPgegZIgkgbIgSgOIgVgPQgkgdgYgcIgNgQQgVgcgNgbQgKgVgGgUIgDgIQgFgRgDgQQgHgoAHgoIABgDQAHglAUgmIAIgOQAUgkAagXIARgNQAdgVAkgIQANgDAOAAQAxgDAfAYIACACQAOAMALATQAJAPAJAZIAQArQANAmAHAdQAKAqAEALIABACQAKAeAQATQAUAaAmAUIAWAJIAyATQAwATAtAYIAHAEQArAYARAaIAGAKQANAaAAAkIgBAYQgCAZgGAcQgGAXgHATQgHAQgIAMQgNAXgSANQgLAHgLAFQgSAHgXAAIgNAAg");
	this.shape_204.setTransform(176.925,85.4142);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("rgba(255,255,255,0.639)").s().p("ADXFzIgDgBQgUgCgigJIgbgIIgngMQgWgIgSgIIgXgLQgQgIgSgOQgQgLgQgPIgRgQIgpgpIgDgDQgRgQgdgXQgPgLgWgOIgUgNIgVgPQgkgcgZgdIgNgQQgWgdgOgbQgLgUgHgUIgCgHQgHgSgDgQQgJgoAHgpIAAgCQAHgmAUgmIAIgPQAWgiAbgXIASgMQAfgUAkgHQAOgCAOgBQAwgBAgAXIADACQAOAMAMASQAKAPALAZIARApQAQAmAJAcQAMAoAGALIABADQALAcATATQAVAYAnATIAXAJIAzATQAyATAsAYIAGAEQArAYASAcIAFAJQAOAbAAAlIgCAYQgCAagHAbQgGAYgIASQgIAQgJAMQgOAVgTAMQgLAHgMAEQgRAHgWAAIgQgBg");
	this.shape_205.setTransform(177.3092,85.6596);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("rgba(255,255,255,0.659)").s().p("ADfFtIgEgBQgUgDgigKIgcgIIgngMIgpgQIgXgKIgkgUQgSgKgQgOIgSgQIgrgoIgDgDQgTgRgcgVQgPgKgZgOIgTgMIgXgOQgkgagagfIgNgQQgXgegOgaQgMgVgHgTIgDgHQgIgRgEgQQgKgpAFgpIABgCQAGgoAVglIAJgPQAWgiAegVIASgMQAfgTAmgFQANgCAPgBQAxAAAhAXIACABQAPAMANASQALAOALAYIAVAoIAdBBQAOAnAIALIABACQANAbAUASQAXAWAoATIAXAJIA0ATQA0ASArAZIAHADQArAaARAcIAGAJQANAbgBAmIgBAZQgDAbgHAbQgHAYgJARQgIAQgKAMQgPAUgUALQgMAGgMAEQgQAFgUAAIgTgBg");
	this.shape_206.setTransform(177.6564,85.9301);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("rgba(255,255,255,0.678)").s().p("ADmFmIgEAAQgUgEgjgKIgcgJIgngMIgqgQIgYgJIgmgTQgSgJgRgNIgUgPQgUgTgYgVIgDgDQgWgRgbgTQgPgKgagNIgUgLQgNgGgKgHQgkgZgcggIgNgRQgXgfgPgZQgNgWgIgRIgDgIQgJgRgEgPQgNgpAFgqIABgCQAFgpAWglIAJgPQAXghAggVIATgLQAggRAmgFQAOgBAPAAQAxAAAiAXIACABQAQALAOARQALAPANAWIAXAoIAhBAQARAlAJALIACACQAOAZAXASQAYAVAoARIAZAJIA0ATQA2ATArAYIAGADQArAaASAeIAFAJQANAcgBAmIgCAaQgDAbgIAbQgHAYgKARQgIAQgLALQgQATgWAKQgLAGgNADQgPAEgSAAIgXgCg");
	this.shape_207.setTransform(178.0295,86.2012);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("rgba(255,255,255,0.702)").s().p("ADuFgIgFAAQgUgEgjgLIgcgJIgogNIgqgQIgZgIIgogRQgTgJgSgLIgVgOIgugoIgDgCQgYgTgagRQgPgKgcgLIgUgKQgOgGgLgHQgkgXgcgiIgOgRQgYghgPgXQgOgWgIgRIgEgHQgKgSgFgPQgOgoAEgrIABgCQAEgqAXglIAKgPQAXggAigUIAUgLQAhgQAngDQAOgCAPABQAxABAkAWIACABQAPALAQARQAMAOAOAWIAZAmIAmA/QATAjALAMIACACQAPAXAaARQAZAUApAQIAZAJIA1ATQA5ATApAYIAGADQArAaASAfIAFAKQANAcgBAnIgCAaQgEAcgIAbQgHAXgLASQgJAPgMALQgRASgXAJQgMAFgNADQgNADgPAAQgOAAgOgDg");
	this.shape_208.setTransform(178.3883,86.4878);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("rgba(255,255,255,0.722)").s().p("AD1FaIgFgBQgUgEgkgLIgcgKIgogOIgrgPIgagIIgpgPQgVgIgSgKQgMgGgKgHIgxgnIgDgCQgZgUgZgQQgQgIgdgKIgVgJIgZgMQgkgWgegkIgOgSQgZghgPgXQgQgWgIgQIgEgHQgLgSgGgPQgPgoADgsIABgBQADgrAYglIAKgPQAYggAkgTIAUgKQAjgOAogDIAcgBQAzADAkAVIACABQAQAKARARQANAOAPAVIAcAmIAqA9QAVAhAMAMIACACQARAVAcARQAbASApAQIAaAJIA1ASQA8AUApAXIAFAEQArAaASAgIAFAKQANAdgCAoIgCAaQgEAdgIAaQgIAYgMARQgKAPgMAKQgSARgZAIQgMAFgNACQgMACgNAAQgPAAgRgDg");
	this.shape_209.setTransform(178.7311,86.7429);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("rgba(255,255,255,0.741)").s().p("AD8FUIgFgBQgUgFgkgMIgdgKIgogOIgsgPQgHgDgUgEIgrgOQgVgHgTgJQgNgGgKgGIgzgmIgDgDQgbgVgZgNQgPgIgfgJIgWgIQgPgGgLgGQgkgUgfglIgOgTIgpg4QgRgXgJgOIgEgIQgMgRgGgPQgSgoADgtIAAgBQADgsAZglIAKgPQAZgfAmgTIAVgJQAkgNAogCQAPAAAOABQAzADAlAVIACABQARAJARARQAPANAQAUIAeAlIAuA9QAYAfAOAMIACACQASATAfARQAcARApAOIAbAJIA2ASQA+AVAoAXIAFADQArAbATAhIAEAKQANAdgCApIgDAbQgEAdgJAaQgIAYgMARQgLAOgNAKQgTAQgaAHQgNAEgNACIgVACQgSAAgTgEg");
	this.shape_210.setTransform(179.0914,87.0061);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("rgba(255,255,255,0.761)").s().p("AEEFOIgGgBQgUgFgkgNIgdgLIgpgOIgtgPIgbgGIgtgMQgXgGgTgIQgOgGgKgGIg1gmIgDgCQgdgVgYgMQgPgHghgJIgWgHQgRgFgKgFQglgTgggnIgOgTIgqg4IgbglIgFgIQgNgRgHgOQgTgpACgtIAAgBQACguAZgkIAMgPQAZgfAogRIAWgJQAkgLAqgBIAdABQAzAEAnAVIABAAQARAJATAQQAQAOARASIAgAlIAzA7QAaAeAPAMIADACQAUARAgAQQAeAPAqAOIAbAJIA3ARQBAAWAnAWIAFADQAsAcASAiIAFAKQAMAegCApQgBANgCAPQgFAegJAaQgJAYgNAQQgLAOgOAKQgUAPgbAGIgbAFIgQAAQgUAAgWgEg");
	this.shape_211.setTransform(179.4115,87.2847);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("rgba(255,255,255,0.78)").s().p("AELFIIgGgCQgUgFglgNIgdgLIgpgPQgbgKgTgFIgcgGIgugJQgYgGgUgHQgPgFgLgGQgSgKglgbIgDgCQgfgWgWgKQgQgHgigHIgXgGQgRgFgLgFQgkgRgigpIgOgTIgrg4IgdglIgFgHQgOgSgIgOQgVgoACgvIAAAAQACgvAZglIAMgPQAbgdApgRIAXgIQAlgKArAAIAdABQAzAFAoAVIABAAQASAJAUAPQAQAOATASQARAQARATQAgAiAYAYQAbAcASAMIACACQAWAQAjAPQAfAOAqANIAdAJQAdAIAaAJQBCAWAnAWIAEADQAsAcASAjIAFAKQANAfgDAqIgEAcQgEAfgKAZQgKAYgOAQQgMAOgPAKQgVANgcAGQgNACgPABIgKAAQgXAAgZgFg");
	this.shape_212.setTransform(179.7731,87.5382);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("rgba(255,255,255,0.8)").s().p("AEMFAQgbgIg8gXQg4gXgggHIhMgNQgtgIgcgNQgRgIgogcQgjgZgXgJQgPgGgkgGQgjgHgRgHQglgQgjgrQgmg0gUgXIgfglQgSgWgKgQQgXgoABgwQABgwAagkQAdgpA2gTQAwgRA5ACQBHACA0AaQAwAWBCBCQBJBJAjAWQAyAgB2AgQBzAfAzAhQAyAhARAqQARApgLA9QgKBBgeAgQgeAggyAIQgQACgQAAQgeAAgggIg");
	this.shape_213.setTransform(180.1179,87.8163);
	this.shape_213._off = true;

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("rgba(255,255,255,0.086)").s().p("AgdCFQgpgEgcgfQghglAAhGQAAgZAFgRQALgoAlgWQAigVArADQAfACAXAPQATAMAYAeQAWAaAIAUQAOAlgRAoQgQAkglAVQgVAMgbAGQgYAHgUAAIgHAAg");
	this.shape_214.setTransform(267.1911,88.1931);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("rgba(255,255,255,0.176)").s().p("AhTCfQgVgCgRgJQgQgGgMgLQgPgLgMgRQgLgPgFgVQgGgUAAgaQAAgWAEgZIAEgPQAFgWAJgQQAMgaAVgRQAIgHALgGQAQgJAUgGQAkgMAoABQAeABAbAIIAHACIAFABQAGAAAFgCQARgEAXAHQAKABALAEQALAEAKAGQAKAFAJAHQAKAJAGAKIABAAQAIAOADAQQADARgCATQgCASgHASIgDAKIgKAWQgIARgLAOQgMAPgTAPIgIAGIgTAOIgfAQIgQAHQgjAPgYAGIgKACQgTADgRAAQgQAAgOgDg");
	this.shape_215.setTransform(267.0568,88.39);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("rgba(255,255,255,0.255)").s().p("AiODGQgWgEgSgJQgXgLgRgSQgSgTgJgYQgKgaAAghIAAgBQABgbAGgiIAEgTQAHgeAJgTQAQgjAZgWQALgJAOgHQAUgMAbgIQAvgNAzAAQAlAAAlAIIAIABIAIABQAGgBAGgGIAAgBQAVgQAdgDQANgDAPABQAPAAAPAEQAPADAMAHQAOAIAKAMIABABQAMAQAFAWQAEAVgDAZQgDAWgIAZIgEANIgMAcQgKAXgMASQgNAUgZAVIgLAIIgXATQgKAJgcAPIgUALQgtAXgdAKIgMAEQguAOgmABIgMABQgWAAgSgFg");
	this.shape_216.setTransform(266.9393,88.08);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("rgba(255,255,255,0.329)").s().p("AihD5QgcgBgXgJQgdgKgXgUQgYgVgNgdQgNgdABgpIAAgBQAAgeAIgsIAFgWQAJglAJgWQASgrAegaQANgLARgJQAZgNAggKQA5gQA8AAQAtgBAsAIIAKABQAFABAEgBQAIgCAHgJIAAgBQAXgbAjgMQARgHASgDQATgDATACQASACAQAHQASAIAMANIACACQAPASAGAbQAGAZgEAdQgDAbgJAeIgGARIgNAiQgMAcgNAWQgPAWgeAbIgMAKIgbAZQgKAKgiAVIgZAOQg1AeghAOIgQAGQg1AVguAGQgXAEgVAAIgUgBg");
	this.shape_217.setTransform(266.8421,87.16);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("rgba(255,255,255,0.392)").s().p("AjvEfQgigJgcgWQgegWgPghQgQghABgvIAAgBQAAgiAKg0IAGgaQAJgpALgaQAUgyAhgdQAPgNAUgLQAcgOAlgLQBCgSBFgBQAzgCAzAIIALACQAGAAAFgCQAIgCAIgNIABgBQAZgkAogTQATgMAVgFQAXgGAXABQAVAAATAHQAVAIAPAPIACABQASAUAIAfQAGAdgEAiQgDAegLAiIgGAUIgQAoQgNAhgOAZQgPAZgjAgIgOAMQgWAUgHAJQgLAMgoAZIgcARQg9AkglASIgRAHQg9Acg1ALQgoAJgjAAIgEAAQgfAAgagIg");
	this.shape_218.setTransform(266.7413,86.3495);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("rgba(255,255,255,0.447)").s().p("AkGFIQgogIgggYQgigYgRgjQgTglABg0IAAgCQAAgkALg7IAHgdQAKguALgdQAWg4AlggQAQgOAXgMQAfgQAqgMQBJgUBMgCQA4gCA6AIIAMACQAHAAAFgCQAJgDAJgQIABgBQAbgsAsgaQAWgPAXgIQAagIAagBQAYAAAWAGQAYAIARAQIACACQAVAVAIAjQAIAggFAlQgDAhgMAnIgHAXIgRAsQgOAlgQAcQgQAcgmAjIgPAOQgZAXgIAKQgKANguAeIgfATQhDAqgoAUIgTAJQhDAhg7AQQguAMgnACIgPAAQgdAAgZgGg");
	this.shape_219.setTransform(266.6587,85.6943);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("rgba(255,255,255,0.494)").s().p("AkZFrQgsgIgkgZQgmgZgTgmQgVgoABg5IAAgBQABgnAMhAIAHggQALgzALgeQAYg9AngjQASgQAZgNQAhgRAugNQBQgVBSgDQA9gCA+AIIAOABQAHABAGgDQAJgEAKgRIABgCQAdgzAvggQAYgRAagKQAcgLAdgBQAagCAZAHQAaAHATARIACADQAXAWAJAmQAJAigFApQgEAkgNAqIgIAZIgSAwQgPApgQAeQgRAegpAnIgRAPQgbAZgIAMQgKAOgyAgIghAVQhKAvgqAXIgUAKQhJAmhAATQgyAPgrADIgbABQgaAAgXgEg");
	this.shape_220.setTransform(266.592,85.1193);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("rgba(255,255,255,0.533)").s().p("AkpGHQgvgHgngaQgpgagVgpQgWgqAAg8IAAgCQABgoANhGIAHghQAMg3AMggQAZhBApglQATgRAcgOQAigSAxgNQBVgXBXgDQBBgDBDAJIAOABQAIAAAGgDQAKgEAKgUIABgBQAfg5AxglQAagUAcgLQAegMAfgDQAdgCAaAGQAcAIAUASIADACQAZAYAKAoQAJAlgGArQgEAmgNAsIgJAcIgSAzQgQAsgRAfQgSAhgsApIgSAQQgcAcgIAMQgKAPg2AjIgjAXQhOAygtAZIgVAMQhNAphFAWQg1ASguAEQgSACgRAAQgZAAgWgEg");
	this.shape_221.setTransform(266.5293,84.6573);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("rgba(255,255,255,0.561)").s().p("Ak2GdQgygHgpgaQgrgbgXgrQgXgsAAg/IAAgCQABgqAOhIIAIgjQAMg6AMgiQAahEArgmQAUgSAdgPQAkgTA0gOQBYgXBbgEQBEgDBGAJIAPABQAIAAAGgDQALgFALgVIAAgCQAhg9A0goQAagWAegMQAfgOAhgDQAegDAcAHQAeAHAVASIACADQAbAZAKAqQAKAmgGAuQgEAngOAuIgJAdIgTA2QgRAugRAhQgSAigvArIgSASQgeAdgIAMQgKAQg5AlIglAZQhRA1guAaIgWANQhRAshIAZQg3ASgxAGQgXADgUAAQgXAAgVgEg");
	this.shape_222.setTransform(266.5003,84.3107);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("rgba(255,255,255,0.584)").s().p("Ak+GtQg0gHgrgbQgugcgXgrQgYguAAhAIAAgCQABgsAOhLIAIgkQANg7ANgjQAahHAtgnQAUgTAegPQAlgUA2gOQBbgYBegEQBGgDBIAJIAQABQAIAAAGgEQALgEALgXIABgCQAhhAA1gqQAdgXAegOQAggOAigEQAfgEAdAHQAfAHAWATIADADQAcAZAKAsQAKAngGAvQgEApgOAwIgKAdQgIAZgMAfQgRAwgSAiQgSAigwAuIgTASQgfAegIANQgKAQg6AnIgmAZQhUA3gwAcIgWANQhUAuhKAaQg5AUgzAHQgZADgXAAQgVAAgUgDg");
	this.shape_223.setTransform(266.462,84.0578);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("rgba(255,255,255,0.596)").s().p("AlEG3Qg1gHgsgbQgugdgYgsQgZguABhCIAAgCQABgsAOhNIAIglQANg8ANgkQAbhIAtgoQAVgTAegPQAmgUA2gPQBegYBfgEQBHgDBKAIIAQABQAJAAAGgDQALgFALgXIABgCQAhhCA3gsQAcgYAfgOQAhgPAjgEQAggEAdAGQAgAIAWATIADADQAdAaALAsQAKAogGAwQgFApgOAxIgKAeIgUA5QgSAwgRAjQgTAkgxAuIgTASQggAfgIANQgKARg7AnIgnAaQhWA5gwAcIgXANQhVAwhLAbQg7AVgzAHQgbAEgYAAQgVAAgUgDg");
	this.shape_224.setTransform(266.462,83.9123);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("rgba(255,255,255,0.6)").s().p("AlFG6Qg2gHgsgbQgvgdgYgsQgZgvABhEQABgsAOhOQAShZAQgsQAbhJAugoQAvgrBhgaQCmgrCqATIAQABQAJAAAGgDQALgFALgXQAihEA3guQA8gxBFgIQAggEAdAGQAgAIAXATQAfAaALAvQAKAogGAxQgEApgPAxQgKAhgUA3QgRAxgTAjQgSAjgxAvQgxAugKARQgKAQg8AoQhzBNg7AjQhiA6hWAfQhaAghIAAQgWAAgTgDg");
	this.shape_225.setTransform(266.4356,83.8597);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_195}]},7).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214},{t:this.shape_213}]},2).to({state:[{t:this.shape_215},{t:this.shape_213}]},1).to({state:[{t:this.shape_216},{t:this.shape_213}]},1).to({state:[{t:this.shape_217},{t:this.shape_213}]},1).to({state:[{t:this.shape_218},{t:this.shape_213}]},1).to({state:[{t:this.shape_219},{t:this.shape_213}]},1).to({state:[{t:this.shape_220},{t:this.shape_213}]},1).to({state:[{t:this.shape_221},{t:this.shape_213}]},1).to({state:[{t:this.shape_222},{t:this.shape_213}]},1).to({state:[{t:this.shape_223},{t:this.shape_213}]},1).to({state:[{t:this.shape_224},{t:this.shape_213}]},1).to({state:[{t:this.shape_225},{t:this.shape_213}]},1).to({state:[{t:this.shape_225},{t:this.shape_213}]},1).to({state:[{t:this.shape_225},{t:this.shape_213}]},1).to({state:[{t:this.shape_225},{t:this.shape_213}]},1).to({state:[{t:this.shape_225},{t:this.shape_213}]},1).to({state:[{t:this.shape_225},{t:this.shape_213}]},1).to({state:[{t:this.shape_225},{t:this.shape_213}]},1).to({state:[{t:this.shape_225},{t:this.shape_213}]},1).to({state:[{t:this.shape_225},{t:this.shape_213}]},1).to({state:[]},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.shape_213).wait(25).to({_off:false},0).wait(28).to({_off:true},1).wait(16));

	// forma_c10
	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("rgba(255,255,255,0.039)").s().p("AgbA7QgNgEgNgMQgIgHgEgIQgDgHgBgMQgCgSAGgMQAFgJAKgHQAMgJARgEIAfgHQAPgCAHAAQAIABAHAFQAHAEAEAGIAFANIAEAMQAEAMgCAMQgCANgIAJQgMANgWAEQgJACgDABIgKAHQgIAFgKAAIgMgBg");
	this.shape_226.setTransform(172.2583,85.5487);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("rgba(255,255,255,0.169)").s().p("AgjBLQgRgFgQgPQgLgKgEgJQgFgJgBgQQgCgYAIgPQAFgLAOgKQAPgLAWgGIAogIQATgDAKABQAKABAIAFQAJAGAFAIIAHARIAGAPQAFAQgDAPQgDARgKAMQgPAQgcAGQgNABgEACIgMAJQgLAHgNAAQgHAAgIgCg");
	this.shape_227.setTransform(172.2619,85.5542);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("rgba(255,255,255,0.278)").s().p("AgpBaQgUgGgUgSQgMgMgGgLQgEgLgCgSQgDgdAJgSQAHgNAQgMQASgNAbgHQAOgEAhgGQAXgDALABQAMABAKAHQALAGAGAKQACAEAGAQIAGASQAGASgDASQgDAUgNAPQgRAUgiAGQgOACgFACIgPAKQgNAJgQAAQgIAAgJgCg");
	this.shape_228.setTransform(172.2478,85.5472);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("rgba(255,255,255,0.369)").s().p("AguBlQgYgGgWgVQgOgNgGgNQgFgMgCgUQgDghAKgVQAIgPASgNQAUgOAegIQAQgEAmgHQAZgEANABQANABAMAIQAMAHAGALQADAFAGARIAIAVQAHAVgEAVQgEAWgNAQQgVAXglAGQgRADgFACIgRAMQgOAKgRAAQgKAAgKgDg");
	this.shape_229.setTransform(172.2529,85.5331);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("rgba(255,255,255,0.439)").s().p("AgzBuQgZgHgYgWQgQgPgGgNQgGgOgCgWQgDgkALgXQAIgQAUgOQAWgPAhgJQARgFApgHQAcgFAOABQAOACANAIQANAIAHANQAEAFAGASIAJAXQAHAXgEAWQgEAZgPARQgWAZgpAHQgSADgGADIgTANQgPAKgUAAQgKAAgLgDg");
	this.shape_230.setTransform(172.2624,85.5189);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("rgba(255,255,255,0.494)").s().p("Ag2B1QgcgHgZgYQgQgPgHgPQgHgOgCgYQgDgmAMgYQAJgRAUgQQAYgQAjgJQATgGAsgHQAdgGAPACQAPACAOAIQAOAJAHANQAEAGAHAUIAJAYQAIAYgEAYQgFAagQATQgXAagsAIQgTADgGADIgUANQgRALgUAAQgLAAgMgDg");
	this.shape_231.setTransform(172.2522,85.5291);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("rgba(255,255,255,0.537)").s().p("Ag4B7QgdgIgbgZQgRgQgHgPQgHgPgCgZQgEgoANgaQAJgRAWgQQAYgRAlgKQAUgGAugIQAegFAQACQAQACAOAIQAPAJAIAOQADAGAIAVIAJAZQAJAZgFAZQgFAcgQATQgZAcguAIQgUADgGADIgVAOQgSAMgVAAQgLAAgMgDg");
	this.shape_232.setTransform(172.2543,85.5262);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("rgba(255,255,255,0.569)").s().p("Ag6B+QgegIgbgZQgSgRgHgPQgIgQgCgaQgDgpANgaQAJgSAWgRQAagRAmgLQAUgFAvgIQAggGAQACQARACAOAJQAPAJAJAOQADAGAIAWIAKAaQAIAZgFAbQgEAcgSAUQgZAdgvAIQgVADgGADIgWAPQgSAMgVAAQgMAAgNgEg");
	this.shape_233.setTransform(172.2555,85.5254);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("rgba(255,255,255,0.588)").s().p("Ag7CBQgegIgcgaQgSgRgIgQQgIgQgCgaQgDgrANgaQAKgTAXgQQAagTAmgKQAVgGAwgIQAhgGAPACQASACAPAJQAPAKAJAOQADAGAIAWIAKAbQAJAagFAbQgFAdgRAUQgaAdgwAJQgWADgGADIgWAPQgTAMgXAAQgLAAgNgDg");
	this.shape_234.setTransform(172.2498,85.5345);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("rgba(255,255,255,0.6)").s().p("Ag8CDQgfgJgcgaQgTgRgHgQQgHgRgDgaQgDgrANgbQAKgTAXgQQAagTAngKQAVgGAxgJQAhgGAQACQARACAQAKQAPAJAJAPQAEAGAIAWIAJAbQAJAbgFAbQgFAdgRAVQgbAdgwAJQgWADgGADIgXAQQgSAMgXAAQgMAAgNgDg");
	this.shape_235.setTransform(172.2533,85.5224);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("rgba(255,255,255,0.604)").s().p("Ag9CDQgfgIgcgaQgSgSgIgQQgHgQgDgbQgDgrANgbQAKgTAXgRQAagSAogLQAVgGAxgIQAhgGARACQARACAPAJQAQAKAIAPQAEAFAIAXIAKAbQAJAbgFAbQgFAegSAUQgaAegxAIQgVAEgHADIgXAPQgSANgXAAQgMAAgOgEg");
	this.shape_236.setTransform(172.2533,85.5224);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("rgba(255,255,255,0.608)").s().p("Ag9CEQgfgJgcgaQgTgSgHgQQgIgQgCgbQgEgrAOgbQAKgTAXgRQAagTAogKQAVgGAxgJQAhgGARACQARACAQAKQAPAJAJAPQAEAGAIAXIAKAbQAJAbgFAbQgFAegSAUQgbAegxAJQgVADgHADIgXAQQgSAMgXAAQgMAAgOgDg");
	this.shape_237.setTransform(172.2533,85.5224);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("rgba(255,255,255,0.659)").s().p("Ag9CEQgfgJgcgaQgTgSgHgQQgIgQgCgbQgEgrAOgbQAKgTAXgRQAagTAogKQAVgGAxgJQAhgGARACQARACAQAKQAPAJAJAPQAEAGAIAXIAKAbQAJAbgFAbQgFAegSAUQgbAegxAJQgVADgHADIgXAQQgSAMgXAAQgMAAgOgDg");
	this.shape_238.setTransform(172.2533,85.5224);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("rgba(255,255,255,0.706)").s().p("Ag9CEQgfgJgcgaQgTgSgHgQQgIgQgCgbQgEgrAOgbQAKgTAXgRQAagTAogKQAVgGAxgJQAhgGARACQARACAQAKQAPAJAJAPQAEAGAIAXIAKAbQAJAbgFAbQgFAegSAUQgbAegxAJQgVADgHADIgXAQQgSAMgXAAQgMAAgOgDg");
	this.shape_239.setTransform(172.2533,85.5224);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("rgba(255,255,255,0.757)").s().p("Ag9CEQgfgJgcgaQgTgSgHgQQgIgQgCgbQgEgrAOgbQAKgTAXgRQAagTAogKQAVgGAxgJQAhgGARACQARACAQAKQAPAJAJAPQAEAGAIAXIAKAbQAJAbgFAbQgFAegSAUQgbAegxAJQgVADgHADIgXAQQgSAMgXAAQgMAAgOgDg");
	this.shape_240.setTransform(172.2533,85.5224);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("rgba(255,255,255,0.804)").s().p("Ag9CEQgfgJgcgaQgTgSgHgQQgIgQgCgbQgEgrAOgbQAKgTAXgRQAagTAogKQAVgGAxgJQAhgGARACQARACAQAKQAPAJAJAPQAEAGAIAXIAKAbQAJAbgFAbQgFAegSAUQgbAegxAJQgVADgHADIgXAQQgSAMgXAAQgMAAgOgDg");
	this.shape_241.setTransform(172.2533,85.5224);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("rgba(255,255,255,0.855)").s().p("Ag9CEQgfgJgcgaQgTgSgHgQQgIgQgCgbQgEgrAOgbQAKgTAXgRQAagTAogKQAVgGAxgJQAhgGARACQARACAQAKQAPAJAJAPQAEAGAIAXIAKAbQAJAbgFAbQgFAegSAUQgbAegxAJQgVADgHADIgXAQQgSAMgXAAQgMAAgOgDg");
	this.shape_242.setTransform(172.2533,85.5224);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("rgba(255,255,255,0.902)").s().p("Ag9CEQgfgJgcgaQgTgSgHgQQgIgQgCgbQgEgrAOgbQAKgTAXgRQAagTAogKQAVgGAxgJQAhgGARACQARACAQAKQAPAJAJAPQAEAGAIAXIAKAbQAJAbgFAbQgFAegSAUQgbAegxAJQgVADgHADIgXAQQgSAMgXAAQgMAAgOgDg");
	this.shape_243.setTransform(172.2533,85.5224);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("rgba(255,255,255,0.953)").s().p("Ag9CEQgfgJgcgaQgTgSgHgQQgIgQgCgbQgEgrAOgbQAKgTAXgRQAagTAogKQAVgGAxgJQAhgGARACQARACAQAKQAPAJAJAPQAEAGAIAXIAKAbQAJAbgFAbQgFAegSAUQgbAegxAJQgVADgHADIgXAQQgSAMgXAAQgMAAgOgDg");
	this.shape_244.setTransform(172.2533,85.5224);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("Ag9CEQgfgJgcgaQgTgSgHgQQgIgQgCgbQgEgrAOgbQAKgTAXgRQAagTAogKQAVgGAxgJQAhgGARACQARACAQAKQAPAJAJAPQAEAGAIAXIAKAbQAJAbgFAbQgFAegSAUQgbAegxAJQgVADgHADIgXAQQgSAMgXAAQgMAAgOgDg");
	this.shape_245.setTransform(172.2533,85.5224);
	this.shape_245._off = true;

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("rgba(255,255,255,0.188)").s().p("AggDDQg5gMghghQgPgPgPgYQgSgfgGgSQgHgYACgpQADgtALgaQAKgYAcgiQAigoAagNQAegQAsACQAnADAjARQAjAQAZAdQAfAlAJA2QAIAvgKA0QgPBKgrAkQgdAZgqAHQgQACgRAAQgWAAgZgFg");
	this.shape_246.setTransform(100.7691,102.4944);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("rgba(255,255,255,0.188)").s().p("AgMDHIgTgDQgTgEgQgGQgdgLgVgSIgGgGIgHgIQgHgHgGgKIgKgPIgDgFIgLgUQgHgOgDgKIgEgSQgEgSACgaIAAgDQABgYAEgSQAEgRAFgNIAHgNIAKgQIALgPIALgNIABgBIAMgOQAVgXARgLIAJgFIAGgDQAJgEALgDIAPgDIAPgBIASAAIAHABQAOABANADQARAEAPAHIAIADQAKAFAKAGQAOAJAMALIAOAPIAIAKQAGAJAFAKIAJASIAJAbIAEARIABAIQAEAcgCAeQgCARgDARIgEAOQgKAqgUAcQgLAPgNALIgCACQgPAMgSAIQgRAHgUADQgPADgQAAIgGAAQgLAAgMgCg");
	this.shape_247.setTransform(100.7608,102.4675);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("rgba(255,255,255,0.196)").s().p("AgKDNIgUgDQgTgEgRgGQgegLgWgSIgGgHIgIgHQgHgIgGgKIgKgPIgEgFIgMgVQgHgNgDgLQgDgIgCgKQgDgTABgbIAAgCQABgZAEgTQAEgRAFgNIAHgOIALgQIALgQIALgOIABgBIAMgPQAVgXASgMIAJgFIAHgDQAJgFALgCIAPgEIAQgBQAJgBAJAAIAHABIAdAEQARAEAPAHIAJADQAKAFAKAGQAPAJANALQAIAHAHAIIAHAKQAHAJAFAKIAKAUQAFAMAEAPIAEARIABAIQAFAegCAeQgBASgEARIgDAPQgKAqgVAeQgLAPgOAMIgCACQgPANgTAIQgRAHgUAEQgQADgQAAIgKABIgUgCg");
	this.shape_248.setTransform(100.8326,102.2083);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("rgba(255,255,255,0.212)").s().p("AgFDeIgWgCQgUgEgTgGQghgLgYgUIgGgHIgJgIIgOgTIgMgPIgEgGIgOgVQgJgOgEgLQgEgJgCgKQgFgVABgdIAAgDQABgaAFgVQAEgSAGgOIAHgPIAMgSIAMgRIALgPIABgCIANgQQAUgZAUgOIAKgGIAHgEQALgFALgDIAQgEQAIgCAJgBQAKgBAKAAIAHAAIAfAEQAUADAQAHIAJADQAMAEALAGQAQAJAOAMQAJAHAHAJIAJALQAHAJAGALIAKAVIALAdIAFATIACAIQAGAfgBAiQAAATgEASIgDARQgKAtgXAhQgMAQgPAOIgCACQgQANgUAKQgTAJgVAEQgRAFgRABIgUAAIgMAAg");
	this.shape_249.setTransform(100.9936,101.545);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("rgba(255,255,255,0.239)").s().p("AgVD9QgYgCgWgHQglgMgcgXIgIgIIgKgKIgSgUIgPgRIgFgEQgMgNgGgKQgLgPgGgNQgFgJgDgMQgIgYABghIAAgCQAAgdAGgaQAFgVAHgQIAJgQIAOgUIANgVIALgTIABgBQAHgNAGgHQAVgdAXgRIAMgIIAIgEQANgGALgEIASgGQAKgEAIgCQAMgCANgBIAJAAIAjADQAXACARAGIAMADQANAEANAGQAUAJAQANQALAIAIAJIAKAMQAJAKAHAOIAMAXIAOAhIAHAUIADAKQAIAiACAoQAAAWgCAVIgDASQgKA0gcAoQgOARgRAQIgCADQgSAPgXANQgVAMgXAGQgTAHgTADQgSADgTAAIgYgBg");
	this.shape_250.setTransform(101.3526,100.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("rgba(255,255,255,0.29)").s().p("AgKEzQgdgBgcgHQgugNgjgcIgKgJIgMgLIgWgXQgIgJgNgKIgGgGQgRgNgJgLQgOgQgKgQQgGgLgFgOQgMgdgBgmIAAgDQgBgkAIgfQAGgYAKgUQAEgKAHgKIARgYIAPgYQAGgLAGgOIABgBQAIgTAFgIQAVgkAdgWIAPgKIAKgFQAQgJAMgFIAVgKQAMgGAKgCQANgFAQgCIALgBIArABQAeABAUAFIAOADQASADAPAGQAZAJAUAOQAOAJALALIAMAOQAKAMAJAQIAPAdIATAlQAHANAEANIAEALQANAmAFA0QACAagBAYIgCAXQgKA8gkAzQgQAWgVAUIgDADQgUASgcASQgZAQgZAKQgXAKgWAGQgVAGgXACIgUABIgJAAg");
	this.shape_251.setTransform(101.9476,98.275);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("rgba(255,255,255,0.361)").s().p("AhFF9Qg7gOgsgjIgNgLIgQgPIgegbQgKgKgSgLIgJgGQgYgQgMgMQgUgSgOgUQgJgOgIgQQgSgmgDguIAAgCQgCgtALgoQAHgeANgaQAGgMAJgNIAVgeQAMgRAHgOQAHgNAGgUIABgCQAIgaAFgIQAVgwAmgeIATgNIANgHIAigSQAGgDAUgNQAOgJAMgEQARgIAVgEIAOgCQAWgCAhAAQAngBAYAEIATACQAWADAUAGQAgAJAbAPQASALAOANIAQARQAMAOAMAVIAUAkIAaAuIARAfIAGAOQATAtAKBEQAFAiAAAdQAAAPgBANQgIBLgwBDQgUAbgbAaIgEAEQgYAWgkAaQgeAWgdAPQgdARgZAJQgbALgcAFQgTADgTABIgHAAQghAAgggHg");
	this.shape_252.setTransform(102.9269,95.2528);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("rgba(255,255,255,0.463)").s().p("AhJHxQhLgPg7guIgRgOIgVgTQgYgVgQgNQgOgKgZgOIgMgHQgjgTgQgNQgbgUgVgaQgNgRgLgVQgbgxgGg6IAAgBQgFg5APg3QAKglASghQAIgQALgQIAcgnQAQgWAIgSQAIgRAGgbIABgCQAJglAEgLQAWg+AygpQAKgIAPgJIAQgKIAqgZQAHgEAagTQATgOAOgHQAWgMAbgGIASgEQAbgEAtgCQA1gDAdABIAZACQAeABAZAGQArAJAjASQAYANATAQQAMAKAKALQAOASAQAbIAbAuQALATAaAmQAPAXAJARIAKARQAaA3ASBaQAKAuABAjQABAUgBARQgHBehABZQgZAigjAjIgGAGQgcAbgvAmQgmAfgjAWQgkAZgfAOQgjARgjAJQgYAGgZADIgcABQghAAgigGg");
	this.shape_253.setTransform(104.3512,90.9615);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("rgba(255,255,255,0.6)").s().p("AhNKMQhjgRhNg7IgzgrQgggcgUgOQgXgPgwgWQgwgXgWgOQg+gngnhCQgnhAgJhLQgJhIAVhKQAThGArg+IAlgyQAVgdAKgYQAKgXAHgmIAMhAQAXhTBDg3QASgOAjgWQAngXAPgLIApghQAYgVASgKQAkgWA0gLQAhgGA9gGQBGgGAkgBQA8gBAvAHQA5AJAuAWQA0AYAiAmQATAWAVAjIAjA9QAOAWAlAyQAhAtAQAcQAlBDAcB4QAXBdgCA7QgFB5hXB3QgiAvgzAyQgkAkg8A0QhpBbhHAoQgsAZgtAPQg6ASg8AAQgjAAgkgGg");
	this.shape_254.setTransform(106.2836,85.1266);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_226}]}).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246},{t:this.shape_245}]},4).to({state:[{t:this.shape_247},{t:this.shape_245}]},1).to({state:[{t:this.shape_248},{t:this.shape_245}]},1).to({state:[{t:this.shape_249},{t:this.shape_245}]},1).to({state:[{t:this.shape_250},{t:this.shape_245}]},1).to({state:[{t:this.shape_251},{t:this.shape_245}]},1).to({state:[{t:this.shape_252},{t:this.shape_245}]},1).to({state:[{t:this.shape_253},{t:this.shape_245}]},1).to({state:[{t:this.shape_254},{t:this.shape_245}]},1).to({state:[{t:this.shape_254},{t:this.shape_245}]},1).to({state:[{t:this.shape_254},{t:this.shape_245}]},1).to({state:[{t:this.shape_254},{t:this.shape_245}]},1).to({state:[{t:this.shape_254},{t:this.shape_245}]},1).to({state:[{t:this.shape_254},{t:this.shape_245}]},1).to({state:[{t:this.shape_254},{t:this.shape_245}]},1).to({state:[{t:this.shape_254},{t:this.shape_245}]},1).to({state:[{t:this.shape_254},{t:this.shape_245}]},1).to({state:[{t:this.shape_254},{t:this.shape_245}]},1).to({state:[]},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.shape_245).wait(20).to({_off:false},0).wait(33).to({_off:true},1).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,372.1,201);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhURAhSMAAAhCjMCojAAAMAAABCjg");
	mask.setTransform(539.375,213.025);

	// Capa_3
	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(539.8,213,1,1,0,0,0,539.8,213);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,1078.8,426.1), null);


(lib.escudosgrises = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(171.7,67.75,0.3181,0.3181,0,0,0,539.9,213);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.escudosgrises, new cjs.Rectangle(0,0,343.4,135.5), null);


(lib.autorayescudos = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.escudosgrises();
	this.instance_1.setTransform(264.4,157.05,1,1,0,0,0,172.1,68);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.autorayescudos, new cjs.Rectangle(0,0,528.5,224.6), null);


// stage content:
(lib.animacion_pig = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [114];
	// timeline functions:
	this.frame_114 = function() {
		this.stop();
		
		this.aPortada.addEventListener("click", iniciar.bind(this));
		
		function iniciar() {
			
			window.open("../contenido.html", "_parent");
		
			/*window.location.href = 'portadilla.html';*/
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(114).call(this.frame_114).wait(1));

	// titulo
	this.instance = new lib.titulocompleto();
	this.instance.setTransform(349.5,249.8,1,1,0,0,0,206.5,124.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(109).to({_off:false},0).to({alpha:1},5).wait(1));

	// animacionreduc
	this.instance_1 = new lib.secuenciaanimadaredux();
	this.instance_1.setTransform(350,350,0.3871,0.3871,0,0,0,186,100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1},59,cjs.Ease.cubicInOut).wait(10).to({regX:186.5,regY:100.7,scaleX:0.425,scaleY:0.425,x:274.15,y:331.95},40,cjs.Ease.cubicInOut).to({_off:true},5).wait(1));

	// negro
	this.instance_2 = new lib.fondonegro();
	this.instance_2.setTransform(350,350,1,1,0,0,0,350,350);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({alpha:0},31).to({_off:true},1).wait(24));

	// btn
	this.aPortada = new lib.botontrans();
	this.aPortada.name = "aPortada";
	this.aPortada.setTransform(349.25,258.55,1,1,0,0,0,249.6,167.3);
	this.aPortada._off = true;
	new cjs.ButtonHelper(this.aPortada, 0, 1, 2, false, new lib.botontrans(), 3);

	this.timeline.addTween(cjs.Tween.get(this.aPortada).wait(114).to({_off:false},0).wait(1));

	// escudos
	this.instance_3 = new lib.autorayescudos();
	this.instance_3.setTransform(349.95,551.15,1,1,0,0,0,264.1,101.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(109).to({_off:false},0).to({alpha:1},5).wait(1));

	// pig1
	this.instance_4 = new lib.pig();
	this.instance_4.setTransform(349.05,331.9,0.4999,0.4999,0,0,0,412.2,85.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(114).to({_off:false},0).wait(1));

	// anatomia
	this.instance_5 = new lib.anatomia();
	this.instance_5.setTransform(349.5,499.3,1,1,0,0,0,206.5,124.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(83).to({_off:false},0).to({y:249.8,alpha:1},21,cjs.Ease.cubicOut).wait(11));

	// del_cerdo
	this.instance_6 = new lib.delcerdominuatura();
	this.instance_6.setTransform(349.5,430.75,1,1,0,0,0,206.5,124.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(93).to({_off:false},0).to({y:249.8,alpha:1},15,cjs.Ease.cubicOut).wait(7));

	// en_crc_imiento
	this.instance_7 = new lib.en_crecimientp();
	this.instance_7.setTransform(349.5,336.3,1,1,0,0,0,206.5,124.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(98).to({_off:false},0).to({y:249.8,alpha:1},16,cjs.Ease.cubicOut).wait(1));

	// fondo
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#C9C9CE","#FFFFFF"],[0.604,0.867,1],0,-350,0,350).s().p("Eg2rA2sMAAAhtXMBtXAAAMAAABtXg");
	this.shape.setTransform(351.05,352.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#E2E2E8","#FFFFFF"],[0.604,0.867,1],0,-350,0,350).s().p("Eg2rA2sMAAAhtXMBtXAAAMAAABtXg");
	this.shape_1.setTransform(351.05,352.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},59).to({state:[{t:this.shape_1}]},1).wait(55));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(350,350,351.1,352.1);
// library properties:
lib.properties = {
	id: '687DB71800FE46C9A616D355D98E943A',
	width: 700,
	height: 700,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/animacion_pig_atlas_1.png", id:"animacion_pig_atlas_1"}
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
an.compositions['687DB71800FE46C9A616D355D98E943A'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;