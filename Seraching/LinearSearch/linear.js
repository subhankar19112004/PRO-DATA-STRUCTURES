function linear (arr, target){
    for( let i = 0; i < arr.length; i++){
        if( arr[i] == target){
            return i;
        } 
    }
    return -1;
}

let arr = [ 1,5,2,3,0,9];
let target = 9;
console.log(linear(arr, target));