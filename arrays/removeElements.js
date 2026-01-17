// function removeElement ( arr, val){
//     let x = 0;
//     for( let i = 0; i < arr.length; i++){
//         if(arr[i] != val){
//             arr[x] = arr[i];
//             console.log(arr, x, i)
//             x = x + 1;
//             console.log(arr, x, i)
            
//         }
//     }
//     return ( x );
// }

function removeElement(nums, val){
    let k = 0;
    for( let i = 0; i < nums.length; i++){
        if(nums[i] !== val){
             nums[k] = nums[i];
             k++;
        }
    }
    console.log(nums[k]);
    return nums;

}

let nums = [ 3,2,2,3 ];
console.log(removeElement(nums, 2));