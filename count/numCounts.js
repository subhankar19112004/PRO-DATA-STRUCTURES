// // Write a function that returns the count of digits fora in a a number.
// function numCounts(n) { 
//     if( n == 0)return 1;
//     n = Math.abs(n); // Handle negative numbers  
//     let count = 0;
//     while (n > 0) {
//         n = Math.floor(n / 10);
//         count++;
//     }
//     return count
// } 

// console.log(numCounts(56245));


function numCounts (n){
    if( n === 0) return 1;
    n = Math.abs(n);
    let count = 0;
    while( n > 0 ){
        n = Math.floor(n / 10);
        count++
    }
    return count;
} 
console.log(numCounts(1234567890))