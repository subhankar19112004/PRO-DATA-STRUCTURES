// function unique(arr) {
//     // if(arr.length == 1) return 1;
//     let x = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[x]) {
//             x = x + 1;
//             arr[x] = arr[i];
//             console.log(x, i)
//         }
//     }
//     return x + 1;
// }

function removeDuplicates(arr) {
    let k = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[k]) {
            k = k + 1;
            arr[k] = arr[i];
        }
    }
    return arr;
}

let arr = [0, 0, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(arr));