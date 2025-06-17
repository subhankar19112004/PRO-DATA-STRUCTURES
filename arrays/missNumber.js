function missing (nums){
    let n = nums.length;
    let totalSum = (n * (n+1))/2;
    let partialSum = 0;
    for( let i = 0; i < n; i++){
        partialSum = partialSum + nums[i];
    }
    return totalSum - partialSum;
}

let nums = [ 0,1,2,3,4,5,6,8];
console.log(missing(nums));