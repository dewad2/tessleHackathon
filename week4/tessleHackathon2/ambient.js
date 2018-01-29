'use strict';

const tessel = require('tessel');
const ambientlib = require('ambient-attx4');
const ambient = ambientlib.use(tessel.port['A']);
const scream = require('./audio.js');
const camera = require('./camera.js');

ambient.on('ready', function () {
 // Get points of light and sound data.
  let bool = false;
  setInterval( function () {
    ambient.getLightLevel( function(err, lightdata) {
      if (err) throw err;
      ambient.getSoundLevel( function(err, sounddata) {
        if (err) throw err;
        console.log("Light level:", lightdata.toFixed(8), " ", "Sound Level:", sounddata.toFixed(8));
        if (lightdata.toFixed(8) > 0.02) {
          scream();
          if (!bool) {
              camera();
              bool = true;
          }
        }
      });
    });
  }, 250); // The readings will happen every .5 seconds
});
ambient.on('error', function (err) {
  console.log(err);
});

module.exports = ambient;