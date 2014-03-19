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

    this.lastTime = null;
    this.gameTime = 0;
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

        this.ctx.scale(2, 2);
    }
};

DinoDrop.prototype.cancelAnimLoop = function() {
    if (this.animLoopFrame) {
        window.cancelAnimationFrame(this.animLoopFrame);
    }
    this.animLoopFrame = null;
};

DinoDrop.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.cWidth, this.cHeight);
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
};

DinoDrop.prototype.animLoop = function(callback) {

    var now = Date.now();
    var dt = (now - this.lastTime) / 1000.0;

    this.lastTime = now;

    this.animLoopFrame = window.requestAnimationFrame(this.animLoop.bind(this, callback));

    this.clear();

    if (callback && typeof callback === 'function') {
        callback();
        this.gameTime += dt;
    }


};

var dd = new DinoDrop();