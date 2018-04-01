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

// use functions from min-heap.js file
const minHeap = require('./min-heap.js');

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

// verification of minHeap property 
const assert = require('assert');

function check(data){
    for (var i = data.length-1; i >= 0; i--){
        //console.log(minHeap.prototype.getParent(i));
        var p = minHeap.prototype.getParent(i);
        assert(data[i].frequency >= data[p].frequency);
    }
}

// Functionality
buildData(words);
minHeap.prototype.heapify(data);
check(data);

module.exports = {data: data, words: words};