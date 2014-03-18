/**
 * @author Rw
 * @year 2014
 */
function DinoDrop() {
    var self = this;

    this.canvas = null;
    this.ctx = null;
    this.cWidth = 0;
    this.cHeight = 0;
    this.animLoopFrame = null;

    this.dnow = Date.now();
    this.dt = null;
    this.changer = null;
    this.fps = 30;
    this.interval = 1000/this.fps;

    window.listener = new window.keypress.Listener();

    // initializer method
    this.init();
}

DinoDrop.prototype.init = function() {

    if (this.canvas === null) {
        this.canvas = document.getElementById('dino-drop');

        this.canvas.width = document.body.clientWidth;
        this.canvas.height = document.body.clientHeight;

        this.cWidth = this.canvas.width;
        this.cHeight = this.canvas.height;

        this.ctx = this.canvas.getContext('2d');
    }
};

DinoDrop.prototype.cancelAnimLoop = function() {
    if (this.animLoopFrame) {
        window.cancelAnimationFrame(this.animLoopFrame);
    }
    this.animLoopFrame = null;
};

DinoDrop.prototype.animLoop = function(callback) {
    this.animLoopFrame = window.requestAnimationFrame(this.animLoop.bind(this, callback));

    this.ctx.clearRect(0, 0, this.cWidth, this.cHeight);
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);

    this.changer = Date.now();
    this.delta = this.changer - this.dnow;

    if (this.delta > this.interval) {
        this.dnow = this.changer - (this.delta % this.interval);

        if (callback && typeof callback === 'function') {
            callback();
        }
    }

};

var dd = new DinoDrop();