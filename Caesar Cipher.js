function caesarCipher(s, k) {
    if (s === "") return s;
    if (k === 0) return s;
    let alphapbetLower = "abcdefghijklmnopqrstuvwxyz";
    let alphapbetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let newS = "";

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        let idx = i;

        if (alphapbetLower.indexOf(char.toLowerCase()) == -1) {
            newS += char;
            continue;
        }
        else {
            idx = alphapbetLower.indexOf(char.toLowerCase());
        }
        if (idx+k >= 26)
        {
            idx = (idx + k) % 26;
            console.log("New IDX")
            let isLower = alphapbetLower.indexOf(char) > -1

            if (isLower)
                newS += alphapbetLower[idx];
            else
                newS += alphapbetUpper[idx];
        }
        else {
            let isLower = alphapbetLower.indexOf(char) > -1

            if (isLower)
                newS += alphapbetLower[idx+k];
            else
                newS += alphapbetUpper[idx+k];
        }
    }

    return newS;
}

console.log(caesarCipher("Hello_World!", 4))
