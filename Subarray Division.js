function birthday(s, d, m) {
    let res = 0;
    let total = 0;

    for (let i = 0; i < m; i++) {
        total += s[i];
    }
    for (let i = 0; i < s.length - m + 1; i++) {
        if (total === d) res += 1;
        total = total - s[i] + s[i + m];
    }
    return res;
}
