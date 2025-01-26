function permuteString(string) {
    if (string.length < 2) return [string]; // This is our break condition

    let permutations = []; // This array will hold our permutations
        for (let i = 0; i < string.length; i++) {
            let char = string[i];
            if (string.indexOf(char) != i) // if char was used already
            continue; // skip it this time

        let remainingString = string.slice(0, i) + string.slice(i + 1, string.length); //Note: you can concat Strings via '+' in JS

                                  for (let subPermutation of permuteString(remainingString))
                                        permutations.push(char + subPermutation)
                                          }
                                            return permutations;
                                            }
console.log(permuteString("fac"))
