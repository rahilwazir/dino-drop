dinodrop.dragon = Object.create(dinodrop);

dinodrop.dragon.x = 0;
dinodrop.dragon.y = 0;
dinodrop.dragon.rotation = 0;

dinodrop.dragon.ctx.translate(100, 150);

dinodrop.dragon.draw = function() {
    var ctx = this.ctx;

    ctx.save();

    ctx.strokeStyle = "#000000";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 50);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    return this;
};