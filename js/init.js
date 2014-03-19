window.addEventListener('load', function() {
    'use strict';

    var dragon = dd.dragon,
        sky = dd.sky,
        grass = dd.grass;

    var _dragon = function() {
            dragon.draw();
        },
        _sky = function() {
            sky.draw();
        },
        _grass = function() {
            grass.draw();
        };


    var allAnimationSprites = function () {
        _sky();
        _dragon();
        _grass();
    };

    allAnimationSprites();

    var my_combos = [
        {
            "keys"          : "right",
            "is_exclusive"  : true,
            "on_keydown"    : function() {
                dragon.animLoop(function() {
                    dragon.animate('right');
                    allAnimationSprites();
                });
            },
            "on_keyup"      : function() {
                dragon.cancelAnimLoop();
            },
            "prevent_repeat" : true
        },
        {
            "keys"          : "left",
            "is_exclusive"  : true,
            "on_keydown"    : function() {
                dragon.animLoop(function() {
                    dragon.animate('left');
                    allAnimationSprites();
                });
            },
            "on_keyup"      : function() {
                dragon.cancelAnimLoop();
            },
            "prevent_repeat" : true
        },
        /*{
            "keys"          : "up",
            "is_exclusive"  : true,
            "on_keydown"    : function() {
                dragon.animLoop(function() {
                    dragon.y--;
                    dragon.draw();
                });
            },
            "on_keyup"      : function() {
                dragon.cancelAnimLoop();
            }
        },
        {
            "keys"          : "down",
            "is_exclusive"  : true,
            "on_keydown"    : function() {
                dragon.animLoop(function() {
                    dragon.y++;
                    dragon.draw();
                });
            },
            "on_keyup"      : function() {
                dragon.cancelAnimLoop();
            }
        }*/
    ];

    listener.register_many(my_combos);

    var angle = 0;

    dragon.animLoop(function() {
        dragon.y = dd.cHeight / 8 + Math.sin(angle) * 30;
        angle += 0.1;

        /*if (dragon.y > 340) {
            dragon.initFrame = 2;
        }*/

        allAnimationSprites();

    });

}, false);