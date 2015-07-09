// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // var dancer = {};
  // use jQuery to create an HTML <span> tag
  // dancer.$node = $('<span class="dancer"></span>');
  this.$node = $('<div class="dancer"></div>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.spot = window.currentPosition;
  window.currentPosition++;

  // push to global dancers
  window.dancers.push(this);
  

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};


Dancer.prototype.step = function() {
  // console.log(this.step, this.timeBetweenSteps);
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(){
  var spacing = $('body').width() / window.dancers.length;
  this.setPosition($('body').height() / 2, this.spot * spacing);

};

Dancer.prototype.tangoPartner = function(partner) {
  var top = this.$node.css('top');
  var left = this.$node.css('left');
  var partTop = partner.$node.css('top');
  var partLeft = partner.$node.css('left');

  this.$node.css('top', partTop);
  this.$node.css('left', partLeft);
  partner.$node.css('top', top);
  partner.$node.css('left', left);
};


// Old Code
  // dancer.step = function(){
  //   // the basic dancer doesn't do anything interesting at all on each step,
  //   // it just schedules the next step
  //   setTimeout(dancer.step, timeBetweenSteps);
  // };
  // // dancer.step();




  // dancer.setPosition = function(top, left){
  //   // Use css top and left properties to position our <span> tag
  //   // where it belongs on the page. See http://api.jquery.com/css/
  //   //
  //   var styleSettings = {
  //     top: top,
  //     left: left
  //   };
  //   dancer.$node.css(styleSettings);
  // };
  // // dancer.setPosition(top, left);