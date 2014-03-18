window.addEventListener('load', function() {
    'use strict';

    var dragon = dd.dragon;

    // draw dragon
    dragon.draw();

    var my_combos = [
        {
            "keys"          : "right",
            "is_exclusive"  : true,
            "on_keydown"    : function() {
                dragon.animLoop(function() {
                    dragon.x++;
                    dragon.draw();
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
                    dragon.draw();
                });
            },
            "on_keyup"      : function() {
                dragon.cancelAnimLoop();
            }
        },
        {
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
        },
    ];

    listener.register_many(my_combos);

}, false);