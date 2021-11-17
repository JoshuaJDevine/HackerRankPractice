let testArr1 = [1,1,3,2,1]

function countingSort(arr) {
    let res = Array(100).fill(0);

    for (let i = 0; i < arr.length; i++) {
        res[arr[i]] += 1;
    }

    return res;
}

console.log(countingSort(testArr1));
