function search( nums, target){
    let left = 0;
    let right = nums.length - 1;

    while( right >= left ){

        let middle = Math.floor((left + right) / 2);

        if( nums[middle] == target ){
            return middle;
        } else if ( target < nums[middle] ){
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1
}

let nums = [-1,0,3,5,9,12];
let target = 9;
console.log(search(nums, target));