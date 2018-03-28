/** Beatriz Manrique
 * CSE 3353
 * Project 2: Compression and Decompression
 */
'use strict';

// read in text file data
const fs = require('fs');

try {  
    var data = fs.readFileSync('uncompressed.txt', 'utf8');
    console.log(data);    
} catch(e) {
    console.log('Error:', e.stack);
}

console.log(data[data.length]);