function InsertionSort (a){
    let n = a.length;

    for( let i = 1; i < n; i++){
        curr = a[i]; // current element
        let p = i - 1; // Declaring previous element 
        console.log(a)
        console.log("curr = " + curr + " p = " + p);

        while ( a[p] > curr && p >= 0){
            a[p + 1] = a[p];
            p--;
            console.log(a);
            console.log("curr = " + curr + " p = " + p);
        }
        a[p + 1] = curr;
        console.log(a);
    }
    return a;
}

let arr = [2, 4, 1, 5, 3];
let result = InsertionSort(arr);
console.log(result);