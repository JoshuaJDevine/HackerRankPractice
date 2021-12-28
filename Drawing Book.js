function pageCount(n, p) {
    let book = BuildBook(n);
    let frontTurns = 0;
    let backTurns = 0;

    for (let i = 0; i < book.length; i++) {
        if (book[i].length === 1){
            if (book[i] === p) break;
        }
        else {
            if (book[i][0] === p || book[i][1] === p) break;
        }
        frontTurns++;
    }

    for (let i = book.length-1; i > 0; i--) {
        if (book[i].length === 1){
            if (book[i] === p) break;
        }
        else {
            if (book[i][0] === p || book[i][1] === p) break;
        }
        backTurns++;
    }

    return Math.max(frontTurns, backTurns);
}

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

console.log(pageCount(5, 3));
