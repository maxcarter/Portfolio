'use strict';

/**
 * @ngdoc service
 * @name portfolioApp.games
 * @description
 * # games
 * Factory in the portfolioApp.
 */
angular.module('portfolioApp')
  .factory('Games', function() {
    return {
      "vaporizer": {
        "name": "Vaporizer",
        "width": 550,
        "height": 400,
        "src": "games/vaporizer.swf",
        "background": "#000000",
        "instructions": "W, A, S, D to move around and jump. Mouse to aim. Click to shoot. The objective of the game is to eliminate as many alien spaceships as possible.",
      },
      "are-you-nuts": {
        "name": "Are You Nuts?",
        "width": 750,
        "height": 400,
        "background": "#000000",
        "src": "games/are-you-nuts.swf",
        "instructions": "Mouse to aim. Click and hold to shoot at various power levels. The objective of the game is to protect your nest from birds.",
      },
      "chalkboard": {
        "name": "Max's Chalkboard",
        "width": 550,
        "height": 400,
        "background": "#ffffff",
        "src": "games/chalkboard.swf",
        "instructions": "Click and drag on the board to draw.",
      },
      "mouse": {
        "name": "Mouse",
        "width": 550,
        "height": 400,
        "background": "#ffffff",
        "src": "games/mouse.swf",
        "instructions": "Hold space to move in the direction of the cursor.",
      },
      "crokinole": {
        "name": "Crokinole",
        "width": 571,
        "height": 500,
        "background": "#000000",
        "src": "games/crokinole.swf",
        "instructions": "See in-game instructions.",
      }
    };
  });
