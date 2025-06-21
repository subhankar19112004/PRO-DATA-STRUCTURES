function sum(n){
    let isOdd = ( arr[n] % 2 != 0);
    if ( n == 0){
        if(!isOdd){
            return 0;
        }else{
            return arr[0];
        }
    }

    if(isOdd){
        return arr[n] + sum(n-1);
    } else{
        return 0 + sum(n-1);
    }
}
let arr = [ 5, 2, 0, 3, 2,3];
let result = sum(arr.length - 1);
console.log(result);