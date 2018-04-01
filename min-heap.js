/** Beatriz Manrique
 * CSE 3353
 * Project 2: Compression and Decompression
 */
'use strict';

class minHeap{
    constructor (data){
        this.minHeapArr = data;
    };

    // returns index of Parent
    getParent(index){
        return Math.floor((index)/2)
    };
       
    // returns index of Left Child
    getLeft(index){
       return (2*index);
    };
    
    // returns index of Right Child
    getRight(index){
       return (2*index)+1;
    };

    // starts conversion of array into minHeap
    // only takes in array as argument
    heapify(data){
        for (var i = 0; i < data.length; i++){
            this.minHeapify(data, i);
        }
    };
    
    // converts array into minHeap
    // arugments are both data and index
    minHeapify(data, i){
        var p = this.getParent(i);

        if (data[i].frequency < data[p].frequency){
            var temp = data[p];
            data[p] = data[i];
            data[i] = temp;
            this.minHeapify(data, p);
        }
    };

    // removes min value which is the root of the tree
    // replaces root with smallest value and uses minHeapify function
    removeMin(data){
        var min = data[0];
        data[0] = data[data.length-1];
        data.pop();
        for (var i = 0; i < data.length; i++){
            this.minHeapify(data, i);
        }
        return min;
    }

    // adds key to end of array
    // uses minHeapify function to readjust current minHeap
    insert(data, node){
        data.push(node);
        for (var i = 0; i < data.length; i++){
            this.minHeapify(data, i);
        }
    }
};

module.exports = minHeap;
