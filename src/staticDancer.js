var StaticDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.$node.removeClass("dancer");
  this.$node.addClass("static-dancer");
  // this.$node.wrap( "<div class='static-dancer'></div>" );
  
};

StaticDancer.prototype = Object.create(Dancer.prototype);
StaticDancer.prototype.constructor = StaticDancer;

StaticDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.apply(this);
  this.$node.show();
  this.$node.toggleClass("static-dancer-flipped");
};

