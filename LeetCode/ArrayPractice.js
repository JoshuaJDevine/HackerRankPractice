function findMaxConsecutiveOnes(nums){
    let result = 0;
    let max = 0;

    for (let i = 0; i < nums.length; i++){
        if (nums[i] === 1){
            max += 1;
            if (result < max)
                result = max;
        }
        else {
            max = 0;
        }
    }

    return result
}

console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]));
