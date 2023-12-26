function main(romanNumeral) {
    const integerDatabase = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let romanNumeralArray = romanNumeral.split("");
    return romanNumeralArray.reduce((acc, currentValue, index) => {return (integerDatabase[romanNumeralArray[index + 1]] && integerDatabase[currentValue] < integerDatabase[romanNumeralArray[index + 1]]) ? acc - integerDatabase[currentValue] : acc + integerDatabase[currentValue]}, 0);
}
