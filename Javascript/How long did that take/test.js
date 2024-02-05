
// Calculating prime numbers
Number.prototype.isPrime = function() {
    // It took more time to run
    //     for( let i=2; i<this; i++ ) {
    //         if( this % i === 0 ) {
    //             return false;
    //         }
    //     }
    //     return true;

    // More efficience time running
    if (this < 2) {
        return false;
    }
    
    if (this === 2 || this === 3) {
    return true;
    }

    if (this % 2 === 0 || this % 3 === 0) {
    return false;
    }

    for (let i = 5; i * i <= this; i += 6) {
    if (this % i === 0 || this % (i + 2) === 0) {
        return false;
    }
    }

    return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    // while( primeCount < 1e5 ) {
    //         if( num.isPrime() ) {
    //             primeCount++;
    //         }
    // while( primeCount < 1e6 ) {
    //         if( num.isPrime() ) {
    //             primeCount++;
    // }    
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`); // prime number is 104759
console.log(`This took ${performance.now() - start} milliseconds to run`); //245.1324 milliseconds for 10,000th

// console.log(`The 100,000th prime number is ${num-1}`); // prime number is 1299743
// console.log(`This took ${performance.now() - start} milliseconds to run`); //6881.378 milliseconds for 100,000th

// console.log(`The 1,000,000th prime number is ${num-1}`); // prime number is 15485917
// console.log(`This took ${performance.now() - start} milliseconds to run`); //185098.3296 milliseconds for 1,000,000th


// Determine if the iterative or recursive Fibonacci function is faster
// recursive Fibonacci is slower than iterative Fibonacci
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
console.log(rFib(20));
// iterative Fibonacci is faster than recursive Fibonacci
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
console.log(iFib(20));

// Write a more efficient function to reverse a string
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
console.log(reversed1);
// This is more efficient code to reverse a string
const reversed2 = story.split("").reduce((reversed, character) => character + reversed, "");
console.log(reversed2);


    