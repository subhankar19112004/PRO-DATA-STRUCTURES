function print1to2(num){
    if( num > 5) return;
    console.log(num);
    // num = num + 1;
    print1to2(++num);
}

let num = 1;
print1to2(num);