window.addEventListener('load', function() {
    'use strict';

    var dragon = dd.dragon,
        sky = dd.sky;

    var _dragon = function() {
            dragon.draw();
        },
        _sky = function() {
            sky.draw();
        };


    // draw dragon
    dragon.draw();

    var my_combos = [
        {
            "keys"          : "right",
            "is_exclusive"  : true,
            "on_keydown"    : function() {
                dragon.animLoop(function() {
                    dragon.x++;
                    _sky();
                    _dragon();
                });
            },
            "on_keyup"      : function() {
                dragon.cancelAnimLoop();
            }
        },
        {
            "keys"          : "left",
            "is_exclusive"  : true,
            "on_keydown"    : function() {
                dragon.animLoop(function() {
                    dragon.x--;
                    _sky();
                    _dragon();
                });
            },
            "on_keyup"      : function() {
                dragon.cancelAnimLoop();
            }
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

    var angle = 0;

    dragon.animLoop(function() {
        dragon.x += 0.1;
        dragon.y = dd.cHeight / 2 + Math.sin(angle) * 30;
        angle += 0.1;

        if (dragon.y > 340) {
            dragon.initFrame = 2;
        }

        _sky();
        _dragon();

    });

    listener.register_many(my_combos);

}, false);