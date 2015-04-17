var raceCar = (function () {
    function raceCar(engine) {
        this.engine = engine;
    }
    raceCar.prototype.start = function () {
        alert('Engine started: ' + this.engine);
    };
    raceCar.prototype.stop = function () {
        alert('Engine stopped: ' + this.engine);
    };
    return raceCar;
})();
window.onload = function () {
    var racecar = new raceCar('V8');
    racecar.start();
    racecar.stop();
    racecar.start();
};
