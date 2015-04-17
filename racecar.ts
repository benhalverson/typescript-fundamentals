class raceCar {
  engine: string;
  constructor(engine:string){
    this.engine = engine;
  }

  start() {
    alert('Engine started: ' + this.engine);
  }

  stop() {
    alert('Engine stopped: ' + this.engine);
  }
}

window.onload = function() {
  var racecar = new raceCar('V8');
  racecar.start();
  racecar.stop();
  racecar.start();
}
