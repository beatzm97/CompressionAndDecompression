/** Beatriz Manrique
 * CSE 3353
 * Project 2: Compression and Decompression
 */

 'use strict';
 class minHeap{
     constructor (data){
         this.array = [];
         if (data){
             this.array = data;
         }
     };

     // returns numerical value of Parent
     getParent(data, index){
         return Math.floor((index)/2)
     };
        
     // returns numerical value of Left Child
     getLeft(data, index){
        return (2*index);
     };
     
     // returns numerical value of Right Child
     getRight(data, index){
        return (2*index)+1;
     };

     // converts array into minHeap
     // only takes in array as argument
     heapify(data){
        this.minHeapify(data, 0);
     };
     
     // converts array into minHeap
     // arugments are both data and index
     minHeapify(data, i){
         var l = this.getLeft(data, i);
         var r = this.getRight(data, i);
         var smallest;
         
         if (l <= (data.length-1) && data[l].freq < data[i].freq){
             smallest = l;
         }
         else 
             smallest = i;
         if (r <= (data.length-1) && data[r].freq < data[smallest].freq){
             smallest = r;
         }
         if (smallest !== i){
             var temp = data[i];
             data[i] = data[smallest];
             data[smallest] = temp;
             this.minHeapify(data, smallest);
         }
     };

     // removes min value which is the root of the tree
     // replaces root with smallest value and uses minHeapify function
     removeMin(data){
         var min = data[0];
         data[0] = data[data.length-1];
         data.pop();
         minHeapify(data,0);
         return min;
     }

     // adds key to beginning of array
     // uses minHeapify function to readjust current minHeap
     insert(key, occ){
         data.unshift({char:key,freq:occ});
         minHeapify(data,0);
     }
};

module.exports = minHeap;
