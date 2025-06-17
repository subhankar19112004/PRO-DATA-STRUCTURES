function reverseString(s){
    let l = s.length;
    let n = Math.floor(l/2);
    for(let i = 0; i < n; i++){
        let temp = s[i];
        s[i] = s[l-1-i];
        s[l-1-i] = temp;
    }
    return s;
}

let s = ["h", "e", "l", "l", "o"];
console.log(reverseString(s));