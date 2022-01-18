function gridChallenge(grid) {
    //Sort Grid using built in functions
    for(let i = 0; i < grid.length; i++)
    {
        grid[i] = grid[i].split('');

        grid[i].sort();

        grid[i].join('');
    }

    //Check challenge conditions
    for(let i = 0; i < grid[0].length; i++)
    {
        let char = grid[0][i];

        for(let j = 1; j < grid.length; j++)
        {
            if(grid[j][i] < char)
            {
                return "NO";
            }
        }
    }
    return "YES";
}

console.log(gridChallenge(grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']))
