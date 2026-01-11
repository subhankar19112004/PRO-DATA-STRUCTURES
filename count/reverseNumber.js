function reverseNumber(n) {
    let nCopy = n;
    n = Math.abs(n);
    let rev = 0;
    while (n > 0) {
        let rem = n % 10;
        rev = (10 * rev) + rem;
        n = Math.floor(n / 10);
    }
    let limit = Math.pow(2, 31);
    rev = rev > limit - 1 || rev < -limit ? 0 : rev;
    return nCopy < 0 ? -rev : rev;
}
console.log(reverseNumber(12345));
console.log(reverseNumber(-6789));
console.log(reverseNumber(987654321));



let myName = "Alice";
const user = {
    name : "Subhankar",
    Alice : "developer"
}
console.log(user[myName])

