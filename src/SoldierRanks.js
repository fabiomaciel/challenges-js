/**
 * find the quantity of soldiers who have a superior to report
 * ranks are integers 0 to N
 * a superior of rank X is X+1
 */

 // maps number of each soldier in each rank -- X
 // map just ranks -- X
 // sort ranks -- X
 // find ranks with superior than sum it -- X

 function solution(ranks) {
   const map = {};
   const availableRanks = [];
   ranks.forEach(r => {
       if(!map[r]) {
           map[r] = 0;
           availableRanks.push(r)
       }
       map[r]++;
   });

   availableRanks.sort()

   //[0,1,3,4]
   let sum = 0;
   for(let i = 0; i < availableRanks.length-1; i++){
       if(availableRanks[i+1] - availableRanks[i] == 1)
        sum += map[availableRanks[i]]
   }
   return sum;
}