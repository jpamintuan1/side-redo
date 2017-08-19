var DigitalPal = function() {
  this.hungry = false;
  this.sleepy = false;
  this.bored = true;
  this.age = 0;
  this.feed = function() {
    if (this.hungry) {
      console.log("This was Yummy");
      this.hungry = false;
      this.sleepy = true;
    }
    else {
      console.log("No thanks, I'm full!")
    }
  }
  this.sleep = function() {
    if(this.sleepy) {
      console.log("Zzzzzzzz");
      this.sleepy = false;
      this.bored = true;
      this.increaseAge();
    }
    else {
      console.log("No way! I'm not tired.");
    }
  }
  this.play = function(){
    var pharse;
    if(this.bored){
      pharse="Yay! Let's play!";
      this.hungry = true;
      this.bored = false;
    } else{
      pharse = "Not right now. Later?"
    }
    console.log(pharse);
  }
  this.increaseAge = function(){
    this.age += 1;
    console.log("happy Birthday to me! I am " + this.age + " old!");
  };
};

var dog = new DigitalPal();
dog.outside = false;
dog.bark = function() {
  console.log('woof! woof!');
}
dog.goOutside = function() {
  if ( this.outside ) {
    console.log("We're already outside though")
  } else {
    console.log("Yay! I love the outdoors!");
    this.outside = true;
    this.bark();
  }
}

// dog.bark();
// dog.goOutside();
// dog.feed();
dog.sleepy = true;
dog.sleep()

var cat = new DigitalPal();

cat.HouseCondition = 100;
cat.meow = function() {
  console.log('Meow! Meow!');
}

// cat.meow();
