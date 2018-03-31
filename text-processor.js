/** Beatriz Manrique
 * CSE 3353
 * Project 2: Compression and Decompression
 */
'use strict';

// read in text file data
const fs = require('fs');

try {  
    var words = fs.readFileSync('uncompressed.txt', 'utf8');
    //console.log(words);    
} catch(e) {
    console.log('Error:', e.stack);
}

const minHeap = require('./min-heap2.js');

// determine frequency of each character and add to array of objects
var data = [];
function buildData(words){
    for(var i = 0; i < words.length; i++){
        var char = words[i];
        if (data.length === 0){
            var info = {
                character: char,
                frequency: 1,
            };
            data.push(info);
        }
        else {
            var status = false;
            for (var j = 0; j < data.length; j++){
                if (char === data[j].character){
                    data[j].frequency++;
                    status = true;
                    break;
                }
            }
            if (status === false){
                var info = {
                    character: char,
                    frequency: 1,
                };
                data.push(info);
            }
        }
    }
}

// Testing
buildData(words);
//console.log(data);
minHeap.prototype.heapify(data);
console.log(data);