/**
 * @author Rw
 * @year 2014
 */

function DinoDrop() {
    this.canvas = null;
    this.ctx = null;
    this.cWidth = 0;
    this.cHeight = 0;

    // initializer methods
    this.init();
}

DinoDrop.prototype.init = function() {

    if (this.canvas === null) {
        this.canvas = document.getElementById('dino-drop');

        this.cWidth = this.canvas.width;
        this.cHeight = this.canvas.height;

        this.canvas.width = document.body.clientWidth;
        this.canvas.height = document.body.clientHeight;

        this.ctx = this.canvas.getContext('2d');
    }
};

DinoDrop.prototype.clearCanvas = function() {
    this.ctx.clearRect(0, 0, this.cWidth, this.cHeight);
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
};

var dinodrop = new DinoDrop();

dinodrop.animLoop = function(callback) {
    window.requestAnimationFrame(dinodrop.animLoop);

    this.clearCanvas();

    /*try {
        callback.apply(dinodrop, arguments) ||
    }*/
};