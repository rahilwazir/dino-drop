/**
 * @author Rw
 * @year 2014
 */
function DinoDrop() {

    this.canvas = null;
    this.ctx = null;
    this.cWidth = 0;
    this.cHeight = 0;
    this.animLoopFrame = null;

    this.lastTime = null;
    this.gameTime = 0;

    window.listener = new window.keypress.Listener();

    // initializer method
    this.init();
}

DinoDrop.prototype.init = function() {

    if (this.canvas === null) {
        this.canvas = document.getElementById('dino-drop');

        this.canvas.width = Math.min(window.innerWidth, 5000);
        this.canvas.height = Math.min(window.innerHeight, 5000);

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

    var now = Date.now();
    var dt = (now - this.lastTime) / 1000.0;

    this.lastTime = now;

    this.animLoopFrame = window.requestAnimationFrame(this.animLoop.bind(this, callback));

    this.ctx.clear();

    if (callback && typeof callback === 'function') {
        callback();
        this.gameTime += dt;
    }


};

var dd = new DinoDrop();