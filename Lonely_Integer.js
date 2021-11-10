/*
https://www.hackerrank.com/challenges/one-month-preparation-kit-lonely-integer/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

Given an array of integers, where all elements but one occur twice, find the unique element.

Example

The unique element is .

Function Description

Complete the lonelyinteger function in the editor below.

lonelyinteger has the following parameter(s):

int a[n]: an array of integers
Returns

int: the element that occurs only once
Input Format

The first line contains a single integer, , the number of integers in the array.
The second line contains  space-separated integers that describe the values in .

Constraints

It is guaranteed that  is an odd number and that there is one unique element.
, where .
 */

'use strict';

const fs = require('fs');

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
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    let elements = {}

    a.forEach((el) => {
        if (el in elements) elements[el] = 2;
        else
            elements[el] = 1;
    })

    for (const key in elements) {
        if (elements[key] === 1) return key;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = lonelyinteger(a);

    ws.write(result + '\n');

    ws.end();
}
