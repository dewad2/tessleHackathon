'use strict';

const tessel = require('tessel');
const av = require('tessel-av');
const path = require('path');
const mp3 = path.join(__dirname, 'SCREAM_4.mp3');
const sound = new av.Player(mp3);

console.log('mp3', mp3);

const scream = function() {
  sound.play();
  // sound.on('ended', function(seconds) {
  //   sound.play();
  // })
};
//scream();


module.exports = scream;