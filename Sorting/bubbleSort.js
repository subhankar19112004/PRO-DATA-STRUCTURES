function bubbleSort(arr) {

    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        console.log(arr)
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                console.log(arr)
            }
        }
    }
    return arr;
}

let arr = [0, 5, 9, 2, 3, 1];

let result = bubbleSort(arr);
console.log(result);