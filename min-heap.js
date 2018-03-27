/** Beatriz Manrique
 * CSE 3353
 * Project 2
 */

 'use strict';

 function getParent(data, index){
     if(index===1){
         return null;
     }
     return (index)/2;
 }

 function getLeft(data, index){
     if((2*index) <= data.size){
         return (2*index);
     }
     return null;
 }

function getRight(data, index){
    if((2*index)+1 <= data.size){
        return (2*index)+1;
    }
    return null;
}

function heapify(data){
    //heapSize = data.size;
    for (var i = Math.floor(data.size/2); i >=0; i--){
        min_heapify(data, i);
    }
}
function min_heapify(data, i){
    l = getLeft(i);
    r = getRight(i);
    if (l <= data.size && data[l] < data[i]){
        smallest = l;
    }
    else 
        smallest = i;
    if (r <= data.size && data[r] > data[largest]){
        smallest = r;
    }
    if (smallest !== i){
        temp = data[i];
        data[i] = data[smallest];
        data[smallest] = temp;
    }
    min_heapify(data,smallest)
}


var data = [5,3,2,4,1];
console.log(data);
heapify(data);
console.log(data);