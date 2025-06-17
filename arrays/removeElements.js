function removeElement ( arr, val){
    let x = 0;
    for( let i = 0; i < arr.length; i++){
        if(arr[i] != val){
            arr[x] = arr[i];
            console.log(arr, x, i)
            x = x + 1;
            console.log(arr, x, i)
            
        }
    }
    return ( x );
}

let arr = [ 3,2,2,3 ];
console.log(removeElement(arr, 2));