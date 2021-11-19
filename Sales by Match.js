function sockMerchant(n, ar){
    let res = 0;

    let pairs = {}

    for (let i = 0; i < ar.length; i++) {
        if (ar[i] in pairs) pairs[ar[i]] += 1;
        else pairs[ar[i]] = 1;
    }

    for (let key in pairs){
        res += Math.floor(pairs[key] / 2);
    }

    return res;
}

sockMerchant(7,[1,2,1,2,1,3,2])
