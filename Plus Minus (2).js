/*

 */

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let amtPositive = 0;
    let amtNegative = 0;
    let amtZero = 0

    arr.forEach((el) => {
        if (el === 0) amtPositive++;
        if (el <= -1) amtNegative++;
        if (el >= 1) amtZero++;
    })

    let ratioPositive = amtPositive/arr.length;
    let ratioNegative = amtNegative/arr.length;
    let ratioZero = amtZero/arr.length;

    console.log(ratioPositive.toFixed(6));
    console.log(ratioNegative.toFixed(6));
    console.log(ratioZero.toFixed(6));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

plusMinus([1,1,0,-1,-1])