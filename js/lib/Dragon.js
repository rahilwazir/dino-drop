dd.dragon = Object.create(dd);

dd.dragon.x = 100;
dd.dragon.y = 150;

dd.dragon.sx = 0;
dd.dragon.sy = 0;
dd.dragon.spriteChanger = [0, 119, 218];
dd.dragon.swh = [135, 112];
dd.dragon.position = 0;
dd.dragon.speed = 5;

dd.dragon.rotation = 0;

dd.dragon.image = new Image();
dd.dragon.image.src = 'images/dragon-sprite.png';

dd.dragon.initFrame = 1;
dd.dragon.totalFrames = 3;

dd.dragon.draw = function() {
    var ctx = this.ctx,
        imageObj = this.image, frame;

    ctx.save();
    ctx.drawImage(imageObj, this.sx, this.sy, this.swh[0], this.swh[1], this.x, this.y, this.swh[0], this.swh[1]);
    ctx.restore();

    return this;
};

dd.dragon.walk = function(direction) {

    switch (direction) {
        case 'right':
            this.x = (this.x >= (this.cWidth - this.swh[0]) ? (this.cWidth - this.swh[0]) : this.x += this.speed);
            dd.dragon.sy = 0;
            break;
        case 'left':
            this.x = (this.x <= 0 ? 0 : this.x -= this.speed);
            dd.dragon.sy = 0;
            break;
        default:
            break;
    }
};