dd.sky = Object.create(dd);
dd.grass = Object.create(dd);

dd.sky.image = new Image();

dd.sky.image.onload = function() {
    dd.sky.draw();
};

dd.sky.image.src = 'images/sky.png';

dd.sky.ctx.translate(0, 0);

dd.sky.draw = function() {
    var ctx = this.ctx;

    ctx.save();
    ctx.drawImage(this.image, 0, 0, this.cWidth, this.cHeight, 0, 0, this.cWidth, this.cHeight);
    ctx.restore();

    return this;
};
/*
dd.grass.image = new Image();

dd.grass.image.onload = function() {
    dd.grass.draw();
};

dd.grass.image.src = 'images/below-grass.png';

dd.grass.ctx.translate(0, 0);

dd.grass.draw = function() {
    var ctx = this.ctx;

    ctx.save();
    ctx.drawImage(this.image, 0, 0, this.cWidth, this.cHeight, 0, 0, this.cWidth, this.cHeight);
    ctx.restore();

    return this;
};*/