/** Beatriz Manrique
 * CSE 3353
 * Project 2: Compression and Decompression
 */
'use strict';

 // load chance
var Chance = require('chance');

 // instantiate chance
var chance = new Chance();

 // use chance
var flightData = [];
var word = '';

for (var i = 0; i < 5; i++){
    word += (chance.string({length:5, pool:'ABCDEFGHIJKLMNOPQRSTUVWXYZ!?.,-'}));
    word += " ";
 }

 // write to txt file
const fs = require('fs');
fs.writeFile('uncompressed.txt', word, 'utf-8', function(err){
    if(err){
        return console.log(err);
    }
});