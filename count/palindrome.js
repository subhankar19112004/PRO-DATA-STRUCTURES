function palindrome(n) {
    let nCopy = n;
    if (n < 0) return false;
    let rev = 0;
    while (n > 0) {
        let rem = n % 10;
        rev = (10 * rev) + rem;
        n = Math.floor(n / 10);
    }
    return rev === nCopy;
}
console.log(palindrome(121)); 
console.log(palindrome(-121)); 
console.log(palindrome(10)); 
console.log(palindrome(12321)); 