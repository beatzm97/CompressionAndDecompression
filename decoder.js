/** Beatriz Manrique
 * CSE 3353
 * Project 2: Compression and Decompression
 */
'use strict';

// read in encoded text file data
const fs = require('fs');

try {  
    var encodeWords = fs.readFileSync('encoded.txt', 'utf8');
    //console.log(words);    
} catch(e) {
    console.log('Error:', e.stack);
}

// read in original text file data
const fs2 = require('fs');

try {  
    var originalWords = fs2.readFileSync('uncompressed.txt', 'utf8');
    //console.log(words);    
} catch(e) {
    console.log('Error:', e.stack);
}

// verification of huffman encoding and decoding
const assert = require('assert');


function huffmanDecoding(encodeWords){
    fileFormat(encodeWords);
    characterTable(data, codeTab, charTab);
    decoding(words, charTab);
    assert(decodeWords === originalWords);
}


var words = '';
var data ='';

function fileFormat(encodeWords){
    for (var i = 0; i < encodeWords.length; i++){
        if (encodeWords[i] !== '|'){
            words += encodeWords[i];
        }
        else{
            for (var j = i+1; j < encodeWords.length; j++){
                data += encodeWords[j];
            }
            data = eval(data);
            break;
        }
    }
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

var decodeWords = '';
function decoding(words, charTab){
    var temp = '';
    for (var i = 0; i < words.length; i++){
        temp += words[i];
        for (var j = 0; j < charTab.length; j++){
            if (temp === charTab[j].code){
                decodeWords += charTab[j].character;
                temp = '';
            }
        }
    }
}

huffmanDecoding(encodeWords);