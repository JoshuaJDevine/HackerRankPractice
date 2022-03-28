var findNumbers = function(nums) {
    let result = 0;

    for (let i = 0; i < nums.length; i++){
        let numLength = String(nums[i]).length;
        if (numLength % 2 === 0)
            result ++;
    }

    return result;
};
