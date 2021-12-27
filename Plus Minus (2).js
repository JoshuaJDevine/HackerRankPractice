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

    //Variables
    let numPositive = 0;
    let numNegative = 0;
    let numZeros = 0;
    let arrLength = arr.length;


    //Loop array and increment numPositive, numNegative, numZeros
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0) numPositive++;
        else if (arr[i] < 0) numNegative++;
        else numZeros++;
    }


    //Console the results to satisy the expected output
    console.log((numPositive / arrLength).toFixed(6))
    console.log((numNegative / arrLength).toFixed(6))
    console.log((numZeros / arrLength).toFixed(6))
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
