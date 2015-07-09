var RotatingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.$node.removeClass("dancer");
  this.$node.addClass("storm-trooper");
  // this.$node.wrap( "<div class='Rotating-dancer'></div>" );
  
};

RotatingDancer.prototype = Object.create(Dancer.prototype);
RotatingDancer.prototype.constructor = RotatingDancer;

RotatingDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.apply(this);

  // this.$node.toggleClass("rotating-dancer-flipped");
  // this.$node.show();
};

