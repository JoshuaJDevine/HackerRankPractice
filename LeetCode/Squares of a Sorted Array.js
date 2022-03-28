var sortedSquares = function(nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        console.log("pushing " + nums[i] * nums[i])
       result.push(nums[i] * nums[i])
    }

    return result.sort(function(a,b) { return a-b});
};
