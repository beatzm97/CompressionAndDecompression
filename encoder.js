/** Beatriz Manrique
 * CSE 3353
 * Project 2: Compression and Decompression
 */
'use strict';

// read in data and textfile
const info = require('./text-processor.js');
var data = info.data;   // info.data -> minHeap
var words = info.words; // info.words -> textFile

// use functions from min-heap.js file
const minHeap = require('./min-heap.js');

// make the Huffman Encoding Tree
function huffmanEncoding(data){
    while(data.length > 1)
    {
        var childOne = minHeap.prototype.removeMin(data);
        var childTwo = minHeap.prototype.removeMin(data);
        createNode(childOne, childTwo);
    }
    characterTable(data, codeTab, charTab);
    encoding(words, charTab);
}

// subfunction for tree
function createNode(childOne, childTwo){
    var node = {
        childOne: childOne,
        childOneCode: 1,
        childTwo: childTwo,
        childTwoCode: 0,
        frequency: childOne.frequency + childTwo.frequency,
    };
    minHeap.prototype.insert(data, node)
}

// encode data by making table
var charTab = [];
var codeTab = [];
function characterTable(data, codeTab, charTab){
    traversal(charTab, codeTab, data[0]);
}

function traversal(charTab, codeTab, location){
    if (!location.childOne.character){
        codeTab.push(location.childOne.childOneCode);
        traversal(charTab, codeTab, location.childOne);
    }
    else if (location.childOne.character){
        codeTab.push(location.childOneCode);
        var code = '';
        for (var i = 0; i < codeTab.length; i++){
            code += codeTab[i];
        }
        var element = {
            character: location.childOne.character,
            code: code,
        };
        charTab.push(element);
        codeTab.pop();
    }
    if (!location.childTwo.character){
        codeTab.push(location.childTwo.childTwoCode);
        traversal(charTab, codeTab, location.childTwo);
    }
    else if (location.childTwo.character){
        codeTab.push(location.childTwoCode);
        var code = '';
        for (var i = 0; i < codeTab.length; i++){
            code += codeTab[i];
        }
        var element = {
            character: location.childTwo.character,
            code: code,
        };
        charTab.push(element);
        codeTab.pop();
    }
    codeTab.pop();
}

var encodeWords = '';
function encoding(words, charTab){
    for (var i = 0; i < words.length; i++){
        for (var j = 0; j < charTab.length; j++){
            if (words[i] === charTab[j].character){
                encodeWords += charTab[j].code;
            }
        }
    }
    console.log(encodeWords);
}

huffmanEncoding(data);

// write to txt file
const fs = require('fs');
fs.writeFile('encoded.txt', encodeWords, 'utf-8', function(err){
    if(err){
        return console.log(err);
    }
});