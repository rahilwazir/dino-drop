dd.dragon = Object.create(dd);

dd.dragon.x = 100;
dd.dragon.y = 150;

dd.dragon.sx = 0;
dd.dragon.sy = 0;
dd.dragon.swh = [135, 112];
dd.dragon.position = 0;

dd.dragon.rotation = 0;

dd.dragon.image = new Image();
dd.dragon.image.src = 'images/dragon-sprite.png';

dd.dragon.initFrame = 1;
dd.dragon.totalFrames = 3;

dd.dragon.ctx.translate(this.x, this.y);

dd.dragon.draw = function() {
    var ctx = this.ctx,
        imageObj = this.image, frame;

    if (this.initFrame >= 1) {
        frame = this.initFrame * this.swh[0];
    } else {
        this.initFrame = 1;
    }

    if (this.initFrame > (this.totalFrames - 1)) {
        this.initFrame = 1;
    }

    frame = ( (this.initFrame === 1) ? this.swh[0] : this.initFrame * this.swh[0]);

    ctx.save();
    ctx.drawImage(imageObj, this.sx, this.sy, frame, this.swh[1], this.x, this.y, frame, this.swh[1]);
    ctx.restore();

    return this;
};