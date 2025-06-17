function fimdSecomdLargest(arr){
    if(arr.length < 2){
        return -1;
    }
    let fl =-Infinity;
    let sl = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if( arr[i] > fl){
            sl = fl;
            fl = arr[i];
        } else if(arr[i] > sl && arr[i] != fl){
            sl = arr[i];
        }
    }
    return sl;
}

let arr = [1,2,99,100,5,6,7,8,9,10];
console.log(fimdSecomdLargest(arr));