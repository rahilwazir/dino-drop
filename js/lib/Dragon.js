dd.dragon = Object.create(dd);

dd.dragon.x = 100;
dd.dragon.y = 150;
dd.dragon.rotation = 0;
dd.dragon.image = new Image();
dd.dragon.image.src = 'images/dragon.png';

dd.dragon.ctx.translate(this.x, this.y);

dd.dragon.draw = function() {
    var ctx = this.ctx;

    ctx.save();
    ctx.drawImage(this.image, this.x, this.y);
    ctx.restore();

    return this;
};