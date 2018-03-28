/** Beatriz Manrique
 * CSE 3353
 * Project 2: Compression and Decompression
 */

 'use strict';
 var heapSize;

 // returns numerical value of Parent
 function getParent(data, index){
     if(index===1){
         return null;
     }
     return Math.floor((index)/2);
 }

// returns numerical value of Left Child
 function getLeft(data, index){
     if((2*index) <= heapSize){
         return (2*index);
     }
     else
        return null;
 }

// returns numerical value of Right Child
function getRight(data, index){
    if((2*index)+1 <= data.length){
        return (2*index)+1;
    }
    return null;
}

// converts array into minHeap
// only takes in array as argument
function heapify(data){
    heapSize = data.length-1;
    for (var i = Math.floor(heapSize/2); i>=0; i--){
        minHeapify(data, i);
    }
}

// converts array into minHeap
// arugments are both data and index
function minHeapify(data, i){
    var l = getLeft(data, i);
    var r = getRight(data, i);
    var smallest;

    if (l !== null && l <= heapSize && data[l].freq < data[i].freq){
        smallest = l;
    }
    else 
        smallest = i;
    if (r !== null && r <= heapSize && data[r].freq < data[smallest].freq){
        smallest = r;
    }
    if (smallest !== i){
        var temp = data[i];
        data[i] = data[smallest];
        data[smallest] = temp;
        minHeapify(data, smallest);
    }
}

// removes min value which is the root of the tree
// replaces root with smallest value and uses minHeapify function
function removeMin(data){
    var min = data[0];
    data[0] = data[data.length-1];
    data.pop();
    heapSize = data.length-1;
    minHeapify(data,0);
    return min;
}

// adds key to beginning of array
// uses minHeapify function to readjust current minHeap
function insert(key, occ){
    data.unshift({char:key,freq:occ});
    heapSize = data.length-1
    minHeapify(data,0);
}


// Testing
var data = [{char:"a", freq: 5},{char:"b", freq: 2},{char:"z", freq: 7},{char:"j", freq: 3},{char:"m",freq:1}];
console.log(data);
heapify(data);
console.log(data);
var result = removeMin(data);
console.log(result);
console.log(data);
insert("p",23);
console.log(data);
