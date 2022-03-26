/*

 */

//The %real% solution...
function towerBreakers(n, m) {
    let towers = n;
    let height = m;

    if (towers % 2 == 0 || height == 1) return 2;

    return 1;

}
// My mucking around :(
// function towerBreakers(towers, height) {
//     let towersArr = [];
//     for (let i = 0; i < towers; i++) {
//         towersArr.push(height)
//     }
//     console.log(towersArr);
//
//
//     if (MakeMove(towersArr, 3, 3) == -1)
//         console.log("Illegal move")
//     else
//         console.log("Leagal move")
//     console.log(towersArr);
// }
//
// towerBreakers(10,4);
//
// function MakeMove(towers, tower, reduction){
//
//     if (reduction < 1) return -1;
//     if (reduction > towers[tower]) return -1;
//     if (towers[tower] % reduction != 0) return -1;
//
//     towers[tower] -= reduction;
//     return 1;
//
//
// }
