// function reverseNumber(n) {
//     let nCopy = n;
//     n = Math.abs(n);
//     let rev = 0;
//     while (n > 0) {
//         let rem = n % 10;
//         rev = (10 * rev) + rem;
//         n = Math.floor(n / 10);
//     }
//     let limit = Math.pow(2, 31);
//     rev = rev > limit - 1 || rev < -limit ? 0 : rev;
//     return nCopy < 0 ? -rev : rev;
// }
// console.log(reverseNumber(12345));
// console.log(reverseNumber(-6789));
// console.log(reverseNumber(987654321));



// let myName = "Alice";
// const user = {
//     name : "Subhankar",
//     Alice : "developer"
// }
// console.log(user[myName])

// let arr = [ "apple", "banana", "cherry" ];
// let i = 0;
// while( i < arr.length ){
//     console.log(arr[i]);
//     i++;
// }

//Printing all even numbers from 1 to 100

// for(let i = 0; i <= 1; i++){
//     if(i % 2 == 0 ){
//         console.log(i);
//     }
// }

// Reverse array string


var reverseString = function(s) {
    let n = s.length
    function swap(i, j){
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    }
    for( let  i = 0; i < n / 2; i++ ){
        swap(i, n - (i + 1));

    }
    return s;
    
};
console.log(reverseString(["h","e","l","l","o"]));

