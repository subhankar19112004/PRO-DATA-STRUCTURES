function comsucativeones(arr){
    let count = 0;
    let prevCount = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 1){
            count++;
        } else{
            prevCount = Math.max(prevCount, count);
            count = 0;
        }
    }
    return Math.max(prevCount, count);
}

let arr= [0,1,1,1,1,1,0,1,1,1,1];
console.log(comsucativeones(arr));