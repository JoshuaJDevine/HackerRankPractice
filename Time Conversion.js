/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example


Return '12:01:00'.


Return '00:01:00'.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in  hour format
Returns

string: the time in  hour format
Input Format

A single string  that represents a time in -hour clock format (i.e.:  or ).

Constraints

All input times are valid
Sample Input

07:05:45PM
Sample Output

19:05:45
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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    //Limited number of input and conversions. Brute force for brevity and discuss optimizations later.

    //Split the string on ':'
    let splitString = s.split(':');

    //If 12PM return the string in the correct format
    if (splitString[0] == "12" && splitString[2].includes("PM")) {
        return splitString[0] + ":" + splitString[1] + ":" + splitString[2].substr(0,2)}

    //If 12AM convert and return the string in the correct format
    else if (splitString[0] == "12" && splitString[2].includes("AM")) {
        return '00' + ":" + splitString[1] + ":" + splitString[2].substr(0,2)}

    //If >12AM convert and return the string in the correct format
    else if (splitString[0] != "12" && splitString[2].includes("AM")) {
        return splitString[0] + ":" + splitString[1] + ":" + splitString[2].substr(0,2)}

    //If >12PM convert, add 12, and return the string in the correct format
    else if (splitString[0] != "12" && splitString[2].includes("PM")) {
        return (parseInt(splitString[0])+12) + ":" + splitString[1] + ":" + splitString[2].substr(0,2)}

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
