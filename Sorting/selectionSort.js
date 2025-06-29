function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let m = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[m]) {
                m = j;
                console.log("Before swapped : " + arr);
            }
        }
        if (m != i) {
            let temp = arr[m];
            arr[m] = arr[i];
            arr[i] = temp;
            console.log("After swapped : " + arr);
        }
    }
    return arr;
}
let arr = [7,1,5,4,3,2];
let result = selectionSort(arr);
console.log(result);