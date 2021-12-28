//Get Page Count
function pageCount(n, p) {
    let book = BuildBook(n);
    return Math.min(GetMinFrontTurns(book, p), GetMinBackTurns(book, p));
}


//Helper Functions
function BuildBook(n){
    let totalPages;
    let totalPagesArr = [];

    if (n%2 === 1) totalPages = (n+1)/2;
    else totalPages = (n/2)+1;

    let currentPage = 1;
    for (let i = 0; i < totalPages; i++) {
        if (i === 0) {
            totalPagesArr.push([currentPage]);
            currentPage++;
        }
        else {
            if (i >= n/2){
                totalPagesArr.push([currentPage]);
                currentPage++;
            }
            else {
                totalPagesArr.push([currentPage,currentPage+1]);
                currentPage++;
                currentPage++;
            }

        }
    }
    return totalPagesArr;
}
function GetMinFrontTurns(book, target){
    let frontTurns = 0;
    for (let i = 0; i < book.length; i++) {
        if (book[i].length === 1){
            if (book[i][0] === target) {
                break;
            }
        }
        else {
            if (book[i][0] === target || book[i][1] === target) {
                break;
            }
        }
        frontTurns++;
    }

    return frontTurns;
}
function GetMinBackTurns(book, target){
    let backTurns = 0;

    for (let i = book.length-1; i > 0; i--) {
        if (book[i].length === 1){
            if (book[i][0] === target) {
                break;
            }
        }
        else {
            if (book[i][0] === target || book[i][1] === target) {
                break;
            }
        }
        backTurns++;
    }

    return backTurns;
}
