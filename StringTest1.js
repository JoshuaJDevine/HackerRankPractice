/*
How to find the first non repeated character of a given String?
    //Clarify
        let s = "oooocode"
        let s = "ooooCode"
        let s = 'oooooooo'
        result = "c"
    //Approach
        For the first implementation just take a linear approach. Is it possible to do in logarithmic or constant?
        - Access all input
        - Find first non repeating character
          - Must check two characters.  if [x+1] != [x] then we can return [x+1].
          - Loop through the rest of the characters ensuring that [x+1] == [x]
          - If [x+1] != [x] then we can move the the next step
        - Break to make our implementation naively efficient
        - Return character
    //Pseudocode
        convert input to lowercase
        let result = ""


        for x in s
          x = 1
          if (x-1 != x)
            result = x
            break
          else continue

        return result

    //Code
    //Example IO
    //Big O? Refactor?
 */

function FindFirstNonRepeatedCharacter(s){
    let result = "No Valid Input";

    if (typeof s !== 'string')
        return result;

    for (let i = 1; i < s.length; i++) {
        if (s[i] !== s[i-1])
        {
            result = s[i];
            break
        }
    }

    return result.toLowerCase();
}

console.log(FindFirstNonRepeatedCharacter('oooocode'));
console.log(FindFirstNonRepeatedCharacter('ooooCode'));
console.log(FindFirstNonRepeatedCharacter('oooooooo'));
console.log(FindFirstNonRepeatedCharacter(1));
