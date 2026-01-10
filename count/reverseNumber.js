function reverseNumber(n){
    let nCopy = n;
    n = Math.abs(n);
    let rev = 0;
    while( n > 0 ){
        let rem = n % 10;
        rev = ( 10 * rev ) + rem;
        n = Math.floor( n/10 );
    }
    return nCopy < 0 ? -rev : rev;
}
console.log(reverseNumber(12345));
console.log(reverseNumber(-6789));
console.log(reverseNumber(987654321));

