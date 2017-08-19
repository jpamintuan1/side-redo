var Dogs = {
  raining: true,
  noise: "woof!",
  makeNoise: function() {
    if ( this.raining ) {
      console.log(this.noise);
    }
  }
}

var Cats = {
  raining: false,
  noise: "meow!",
  makeNoise: function() {
    if ( this.raining ) {
      console.log(this.noise);
    }
  }
}

dogs.makeNoise();
cats.raining = true;
cats.makeNoise();

function massHysteria() {
  if (dogs.raining && cats.raining) {
    console.log('dogs and cats living together mass hysteria');
  }
}

massHysteria();

